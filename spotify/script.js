export function Get() {
        const got = require('got');

got("https://www.google.com/index.html").then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});

}
