"use client";

import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      router.back();
    }
  }, [session?.user]);

  return (
    <div className="max-w-2xl mx-auto my-10 p-8 border">
      <h2 className="text-3xl font-semibold text-primary capitalize">Login</h2>
      <form className="mt-8">
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-gray-100 w-full p-2 mt-4 rounded-lg"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-100 w-full p-2 mt-4 rounded-lg"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white w-full p-2 mt-4 rounded-lg"
        >
          Login
        </button>
      </form>
      <div className="flex gap-2 flex-wrap justify-between mt-4">
        <Link
          href={"/auth/forgot"}
          className="hover:text-cyan-500 hover:underline"
        >
          Forgot Password?
        </Link>
        <Link
          href={"/auth/register"}
          className="hover:text-cyan-500 hover:underline"
        >
          Don't have an account?
        </Link>
      </div>
      <div className="mt-8 text-center space-y-2">
        <h2 className="text-base font-bold text-slate-500">
          or, Continue with
        </h2>
        <Button
          className="bg-transparent border-2 rounded-full text-2xl hover:bg-transparent hover:border-primary"
          size={"icon"}
          onClick={() => signIn("google")}
        >
          <FcGoogle />
        </Button>
      </div>
    </div>
  );
};

export default Login;
