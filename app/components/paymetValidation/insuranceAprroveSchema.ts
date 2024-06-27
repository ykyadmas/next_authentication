import { z } from "zod";

const InsuranceSchema = z.object({
    status: z.enum(['pending', 'approved']),
  });
  export default InsuranceSchema