// import functions and grab DOM elements

import { getTeams } from './fetch-utils.js';
import { renderTeam } from './render-utils.js';

const teamsContainer = document.querySelector('#teams');
const standingsContainer = document.querySelector('#standings');
const matchesContainer = document.querySelector('#matches');

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

window.addEventListener('load', displayTeams);


async function displayTeams() {

    const teamList = await getTeams();

    console.log(teamList);

    for (let team of teamList) {
        const teamEl = renderTeam(team);

        teamsContainer.append(teamEl);
    }
}
