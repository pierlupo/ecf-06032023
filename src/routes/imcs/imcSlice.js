import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_DB_URL } from "../../fireBaseConfig";

export const fetchImcs = createAsyncThunk("imcs/fetchImcs", async () => {
  const response = await fetch(`${BASE_DB_URL}imcs.json`);

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des imcs !");
  }

  const data = await response.json();

  const tmpArray = [];

  for (const key in data) {
    tmpArray.push({ id: key, ...data[key] });
  }

  return tmpArray;
});

export const addImc = createAsyncThunk("imcs/addImc", async (ImcValues) => {
  const response = await fetch(`${BASE_DB_URL}imcs.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ImcValues),
  });

  if (!response.ok) {
    throw new Error("Erreur lors de l'ajout d'un imc !");
  }

  const data = await response.json();

  return { id: data.name, ...ImcValues };
});

export const editImc = createAsyncThunk(
  "imcs/editImc",
  async ({ id, ...ImcValues }) => {
    const response = await fetch(`${BASE_DB_URL}imcs/${id}.json`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ImcValues),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l'édition d'un imc !");
    }

    const data = await response.json();

    return { id, ...data };
  }
);

export const deleteImc = createAsyncThunk("imcs/deleteImc", async (id) => {
  const response = await fetch(`${BASE_DB_URL}imcs/${id}.json`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la suppression d'un imc !");
  }

  return id;
});

const imcsSlice = createSlice({
  name: "imcs",
  initialState: {
    imcs: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImcs.pending, (state) => {
      state.imcs = [];
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(fetchImcs.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchImcs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.imcs = action.payload;
    });

    builder.addCase(addImc.fulfilled, (state, action) => {
      state.imcs.push(action.payload);
    });

    builder.addCase(deleteImc.fulfilled, (state, action) => {
      const imcFound = state.imcs.find((i) => i.id === action.payload);
      if (imcFound) {
        state.imcs = state.imcs.filter((i) => i !== imcFound);
      }
    });

    builder.addCase(editImc.fulfilled, (state, action) => {
      const { id } = action.payload;
      const imcFound = state.imcs.find((i) => i.id === id);
      if (imcFound) {
        state.imcs = [
          ...state.imcs.filter((i) => i !== imcFound),
          action.payload,
        ];
      }
    });
  },
});

export default imcsSlice.reducer;
