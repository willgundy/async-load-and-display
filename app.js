// import functions and grab DOM elements

import { getTeams, getStandings } from './fetch-utils.js';
import { renderTeam, renderStandings } from './render-utils.js';

const teamsContainer = document.querySelector('#teams');
const standingsTable = document.querySelector('#standings');
const matchesContainer = document.querySelector('#matches');

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

window.addEventListener('load', () => {
    displayTeams();
    displayStandings();
});


async function displayTeams() {

    const teamList = await getTeams();

    for (let team of teamList) {
        const teamEl = renderTeam(team);

        teamsContainer.append(teamEl);
    }
}



async function displayStandings() {

    const standings = await getStandings();

    console.log(standings);

    for (let row of standings) {
        const rowEl = renderStandings(row);

        standingsTable.append(rowEl);
    }
}