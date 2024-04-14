import Link from "next/link";
import { auth } from "@/auth";
import { GoogleSignInButton } from "@/components/AuthButtons/GoogleSignInButton";
import { LogoutButton } from "@/components/AuthButtons/LogoutButton";
import "./styles.scss";

export default async function Page() {
  const session = await auth();
  const user = session?.user;

  return (
    <main>
      <h3>Hey {user?.email ?? "you"} - Welcome to YNAB syncer</h3>
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
