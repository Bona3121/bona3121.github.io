function showTeambolas(data) {
  var teambolasHTML = "";
  data.teams.forEach(function (teambola) {
    teambolasHTML += `
          <div class="col s12 m6">
                <div class="card">
                  <a href="./teambola.html?id=${teambola.id}">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img src="${teambola.crestUrl.replace(/^http:\/\//i, 'https://')}" />
                    </div>
                  </a>
                  <div class="card-content">
                    <span class="card-title truncate">${teambola.name}</span>
                    <p>${teambola.founded}</p>
                  </div>
                </div>
          </div>	  
              `;
  });
  document.getElementById("teambolas").innerHTML = teambolasHTML;
}

function showAreas(data) {
  var areasHTML = "";
  data.areas.forEach(function (areas) {
    areasHTML += `
          <div class="col s12 m6">
                <div class="card">               
                  <div class="card-content">
                    <span class="card-title truncate">${areas.name}</span>                  
					<p>${areas.parentArea}</p>
					<p>${areas.parentAreaId}</p>
                  </div>
                </div>
          </div>	  
              `;
  });
  document.getElementById("areas").innerHTML = areasHTML;
}

function showStanding(bola) {
  let standingHTML = "";
  bola.standings[0].table.forEach(standing => {
    standingHTML += `
          <tr>
          <td>
              <img src="${standing.team.crestUrl.replace(/^http:\/\//i, 'https://')}" style="height:50px; width:50px;">
          </td>
          <td class="hide-on-small-only">${standing.team.name}</td>
          <td>${standing.playedGames}</td>
          <td>${standing.won}</td>
          <td>${standing.draw}</td>
          <td>${standing.lost}</td>
          <td>${standing.goalsFor}</td>
          <td>${standing.goalsAgainst}</td>
          <td>${standing.goalDifference}</td>
          </tr>
          `;
  });
  document.getElementById("standing").innerHTML = standingHTML;
}

function showTeamById(data) {
  var teambolaHTML = `
        <div class="col s12 m12">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img src="${data.crestUrl.replace(/^http:\/\//i, 'https://')}" />
                </div>
                <div class="card-content">
                  <span class="card-title">${data.name}</span>
                  <p>${data.founded} </p>
                </div>
              </div>
        </div>
            `;
  document.getElementById("body-content").innerHTML = teambolaHTML;
}

function showSavedTeam(teambolas) {
  var teambolasHTML = "";
  teambolas.forEach(function (teambola) {
    teambolasHTML += `
	            <div class="col s12 m6">
                  <div class="card">
                    <a href="./teambola.html?id=${teambola.id}&saved=true">
                      <div class="card-image waves-effect waves-block waves-light">
                        <img src="${teambola.crestUrl.replace(/^http:\/\//i, 'https://')}" />
                      </div>
                    </a>
                    <div class="card-content">
                    <a class="btn-floating halfway-fab waves-effect waves-light red" id="deleted" onclick="deletedTeam(${teambola.id})"><i class="material-icons">delete</i></a>
                      <span class="card-title truncate">${teambola.name
      }</span>
                      <p>${teambola.founded}</p>
                    </div>
                  </div>
				 </div> 
                `;
  })
  if(data.length == 0) html += '<h6 class="center-align">Tidak ada team favorite!</6>'

    html += "</div>"
  document.getElementById("saved").innerHTML = teambolasHTML;
}
