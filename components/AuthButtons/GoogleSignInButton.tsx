import { signIn } from "@/auth";

export function GoogleSignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}>
      <button>Sign in with Google</button>
    </form>
  );
}
