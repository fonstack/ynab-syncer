import { signIn } from "@/auth";
import "./styles.scss";

export default async function Page() {
  // const session = await getServerSession()
  return (
    <main>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}>
        <button type="submit">Signin with Google</button>
      </form>
    </main>
  );
}
