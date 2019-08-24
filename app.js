document.querySelector("#search").addEventListener("click", function(e) {
  let word = document.querySelector("#input").value;

  document.querySelector("#top").innerHTML = word;
  const key = "e26e2dba-1730-4b93-ba44-dd9b6b49e2ee";

  let url = `http://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word.toLowerCase()}?key=${key}`;

  fetch(url)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      data.forEach(item => {
        document.querySelector(
          "#meaning"
        ).innerHTML += `<p class="media-body pb-3 mb-0 small lh-125"><b><h4>${
          item.meta.id
        }</h4></b></p>`;

        document.querySelector(
          "#meaning"
        ).innerHTML += `<p class="media-body pb-3 mb-0 small lh-125"><b>${
          item.fl
        }</b></p>`;
        item.shortdef.forEach(meanings => {
          document.querySelector(
            "#meaning"
          ).innerHTML += `<p class="media-body pb-3 mb-0 small lh-125"><ul><li>${meanings}</li></ul></p>`;
        });
        document.querySelector(
          "#meaning"
        ).innerHTML += `<p class="media-body pb-3 mb-0 small lh-125"><b><h5>Synonymns</h5></b></p>`;

        let synos = [];
        item.meta.syns.forEach(test => {
          test.forEach(syno => {
            synos.push(` ${syno}`);
          });
        });
        synos[synos.length - 1] = `${synos[synos.length - 1]}.`;
        document.querySelector(
          "#meaning"
        ).innerHTML += `<p class="media-body pb-3 mb-0 small lh-125">${synos}</p>`;

        document.querySelector(
          "#meaning"
        ).innerHTML += `<p class="media-body pb-3 mb-0 small lh-125"><b><h5>Antonymns</h5></b></p>`;
        let antos = [];
        item.meta.ants.forEach(test => {
          test.forEach(anto => {
            antos.push(` ${anto}`);
          });
        });
        antos[antos.length - 1] = `${antos[antos.length - 1]}.`;
        document.querySelector(
          "#meaning"
        ).innerHTML += `<p class="media-body pb-3 mb-0 small lh-125">${antos}</p>`;
        document.querySelector(
          "#meaning"
        ).innerHTML += `<p class="media-body pb-3 mb-0 small lh-125"><hr></p>`;
      });
    })
    .catch(function(err) {
      console.log(err);
    });
  e.preventDefault();
});
