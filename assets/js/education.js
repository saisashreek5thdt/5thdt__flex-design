document.getElementById("0").style.color="var(--color-neon-dark)";

function active_option(id){
    console.log(id);
    for(let i=0; i<7; i++){
        document.getElementById(i).style.color="var(--color-black)";
    }
    document.getElementById(id).style.color="var(--color-neon-dark)";
}