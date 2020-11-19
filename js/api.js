const base_url = `https://api.football-data.org/v2/`
const endPointTeams = `${base_url}competitions/2015/teams`
const urlStanding = `${base_url}competitions/2015/standings`
const endPointAreas = `${base_url}areas`
const fetchData = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      'X-Auth-Token': `b8698ba212e841e89765cbad838f422a`
    }
  })
}

function status(response) {
  if (response.status !== 200) {
    console.log("Error : " + response.status);
    return Promise.reject(new Error(response.statusText));
  } else {
    return Promise.resolve(response);
  }
}

function json(response) {
  return response.json();
}

function error(error) {
  console.log("Error : " + error);
}

// Blok kode untuk melakukan request data json
function getteambolas() {
  if ("caches" in window) {
    caches.match(endPointTeams).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          showTeambolas(data);
        });
      }
    });
  }
  fetchData(endPointTeams)
    .then(status)
    .then(json)
    .then(function (data) {
      showTeambolas(data);
    })
    .catch(error);
}

function getAreas() {
  if ("caches" in window) {
    caches.match(endPointAreas).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          showAreas(data);
        });
      }
    });
  }
  fetchData(endPointAreas)
    .then(status)
    .then(json)
    .then(function (data) {
      showAreas(data);
    })
    .catch(error);
}

function getStandings() {
  if ("caches" in window) {
    caches.match(urlStanding).then(response => {
      if (response) {
        response.json().then(data => {
          showStanding(data);
        });
      }
    });
  }

  fetchData(urlStanding)
    .then(status)
    .then(json)
    .then(data => {
      showStanding(data);
    })
    .catch(error);
}

function getTeamBolaById() {
  return new Promise(function (resolve, reject) {
    var urlParams = new URLSearchParams(window.location.search);
    var idParam = urlParams.get("id");

    if ("caches" in window) {
      caches.match(base_url + "teams/" + idParam).then(function (response) {
        if (response) {
          response.json().then(function (data) {
            showTeamById(data);
            resolve(data);
          });
        }
      });
    }
    fetchData(base_url + "teams/" + idParam)
      .then(status)
      .then(json)
      .then(function (data) {
        showTeamById(data);
        resolve(data);
      });
  });
}

function getSavedTeambolaById(data) {
  var urlParams = new URLSearchParams(window.location.search);
  var idParam = urlParams.get("id");
  getById.then(function (data) {
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
  })
}

function getSavedTeambolas() {
  getAll().then(function (teambolas) {
    showSavedTeam(teambolas);
  });
}


