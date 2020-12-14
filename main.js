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
            <div class="card col-3 m-1 mx-auto">
                <div class="card-body">
                    <p> class="card-id">${data[con].id}<p>
                    <p class="card-video">${data[con].videoId}</p>
                </div>
            </div>
            `        
            con=con+1;

            var myPlayer = new bluebillywig.Player( "http://demo.bbvms.com/p/default/c/" + numberEntered + ".json", {
                    target : document.getElementById("myPlayerDiv"),
                    autoPlay : "false"
            });
    })

    .catch((error)=>{
        console.log(error);
    })
}

// Embed the player in the element "myPlayerDiv". Other playout settings (like width, height, autoPlay) can also be overruled by including them in the object passed as a second parameter:



