import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateEarning, deleteEarning } from "../redux/salarySlice";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const EarningsList = () => {
  const earnings = useSelector((state) => state.salary.earnings);
  const dispatch = useDispatch();

  const handleDelete = (index) => dispatch(deleteEarning(index));
  const handleEdit = (index, earning) => {
    const updatedEarning = prompt("Edit Earning", JSON.stringify(earning));
    if (updatedEarning) {
      dispatch(updateEarning({ index, earning: JSON.parse(updatedEarning) }));
    }
  };

  return (
    <List>
      {earnings.map((earning, index) => (
        <ListItem key={index}>
          <ListItemText primary={`${earning.name}: $${earning.amount}`} />
          <IconButton
            edge="end"
            aria-label="edit"
            onClick={() => handleEdit(index, earning)}
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

export default EarningsList;
