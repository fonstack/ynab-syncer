import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SelectBank } from "./components/SelectBank";

export default async function Page() {
  return (
    <main>
      <div className="mb-4 flex justify-end">
        <SelectBank />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Banks</CardTitle>
          <CardDescription>Manage your connections to your banks to import all the transactions.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-8">
          <div className="flex items-center gap-4 hover:bg-muted/50 p-4 rounded-md cursor-pointer">
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>-</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">Revolut</p>
              <p className="text-sm text-muted-foreground">LT243250061644148761</p>
            </div>
            <div className="flex flex-col items-end ml-auto">
              <div className="text-sm font-medium">Synced 4 hours ago</div>
              <p className="text-sm text-muted-foreground">Connected to </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
