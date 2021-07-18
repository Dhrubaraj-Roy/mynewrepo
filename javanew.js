let employe  = {
    name: "Avijt",
    cook: function(){
        console.log(this.name,"is cooking.");
    }
}
let surpervisor  = {
name: "Nibash",
cashir: function(){
    console.log(this.name,"is the cash resister.");
}
}
let boos  = {
name: "MR. Dhruba",
inchaege: function(){
    console.log(this.name,"is in charge.");
}
}
// boos.inchaege();
// surpervisor.cashir();
// employe.cook();
employe.cook.call(surpervisor);