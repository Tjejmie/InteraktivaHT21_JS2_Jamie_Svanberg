const news = [
    {
        "headline": "Regeringen skjuter på publiklättnader",
        "author": "Erik Wikén",
        "href": "https://www.svt.se/nyheter/inrikes/regeringen-skjuter-pa-publiklattnader",
        "summary": "Det blir inga lättnader i publikrestriktioner som planerat – åtminstone inte nu. Det beskedet gav regeringen i dag. Orsaken är den återigen ökade smittspridningen i samhället."
    },
    {
        "headline": "Graffitin – så kom den till Sverige genom Public service",
        "author": "",
        "href": "https://www.svt.se/nyheter/lokalt/ost/graffitin-sa-kom-den-till-sverige-genom-public-service",
        "summary": "Det går faktiskt nästan att fastställa på minuten när graffitin kom till Sverige. Se hur det gick till och hur subkulturen har utvecklats sedan dess i videon."
    },
    {
        "headline": "Louise Glück får Nobelpriset i litteratur",
        "author": ["Jakob Runevad Kjellmer", "Lydia Farran-Lee", "Sebastian Folcker"],
        "href": "https://www.svt.se/kultur/nobelpriset-i-litteratur-2020",
        "summary": "Den amerikanska poeten Louise Glück mottar Nobelpriset i litteratur 2020. Hon debuterade med Firstborn 1968 och anses vara en av de mest tongivande samtida amerikanska poeterna."
    },
]

//1
document.getElementById('ex01').textContent = 'done' 

//2
document.querySelector(".ex02").classList.add("red");

//3
document.querySelector('blockquote').textContent = "What we do in life echoes in eternity" 

//4
var node = document.createElement("LI");
var textnode = document.createTextNode("Milk");
node.appendChild(textnode);
document.getElementById("shopping-list").appendChild(node); 

//5


let newsContent = document.getElementById("news");
    for (let i = 0; i < news.length; i++) {
    let newsHeadline = document.createElement("h2");
    newsHeadline.textContent = news[i].headline;
    newsContent.appendChild(newsHeadline);
    newsHeadline.classList.add("red");
            
    let newsSummary = document.createElement("p");
    newsSummary.textContent = news[i].summary;
    newsContent.appendChild(newsSummary);

    let newsAuthor = document.createElement("p");
    newsAuthor.textContent = news[i].author;
    newsAuthor.style.fontStyle = "cambria";
    newsContent.appendChild(newsAuthor);
            
    let newsLink = document.createElement("a");
    newsLink.textContent = "Link to article";
    newsLink.href = news[i].href;
    newsLink.classList.add("red");
    newsContent.appendChild(newsLink);
        }
    

//6     
var count = 0;
var countPage = document.querySelector("body");
var displayCount = document.getElementById("click-counter");
countPage.onclick = function(){
  count++;
  displayCount.innerHTML = count;
}

//7
const button = document.querySelector('button'); 
button.addEventListener('click', event => {
  button.disabled = true;
});

//8
document.getElementById("link-to-svt").addEventListener("click", function(event){ 
    event.preventDefault()
  });

//9
document.querySelector("img").src= 'https://images.unsplash.com/photo-1634148521111-c21852cf5788?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1925&q=80"t';
  

/** 
 * 
 * This is where you add code that will manipulate index.html!
 * 
 * When you open index.html in your browser, this javascript file will be run once. This javascript file is loaded via the script tag in index.html.
 * 
 * Most of what you need is in the lecture slides! For the stuff that isn't, there are very strong hints in the lecture slides at least. 
 * 
 * You can also figure most things out with the MDN docs. 
 * 
 * Or, by using chrome devtools and debugger statements. 
 * 
 * 
 * Good luck :) 
 */

 console.log('js loaded!')
