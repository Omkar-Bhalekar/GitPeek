document.querySelector('#button').addEventListener('click', function () {

    let username = document.querySelector('#myusername').value;
    let requestURL = `https://api.github.com/users/${username}`;
    console.log("username = " + username)

    const xhr = new XMLHttpRequest();

    xhr.open('GET', requestURL);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText)
            
            document.querySelector('#container').innerHTML =
            `<div id="card">
                <div id="image"></div>
                <div id="followers"></div>
            </div>`

        document.querySelector('#image').innerHTML = `<img src="${data.avatar_url}"></img>`

        document.querySelector('#followers').innerHTML = `<p>${data.name}</p><p> Followers : ${data.followers}</p><p>Total Repo Count : ${data.public_repos}</p>`;
        }
        
        
    }

    xhr.send();
})

