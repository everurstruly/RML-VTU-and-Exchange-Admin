import {
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

export default function HomePage() {
  return (
    <div className="pt-20">
      <h1 className="text-base px-4">Dashbaord</h1>
      <section className="py-16 px-4">
        <Stack spacing={2}>
          <Card variant="outlined" className="w-full min-h-60">Customers/User</Card>
          <Stack direction="row" spacing={2}>
            <Card variant="outlined" className="w-full h-24">
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Revenue
              </Typography>
            </Card>
            <Card variant="outlined" className="w-full h-24">
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
    </div>
  );
}
