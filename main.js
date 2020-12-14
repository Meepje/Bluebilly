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
                <p class="card-video">${data[0][numberEntered]}</p>
            `        

            var myPlayer = new bluebillywig.Player( "http://demo.bbvms.com/p/default/c/" + data[0][numberEntered] + ".json", {
                    target : document.getElementById("myPlayerDiv"),
                    autoPlay : "false"
            });
    })

    .catch((error)=>{
        console.log(error);
    })
}



