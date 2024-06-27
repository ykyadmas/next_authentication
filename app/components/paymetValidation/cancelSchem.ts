
import z from 'zod'
const cancelSchema=z.object({
    cancilationDate:z.string(),
     cancilationTime:z.string(),
     reason:z.string().min(5,"must have atleast 5 Characters"),
})
export default cancelSchema