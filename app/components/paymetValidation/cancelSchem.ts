
import z from 'zod'
const cancelSchema=z.object({
    cancilationDate:z.string(),
  cancilationTime:z.string(),
})
export default cancelSchema