import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBasicSalary, addEarning, addDeduction } from "../redux/salarySlice";
import {
  TextField,
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const SalaryForm = () => {
  const [basicSalary, setSalary] = useState("");
  const [openEarningDialog, setOpenEarningDialog] = useState(false);
  const [openDeductionDialog, setOpenDeductionDialog] = useState(false);
  const [earning, setEarning] = useState({ name: "", amount: "", epf: false });
  const [deduction, setDeduction] = useState({ name: "", amount: "" });
  const dispatch = useDispatch();

  const handleBasicSalaryChange = (e) => setSalary(e.target.value);
  const handleAddEarning = () => {
    dispatch(addEarning({ ...earning, amount: parseFloat(earning.amount) }));
    setEarning({ name: "", amount: "", epf: false });
    setOpenEarningDialog(false);
  };
  const handleAddDeduction = () => {
    dispatch(
      addDeduction({ ...deduction, amount: parseFloat(deduction.amount) })
    );
    setDeduction({ name: "", amount: "" });
    setOpenDeductionDialog(false);
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        label="Basic Salary"
        value={basicSalary}
        onChange={handleBasicSalaryChange}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        onClick={() => dispatch(setBasicSalary(parseFloat(basicSalary)))}
      >
        Set Basic Salary
      </Button>
      <Button onClick={() => setOpenEarningDialog(true)}>
        Add New Allowance
      </Button>
      <Button onClick={() => setOpenDeductionDialog(true)}>
        Add New Deduction
      </Button>

      <Dialog
        open={openEarningDialog}
        onClose={() => setOpenEarningDialog(false)}
      >
        <DialogTitle>Add New Earnings</DialogTitle>
        <DialogContent>
          <TextField
            label="Earnings Name"
            value={earning.name}
            onChange={(e) => setEarning({ ...earning, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Amount"
            value={earning.amount}
            onChange={(e) => setEarning({ ...earning, amount: e.target.value })}
            fullWidth
            margin="normal"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={earning.epf}
                onChange={(e) =>
                  setEarning({ ...earning, epf: e.target.checked })
                }
              />
            }
            label="EPF/ETF"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEarningDialog(false)}>Cancel</Button>
          <Button onClick={handleAddEarning}>Add</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDeductionDialog}
        onClose={() => setOpenDeductionDialog(false)}
      >
        <DialogTitle>Add New Deduction</DialogTitle>
        <DialogContent>
          <TextField
            label="Deduction Name"
            value={deduction.name}
            onChange={(e) =>
              setDeduction({ ...deduction, name: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Amount"
            value={deduction.amount}
            onChange={(e) =>
              setDeduction({ ...deduction, amount: e.target.value })
            }
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeductionDialog(false)}>Cancel</Button>
          <Button onClick={handleAddDeduction}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SalaryForm;
