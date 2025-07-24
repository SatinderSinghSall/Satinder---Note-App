"use server";

import { auth } from "@/lib/auth";

export const signInUser = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    return {
      success: true,
      message: "User signed in successfully.",
    };
  } catch (error) {
    console.error("Error signing in user:", error);
    const e = error as Error;
    return {
      success: false,
      message: e.message || "An error occurred while signing in.",
    };
  }
};

export const signUpUser = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });
    return {
      success: true,
      message: "User signed up successfully.",
    };
  } catch (error) {
    console.error("Error signing up user:", error);
    const e = error as Error;
    return {
      success: false,
      message: e.message || "An error occurred while signing up.",
    };
  }
};
