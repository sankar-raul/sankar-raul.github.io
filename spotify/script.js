export function Get() {
        const got = require('got');

got("https://www.google.com/index.html").then(result => {
    alert(result);
}).catch(err => {
    alert(err);
});

}
