import React from 'react'

interface Props{
    fname:string;
    lname:string;
    email:string;
    amount:number;
    tx_ref:string;
    public_key:string;
}


// eslint-disable-next-line camelcase
const Checkout = ({fname,lname,email,amount,tx_ref,public_key}:Props) => {
  return (
       <form method="POST" action="https://api.chapa.co/v1/hosted/pay" >
    <input type="hidden" name="public_key" value={public_key} />
    <input type="hidden" name="tx_ref" value={tx_ref} />
    <input type="hidden" name="amount" value={amount} />
    <input type="hidden" name="currency" value="ETB" />
    <input type="hidden" name="email" value={email} />
    <input type="hidden" name="first_name" value={fname} />
    <input type="hidden" name="last_name" value={lname} />
    <input type="hidden" name="title" value="Let us do this" />
    <input type="hidden" name="description" value="Paying with Confidence with cha" />
    <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
    <input type="hidden" name="callback_url" value="https://example.com/callbackurl" />
    <input type="hidden" name="return_url" value="http://localhost:3000/thanks" />
    <input type="hidden" name="meta[title]" value="test" />
    <button type="submit">Pay Now</button>
    </form>
  )
}

export default Checkout