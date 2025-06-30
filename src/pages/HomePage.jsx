import { Link } from 'react-router-dom';

function HomePage(){
    return (
        <div className="flex flex-col  bg-slate-50">
            <div className="flex flex-col  gap-10 items-center justify-center min-h-screen">
            <h1 className="text-4xl font-semibold ">StoFoTech</h1>
            <ul className="text-xl text-center flex flex-col gap-4 lg:flex-row">
                <li className="group ">
                    <Link to="/student" className="block border border-slate-400 px-10 py-1 rounded-lg group-hover:shadow-lg">
                      Students
                    </Link>
                </li>
                <li className="group ">
                    <Link to="/faculty" className="block border border-slate-400 px-10 py-1 rounded-lg group-hover:shadow-lg">
                      Faculty
                    </Link>
                </li>
                <li className="group ">
                    <Link to="/office" className="block border border-slate-400 px-10 py-1 rounded-lg group-hover:shadow-lg">
                      Office
                    </Link>
                </li>

            </ul>
            </div>
            <footer className="flex flex-col items-center justify-center border-t border-slate-300 mx-10 p-2">
                <p className="font-light text-slate-400">© 2025 StuFoTech. All rights reserved</p>
            </footer>
        </div>
            
    )
}

export default HomePage;