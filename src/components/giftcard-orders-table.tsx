import { useMemo } from "react";
import {
  MRT_ShowHideColumnsButton,
  MRT_TableContainer,
  MRT_TableHeadCellFilterContainer,
  MRT_TablePagination,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFullScreenButton,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Box, Drawer, IconButton, Stack } from "@mui/material";
import OrdersTableFilterAndSort from "./orders-table-filter-and-sort";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

//example data type
type GiftCard = {
  user: {
    firstName: string;
    lastName: string;
  };
  amount: number;
  datetime?: string;
  title: string;
  region: string;
  status: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: GiftCard[] = [
  {
    user: {
      firstName: "John",
      lastName: "Doe",
    },
    amount: 50,
    region: "USA",
    title: "Steam",
    status: "pending",
  },
  {
    user: {
      firstName: "Jane",
      lastName: "Doe",
    },
    amount: 70,
    region: "CND",
    title: "Google Play",
    status: "success",
  },
  {
    user: {
      firstName: "Joe",
      lastName: "Doe",
    },
    amount: 100,
    region: "USA",
    title: "Apple",
    status: "processing",
  },
  {
    user: {
      firstName: "Kevin",
      lastName: "Vandy",
    },
    amount: 100,
    region: "USA",
    title: "Razer Gold",
    status: "processing",
  },
  {
    user: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    amount: 200,
    region: "UK",
    title: "Steam",
    status: "failed",
  },
];

const GiftCardOrdersTable = () => {
  // const isMobile = useMediaQuery("(max-width: 1000px)");
  const navigate = useNavigate();

  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<GiftCard>[]>(
    () => [
      {
        accessorKey: "title",
        header: "Type",
        size: 200,
        Cell: ({ cell, column, row }) => (
          <div className="flex items-center gap-x-4">
            <div className="border bg-zinc-100 size-10 rounded-md"></div>
            <div className="flex flex-col gap-y- 5">
              {cell.getValue<string>()}
              <p className="text-xs text-zinc-400">
                By {row.getValue<string>("Customer")}
              </p>
            </div>
          </div>
        ),
      },
      {
        accessorKey: "amount",
        header: "Amount",
        size: 25,
      },
      {
        accessorFn: () => {
          return <p className="text-xs text-zinc-500">Today at 5pm</p>;
        },
        header: "Date",
        size: 100,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 50,
        Cell: ({ cell }) => (
          <Box
            component="span"
            sx={() => ({
              borderRadius: ".25rem",
              p: ".25rem .5rem",
              fontSize: ".75rem",
              textTransform: "capitalize",
            })}
            className="text-yellow-200 bg-yellow-600 font-medium"
          >
            {cell.getValue<number>()}
          </Box>
        ),
      },
      {
        accessorKey: "region",
        header: "Region",
        size: 50,
      },
      {
        accessorFn: (originalRow) => {
          const { firstName, lastName } = originalRow.user;
          const fullName = `${firstName} ${lastName}`;
          return fullName;
        },
        header: "Customer",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    // enableColumnFilterModes: true,
    // columnFilterDisplayMode: "custom", //we will render our own filtering UI
    enableColumnOrdering: true,
    // enableColumnPinning: true,
    // enableFacetedValues: true,
    // enableRowActions: true,
    // enableRowSelection: true,
    enableColumnActions: false,
    enableColumnFilters: false,
    initialState: {
      density: "comfortable",
      showGlobalFilter: true,
      columnVisibility: { status: false, region: false, Customer: false },
      // pagination: {
      //   pageIndex: 1,
      //   pageSize: 10,
      // },
    },
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    muiSearchTextFieldProps: {
      size: "small",
      variant: "outlined",
    },
    muiPaginationProps: {
      color: "primary",
      shape: "rounded",
      variant: "outlined",
    },
    // muiFilterTextFieldProps: ({ column }) => ({
    //   label: `Filter by ${column.columnDef.header}`,
    // }),
    muiTableBodyRowProps: ({ row }) => ({
      onClick: (event) => {
        navigate("/orders/giftcards/" + row.id);
      },
      sx: {
        cursor: "pointer", //you might want to change the cursor too when adding an onClick
      },
    }),
    renderToolbarInternalActions: ({ table }) => (
      <>
        {/* add your own custom print button or something */}
        {/* <IconButton onClick={() => void 0}>
          <PrintRounded />
          // Custom FIlter Button
        </IconButton> */}
        <IconButton
          sx={{
            border: "1px solid #9999",
            borderRadius: ".25rem",
            padding: ".25rem .325rem",
          }}
        >
          <Search />
        </IconButton>
        {/* built-in buttons (must pass in table prop for them to work!) */}
        <MRT_ShowHideColumnsButton table={table} />
        <MRT_ToggleDensePaddingButton table={table} />
        <MRT_ToggleFullScreenButton table={table} />
      </>
    ),
  });

  // return <MaterialReactTable table={table} />;
  return (
    <div className="pt-5 pb-10">
      <OrdersTableFilterAndSort table={table} />
      <div className="px-4 pt-6 pb-4">
        <MRT_TableContainer table={table} className="border rounded-lg" />
      </div>
      <div className="flex justify-center">
        <MRT_TablePagination table={table} showRowsPerPage={false} />
      </div>

      <Drawer>
        <Stack p="8px" gap="8px">
          {table.getLeafHeaders().map((header) => (
            <MRT_TableHeadCellFilterContainer
              key={header.id}
              header={header}
              table={table}
              in
            />
          ))}
        </Stack>
      </Drawer>
    </div>
  );
};

export default GiftCardOrdersTable;
