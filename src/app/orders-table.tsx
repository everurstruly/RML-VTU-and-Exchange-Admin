import { useMemo } from "react";
import {
  MaterialReactTable,
  MRT_TableContainer,
  MRT_TableHeadCellFilterContainer,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Box, Drawer, Paper, Stack, useMediaQuery } from "@mui/material";

//example data type
type GiftCard = {
  user: {
    firstName: string;
    lastName: string;
  };
  amount: 100;
  title: string;
  status: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: GiftCard[] = [
  {
    user: {
      firstName: "John",
      lastName: "Doe",
    },
    amount: 100,
    title: "East Daphne",
    status: "pending",
  },
  {
    user: {
      firstName: "Jane",
      lastName: "Doe",
    },
    amount: 100,
    title: "Columbus",
    status: "success",
  },
  {
    user: {
      firstName: "Joe",
      lastName: "Doe",
    },
    amount: 100,
    title: "South Linda",
    status: "processing",
  },
  {
    user: {
      firstName: "Kevin",
      lastName: "Vandy",
    },
    amount: 100,
    title: "Lincoln",
    status: "processing",
  },
  {
    user: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    amount: 100,
    title: "Omaha",
    status: "failed",
  },
];

const Example = () => {
  const isMobile = useMediaQuery("(max-width: 1000px)");

  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<GiftCard>[]>(
    () => [
      {
        accessorKey: "title",
        header: "Title",
        size: 100,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 50,
        Cell: ({ cell }) => (
          <Box
            component="span"
            sx={(theme) => ({
              backgroundColor:
                cell.getValue<number>() < 50_000
                  ? theme.palette.error.dark
                  : cell.getValue<number>() >= 50_000 &&
                      cell.getValue<number>() < 75_000
                    ? theme.palette.warning.dark
                    : theme.palette.success.dark,
              borderRadius: "0.25rem",
              color: "#fff",
              maxWidth: "9ch",
              p: "0.25rem",
            })}
          >
            {cell.getValue<number>()}
          </Box>
        ),
      },
      {
        accessorKey: "amount", //normal accessorKey
        header: "Amount",
        size: 50,
      },
      {
        accessorFn: (originalRow) => {
          const { firstName, lastName } = originalRow.user;
          const fullName = `${firstName} ${lastName}`;
          return fullName;
        },
        header: "User",
        size: 100,
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
    enableRowSelection: true,
    initialState: {
      showGlobalFilter: true,
    },
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    muiSearchTextFieldProps: {
      size: "small",
      variant: "outlined",
    },
    muiPaginationProps: {
      color: "primary",
      //   rowsPerPageOptions: [10, 20, 30],
      shape: "rounded",
      variant: "outlined",
    },
    // muiFilterTextFieldProps: ({ column }) => ({
    //   label: `Filter by ${column.columnDef.header}`,
    // }),
  });

  return <MaterialReactTable table={table} />;
  //   return (
  //     <div>
  //       {/* <MaterialReactTable table={table} />; */}
  //       <div className="py2 bg-white">
  //         <input type="text" placeholder="Search..." />
  //       </div>
  //       <MRT_TableContainer table={table} />
  //       <Drawer>
  //         <Stack p="8px" gap="8px">
  //           {table.getLeafHeaders().map((header) => (
  //             <MRT_TableHeadCellFilterContainer
  //               key={header.id}
  //               header={header}
  //               table={table}
  //               in
  //             />
  //           ))}
  //         </Stack>
  //       </Drawer>
  //     </div>
  //   );
};

export default Example;
