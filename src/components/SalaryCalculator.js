import React, { useState } from "react";
import { Box, Grid, Container, Paper } from "@mui/material";
import SalaryForm from "./SalaryForm";
import SalarySummary from "./SalarySummary";
import EarningsList from "./EarningsList";
import DeductionsList from "./DeductionsList";

const SalaryCalculator = () => {
  const [basicSalary, setBasicSalary] = useState(0);
  const [earnings, setEarnings] = useState([]);
  const [deductions, setDeductions] = useState([]);

  const addEarning = (earning) => {
    setEarnings([...earnings, earning]);
  };

  const addDeduction = (deduction) => {
    setDeductions([...deductions, deduction]);
  };

  const resetForm = () => {
    setBasicSalary(0);
    setEarnings([]);
    setDeductions([]);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <SalaryForm
              basicSalary={basicSalary}
              setBasicSalary={setBasicSalary}
              addEarning={addEarning}
              addDeduction={addDeduction}
              resetForm={resetForm}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <SalarySummary
              basicSalary={basicSalary}
              earnings={earnings}
              deductions={deductions}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <EarningsList earnings={earnings} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <DeductionsList deductions={deductions} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SalaryCalculator;
