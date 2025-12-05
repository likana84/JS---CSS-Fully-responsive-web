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
const headerEl=document.querySelector(".header");
const barMenuEl=document.querySelector(".barMenu");
const navLinksEl=document.querySelector(".nav-links");

// Header Animation - Fade In
function animateHeaderFadeIn() {
    headerEl.style.opacity = '0';
    headerEl.style.transform = 'translateY(-20px)';
    headerEl.style.transition = 'all 0.8s ease-in-out';
    
    // Trigger animation
    setTimeout(() => {
        headerEl.style.opacity = '1';
        headerEl.style.transform = 'translateY(0)';
    }, 100);
}

// Header Animation - Scroll Effect
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (headerEl) {
        // Slight scale effect on scroll
        const scale = 1 - (scrollPosition * 0.0002);
        headerEl.style.transform = `scaleY(${Math.max(scale, 0.95)})`;
    }
});

// Initialize header animation on page load
document.addEventListener('DOMContentLoaded', animateHeaderFadeIn);

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



/*console.dir(document)
console.dir(barMenuEl);
console.dir(navLinksEl);*/

