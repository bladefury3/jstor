document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
        e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("This field cannot be left blank");
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
})

jQuery(document).ready(function($) {
    var storedNames = JSON.parse(localStorage.getItem("itemName"));    
    $('#checkout').text('(' + Object.keys(storedNames).length + ') Book(s)');

});



function addItem(names){      
    var getStoreName = JSON.parse(localStorage.getItem("itemName"));    
    console.log('StoreName:' + getStoreName);
    if(getStoreName == null){
        var finalNames = new Array();
        finalNames.push(names);
        console.log('Final Names' + finalNames);
    }        
    else{
        finalNames = getStoreName;
        finalNames.push(names);
        console.log('Final Names' + finalNames);
    }
    localStorage.setItem("itemName", JSON.stringify(finalNames));
    var storedNames = JSON.parse(localStorage.getItem("itemName"));
    console.log('Names that got stored: ' + storedNames);
    document.getElementById('checkout').innerHTML = '(' + Object.keys(storedNames).length + ') Book(s)';
    return storedNames;
}

function removeItem(element, names){
    if(element.parentElement.parentElement.parentElement.parentElement.childElementCount == 1){
        element.parentElement.parentElement.parentElement.parentElement.removeChild(element.parentElement.parentElement.parentElement);
        var item = document.getElementById('items');
        item.innerHTML += '<p id="empty">Your shelf is currently empty <a href="/"> Search for some things to read </a></p>'
    }
    else{
        element.parentElement.parentElement.parentElement.parentElement.removeChild(element.parentElement.parentElement.parentElement);
    }
    var array = JSON.parse(localStorage.getItem("itemName"));
    console.log("Array before: " + array);
    var index = array.indexOf(names);
    if (index > -1) {
        array.splice(index, 1);
    }
    console.log("Array after: " + array);
    localStorage.removeItem("itemName");
    localStorage.setItem("itemName", JSON.stringify(array));
    var storedNames = JSON.parse(localStorage.getItem("itemName"));
    document.getElementById('checkout').innerHTML = '(' + Object.keys(storedNames).length + ') Book(s)';

}

var storedNames = JSON.parse(localStorage.getItem("itemName"));   
console.log(storedNames)
if(window.location.href == 'http://civic-depth-119614.appspot.com/checkout' || window.location.href == 'http://localhost:65080/checkout'){
    var item = document.getElementById('items');
    if(storedNames.length < 1){
        item.innerHTML += '<p id="empty">Your shelf is currently empty <a href="/"> Search for some things to read </a></p>'
    }
    else if(storedNames.length == 1){
        $('#empty').remove();
    }
    for (storedName in storedNames) {
        if(storedNames[storedName] == 'Sony Laptops Are Still Part Of The Sony Family'){
            item.innerHTML += '<div class="row"><div class="small-12 large-12 columns single-search-result"><h3 class="search-results-header">Sony Laptops Are Still Part Of The Sony Family</h3><p class="search-results-authors">Shane Adkins, Terry Malone</p><p class="search-results-abstract">All users on MySpace will know that there are millions of people out there. Every day besides so many people joining this community, there are many others who will be looking out for friends. This will mean that they are naturally looking out for good people who are interesting enough.</p><p class="search-results-links"><a href="#" onclick="removeItem(this, \'Sony Laptops Are Still Part Of The Sony Family\')">Remove from shelf</a> <a href="#">Cite</a></p></div></div>'
        }
        else if(storedNames[storedName] == 'Live Poker How To Win Tournament Games'){
            item.innerHTML += '<div class="row"><div class="small-12 large-12 columns single-search-result"><h3 class="search-results-header">Live Poker How To Win Tournament Games</h3><p class="search-results-authors">Dustin Phelps</p><p class="search-results-abstract">There are number of instructions to be followed at the time of refilling an inkjet cartridge. So whenever your printer ink runs dry you need to follow the below steps for inkjet cartridge refill.</p><p class="search-results-links"><a href="#" onclick="removeItem(this, \'Live Poker How To Win Tournament Games\'); ">Remove from shelf</a> <a href="#">Cite</a></p></div></div>'
        }
        else if(storedNames[storedName] == 'Where Can You Find Unique Myspace Layouts Nowadays'){
            item.innerHTML += '<div class="row"><div class="small-12 large-12 columns single-search-result"><h3 class="search-results-header">Where Can You Find Unique Myspace Layouts Nowadays</h3><p class="search-results-authors">Alejandro Saunders</p><p class="search-results-abstract">Plantronics with its GN Netcom wireless headset creates the next generation of wireless headset and other products such as wireless amplifiers, and wireless headset telephone.</p><p class="search-results-links"><a href="#" onclick="removeItem(this, \'Where Can You Find Unique Myspace Layouts Nowadays\');">Remove from shelf</a> <a href="#">Cite</a></p></div></div>';
        }
        else if(storedNames[storedName] == 'Will The Democrats Be Able To Reverse The Online Gambling Ban'){
            item.innerHTML += '<div class="row"><div class="small-12 large-12 columns single-search-result"><h3 class="search-results-header">Will The Democrats Be Able To Reverse The Online Gambling Ban</h3><p class="search-results-authors">Herman Richards</p><p class="search-results-abstract">Shure’s Music Phone Adapter (MPA) is our favorite iPhone solution, since it lets you use the headphones you’re most comfortable with. It has an iPhone-compatible jack at one end and a microphone module with an Answer/End/Pause button and a female 3.5mm audio jack for . . .</p><p class="search-results-links"><a href="#" onclick="removeItem(this, \'Will The Democrats Be Able To Reverse The Online Gambling Ban\');">Remove from shelf</a> <a href="#">Cite</a></p></div></div>';
        }
        else if( storedNames[storedName] == 'Make Myspace Your Best Designed Space'){
            item.innerHTML += '<div class="row"><div class="small-12 large-12 columns single-search-result"><h3 class="search-results-header">Make Myspace Your Best Designed Space</h3><p class="search-results-authors">Todd Simpson</p><p class="search-results-abstract">MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a. . .</p><p class="search-results-links"><a href="#" onclick="removeItem(this, \'Make Myspace Your Best Designed Space\');">Remove from shelf</a> <a href="#">Cite</a></p></div></div>';
        }
    }
}