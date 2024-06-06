
import z from 'zod'
const cancelMessageSchema=z.object({
    message:z.string()
})
export default cancelMessageSchema