import React from "react";
import {
  TextField,
  Button,
  Card,
  Fab,
  CardHeader,
  IconButton,
  CardActions,
  Menu,
  MenuItem,
} from "@mui/material";
import PageTitle from "@/components/page-title";
import {
  AddCircleOutlined,
  AddOutlined,
  FilterAltOutlined,
  FilterListOutlined,
  Image,
  MoreVertOutlined,
  SortOutlined,
} from "@mui/icons-material";

export default function GiftcardPage() {
  return (
    <main className="min-h-screen relative">
      <PageTitle text="Gift Card Services" />

      <section className="px-4 py-6">
        <div className="flex flex-col gap-y-2 mb-6">
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            placeholder="Search Card Title"
            fullWidth
          />

          <div className="flex gap-x-2">
            <Button
              size="small"
              variant="outlined"
              color="primary"
              sx={{ borderRadius: "2px" }}
              fullWidth
              startIcon={<FilterAltOutlined />}
            >
              Filter
            </Button>

            <Button
              size="small"
              variant="outlined"
              color="primary"
              sx={{ borderRadius: "2px" }}
              fullWidth
              startIcon={<SortOutlined />}
            >
              Sort
            </Button>

            {/* <ul className="flex items-center gap-4 overflow-x-hidden flex-nowrap text-xs text-zinc-600">
              {[1, 2, 3, 4, 5, 6, 8, 9, 10, 11].map((item) => {
                return <li>hello</li>;
              })}
            </ul> */}
          </div>
        </div>

        <ul className="flex flex-col gap-4 pb-6">
          {[1, 2, 3, 4, 5, 6, 8, 9, 10, 11].map((item) => {
            return (
              <li>
                <Card variant="elevation" className="border">
                  <CardHeader
                    avatar={<div className="border h-10 w-14 rounded-md"></div>}
                    action={
                      <>
                        <IconButton aria-label="settings">
                          <MoreVertOutlined />
                        </IconButton>
                        <Menu id="long-menu" open={false}>
                          {["Edit", "Deactivate", "Delete"].map((option) => (
                            <MenuItem key={option}>{option}</MenuItem>
                          ))}
                        </Menu>
                      </>
                    }
                    title="Amazon"
                    subheader="September 14, 2016"
                  />
                  <CardActions className="flex gap-x-4">
                    <Button size="small" fullWidth variant="outlined">
                      View Orders
                    </Button>
                    <Button size="small" fullWidth variant="outlined">
                      Edit Rates
                    </Button>
                  </CardActions>
                </Card>
              </li>
            );
          })}
        </ul>
      </section>

      <Fab
        size="medium"
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: "5rem", right: "1rem" }}
      >
        <AddOutlined />
      </Fab>
    </main>
  );
}