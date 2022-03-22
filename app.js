// import functions and grab DOM elements

import { getTeams, getStandings, getMatches, getPlayers } from './fetch-utils.js';
import { renderTeam, renderStandings, renderMatches, renderPlayers } from './render-utils.js';

const teamsContainer = document.querySelector('#teams');
const standingsTable = document.querySelector('#standings');
const matchesContainer = document.querySelector('#matches');
const playersContainer = document.querySelector('#players');

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

window.addEventListener('load', () => {
    displayTeams();
    displayStandings();
    displayMatches();
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

    for (let row of standings) {
        const rowEl = renderStandings(row);

        standingsTable.append(rowEl);
    }
}

async function displayMatches() {

    const matches = await getMatches();

    for (let match of matches) {
        const matchEl = renderMatches(match);

        matchesContainer.append(matchEl);
    }
}