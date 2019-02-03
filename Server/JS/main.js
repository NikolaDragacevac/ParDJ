function  createRoom(){
    document.getElementById("choose-option").style.display = "none";
    document.getElementById("create-room").style.display = "block";
    document.getElementById("join-room").style.display = "none";
}

function  joinRoom(){
    document.getElementById("choose-option").style.display = "none";
    document.getElementById("create-room").style.display = "none";
    document.getElementById("join-room").style.display = "block";
}

function doLogin(){
    if(checkID() == true)
    {
        document.getElementById("lblError").style.display = "none";
        document.getElementById("lblSuccess").style.display = "block";
    }
    else 
    {
        document.getElementById("lblError").style.display = "block";
        document.getElementById("lblSuccess").style.display = "none";
    }
}

function checkID(){
    return servers.findIndex(testing) >= 0;
}

function testing(value){
    return "::ffff:" + document.getElementById("serverID").value == value;
}

function clientJoinRoom(){
    if(clientCheckID() == true)
    {
        document.getElementById("lblClientError").style.display = "none";
    }
    else 
    {
        document.getElementById("lblClientError").style.display = "block";
    }
}

function clientCheckID(){
    return servers.findIndex(clientTesting) >= 0;
}

function clientTesting(value){
    return "::ffff:" + document.getElementById("clientServerID").value == value;
}