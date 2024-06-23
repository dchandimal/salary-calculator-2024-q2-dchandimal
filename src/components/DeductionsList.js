import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateDeduction, deleteDeduction } from "../redux/salarySlice";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const DeductionsList = () => {
  const deductions = useSelector((state) => state.salary.deductions);
  const dispatch = useDispatch();

  const handleDelete = (index) => dispatch(deleteDeduction(index));
  const handleEdit = (index, deduction) => {
    const updatedDeduction = prompt(
      "Edit Deduction",
      JSON.stringify(deduction)
    );
    if (updatedDeduction) {
      dispatch(
        updateDeduction({ index, deduction: JSON.parse(updatedDeduction) })
      );
    }
  };

  return (
    <List>
      {deductions.map((deduction, index) => (
        <ListItem key={index}>
          <ListItemText primary={`${deduction.name}: $${deduction.amount}`} />
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => handleEdit(index, deduction)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleDelete(index)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default DeductionsList;
