import React, { useState } from 'react';
import FilterData from '../FilteredData/FilterData';
import { useSelector, useDispatch } from 'react-redux';
import { selectedTeamUsers } from '../../store/teamSlice';
import './TeamDetails.css';


const TeamDetails = () => {

    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const data = useSelector(state => state.team.teamData)
    const dispatch = useDispatch();

    const itemPerPage = 10;

    const filterData = data.filter(user => user.first_name.toLocaleLowerCase().includes(query))

    const rows = filterData.slice(currentPage * itemPerPage, (currentPage + 1) * itemPerPage);
    const handlerPageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const numberOfPage = Math.ceil(data.length / itemPerPage);
    const pageIndex = Array.from({ length: numberOfPage }, (_, idx) => idx + 1);


    const userSelectHandler = (selectedData) => {
        dispatch(selectedTeamUsers(selectedData))
    }



    return (
        <div className='teamDetail-main'>
            <div className='teamDetail-content'>
                <form className="d-flex mb-4 search" role="search">
                    <input
                        onChange={(e) => setQuery(e.target.value)}
                        className="form-control"
                        type="search"
                        placeholder="Search here based on the name......"
                        aria-label="Search" />
                </form>
                <FilterData data={data} />
                <table className="table" style={{ marginTop: '2rem' }}>
                    <thead>
                        <tr>
                            <th scope="col">S. No.</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Domain</th>
                            <th scope="col">Avaibility</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {rows.map((ele) => (
                            <tr key={ele.id}>
                                <td>
                                    <small>{ele.id}</small>
                                    <img src={ele.avatar} alt='logo' />
                                </td>
                                <td>{ele.first_name}</td>
                                <td>{ele.last_name}</td>
                                <td>{ele.gender}</td>
                                <td>{ele.domain}</td>
                                <td>{ele.available ? 'YES' : 'NO'}</td>
                                <td>{ele.available ? <button onClick={() => userSelectHandler(ele)} type="button" className="btn btn-success">Add to Team</button> : ''}</td>
                            </tr>
                        ))}
                    </tbody>
                </table >
                <button disabled={currentPage < 1} onClick={() => handlerPageChange(currentPage - 1)}>&lt;</button>
                {pageIndex.slice(Math.max(0, currentPage - 2), Math.min(numberOfPage, currentPage + 3))
                    .map((page) => (
                        <button key={page} onClick={() => handlerPageChange(page - 1)} className={page === currentPage + 1 ? 'active' : ''}>{page}</button>
                    ))}

                <button disabled={currentPage > numberOfPage} onClick={() => handlerPageChange(currentPage + 1)}>&gt;</button>
            </div >
        </div>
    )
}

export default TeamDetails