
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=' text-center'>
            {/* <img  src={pnf} alt="" /> */}
            <Link to='/'><button className="btn btn-outline btn-secondary font-bold lg:text-xl px-8 mt-4 mb-4">Opps! Go Home </button></Link>
        </div>
    );
};

export default ErrorPage;