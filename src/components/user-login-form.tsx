"use client";

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label  } from "@/components/ui/label";

export function LoginForm() {

    const router = useRouter();

    // State to hold email and password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handler for the Login button click
    const handleLogin = (e: React.MouseEvent) => {
        e.preventDefault();

        // Check if email and password match the required values
        if (email === "student" && password === "123") {
            router.push("/student"); // Redirect to /students page if the condition is met
        }
        else if(email === "doctor" && password === "456"){
            router.push("/doctor");
        }
        else {
            alert("Invalid credentials"); // Show an alert if the credentials are incorrect
        }
    };

    // Handler for Google Login (optional behavior)
    const handleGoogleLogin = (e: React.MouseEvent) => {
        e.preventDefault();
        router.push("/"); // This behavior stays the same for Google login
    };

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            value={email} // Bind email input to state
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link href="#" className="ml-auto inline-block text-sm underline">
                                Forgot your password?
                            </Link>
                        </div>
                        <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <Button type="submit" className="w-full" onClick={handleLogin}>
                        Login
                    </Button>
                    <Button variant="outline" className="w-full" onClick={handleGoogleLogin}>
                        Login with Google
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="underline">
                        Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}