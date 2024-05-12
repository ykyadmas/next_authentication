
import z from 'zod'
const PaymentSchema=z.object({
    firstName:z.string(),
    lastName:z.string(),
    receipt:z.string(),
    amount:z.string(),
})
export default PaymentSchema







