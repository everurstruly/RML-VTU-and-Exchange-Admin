import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Chip,
  Box,
  IconButton,
  Stack,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FiAlertCircle } from "react-icons/fi";

type GiftcardOrderReviewCard = {
  coverUri: string;
  userId: string;
  name: string;
  region: string; // USA, CAN, UK, NGN
  amount: number;
  status: string; // pending, success, processing, rejected
  createdAt: string;
  rate: {
    value: number;
    from: string; // USD, EUR, GBP, NGN
    to: string; // USD, EUR, GBP, NGN
  };
  ecode?: string;
  visualProofsOfPaymentUris: string[]; // images
};

export default function GiftCardOrderReviewCard({
  coverUri,
  userId,
  name,
  region,
  amount,
  status,
  createdAt,
  rate,
}: GiftcardOrderReviewCard) {
  const statusColors = {
    pending: "warning",
    success: "success",
    processing: "info",
    rejected: "error",
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 450,
        padding: 2,
        borderRadius: 2,
        borderColor: "#e0e0e0",
        boxShadow: 2,
        transition: "0.3s",
        "&:hover": {
          boxShadow: 4,
        },
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: "8px" }}
      >
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs={2}>
            <CardMedia
              component="img"
              image={coverUri}
              alt="Gift Card Cover"
              sx={{ width: 40, height: 40, borderRadius: 1 }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" fontWeight="bold">
              {name} ({region})
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {new Date(createdAt).toLocaleDateString()}
            </Typography>
          </Grid>
          <Grid item xs={4} textAlign="right">
            {/* <Chip
              label={status.toUpperCase()}
              color={(statusColors as any)[status] || "default"}
              size="small"
            /> */}
            <Typography variant="body1" fontWeight="bold">
              ${amount.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>

        <Stack spacing={0.5} className="my-2.5 w-full">
          <div className="flex justify-between items-center w-full">
            <Typography variant="body2" color="textSecondary">
              Rate: {rate.value} {rate.from}/{rate.to}
            </Typography>

            {/* <Typography variant="body1" fontWeight="bold">
              ${amount.toFixed(2)}
            </Typography> */}
          </div>
          <div className="flex justify-between items-center w-full">
            <Typography variant="body2" color="textSecondary">
              User ID
            </Typography>

            <Typography variant="body2" color="textSecondary">
              johndoe@fake.no
            </Typography>
          </div>
        </Stack>

        <Box>
          <div className="flex items-center gap-x-1.5 mb-1.5">
            <FiAlertCircle className="size-3 text-zinc-600" />
            <Typography variant="body2" color="textSecondary">
              Proofs of Payment
            </Typography>
          </div>
          <Stack direction="row" spacing={1}>
            {["0", "1"].map((uri, index) => (
              <CardMedia
                // image={uri}
                // alt={`Proof of Payment ${index + 1}`}
                className="!size-12 rounded-lg cursor-pointer"
                sx={{
                  objectFit: "cover",
                  backgroundColor: "#eee",
                }}
              />
            ))}
          </Stack>
        </Box>
      </Grid>
    </Card>
  );
}

// Example usage
// const order = {
//   coverUri: 'https://via.placeholder.com/150',
//   userId: '32UD457',
//   region: 'USA',
//   amount: 29.99,
//   status: 'paid',
//   createdAt: '2024-10-13T12:34:56Z',
