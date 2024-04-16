"use client";

import Link from "next/link";
import { CircleUser, Home, Menu, Building, Table2, LayoutList, FolderSync } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";
import { signOut } from "next-auth/react";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const path = usePathname();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/dashboard/home" className="flex items-center gap-2 font-semibold">
              <FolderSync className="h-6 w-6" />
              <span className="">YNAB Syncer</span>
            </Link>
            <ThemeToggle />
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/dashboard/home"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                  path === "/dashboard/home" ? "bg-muted text-primary" : "text-muted-foreground"
                }`}>
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/budgets"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                  path === "/dashboard/budgets" ? "bg-muted text-primary" : "text-muted-foreground"
                }`}>
                <Table2 className="h-4 w-4" />
                Budgets
                {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge> */}
              </Link>
              <Link
                href="/dashboard/banks"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                  path === "/dashboard/banks" ? "bg-muted text-primary" : "text-muted-foreground"
                }`}>
                <Building className="h-4 w-4" />
                Banks
              </Link>
              <Link
                href="/dashboard/transactions"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                  path === "/dashboard/transactions" ? "bg-muted text-primary" : "text-muted-foreground"
                }`}>
                <LayoutList className="h-4 w-4" />
                Transactions
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex flex-row-reverse h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
                  <FolderSync className="h-6 w-6" />
                  <span className="sr-only">YNAB Syncer</span>
                </Link>
                <Link
                  href="/dashboard/home"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl ${
                    path === "/dashboard/home" ? "bg-muted text-foreground" : "text-muted-foreground"
                  } px-3 py-2 hover:text-foreground`}>
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/budgets"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl ${
                    path === "/dashboard/budgets" ? "bg-muted text-foreground" : "text-muted-foreground"
                  } px-3 py-2 hover:text-foreground`}>
                  <Table2 className="h-5 w-5" />
                  Budgets
                  {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge> */}
                </Link>
                <Link
                  href="/dashboard/banks"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl ${
                    path === "/dashboard/banks" ? "bg-muted text-foreground" : "text-muted-foreground"
                  } px-3 py-2 hover:text-foreground`}>
                  <Building className="h-5 w-5" />
                  Banks
                </Link>
                <Link
                  href="/dashboard/transactions"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl ${
                    path === "/dashboard/transactions" ? "bg-muted text-foreground" : "text-muted-foreground"
                  } px-3 py-2 hover:text-foreground`}>
                  <LayoutList className="h-5 w-5" />
                  Transactions
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator /> */}
              <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
