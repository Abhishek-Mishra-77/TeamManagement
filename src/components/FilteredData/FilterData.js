import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { teamStoreData } from '../../store/teamSlice';
import { Link } from 'react-router-dom';


const FilterData = () => {

    const [domain, setDomain] = useState('');
    const [gender, setGender] = useState('');
    const [available, setAvaibility] = useState('');
    const teamData = useSelector(state => state.team.teamData);
    const dispatch = useDispatch();

    const onFilterHandler = (e) => {
        e.preventDefault();
        const filtered = teamData.filter(user => user.domain === domain && user.gender === gender && user.available === available)
        console.log(filtered)
        dispatch(teamStoreData(filtered))
    }



    return (
        <form className="row g-3" onSubmit={onFilterHandler}>
            <div className="col-md-4">
                <label htmlFor="validationDefault01" className="form-label">Domain</label>
                <input
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder='Enter user domain..'
                    className="form-control" id="validationDefault01"
                    required />
            </div>
            <div className="col-md-3">
                <label htmlFor="validationServer04" className="form-label">Gender </label>
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="form-select"
                    id="validationServer04"
                    aria-describedby="validationServer04Feedback"
                    required>
                    <option >Select..</option>
                    <option value='Male' >Male</option>
                    <option value='Female'>Female</option>
                    <option value='others'>others</option>
                </select>
            </div>
            <div className="col-md-3">
                <label htmlFor="validationServer04" className="form-label">Avaibility </label>
                <select
                    value={available}
                    onChange={(e) => setAvaibility(e.target.value === 'true')}
                    className="form-select"
                    id="validationServer04"
                    aria-describedby="validationServer04Feedback"
                    required>
                    <option >Select..</option>
                    <option value='true'>Available</option>
                    <option value='false'>Not Available</option>
                </select>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Find users</button>
                <Link to={'/selected'} className="btn btn-primary" style={{ marginLeft: '1rem' }} type="button">See the team </Link>
            </div>

        </form>
    )
}

export default FilterData