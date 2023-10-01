import { createSlice } from '@reduxjs/toolkit';
import data from '../data.json';

// getting data From localStorage

const storedTeamData = () => {
    const existingData = localStorage.getItem('teamData');
    return existingData ? JSON.parse(localStorage.getItem('teamData')) : [];
}


// Adding data From localStorage

const teamDataStoreInlocal = (data) => {
    let existingTeamData = localStorage.getItem('teamData')
    existingTeamData = existingTeamData ? JSON.parse((existingTeamData)) : [];

    existingTeamData.push(data);
    const updatedData = JSON.stringify(existingTeamData);
    localStorage.setItem('teamData', updatedData)
}



const teamSlice = createSlice({
    name: 'team',
    initialState: {
        teamData: data,
        selectedTeam: storedTeamData()
    },
    reducers: {
        teamStoreData(state, action) {
            state.teamData = action.payload
        },
        selectedTeamUsers(state, action) {
            const newUserData = action.payload
            const existingData = state.selectedTeam.find((data) => data.domain === newUserData.domain);
            if (!existingData) {
                state.selectedTeam.push({
                    id: newUserData.id,
                    first_name: newUserData.first_name,
                    last_name: newUserData.last_name,
                    gender: newUserData.gender,
                    domain: newUserData.domain,
                    available: newUserData.available
                })
                teamDataStoreInlocal(action.payload)
            }
        }
    }
})

export const { teamStoreData, selectedTeamUsers } = teamSlice.actions;


export default teamSlice.reducer;