// TODO: add code here
window.addEventListener("load", () => {
    const fetchPromise = fetch('https://handlers.education.launchcode.org/static/astronauts.json');
    fetchPromise.then(function(response){
        const jsonPromise = response.json();
           jsonPromise.then(function(json) {
        const astlist = document.getElementById("container");
        for(let i=0;i<jdon.length;i++){
            astlist.innerHTML+=`
            <div class"astronauts">
              <div class = "bio">
                <h3>${json[i].firstName} ${json[i].lateName}</h3>
                <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li>active: ${json[i].active}</li>
                    <li>HSkills: ${json[i].skills}</li>
                </ul>
                </div>
                <img class ='avatar' src = ${json[i].picture}>
            </div>`;    
        }
     })
})
})