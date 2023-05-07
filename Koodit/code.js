document.querySelector("button").addEventListener("click", addNote)

let body = document.querySelector("body");

let note = document.getElementById("viesti");
let checkbox = document.getElementById("important");
let name = document.getElementById("name");


function addNote(){

    let h5 = document.createElement("h5");
    h5.textContent = name.value;
    let d = new Date();
    let b = document.createElement("b");
    b.textContent = viesti.value;
    
    //onko checkboxissa täppi vai ei 
    if(checkbox.checked){
        b.style.borderColor = "red";
    }
    //kaikki elementit bodyn sisälle
    body.append(h5, b, d, document.createElement("hr"));

}
