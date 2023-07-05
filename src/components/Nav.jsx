'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";

export default function Nav(){
  const { data: session, status } = useSession()
  console.log(session);
  function AuthCustom(){
if(status==='authenticated'){

  return (
  <>
 <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <Image  src={session.user.image} height={40} width={40} alt={'user image'}/>
 
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><div onClick={()=>(signOut())} >Logout</div></li>
      </ul>
    </div>

 
  </>
  
  )
}
else {
 
 return ( <button onClick={()=>(signIn('google'))}  className="btn btn-outline btn-primary">
      Sign In
      </button>)
}}

  return (<div className="navbar bg-base-100">
  
  <div className="flex-1">
    <a className="btn btn-ghost navbar-center normal-case text-xl">JobSure</a>
  </div>
  <div className="flex-none">
    {/* <button className="btn btn-link">
      Login
      </button> */}
      <div className="divider"></div>
      
<AuthCustom/>
  </div>
</div>)
}