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
  Divider,
  CardContent,
  Checkbox,
  Typography,
  FormControlLabel,
} from "@mui/material";
import PageTitle from "@/components/page-title";
import GiftcardRateItemActionButton from "@/components/giftcard/more-rate-action-button";
import {
  AddCircleOutlined,
  AddOutlined,
  FilterAltOutlined,
  FilterListOutlined,
  Image,
  MoreVertOutlined,
  SortOutlined,
  SwapHorizOutlined,
} from "@mui/icons-material";

export default function GiftcardRatesPage() {
  return (
    <main className="min-h-screen relative pb-12 pt-6">
      <PageTitle text="Gift Card Services - Rates" />

      <section className="px-4 pt-6 pb-20">
        <div className="flex flex-col gap-y-2 mb-6">
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

        <ul className="flex flex-col gap-5 mb-8">
          {[1, 2, 3, 4, 5, 6, 8, 9, 10, 11].map((item) => {
            return (
              <li>
                <Card variant="elevation" className="border">
                  <CardContent sx={{ padding: ".875rem", position: "relative" }}>
                    <div className="flex justify-end">
                      <GiftcardRateItemActionButton />
                    </div>

                    <div className="mb-6    ">
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="h6"
                        align="center"
                      >
                        You will Pay
                      </Typography>

                      <div className="flex items-center justify-center gap-x-2">
                        <span className="text-xl font-medium">
                          <span className="text-primary">1700</span> NGN
                        </span>{" "}
                        <SwapHorizOutlined color="primary" fontSize="small" />
                        <span className="text-xl font-medium">1 USD</span>
                      </div>
                    </div>

                    <div className="p-4 space-y-2 rounded-md border border-dashed">
                      <Typography gutterBottom variant="body2" component="h6">
                        When Order Details:
                      </Typography>

                      <ul className="flex flex-col gap-y-2">
                        {/* <li className="flex items-center  justify-between truncate text-xs">
                          <span className="text-zinc-500">Region: </span>
                          <span className="">United States of America</span>
                        </li> */}
                        <li className="flex items-center  justify-between truncate text-xs">
                          <span className="text-zinc-500">Amount: </span>
                          <span className="">
                            min (<span className="font-bold">1000</span>) — max
                            (<span className="font-bold">1000</span>)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>

                  <CardActions className="flex justify-end">
                    <Button size="medium" fullWidth color="error">Deactivate</Button>
                    <Button size="medium" fullWidth>Edit</Button>
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
        sx={{ position: "fixed", bottom: "5rem", right: "1.25rem" }}
      >
        <AddOutlined />
      </Fab>
    </main>
  );
}
