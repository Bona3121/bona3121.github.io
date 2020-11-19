var dbPromise = idb.open("cotephio", 1, function (upgradeDb) {
  var teamsObjectStore = upgradeDb.createObjectStore("teams", {
    keyPath: "id"
  });
  teamsObjectStore.createIndex("name", "name", {
    unique: false
  });
});

function saveForLater(team) {
  dbPromise
    .then(function (db) {
      var tx = db.transaction("teams", "readwrite");
      var store = tx.objectStore("teams");
      console.log(team);
      store.put(team);
      return tx.complete;
    })
    .then(function () {
      M.toast({ html: `${team.name} sudah berhasil di simpan`, classes: `rounded` })
      console.log("Tim berhasil di simpan.");
    });
}

function getAll() {
  return new Promise(function (resolve, reject) {
    dbPromise
      .then(function (db) {
        var tx = db.transaction("teams", "readonly");
        var store = tx.objectStore("teams");
        return store.getAll();
      })
      .then(function (teams) {
        resolve(teams);
      });
  });
}


function getById(id) {
  return new Promise(function (resolve, reject) {
    dbPromise
      .then(function (db) {
        var tx = db.transaction("teams", "readonly");
        var store = tx.objectStore("teams");
        return store.get(parseInt(id));
      })
      .then(function (teambola) {
        resolve(teambola);
      });
  });
}

function deletedTeam(team) {
  dbPromise
    .then(function (db) {
      var tx = db.transaction("teams", "readwrite");
      var store = tx.objectStore("teams");
      console.log(team);
      store.delete(team);
      return tx.complete;
    })
    .then(function () {
      M.toast({ html: `tim sudah berhasil di hapus`, classes: `rounded` })
    });

  getSavedTeambolas();
}


