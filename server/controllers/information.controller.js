const news = [];

exports.getNews = function(req, res) {
    let token = renewSession();
    const host = /* 'http://localhost:3000' */'http://191.95.146.241'
    const api_key = '3dd4e8b285864742ad68c62696ff7d12';
    const endPoint = 'top-headlines';
    const category = 'health';
    const sources = 'techcrunch';
    const sorted = 'popularity';
    const keyWord = 'health';
    const lang = 'es';
    const date = '2021-11-24';
    const url = `https://newsapi.org/v2/top-headlines`; /* `https://newsapi.org/v2/${endPoint}?sources?language=${lang}&category=${keyWord}&from=${date}&sortBy=${sorted}&apiKey=${api_key}`; */
    req = new Request(url);
    fetch(
        req, {
            method: 'GET',
            headers: {
                Origin: host,
                'Access-Control-Allow-Origin': '*'
            },
            params: {
                sources: `${sources}`,
                category: `${category}`,
                keyWord: `${keyWord}`,
                language: `${lang}`,
                date: `${date}`,
                sorted: `${sorted}`,
                apiKey: `${api_key}`
            }
        })
        .then(function(res) {
            console.log(res.json());
            res.json();
        })
    // return axios.get(`${url}`, {
    //     mode: 'no-cors',
    //     headers: {
    //         'Authorization': `Bearer ${api_key}`,
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Methods': "GET, OPTIONS, POST, PUT",
    //         // 'Origin': `${host}`,
            
    //     },
    // });
    /* const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data) */
    /* const news = data.map(img => {
        source: img.source.name,
        title:  img.title,
    }) */
}
