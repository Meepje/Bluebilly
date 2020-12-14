var btn = document.getElementById("btn").addEventListener("click", getPost);
var div= document.getElementById("cardDiv");

function getPost() {
    document.getElementById("myPlayerDiv").innerHTML = "";
    var numberEntered = document.getElementById("id").value; //Read input

    fetch ('data.json')
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        con=numberEntered;

            div.innerHTML = `
                <p class="card-video">${data[con].videoId}</p>
            `        

            var myPlayer = new bluebillywig.Player( "http://demo.bbvms.com/p/default/c/" + data[con].videoId + ".json", {
                    target : document.getElementById("myPlayerDiv"),
                    autoPlay : "false"
            });
    })

    .catch((error)=>{
        console.log(error);
    })
}

// Embed the player in the element "myPlayerDiv". Other playout settings (like width, height, autoPlay) can also be overruled by including them in the object passed as a second parameter:



