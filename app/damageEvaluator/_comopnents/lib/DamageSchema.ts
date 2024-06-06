import { z } from "zod"

const DamageSchema=z.object({
    firstName:z.string()
    .min(5,"First Name Must be at Least 5 character")
    .max(20,"Max Characters Must be at least 20 characters"),
    lastName:z.string()
    .min(5,"Last Name Must be at least 5 character")
    .max(20,"Max Characters Must be at least 20 characters"),
    message:z.string().min(5,"Message Must be at least 5 characters"),
    file:z.string(),
})

export default DamageSchema;



