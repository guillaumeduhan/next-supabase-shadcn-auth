import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { LogoutButton } from "./logout-button";
import { Button } from "./ui/button";
import { User } from "./User";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user }, // can we watch for user if change and update the view ifso?
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      <User {...user} align="right" />
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/auth/login">Sign in</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/auth/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}
