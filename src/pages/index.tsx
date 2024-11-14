import {
  AccountBalanceWalletOutlined,
  TagOutlined,
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
  RepartitionOutlined,
  BoltOutlined,
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
    <main className="min-h-screen relative pb-32 pt-6">
      <PageTitle text="Dashboard" />

      <section className="py-4 px-4">
        <h4 className="text-sm mb-2 font-medium">Statistics</h4>

        <div className="flex flex-wrap gap-4">
          <article className="border rounded-lg p-2.5 grow gap-y-1.5 flex flex-col">
            <h4 className="!text-xs text-zinc-500">Profits</h4>

            <div className="flex items-center gap-x-2">
              <div className="size-6 rounded-md border grid place-content-center">
                <StoreOutlined className="!size-4 text-success" />
              </div>
              <Typography variant="subtitle1">200</Typography>
            </div>
          </article>

          <article className="border rounded-lg p-2.5 grow gap-y-1.5 flex flex-col">
            <h4 className="!text-xs text-zinc-500">Activities</h4>

            <div className="flex items-center gap-x-2">
              <div className="size-6 rounded-md border grid place-content-center">
                <StarBorderOutlined className="!size-4 text-primary" />
              </div>
              <Typography variant="subtitle1">200</Typography>
            </div>
          </article>

          <article className="border rounded-lg p-2.5 grow gap-y-1.5 flex flex-col">
            <h4 className="!text-xs text-zinc-500">Customers</h4>

            <div className="flex items-center gap-x-2">
              <div className="size-6 rounded-md border grid place-content-center">
                <FlagOutlined className="!size-4 text-error" />
              </div>
              <Typography variant="subtitle1">200</Typography>
            </div>
          </article>
        </div>
      </section>

      <section className="py-4 px-4">
        <h4 className="text-sm mb-2 font-medium">Top-Up Service</h4>

        <Card variant="outlined" className="w-full p-4 !rounded-lg">
          <label className="text-xs mb-1.5 text-zinc-500 inline-flex items-center gap-x-1.5">
            <AccountBalanceWalletOutlined className="text-zinc-500 !size-4" />
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
            startIcon={<RepartitionOutlined />}
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
            startIcon={<BoltOutlined />}
            size="small"
          >
            Update Retail Prices
          </Button>
        </Stack>
      </section>

      <section className="py-4 px-4">
        <h4 className="text-sm mb-2 font-medium">Exchange Services</h4>
        <Stack spacing={4}>
          <Stack spacing={1}>
            <Card variant="outlined" classes={{ root: "!rounded-lg" }}>
              <CardActionArea
                sx={{ display: "flex", justifyContent: "space-between" }}
                href="/services/giftcard"
              >
                <CardContent>
                  <Typography variant="h6" pt={0} className="pt-1.5 pb-.5">
                    GIFT CARDS
                  </Typography>

                  <Typography variant="caption" className="text-gray-500">
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
              // href="/services/giftcard/tags"
              variant="outlined"
              className="!rounded-md !px-4 !py-1.5 w-full !justify-normal !border-zinc-300 !text-zinc-500"
              endIcon={<ArrowRightAlt />}
              classes={{ endIcon: "!ms-auto" }}
              size="small"
              startIcon={<TagOutlined />}
            >
              Manage Tags
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
