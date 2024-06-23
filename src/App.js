import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { CssBaseline, Container, Box } from "@mui/material";
import Header from "./components/Header";
import SalaryForm from "./components/SalaryForm";
import EarningsList from "./components/EarningsList";
import DeductionsList from "./components/DeductionsList";
import Summary from "./components/Summary";

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Container>
        <Header />
        <Box display="flex" justifyContent="space-between" mt={4}>
          <Box width="60%">
            <SalaryForm />
            <EarningsList />
            <DeductionsList />
          </Box>
          <Box width="35%">
            <Summary />
          </Box>
        </Box>
      </Container>
    </Provider>
  );
};

export default App;
