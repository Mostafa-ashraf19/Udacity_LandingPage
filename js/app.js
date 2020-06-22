/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
let SectionCount = document.getElementsByTagName('main')[0].childElementCount-2;
const Contbut = document.getElementById('ContentButton');
let oldScrolEementId = 'section1';
const UPbutoon =  document.getElementById('UPbutoon');
const Navbar = document.getElementsByTagName('nav')[0];

function SetContent()
{
    /* Add new content to Drop Down menu */
    Navbar.style.cssText = 'display:block';
    
    const ContMenu = document.getElementById('UserCont');

    ContMenu.style.display = 'block';
    const Child = ContMenu.getElementsByTagName('ul')[0];
    const newLi = document.createElement('li');
    const newAnch = document.createElement('a');
    
    newAnch.style.cssText = 'font-weight: bold; \
    text-decoration: none; ';

    newAnch.textContent = 'Section '+ ++SectionCount;
    newAnch.setAttribute('onclick','ScrolTo(\'section'+SectionCount.toString()+'\')');
    newLi.appendChild(newAnch);
    Child.appendChild(newLi);
   
    /* Add Content to main page */
    const MainSec = document.getElementsByTagName('main')[0];
    const CreateSec = document.createElement('section');
    CreateSec.setAttribute('id','section'+SectionCount.toString());
    CreateSec.setAttribute('data-nav','Section '+SectionCount.toString());
    const Creatediv = document.createElement('div');
    Creatediv.className = 'landing__container';
    const Createh2 = document.createElement('h2');
    const CreateP = document.createElement('p');
    CreateP.textContent = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
    Createh2.textContent = 'Section '+SectionCount;
    Creatediv.appendChild(Createh2);
    Creatediv.appendChild(CreateP);
    CreateSec.appendChild(Creatediv);
    MainSec.appendChild(CreateSec);
}

// build the nav
Contbut.onclick = SetContent;

// Scroll to anchor ID using scrollTO event
function ScrolTo(e)
{
    var element_to_scroll = document.getElementById(e);
    element_to_scroll.scrollIntoView({
        behavior: 'smooth', // smooth scroll
        block: 'start' 
        // the upper border of the element will be 
        //aligned at the top of the visible part of the window of the scrollable area.
      });
    const ClassNameN =  document.getElementById(oldScrolEementId).className;
    document.getElementById(oldScrolEementId).removeAttribute('class');
    oldScrolEementId = e;
    document.getElementById(oldScrolEementId).className = ClassNameN;
}

UPbutoon.addEventListener('click',function(){
window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
});

window.onscroll = ()=>{
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        UPbutoon.style.display = "block";
      } else {
        UPbutoon.style.display = "none";
      }
      Navbar.style.cssText = 'display:block';
}

setInterval(()=>{
    Navbar.style.cssText = 'display:none; transition: ease 0.3s all;';
},5000);