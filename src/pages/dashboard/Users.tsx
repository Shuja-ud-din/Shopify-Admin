import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Order = {
  id: string;
  customer: {
    name: string;
    email: string;
  };
  date: string;
  total: string;
  status: "Shipped" | "Paid" | "Unfulfilled";
};

const orders: Order[] = [
  {
    id: "#1234",
    customer: { name: "Olivia Martin", email: "olivia@example.com" },
    date: "February 20, 2023",
    total: "$42.25",
    status: "Shipped",
  },
  {
    id: "#1233",
    customer: { name: "Ava Johnson", email: "ava@example.com" },
    date: "January 5, 2023",
    total: "$74.99",
    status: "Paid",
  },
  {
    id: "#1232",
    customer: { name: "Michael Johnson", email: "michael@example.com" },
    date: "August 3, 2022",
    total: "$64.75",
    status: "Unfulfilled",
  },
];

const Users: React.FC = () => {
  return (
    <div>
      <main className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card className="col-span-2 lg:col-span-3 xl:col-span-4">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>
                The most recent orders placed in the last 30 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden sm:table-cell">Date</TableHead>
                    <TableHead className="hidden md:table-cell">Total</TableHead>
                    <TableHead className="hidden sm:table-cell">Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div className="font-medium">{order.customer.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {order.customer.email}
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        {order.date}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {order.total}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge
                          variant={
                            order.status === "Unfulfilled"
                              ? "outline"
                              : "secondary"
                          }
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoveHorizontalIcon className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View order</DropdownMenuItem>
                            <DropdownMenuItem>Customer details</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Users;

const MoveHorizontalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 8 22 12 18 16" />
    <polyline points="6 8 2 12 6 16" />
    <line x1="2" x2="22" y1="12" y2="12" />
  </svg>
);
