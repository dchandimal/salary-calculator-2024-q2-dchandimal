import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const Summary = () => {
  const { basicSalary, earnings, deductions } = useSelector(
    (state) => state.salary
  );

  const totalEarnings = earnings.reduce(
    (acc, earning) => acc + earning.amount,
    basicSalary
  );
  const totalDeductions = deductions.reduce(
    (acc, deduction) => acc + deduction.amount,
    0
  );
  const grossEarnings = totalEarnings - totalDeductions;
  const epfEarnings = earnings
    .filter((earning) => earning.epf)
    .reduce((acc, earning) => acc + earning.amount, basicSalary);
  const grossEPF = epfEarnings - totalDeductions;
  const employeeEPF = grossEPF * 0.08;
  const employerEPF = grossEPF * 0.12;
  const employerETF = grossEPF * 0.03;
  const apit = grossEarnings * 0.18 - 25500;
  const netSalary = grossEarnings - employeeEPF - apit;
  const ctc = grossEarnings + employerEPF + employerETF;

  return (
    <Box>
      <Typography variant="h6">Your Salary</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Basic Salary" secondary={`$${basicSalary}`} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Gross Earnings"
            secondary={`$${totalEarnings}`}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Gross Deductions"
            secondary={`$${totalDeductions}`}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Employee EPF (8%)"
            secondary={`-$${employeeEPF}`}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="APIT" secondary={`-$${apit}`} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Net Salary (Take Home)"
            secondary={`$${netSalary}`}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Employer EPF (12%)"
            secondary={`$${employerEPF}`}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Employer ETF (3%)"
            secondary={`$${employerETF}`}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="CTC (Cost to Company)" secondary={`$${ctc}`} />
        </ListItem>
      </List>
    </Box>
  );
};

export default Summary;
