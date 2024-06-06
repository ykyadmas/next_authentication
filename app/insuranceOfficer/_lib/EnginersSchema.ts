import { z } from "zod"

const EngineersSchema=z.object({

    firstName:z.string()
    .min(5,"First Name Must be at Least 5 character")
    .max(20,"Max Characters Must be at least 20 characters"),
    lastName:z.string()
    .min(5,"Last Name Must be at least 5 character")
    .max(20,"Max Characters Must be at least 20 characters"),
    message:z.string().min(5,"Message Must be at least 5 characters"),
    payments:z.string().min(2,"Payments Must be at least 2 characters"),
})

export default EngineersSchema;

