document.querySelector('#search').addEventListener('click', function (e) {
    let word = document.querySelector('#input').value;


    document.querySelector('#top').innerHTML = word;

    fetch('kill.json')
    .then(function (res){
        return res.json()
    })
    .then(function (data){
        data.forEach(item => {
            document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"><h4>${item.meta.id}</h4></p>`
    
            document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"><b>${item.fl}</b></p>`



            console.log(item.meta.id)
            console.log(item.fl)
            item.shortdef.forEach(meanings => {
                document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">${meanings}</p>`

                console.log(meanings);
            });
            document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"><b><h4>Synonymns</h4></b></p>`

            item.meta.syns.forEach(test => {
                test.forEach(syno => {
                    document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">${syno}</p>`

                    console.log(syno)
                })


            })
            document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"><b><h4>Antonymns</h4></b</p>`
            item.meta.ants.forEach(test => {
                test.forEach(anto => {
                    document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">${anto}</p>`

                    console.log(anto)
                })
            })
            // item.def[0].sseq.forEach(terms => {
            //     terms[0][1].syn_list[0].forEach(synonyms => {
            //         console.log(synonyms.wd)
            //     });
            // });
            document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">--------------------------------------</p>`

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

