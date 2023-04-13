const url = require('url');
const monUrl = new URL('https://www.monsite.com:8000/pages/index.html?id=alain&pwd=1234');

console.log('href=', monUrl.href);
console.log('url.toString()=', monUrl.toString());
console.log('host=', monUrl.host);
console.log('hostname=', monUrl.hostname);
console.log('pathname=', monUrl.pathname);
console.log('search=', monUrl.search);
console.log('searchParams=', monUrl.searchParams);
monUrl.searchParams.append('abc', '123');
console.log('searchParams=', monUrl.searchParams);
monUrl.searchParams.forEach((valeur, nom) => console.log(`nom=${nom}: valeur=${valeur}`));