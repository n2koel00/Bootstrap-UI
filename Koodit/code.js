document.querySelector("button").addEventListener("click", addNote)

let body = document.querySelector("body");

let note = document.getElementById("viesti");
let checkbox = document.getElementById("important");


function addNote(){

    let h3 = document.createElement("h3");

    let d = new Date();
    let b = document.createElement("b");
    b.textContent = viesti.value;
    
    //onko checkboxissa täppi vai ei 
    if(checkbox.checked){
        h3.classList.add("important");
        b.style.borderColor = "red";
    }
    //kaikki elementit bodyn sisälle
    body.append(h3, b, d, document.createElement("hr"));

}
