import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

function Signin() {
    const [loading, setLoading] = useState(false)
    const {push, query} = useRouter()
    const [error, setError] = useState("")
    const callbackUrl:any = query.callbackUrl || "/"
    async function handleSubmit(e:any){
        e.preventDefault()
        setLoading(true)
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        try{
            const res = await signIn("credentials", {
                redirect: false,
                email: data.email,
                password: data.password,
                callbackUrl})
            if(!res?.error){
                setLoading(false)
                push(callbackUrl)
            }
            else{
                setLoading(false)
                setError("Email atau password salah")
            }
        }
        catch(err:any){
            setError("Email atau password salah")
        }
    }
    function Input(props:any){
        const {type, name, placeholder, label} = props
        return(
            <div className='flex flex-col gap-2  w-full'>
                <label htmlFor={name}>{label}</label>
                <input className='border-solid border-b-[1px] border-black focus:outline-none focus:border-blue-500' type={type} name={name} placeholder={placeholder} id={name}/>
            </div>
        )
    }
  return (
    <div className='bg-gray-100 flex flex-col h-full'>
        <Link href="/" className='bg-white text-black  w-full flex flex-row px-24 py-6 gap-3 items-center'>
            <h1 className='font-semibold text-xl border-r-[1px] px-3 border-black'>AELI</h1>
            <h1>Accounts</h1>
        </Link>
        <div className='h-screen flex justify-center items-center'>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-6 py-16 rounded-xl bg-white px-20'>
            <h1 className='font-bold text-xl'>Masuk dengan email</h1>
            {
                error && <p className='text-red-500 text-center max-w-[300px]'>{error}</p>
            }
            <Input 
            label='Email'
            type='email' name='email' placeholder='Masukkan email aeli anda'></Input>
            <Input
            label='Password'
            type='password' name='password' placeholder='Masukkan Password'></Input>
            <button type='submit' className='bg-black rounded-xl p-2 px-3 hover:bg-blue-300 text-white w-full'>{
                loading ? "Loading..." : "Sign In"
            }</button>
            <p>Belum punya akun? <Link className='text-blue-500 hover:underline' href="/signup">Daftar di sini</Link></p>
        </form>

        </div>
        
    </div>
  )
}

export default Signin