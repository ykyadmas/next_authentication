import { z } from 'zod';

export const messageValidationSchema = z.object({
    subject: z.string().min(5,"the Last Name must be atleast 5").max(100,"the Last Name must not above 100 Character"),
    sentMessage: z.string().min(5,"the Model must be atleast").max(300,"the Model must not above 20 Character")
});

