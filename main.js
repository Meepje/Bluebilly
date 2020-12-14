var btn = document.getElementById("btn").addEventListener("click", getPost);
var con=0;
var div= document.getElementById("cardDiv");

function getPost() {
    fetch ('data.json')
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        for (let index = 0; index < 1; index++) {
            div.innerHTML = `
            <div class="card col-3 m-1 mx-auto">
                <div class="card-body">
                    <p> class="card-id">${data[con].id}<p>
                    <p class="card-video">${data[con].videoId}</p>
                </div>
            </div>
            `        
            con=con+1;
        }
    })

    .catch((error)=>{
        console.log(error);
    })
}

// Embed the player in the element "myPlayerDiv". Other playout settings (like width, height, autoPlay) can also be overruled by including them in the object passed as a second parameter:
var myPlayer = new bluebillywig.Player( "http://demo.bbvms.com/p/default/c/3836075.json", {
        target : document.getElementById("myPlayerDiv"),
        autoPlay : "false"
});


