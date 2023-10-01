import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './SelectedUsers.css'

const SelectedUsers = () => {

    const selectedTeamData = useSelector(state => state.team.selectedTeam)
    console.log(selectedTeamData)

    return (
        <div className='selected-main'>
            <div className='selected-content'>
                <h2>Selected Team</h2>
                <Link to={'/'} type="button" className="btn btn-danger">Back To users</Link>
            </div>
            <table className="table" style={{ marginTop: '2rem' }}>
                <thead>
                    <tr>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Domain</th>
                        <th scope="col">Avaibility</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {selectedTeamData.map((data) => (
                        <tr key={data.id}>
                            <td>{data.first_name}</td>
                            <td>{data.last_name}</td>
                            <td>{data.gender}</td>
                            <td>{data.domain}</td>
                            <td>{data.available && 'Available'}</td>
                        </tr>
                    ))}
                </tbody>
            </table >
        </div>
    )
}

export default SelectedUsers