import {
  AccountBalanceWalletOutlined,
  AddCardOutlined,
  ArrowDropUpRounded,
  ArrowDropUpSharp,
  ArrowOutwardOutlined,
  ArrowRightAlt,
  AttachMoneyOutlined,
  CurrencyBitcoinOutlined,
  CurrencyBitcoinRounded,
  CurrencyBitcoinSharp,
  CurrencyRubleOutlined,
  FlagOutlined,
  MonetizationOnOutlined,
  MoneyOutlined,
  StarBorderOutlined,
  StoreOutlined,
  TokenRounded,
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Link,
  Typography,
  CardActions,
  CardActionArea,
} from "@mui/material";
import PageTitle from "@/components/page-title";
import React from "react";
// import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="min-h-screen relative pb-12 pt-6">
      <PageTitle text="Dashboard" />

      <section className="py-4 px-4">
        <h4 className="text-sm mb-2 font-medium">Statistics</h4>

        <Stack direction="row" spacing={1}>
          <Card variant="outlined" className="w-full !rounded-lg">
            <CardHeader
              avatar={
                <div className="size-6 rounded-md border grid place-content-center">
                  <FlagOutlined className="!size-4 text-error" />
                </div>
              }
              // action={
              //   <p className="inline-flex items-center text-xs px-3 text-zinc-500 font-medium">
              //     <ArrowDropUpRounded className="text-success" /> 22%
              //   </p>
              // }
              // title="Customers"
              className="!p-2.5 !pb-0 gap-x-1.5"
              classes={{
                title: "!text-xs text-zinc-400",
                action: "flex items-center !self-center",
                avatar: "!me-0",
              }}
            />
            <CardContent className="!p-3 !py-0">
              <Typography variant="h6" className="text-zinc-700 pt-1.5 pb-.5">
                200
              </Typography>
            </CardContent>
            <div className="px-2.5 pb-2">
              <Typography
                variant="body2"
                className="!text-xs !text-zinc-500 uppercase"
              >
                Users
              </Typography>
            </div>
          </Card>
          <Card variant="outlined" className="w-full !rounded-lg">
            <CardHeader
              // avatar={<StoreOutlined className="!size-4 text-success" />}
              // title="Income"
              avatar={
                <div className="size-6 rounded-md border grid place-content-center">
                  <StoreOutlined className="!size-4 text-success" />
                </div>
              }
              className="!p-2.5 !pb-0 gap-x-1.5"
              classes={{ title: "!text-xs text-zinc-400", avatar: "!me-0" }}
            />
            <CardContent className="!p-3 !py-0">
              <Typography variant="h6" className="text-zinc-700 pt-1.5 pb-.5">
                200
              </Typography>
            </CardContent>
            <div className="px-2.5 pb-2">
              <Typography
                variant="body2"
                className="!text-xs !text-zinc-500 uppercase"
              >
                Profits
              </Typography>
            </div>
          </Card>
          <Card variant="outlined" className="w-full !rounded-lg">
            <CardHeader
              // avatar={<StarBorderOutlined className="!size-4 text-primary" />}
              // title="Activities"
              avatar={
                <div className="size-6 rounded-md border grid place-content-center">
                  <StarBorderOutlined className="!size-4 text-primary" />
                </div>
              }
              className="!p-2.5 !pb-0 gap-x-1.5"
              classes={{ title: "!text-xs text-zinc-400", avatar: "!me-0" }}
            />
            <CardContent className="!p-3 !py-0">
              <Typography variant="h6" className="text-zinc-700 pt-1.5 pb-.5">
                200
              </Typography>
            </CardContent>
            <div className="px-2.5 pb-2">
              <Typography
                variant="body2"
                className="!text-xs !text-zinc-500 uppercase"
              >
                Trends
              </Typography>
            </div>
          </Card>
        </Stack>
      </section>

      <section className="py-4 px-4">
        <h4 className="text-sm mb-2 font-medium">Top-Up Service</h4>

        <Card variant="outlined" className="w-full p-4 !rounded-lg">
          <label className="text-xs mb-1.5 text-zinc-400 inline-flex items-center gap-x-1">
            <AccountBalanceWalletOutlined className="text-zinc-400 !size-4" />
            Wallet Balance
          </label>
          <Typography className="text-zinc-700" variant="h5" fontWeight={500}>
            $40,000
          </Typography>
        </Card>

        <Stack spacing={1} className="py-2">
          <Button
            color="inherit"
            variant="outlined"
            className="!rounded-md !px-4 !py-1.5 w-full !justify-normal !border-zinc-300 !text-zinc-500"
            endIcon={<ArrowRightAlt />}
            classes={{ endIcon: "!ms-auto" }}
            size="small"
          >
            Restock Credits
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            className="!rounded-md !px-4 !py-1.5 w-full !justify-normal !border-zinc-300 !text-zinc-500"
            endIcon={<ArrowRightAlt />}
            classes={{ endIcon: "!ms-auto" }}
            size="small"
          >
            Update my retail prices
          </Button>
        </Stack>
      </section>

      <section className="py-4 px-4">
        <h4 className="text-sm mb-2 font-medium">Exchange Services</h4>
        <Stack spacing={4}>
          <Stack spacing={1}>
            <Card variant="outlined" sx={{ borderRadius: "4px" }}>
              <CardActionArea
                sx={{ display: "flex" }}
                href="/services/giftcard"
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    component="h4"
                    mb={0.5}
                    pt={0}
                    className="text-zinc-700 pt-1.5 pb-.5"
                  >
                    GIFT CARDS
                  </Typography>

                  <Typography variant="body2" className="text-gray-500">
                    Manage Your List of Cards and their Exchange Rates
                  </Typography>
                </CardContent>
                <Button>
                  <ArrowOutwardOutlined />
                </Button>
              </CardActionArea>
            </Card>
            <Button
              color="inherit"
              href="/services/giftcard"
              variant="outlined"
              className="!rounded-md !px-4 !py-1.5 w-full !justify-normal !border-zinc-300 !text-zinc-500"
              endIcon={<ArrowRightAlt />}
              classes={{ endIcon: "!ms-auto" }}
              size="small"
              startIcon={<AddCardOutlined />}
            >
              Gift Card List and Rates
            </Button>
          </Stack>

          {/* <Button
            color="inherit"
            variant="outlined"
            className="!rounded-md !px-4 !py-1.5 w-full !justify-normal !border-zinc-300 !text-zinc-500"
            endIcon={<ArrowRightAlt />}
            classes={{ endIcon: "!ms-auto" }}
            size="small"
            startIcon={<AttachMoneyOutlined />}
          >
            Crypto Rates
          </Button> */}
        </Stack>
      </section>
    </main>
  );
}
