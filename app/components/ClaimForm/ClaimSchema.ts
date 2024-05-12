import { z } from "zod"



const ClaimSchema=z.object({
    driverFullName:z.string(),
    driverAddress:z.string(),
    driverOccupation:z.string(),
    place:z.string(),
    age:z.string(),
    LicenceNo:z.string(),
    policyFile:z.string(),
    carFile:z.string(),
    acidentDate:z.string(),
    time:z.string(),
})
export default ClaimSchema

