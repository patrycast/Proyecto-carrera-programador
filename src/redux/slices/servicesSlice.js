import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";


export const fetchServices = createAsyncThunk("services/fetchServices", async () => {
  const servicesRef = collection(db, "Services"); 
  const resp = await getDocs(servicesRef);

  return resp.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
});

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default servicesSlice.reducer;
