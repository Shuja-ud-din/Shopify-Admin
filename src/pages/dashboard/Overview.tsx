import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
const Overview = () => {


  return (
    <>
       <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Orders</CardTitle>
                <CardDescription>All orders placed in the last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">1,234</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Average Order Value</CardTitle>
                <CardDescription>The average value of all orders in the last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">$49.99</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Conversion Rate</CardTitle>
                <CardDescription>The percentage of visitors that placed an order</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">3.2%</div>
              </CardContent>
            </Card>
             <Card>
              <CardHeader>
                <CardTitle>Conversion Rate</CardTitle>
                <CardDescription>The percentage of visitors that placed an order</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">3.2%</div>
              </CardContent>
            </Card>
            <Card className="col-span-2 lg:col-span-3 xl:col-span-4">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>The most recent orders placed in the last 30 days</CardDescription>
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
                    <TableRow>
                      <TableCell className="font-medium">#1234</TableCell>
                      <TableCell>
                        <div className="font-medium">Olivia Martin</div>
                        <div className="text-sm text-muted-foreground">olivia@example.com</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">February 20, 2023</TableCell>
                      <TableCell className="hidden md:table-cell">$42.25</TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge variant="secondary">Shipped</Badge>
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
                    <TableRow>
                      <TableCell className="font-medium">#1233</TableCell>
                      <TableCell>
                        <div className="font-medium">Ava Johnson</div>
                        <div className="text-sm text-muted-foreground">ava@example.com</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">January 5, 2023</TableCell>
                      <TableCell className="hidden md:table-cell">$74.99</TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge variant="secondary">Paid</Badge>
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
                    <TableRow>
                      <TableCell className="font-medium">#1232</TableCell>
                      <TableCell>
                        <div className="font-medium">Michael Johnson</div>
                        <div className="text-sm text-muted-foreground">michael@example.com</div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">August 3, 2022</TableCell>
                      <TableCell className="hidden md:table-cell">$64.75</TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge variant="outline">Unfulfilled</Badge>
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
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
                      
          </div>
        </main>
    </>
  );
};

export default Overview;


function MoveHorizontalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
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
  )
}