import {
  AccountBalanceWalletOutlined,
  ArrowRightAlt,
  Balance,
  FlagCircleRounded,
  FlagCircleSharp,
  FlagOutlined,
  FlagSharp,
  StarBorderOutlined,
  Store,
  StoreOutlined,
  StoreRounded,
  Wallet,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";

export default function HomePage() {
  return (
    <div className="pt-4 pb-40">
      <h1 className="text-base font-medium px-4 py-2">Dashbaord</h1>

      <section className="py-4 px-4">
        <h4 className="text-xs mb-2 text-zinc-400">Statistics Overview</h4>

        <Stack direction="row" spacing={1}>
          <Card variant="outlined" className="w-full !rounded-lg">
            <CardHeader
              avatar={<FlagOutlined className="!size-4 text-error" />}
              title="Customers"
              className="!p-3 !pb-2 gap-x-1.5"
              classes={{ title: "!text-xs text-zinc-400", avatar: "!me-0" }}
            />
            <CardContent className="!pt-0 !pb-3">
              <Typography
                variant="h5"
                fontWeight={500}
                className="text-zinc-600"
              >
                200
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className="w-full !rounded-lg">
            <CardHeader
              avatar={<StoreOutlined className="!size-4 text-success" />}
              title="Income"
              className="!p-3 !pb-2 gap-x-1.5"
              classes={{ title: "!text-xs text-zinc-400", avatar: "!me-0" }}
            />
            <CardContent className="!pt-0 !pb-3">
              <Typography
                variant="h5"
                fontWeight={500}
                className="text-zinc-600"
              >
                200
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className="w-full !rounded-lg">
            <CardHeader
              avatar={<StarBorderOutlined className="!size-4 text-primary" />}
              title="Performance"
              className="!p-3 !pb-2 gap-x-1.5"
              classes={{ title: "!text-xs text-zinc-400", avatar: "!me-0" }}
            />
            <CardContent className="!pt-0 !pb-3">
              <Typography
                variant="h5"
                fontWeight={500}
                className="text-zinc-600"
              >
                200
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </section>

      <section className="py-4 px-4">
        <h4 className="text-xs mb-2 text-zinc-400">VTU Service Management</h4>

        <Card variant="outlined" className="w-full p-4 !rounded-lg">
          <label className="text-xs mb-1.5 text-zinc-400 inline-flex items-center gap-x-1">
            <AccountBalanceWalletOutlined className="text-zinc-400 !size-4" />
            Wallet Balance
          </label>
          <Typography color="textSecondary" variant="h5" fontWeight={500}>
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
            Adjust my retail prices
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            className="!rounded-md !px-4 !py-1.5 w-full !justify-normal !border-zinc-300 !text-zinc-500"
            endIcon={<ArrowRightAlt />}
            classes={{ endIcon: "!ms-auto" }}
            size="small"
          >
            Top-Up and Manage Your Account
          </Button>
        </Stack>
      </section>

      <section className="py-4 px-4">
        <h4 className="text-xs mb-2 text-zinc-400">
          Exchange Services Management
        </h4>
        <Stack spacing={1}>
          <Button
            color="inherit"
            variant="outlined"
            className="!rounded-md !px-4 !py-1.5 w-full !justify-normal !border-zinc-300 !text-zinc-500"
            endIcon={<ArrowRightAlt />}
            classes={{ endIcon: "!ms-auto" }}
            size="small"
          >
            Gift Cards
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            className="!rounded-md !px-4 !py-1.5 w-full !justify-normal !border-zinc-300 !text-zinc-500"
            endIcon={<ArrowRightAlt />}
            classes={{ endIcon: "!ms-auto" }}
            size="small"
          >
            Cryptocurrency
          </Button>
        </Stack>
      </section>

      <section className="py-4 px-4">
        <h4 className="text-xs mb-2 text-zinc-400">Business Managment</h4>
        <Stack spacing={1}>
          <Button
            color="inherit"
            variant="outlined"
            className="!rounded-md !px-4 !py-1.5 w-full !justify-normal !border-zinc-300 !text-zinc-500"
            endIcon={<ArrowRightAlt />}
            classes={{ endIcon: "!ms-auto" }}
            size="small"
          >
            Staffs
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            className="!rounded-md !px-4 !py-1.5 w-full !justify-normal !border-zinc-300 !text-zinc-500"
            endIcon={<ArrowRightAlt />}
            classes={{ endIcon: "!ms-auto" }}
            size="small"
          >
            Customers
          </Button>
        </Stack>
      </section>
    </div>
  );
}
