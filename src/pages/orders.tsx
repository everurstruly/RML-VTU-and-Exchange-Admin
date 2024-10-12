import OrdersTable from "../app/orders-table";

export default function OrdersPage() {
  return (
    <div className="pt-4 pb-20">
      <h1 className="text-lg font-semibold px-4 py-2">Orders - Gift Cards</h1>
      
      <OrdersTable />
    </div>
  );
}
