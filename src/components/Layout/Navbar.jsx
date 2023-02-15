import { Link } from 'react-router-dom';


function Navbar({title = 'Git Search'}){


    return (
      <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
        <div className="container mx-auto">
          <div className="flex-none px-2 mx2">
            <div className="ineline pr-2 text-3xl">Navbar</div>
            <Link to="/" className="text-lg font-bold align-middle">
              {title}
            </Link>
          </div>
          
          <div className="flex-1 px-2 mx2">
            <div className="flex-justify-end">
                <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>Home</Link>
                <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>about</Link>
            </div>
          </div>
        </div>
      </nav>
    );
}



export default Navbar;