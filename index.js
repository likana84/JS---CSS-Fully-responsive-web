/*

Learning Outcomes
By the end of this module, you will be able to:
Recall how to set the minimum and maximum heights of an element.
State the need for adding colors to the website.
Describe how to update objects on the website using JavaScript.
State the reasons for reviewing the website.
Explain how to source and import placeholder contents.
Recall how to import and implement fonts on the website.
*/
const barMenuEl=document.querySelector(".barMenu");
const navLinksEl=document.querySelector(".nav-links");
barMenuEl.addEventListener("click",(e)=>{
    console.log(navLinksEl.style.display=='none');
    if(navLinksEl.style.display=='block'){
        navLinksEl.style.display='none';
    }else{
        navLinksEl.style.display='block';
    }
});
window.onresize=function(e){
            navLinksEl.style.display='block';


};



console.dir(document)
console.dir(barMenuEl);
console.dir(navLinksEl);
