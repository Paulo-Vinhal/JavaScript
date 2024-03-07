class Person{
    constructor(name, health, damage){
        this.name = name
        this.health = health
        this.damage = damage
    }

    atacar(target){
        target.health -= this.damage
    }

}


// Personagens
let Player = new Person('Gravely', 100, 5)
let Durian = new Person('Durian', 100, 4)

function gameStart(){

    // pl = position left
    let display_name_pl = document.getElementById("l_name").innerText = `Nome: ${Player.name}`
    let display_health_pl = document.getElementById("l_health").innerText = `Health: ${Player.health}`
    let display_damage_pl = document.getElementById("l_damage").innerText = `Damage: ${Player.damage}`
    
    // pr = position right
    let display_name_pr = document.getElementById("r_name").innerText = `Nome: ${Durian.name}`
    let display_health_pr = document.getElementById("r_health").innerText = `Health: ${Durian.health}`
    let display_damage_pr = document.getElementById("r_damage").innerText = `Damage: ${Durian.damage}`
}


function msg(){
    let msg = document.querySelector("#log_battle_console_msg_input").value
    document.querySelector("#log_battle_console_msg").innerHTML += "" + msg
    msg.innerHTML = " "
}
