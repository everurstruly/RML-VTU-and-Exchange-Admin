import { ArrowRightAlt, QuestionMarkRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

export default function HomePage() {
  return (
    <div className="pt-4 pb-20">
      <h1 className="text-lg font-semibold px-4 py-2">Dashbaord</h1>

      <section className="py-8 px-4">
        <Stack spacing={1}>
          <Card variant="outlined" className="w-full min-h-60 p-4 !rounded-lg">
            <Typography variant="body2">Customers</Typography>
          </Card>
          <Stack direction="row" spacing={1}>
            <Card variant="outlined" className="w-full h-24 p-4 !rounded-lg">
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Revenue
              </Typography>
            </Card>
            <Card variant="outlined" className="w-full h-24 p-4 !rounded-lg">
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Average Response
              </Typography>
            </Card>
          </Stack>
        </Stack>
      </section>

      <div className="py-8 px-4">
        <Stack spacing={2}>
          <Card variant="outlined" className="!rounded-lg">
            <CardContent>
              <Link to="/" className="flex items-center justify-between">
                <div>
                  <h4 className="h4 font-medium mb-1">
                    Bills & Top-Up Management
                  </h4>
                  <p className="text-xs text-content3 mb-2">
                    Re-stock airtime, Edit Pricing...
                  </p>
                  <Button className="!p-0 !text-xs !capitalize">
                    Learn more
                  </Button>
                </div>
                <ArrowRightAlt />
              </Link>
            </CardContent>
            {/* <p className="text-sm text-content3 text-center py-.5">
              💡 Checkout your login details in your account settings
            </p> */}
          </Card>
          <Card variant="outlined" className="!rounded-lg">
            <CardContent>
              <Link to="/" className="flex items-center justify-between">
                <div>
                  <h4 className="h4 font-medium mb-1">
                    Manage My Gift Cards
                  </h4>
                  <p className="text-xs text-content3 mb-2">
                    Re-stock airtime, Edit Pricing...
                  </p>
                  <Button className="!p-0 !text-xs !capitalize">
                    Learn more
                  </Button>
                </div>
                <ArrowRightAlt />
              </Link>
            </CardContent>
            {/* <p className="text-sm text-content3 text-center py-.5">
              💡 Checkout your login details in your account settings
            </p> */}
          </Card>
        </Stack>
      </div>
    </div>
  );
}
