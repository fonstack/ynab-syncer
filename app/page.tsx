import Link from "next/link";
import { auth } from "@/auth";
import { GoogleSignInButton } from "@/components/AuthButtons/GoogleSignInButton";
import { LogoutButton } from "@/components/AuthButtons/LogoutButton";

export default async function Page() {
  const session = await auth();
  const user = session?.user;

  return (
    <main>
      <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Hey {user?.email ?? "you"} - Welcome to YNAB syncer
      </h3>
      {user ? (
        <div>
          <Link href="/dashboard">Go to app ➡️</Link>
          <LogoutButton />
        </div>
      ) : (
        <GoogleSignInButton />
      )}
    </main>
  );
}
