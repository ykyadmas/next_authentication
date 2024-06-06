import { z } from 'zod';

export const validationSchema = z.object({

    firstName: z.string().min(5,"the First Name must be atleast").max(20,"the First Name must not above 20 Character"),
    lastName: z.string().min(5,"the Last Name must be atleast 5").max(20,"the Last Name must not above 20 Character"),
    model: z.string().min(1,"the Model must be atleast").max(20,"the Model must not above 20 Character"),
    occupation: z.string().min(5,"the Occupation Character must be atleast 5").max(20,"the Ocupation Character must not above 20"),
    woreda:z.string().min(5,"the Character must be atleast 5").max(20,"the Character name must Not greater than 30"),
    kebele:z.string(),
    phoneNo:z.string(),
    startDate: z.string(),
    endDate: z.string(),
    proposedDate: z.string(),
    branch:z.string().min(5,"Branch name must be at leat 5").max(30,"Branch name must Not greater than 30"),
    comprehensive:z.boolean(), 
    thirdParty:z.boolean(),
    thirdPartyFireAndTheft:z.boolean(),
    ondamage:z.boolean(),
    chassisNo:z.string()
});
