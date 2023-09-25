import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="flex flex-col bg-base-100 border border-gray-300 p-5 rounded-xl space-y-2">
            <div className="flex-1 w-1/5 flex items-center">
                <img className="w-full" src={logo} alt="Company-Logo" />
            </div>
            <div className='space-y-2'>
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="border py-1 px-2 rounded font-bold mr-1">{remote_or_onsite}</button>
                    <button className="border text-[linear-gradient(90deg, #7E90FE 0%, #9873FF 100%))] py-1 px-2 rounded font-bold">{job_type}</button>
                </div>
                <div>
                    <span></span>
                </div>
                <Link to={`/${id}`}>
                    <button className="btn mt-2">View Details</button>
                </Link>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired
}

export default Job;