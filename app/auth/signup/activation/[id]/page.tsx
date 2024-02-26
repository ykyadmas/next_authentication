import { Interface } from "readline"

interface Props{
    params:{
        id:string
    }
}

const ActivationPage = ({params}:Props) => {

  return <div>{params.id}</div>
}

export default ActivationPage