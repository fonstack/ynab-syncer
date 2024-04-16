import { AddConnectionButton } from "@/components/AddConnectionButton";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";

export default async function Page() {
  redirect("/dashboard/home");
}
