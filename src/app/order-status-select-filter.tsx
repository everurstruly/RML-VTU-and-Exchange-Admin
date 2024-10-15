import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
// import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import clsx from "clsx";

const statuses = [
  { title: "Pending", color: "warning" },
  { title: "Cancelled", color: "info" },
  { title: "Processing", color: "primary" },
  { title: "Accepted", color: "success" },
  { title: "Rejected", color: "danger" },
];

export default function OrderStatusSelectFilter() {
  //   const theme = useTheme();
  const [selectedStatus, setSelectedStatus] = React.useState<string[]>([
    "Pending",
  ]);

  const handleChange = (event: SelectChangeEvent<typeof selectedStatus>) => {
    const {
      target: { value },
    } = event;
    setSelectedStatus(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl variant="standard" size="small" fullWidth>
      <InputLabel
        id="demo-multiple-checkbox-label"
        className={clsx({
          "!-top-2": selectedStatus.length > 0,
        })}
      >
        Show Orders by Status
      </InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={selectedStatus}
        onChange={handleChange}
        className="pb-1.5"
        // label="Tag"
        // input={<OutlinedInput id="something" label="Tag" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} size="small" />
            ))}
          </Box>
        )}
      >
        {statuses.map(({ title }) => (
          <MenuItem key={title} value={title} className="!px-2">
            <Checkbox checked={selectedStatus.includes(title)} />
            <ListItemText primary={title} sx={{ fontSize: ".75rem" }} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
