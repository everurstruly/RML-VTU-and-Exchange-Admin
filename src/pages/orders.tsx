import {
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import OrdersTable from "../app/orders-table";

export default function OrdersPage() {
  return (
    <div className="py-24">
      <h1 className="text-base px-4">Orders - Gift Cards</h1>
      <section className="py-16 px-4">
        <OrdersTable />
      </section>
    </div>
  );
}
