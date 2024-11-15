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
import RateListBrandSelectInput from "@/components/giftcard/rate-list-brand-select-input";
import RateListBrandSelectBox from "@/components/giftcard/rate-list-brand-select-box";
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
    <main className="min-h-screen relative pb-32 pt-6">
      <PageTitle text="Gift Card Services - Rates" />

      <section className="px-4 pt-6 pb-20">
        <div className="flex flex-col gap-y-2 mb-6">
          {/* <RateListBrandSelectInput /> */}
          <RateListBrandSelectBox />

          <div className="flex gap-x-2">
            <Button
              size="medium"
              variant="outlined"
              color="primary"
              sx={{ borderRadius: "2px" }}
              fullWidth
              startIcon={<FilterAltOutlined />}
            >
              Filter
            </Button>

            <Button
              size="medium"
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

        <div className="flex">
          <Button
            variant="contained"
            size="medium"
            className="!mb-4 !ms-auto"
            startIcon={<AddOutlined />}
            href="/services/giftcard/rates/new"
          >
            New Rate
          </Button>
        </div>

        <ul className="flex flex-col gap-5 mb-8">
          {[1, 2, 3, 4, 5, 6, 8, 9, 10, 11].map((item, index) => {
            return (
              <li key={`${item}#${index}`}>
                <Card variant="elevation" className="border">
                  <div className="p-4 relative">
                    <div className="flex justify-end">
                      <GiftcardRateItemActionButton />
                    </div>

                    <div className="-mt-1 mb-6">
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="h6"
                        align="center"
                        className="text-stone-500"
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

                    <div className="p-3 space-y-2 rounded-md border border-dashed">
                      <ul className="flex flex-col gap-y-1">
                        <li className="flex items-center  justify-between truncate text-sm">
                          <span className="text-zinc-500 text-xs">Brand: </span>
                          <span className="">Amazon (USA)</span>
                        </li>
                        <li className="flex items-center justify-between truncate text-sm">
                          <span className="text-zinc-500 text-xs">Value: </span>
                          <span className="">
                            Min (
                            <span className="text-primary font-medium">
                              1000
                            </span>
                            ) — Max (
                            <span className="text-primary font-medium">
                              1000
                            </span>
                            )
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <CardActions className="flex justify-end !pt-0">
                    <Button size="medium" fullWidth color="error">
                      Delete
                    </Button>
                    <Button size="medium" fullWidth>
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
