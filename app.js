document.querySelector('#search').addEventListener('click', function (e) {
    let word = document.querySelector('#input').value;


    document.querySelector('#top').innerHTML = word;

    fetch('love.json')
    .then(function (res){
        return res.json()
    })
    .then(function (data){
        data.forEach(item => {
            document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125"><b><h4>${item.meta.id}</h4></b></p>`
    
            document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125"><b>${item.fl}</b></p>`



            console.log(item.meta.id)
            console.log(item.fl)
            item.shortdef.forEach(meanings => {
                document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125">${meanings}</p>`

                console.log(meanings);
            });
            document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125"><b><h5>Synonymns</h5></b></p>`

            let synos = []
            item.meta.syns.forEach(test => {
                test.forEach(syno => {
                    // document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125">${syno}</p>`
                    synos.push(` ${syno}`);
                    console.log(syno)
                })
                console.log(synos.toString())


            })
            document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125">${synos}</p>`

            document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125"><b><h5>Antonymns</h5></b></p>`
            let antos = '';
            item.meta.ants.forEach(test => {
                test.forEach(anto => {
                    // document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125">${anto}</p>`
                    antos += ` ${anto}`
                    console.log(anto)
                })
            })
            document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125">${antos}</p>`

            // item.def[0].sseq.forEach(terms => {
            //     terms[0][1].syn_list[0].forEach(synonyms => {
            //         console.log(synonyms.wd)
            //     });
            // });
            document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125">--------------------------------------</p>`

            console.log('--------------------------------------')
    
        });
    })
    .catch ( function (err){
        console.log(err);
    })
    e.preventDefault();
});











// API KEY Yandex
// dict.1.1.20190820T061709Z.60929ab24ced1a28.6203fb52ac5eeb2ea6f4b797250ca386b468fcab

// Merriam Webster
//  e26e2dba-1730-4b93-ba44-dd9b6b49e2ee

// https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20190820T061709Z.60929ab24ced1a28.6203fb52ac5eeb2ea6f4b797250ca386b468fcab&lang=en-en&text=slaughter

