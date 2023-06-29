export default function Nav(){
  return (<div className="navbar bg-base-100">
  
  <div className="flex-1">
    <a className="btn btn-ghost navbar-center normal-case text-xl">JobSure</a>
  </div>
  <div className="flex-none">
    <button className="btn btn-link">
      Login
      </button>
      <div className="divider"></div>
      <button className="btn btn-outline btn-primary">
      Sign Up
      </button>

  </div>
</div>)
}