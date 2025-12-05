var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popupbox")
var addpopupbt=document.getElementById("add-popup-button")
addpopupbt.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
      popupoverlay.style.display="none"
    popupbox.style.display="none"
})
//add-book bookinputid bookauthorg descrip 
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var bookinput=document.getElementById("bookinputid")
var  author=document.getElementById("bookauthor")
var descrip=document.getElementById("descrip")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${bookinput.value}</h2>
            <h5>${author.value}</h5>
            <p>${descrip.value}</p>
            <button onclick="deletebook(event)"> delete</button>`
    container.append(div)
     popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}