export function renderTeam(team) {
    const teamCardEl = document.createElement('div');
    teamCardEl.classList.add('teamCard');

    const teamImageEl = document.createElement('img');
    teamImageEl.src = `assets/${team.shortName}.png`;
    teamImageEl.alt = team.shortName;
    teamImageEl.classList.add('teamImage');

    const teamNameEl = document.createElement('h2');
    teamNameEl.textContent = team.name;

    const teamFoundedEl = document.createElement('h3');
    teamFoundedEl.textContent = team.foundedYear;

    const teamNicknameEl = document.createElement('h3');
    teamNicknameEl.textContent = team.nickName;

    teamCardEl.append(teamImageEl, teamNameEl, teamFoundedEl, teamNicknameEl);
    
    return teamCardEl;
}


export function renderStandings(standing) {
    const rowEl = document.createElement('tr');

    const dummyColumnEl = document.createElement('td');

    const teamNameEl = document.createElement('td');
    teamNameEl.textContent = standing.name;

    const gamesPlayedEl = document.createElement('td');
    gamesPlayedEl.textContent = standing.MP;

    const winsEl = document.createElement('td');
    winsEl.textContent = standing.W;
    
    const drawsEl = document.createElement('td');
    drawsEl.textContent = standing.D;

    const lossesEl = document.createElement('td');
    lossesEl.textContent = standing.L;

    const goalsForEl = document.createElement('td');
    goalsForEl.textContent = standing.GF;

    const goalsAgainstEl = document.createElement('td');
    goalsAgainstEl.textContent = standing.GA;

    const goalDifferenctialEl = document.createElement('td');
    goalDifferenctialEl.textContent = standing.GF - standing.GA;

    const pointsEl = document.createElement('td');
    pointsEl.textContent = standing.Pts;

    const lastFive = document.createElement('td');
    lastFive.classList.add('lastFive');

    for (let result in standing.lastFive) {
        const resultEl = document.createElement('p');

        if (standing.lastFive[result] === 'w') {
            resultEl.innerHTML = '&#9989;';
        } else if (standing.lastFive[result] === 'l') {
            resultEl.innerHTML = '&#128683;';
        } else if (standing.lastFive[result] === 't') {
            resultEl.innerHTML = '&#9898;';
        } else {
            resultEl.textContent = 'something is wrong in the array';
        }

        lastFive.append(resultEl);
    }

    rowEl.append(dummyColumnEl, teamNameEl, gamesPlayedEl, winsEl, drawsEl, lossesEl, goalsForEl, goalsAgainstEl, goalDifferenctialEl, pointsEl, lastFive);

    return rowEl;
}


export function renderMatches(match) {
    const matchCard = document.createElement('div');
    matchCard.classList.add('matchCard');

    const matchCardTeamSection = document.createElement('div');
    matchCardTeamSection.classList.add('matchCardTeamSection');

    const team1Name = document.createElement('p');
    team1Name.textContent = match.homeTeam;

    const team2Name = document.createElement('p');
    team2Name.textContent = match.awayTeam;

    matchCardTeamSection.append(team1Name, team2Name);

    const dateEl = document.createElement('p');
    dateEl.textContent = match.result ? match.result : match.date;
    const locationEl = document.createElement('p');
    locationEl.textContent = match.Location;

    matchCard.append(matchCardTeamSection, dateEl, locationEl);

    return matchCard;
}