"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"



export default function DeletePage({proposalId}:{proposalId:number}) {
const[isDeleting,setDelete]=useState(false)
const[Error,setError]=useState(false)
const router=useRouter()

const handlDelete=async()=>{
    try {
        setError(false)
        setDelete(true)
        await axios.delete('/api/engineer/'+proposalId)
        router.push('/admin/')
        router.refresh()
    } catch (error) {
        setError(true)
        setDelete(false)
    }
}

return(
<button className="btn btn-accent" onClick={handlDelete} type="submit">{isDeleting ? "Deleteing..." : "Delete"}</button>
)
}