import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Page = () => {
  return <main>
    <Header />
    <div className="flex items-center justify-between min-h-screen w-full">
      <div className="grid gap-3 max-w-[500px] mx-auto items-center text-center border rounded-lg p-4">
        <svg className="mx-auto text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41c0 2.08-.8 3.97-2.1 5.39" /></svg>
        <h1 className="font-[600] text-xl">This is your main page.</h1>
        <p className="text-neutral-500">This page is public and accessible to everyone. It can be your homepage or your landing page.</p>
        <div className="flex gap-2 items-center justify-center">
          <Link href="/auth/login">
            <Button variant="outline">
              Login
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button variant="outline">
              Signup
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </main>
}
export default Page