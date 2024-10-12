import { IconButton, Stack } from "@mui/material";
import OrderStatusSelectFilter from "./order-status-select-filter";
import { FilterAlt } from "@mui/icons-material";
import {
  MRT_GlobalFilterTextField,
  MRT_ShowHideColumnsButton,
  MRT_ToggleDensePaddingButton,
} from "material-react-table";

export default function OrdersTableFilterAndSort({ table }: { table: any }) {
  return (
    <Stack className="py-2 px-4" spacing={1.5}>
      <div className="flex items-center gap-x-3">
        <OrderStatusSelectFilter />
        <IconButton
          sx={{
            padding: ".35rem",
            border: "1px solid #ccc",
            borderRadius: ".3875rem",
          }}
        >
          <FilterAlt className="text-zinc-500" />
        </IconButton>
      </div>
      <div className="flex items-end gap-x-2">
        <MRT_GlobalFilterTextField table={table} />
        {/* <div className="flex items-end gap-x-1.5">
          <TextField
            id="standard-basic"
            label="Search"
            placeholder="Search user, title, region..."
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              },
            }}
            variant="standard"
            fullWidth
          />
        </div> */}
        <div className="flex items-center">
          <MRT_ShowHideColumnsButton table={table} />
          <MRT_ToggleDensePaddingButton table={table} />
        </div>
      </div>
    </Stack>
  );
}
