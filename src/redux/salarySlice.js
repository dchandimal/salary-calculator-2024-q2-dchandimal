import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basicSalary: 0,
  earnings: [],
  deductions: [],
};

const salarySlice = createSlice({
  name: "salary",
  initialState,
  reducers: {
    setBasicSalary: (state, action) => {
      state.basicSalary = action.payload;
    },
    addEarning: (state, action) => {
      state.earnings.push(action.payload);
    },
    updateEarning: (state, action) => {
      const { index, earning } = action.payload;
      state.earnings[index] = earning;
    },
    deleteEarning: (state, action) => {
      state.earnings.splice(action.payload, 1);
    },
    addDeduction: (state, action) => {
      state.deductions.push(action.payload);
    },
    updateDeduction: (state, action) => {
      const { index, deduction } = action.payload;
      state.deductions[index] = deduction;
    },
    deleteDeduction: (state, action) => {
      state.deductions.splice(action.payload, 1);
    },
    resetForm: (state) => {
      state.basicSalary = 0;
      state.earnings = [];
      state.deductions = [];
    },
  },
});

export const {
  setBasicSalary,
  addEarning,
  updateEarning,
  deleteEarning,
  addDeduction,
  updateDeduction,
  deleteDeduction,
  resetForm,
} = salarySlice.actions;

export default salarySlice.reducer;
