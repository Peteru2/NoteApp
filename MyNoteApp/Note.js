const openModulbtn = document.querySelectorAll('[data-modul-target]');
const closeModulbtn = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModulbtn.forEach( button => {
    button.addEventListener('click', ()=>{
        const modul = document.querySelector(button.dataset.modulTarget);
        openModul(modul);
        document.getElementById('error').innerHTML = '';     
       
    })
})

closeModulbtn.forEach( button => {
    button.addEventListener('click', ()=>{
        // const modul = button.closest('.modul')
        // OR
        const modul = document.querySelector('.modul');
        closeModul(modul);  
                      
    })
})

function openModul(modul){
    if (modul == null) return
    modul.classList.add('active');
    overlay.classList.add('active')
}

function closeModul(modul){
    if (modul == null) return;
    modul.classList.remove('active');
    overlay.classList.remove('active');
}

const add = document.getElementById('save-btn');
const addtitle = document.getElementById('note-title');
const addtxt = document.getElementById('note-text');

add.addEventListener('click', (e) =>{
    e.preventDefault();
    document.querySelector('.close-button').style.visibility = 'visible';
    if (addtitle.value == "" || addtxt.value == ""){
        document.getElementById('error').innerHTML = "All fields are not filled";
       
    }else{
            modul.classList.remove('active');
            overlay.classList.remove('active');
            // document.querySelector(".marq").innerHTML = "Start New Note";
            
    let notes = localStorage.getItem("notes");
    if (notes == null){
        notesObj = []
    }else {
        notesObj = JSON.parse(notes);
    }
    let myObj ={
        title: {mainTitle: addtitle.value,
                Dat: new Date().toLocaleString()
            },
        text: addtxt.value
    }
    notesObj.push(myObj);

    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtitle.value = "";
     addtxt.value = "";
    }
    
     showNotes();
    
});

const deli = document.querySelector('.delit')
function showNotes(){

    let notes = localStorage.getItem("notes")
   
    if (notes == null){
        notesObj = []
    }else {
        notesObj = JSON.parse(notes);
    }

    let word = "";

    notesObj.forEach(function(element, index){
        word+= `<div class="note">
        <div>${element.title.Dat}</div>
        <div class = "note-top"><i class = "fa fa-heart"></i></div>
        <h3 class="title">${element.title.mainTitle}</h3>
        <div class="txt">${element.text}</div>
        <div class="butt">
            <button class="edi" id = "${index}"  onClick = "editNote(this.id)"><small><i class = "fa fa-edit"></i></small> Edit</button>
            <button class = "del" id = "${index}"  onclick = "del(this.id)"> <small><i class = "fa fa-trash"></i></small> Delete</button>
        </div>  
        </div>`;

        deli.innerHTML = `
        <h4>Do you really want delete <i>${index}?</i> </h4>
        <button onClick = "canc()" id = "${index}"><i class = "fa fa-times"></i> Cancel</button>
        <button  class="del" id = "${index}" onclick = "delNote(this.id)"><i class = "fa fa-trash"></i> Delete</button> `; 

    });

    let notErm = document.querySelector("#Mynote");
        if(notesObj.length != 0){
            notErm.innerHTML = word;
            document.querySelector('.plus').style.visibility = 'visible'
            document.getElementById('Mynote').style.display = 'block';
            document.querySelector(".Note-bg").style.display = 'none';
           
        }
        else{
            document.querySelector('.plus').style.visibility = 'hidden';
            document.getElementById('Mynote').style.display = 'none';
            document.querySelector(".Note-bg").style.display = 'block';
            
        }
    }



    
function editNote(index){
    document.querySelector('.close-button').style.visibility = 'hidden';
    document.getElementById('error').innerHTML = '';
    modul.classList.add('active');
    overlay.classList.add('active');  

    // var rer = notesObj.indexOf(";l,;l");
    // console.log(rer);

    let notes = localStorage.getItem("notes");
    if(addtitle == "" || addtxt == ""){
        document.getElementById('error').innerHTML = "All fields are not filled";
    }else{
    if (notes == null){
        notesObj = [];
    }else {
        notesObj = JSON.parse(notes);
    }
    notesObj.findIndex((element,index) => {
    addtitle.value = element.title.mainTitle;
    addtxt.value = element.text;
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
   

    })
        showNotes();
}
    }



function delNote(index){  
    deli.classList.remove('active');
    overlay.classList.remove('active');

    let notes = localStorage.getItem("notes")

    if (notes == null){
        notesObj = [];
    }else {
        notesObj = JSON.parse(notes);
    }
    
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
   
    showNotes();

}


function reload() {
    if (showNotes()){
        window.addEventListener('load', () =>{
        notErm.innerHTML = word;
        
        })
        // else{notErm.innerHTML.remove()}
    }
}

function del(indexx){
    deli.classList.add('active');
    overlay.classList.add('active');

    showNotes();
    
}

function canc(){
    deli.classList.remove('active');
    overlay.classList.remove('active');
    
    showNotes();
}

function clik(){    
    document.getElementById('menu').style.width = '100%';
    document.getElementById('menu').style.height = '50px';
}

function back(){    
document.getElementById('menu').style.width = '0px';
document.getElementById('menu').style.height = '0px';
document.querySelector('.chev').classList.remove('active');
document.querySelector('.dropdown').classList.remove('active');
}

function abtAp(){
    document.querySelector('.dropdown').classList.add('active');
    document.querySelector('.chev').classList.add('active');
}

function che(){
    document.querySelector('.chev').classList.remove('active');
    document.querySelector('.dropdown').classList.remove('active');
  }

reload(); 