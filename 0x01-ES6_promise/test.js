

// let  XMLHttpRequest = require('xhr2');
// let myRequest = new XMLHttpRequest();

// myRequest.onreadystatechange = function () {

//     if (this.readyState === 4 && this.status === 200)   {
//         console.log(JSON.parse(this.responseText))
//     }

// };

// myRequest.open('GET', 'https://api.github.com/users/youssefelzedy/repos', true);
// myRequest.send();   


const getfirstRepos = (api_url) => {

    return new Promise((resolve, reject) => {
        let  XMLHttpRequest = require('xhr2');
        let myRequest = new XMLHttpRequest();

        myRequest.onload = function () {

            if (this.readyState === 4 && this.status === 200)   {
                resolve(JSON.parse(this.responseText)[0].name)
            }
            else {
                reject(Error(this.statusText))
            }

        };

        myRequest.open('GET', api_url, true);
        myRequest.send();
    })
}


getfirstRepos('https://api.github.com/users/youssefelzedy/repos').then(
    (result) => console.log(result),
    (error) => console.log(error)
);