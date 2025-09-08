"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown <= 0) {
      router.push("/");
      return;
    }

    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, router]);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="grid gap-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Welcome aboard! 🎉
              </CardTitle>
              <CardDescription>
                Your account has been created successfully.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Redirecting to your dashboard in <strong>{countdown}</strong> seconds...
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
