var url_string = 'https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';
var proxy = 'https://cors-anywhere.herokuapp.com/'


fetch(proxy + url_string)
.then(res=>res.json())
.then(data=>console.log(data))