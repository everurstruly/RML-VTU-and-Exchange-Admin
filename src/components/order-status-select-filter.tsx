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
  { title: "Pending", color: "error" },
  { title: "Cancelled", color: "action" },
  { title: "Processing", color: "warning" },
  { title: "Completed", color: "success" },
  { title: "Rejected", color: "primary" },
];

const statuesToColor = statuses.reduce((mappedForm, { title, color }) => {
  const mappedForm_ = { ...mappedForm };
  mappedForm_[title] = color;
  return mappedForm_;
}, {});

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
        label="Tag"
        // input={<OutlinedInput id="something" label="Show Orders by Status" />}
        className="!pb-1.5"
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {selected.map((value) => (
              <Chip
                key={value}
                label={value.toUpperCase()}
                // variant="outlined"
                color={statuesToColor[value]}
                size="medium"
                className="!rounded-md !px-1"
              />
            ))}
          </Box>
        )}
      >
        {statuses.map(({ title }) => (
          <MenuItem dense key={title} value={title} className="!px-2">
            <Checkbox
              checked={selectedStatus.includes(title)}
              color={statuesToColor[title]}
            />
            <ListItemText
              primary={title}
              sx={{ fontSize: ".75rem" }}
              className={clsx({
                [`text-${statuesToColor[title]}`]: true,
              })}
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
