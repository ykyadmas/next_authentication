import { z } from 'zod';

export const validationSchema = z.object({
    firstName: z.string().min(5,"the First Name must be atleast").max(20,"the First Name must not above 20 Character"),
    lastName: z.string().min(5,"the Last Name must be atleast 5").max(20,"the Last Name must not above 20 Character"),
    model: z.string().min(1,"the Model must be atleast").max(20,"the Model must not above 20 Character")
});
