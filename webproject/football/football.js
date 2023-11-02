"use strict";

window.onload = handleOnload;

function handleOnload() {
    const submitButtonEl = document.getElementById("submit");

    submitButtonEl.onclick = handleOnClick;
}

function handleOnClick(){
    console.log("submit button clicked!")
    let teamsInputEl = document.getElementById("teams");
    const miamiInput = document.getElementById("miami");
    const bucsInput = document.getElementById("bucs");
    const gatorsInput = document.getElementById("gators");
    const jaguarsInput = document.getElementById("jaguars");
    const textInputEl = document.getElementById("placeholder");

    const selectedTeamsId = teamsInputEl.value;

    if(selectedTeamsId === miamiInput.value ){
        textInputEl.value = "The Miami Dolphins!";
    }else if(selectedTeamsId === bucsInput.value){
        textInputEl.value = "The Tampa Bay Bucaneers!";
    }else if(selectedTeamsId === gatorsInput.value){
        textInputEl.value = "The Gators!";
    }else if(selectedTeamsId === jaguarsInput.value){
        textInputEl.value = "The Jacksonville Jaguars!";
    }else{
        teamsInputEl.value = "Select a team, loser!";
    }

}