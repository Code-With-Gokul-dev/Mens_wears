import { email, z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, {
            message: "Email is Requied"
        })
        .email({ message: "Invalid email address" }),
    password: z.string()
        .min(6, {
            message: "Password must be least 8 characters"
        })
})

