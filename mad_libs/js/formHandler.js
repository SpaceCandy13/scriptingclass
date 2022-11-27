// JavaScript Document

function write(){
	console.log("Oh Ariana, we are really in it now...");
	
///////////////////////////MODAL///////////////////////////////////			
			
	// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
		

///////////////////////////MODAL///////////////////////////////////	
		
	
//IMPUT variables BEGINS HERE

//1
var emotion = document.getElementById('emotion').value;
	console.log(emotion);
//2
var vibe = document.getElementById('vibe').value;
	console.log(vibe);
//3
var adjective = document.getElementById('adjective').value;
	console.log(adjective);
//4
var desire = document.getElementById('desire').value;
	console.log(desire);
//5
var bodyPart = document.getElementById('bodyPart').value;
	console.log(bodyPart);
//6
var flower = document.getElementById('flower').value;
	console.log(flower);
//7
var quote = document.getElementById('quote').value;
	console.log(quote);
//8
var fruitNut = document.getElementById('fruitornut').value;
	console.log(fruitNut);
//9

//RADIO BUTTONS HERE
	
var creature = document.querySelector('input[name="creature"]:checked').value;
console.log(creature);
//10
	
var creatureMessage = document.querySelector('input[name="creature"]:checked').value;
console.log(creature);
	
	if(creature=="spirit"){
	creatureMessage = "Spirit, its haunting, lonesome drone reverberated through the trees"; }
	
	
	else if(creature=="trent"){
	creatureMessage = "Trent, its ancient wooden bones creaked eerily somewhere just out of sight";	}

	
	else if(creature=="nymph"){
	creatureMessage = "forest Nymph, its playful giggle bouncing from leaf to leaf"; }
	
	
	else if(creature=="changeling"){
	creatureMessage = "Changeling, each word it spoke seemingly passing over different lips";	}
	
	
var action = document.querySelector('input[name="action"]:checked').value;
console.log(action);
	
var actionMessage = document.querySelector('input[name="action"]:checked').value;
console.log(action);
	
	if(action=="scrambling"){
	actionMessage = "scrambling my mind, causing my every thought to swirl wildly out of control";	 }

	if(action=="boosting"){
	actionMessage = "boosting my consciousness, allowing me to understand things at level deeper than I had ever known";	}

	if(action=="consuming"){
	actionMessage = "consuming my wits, robbing me of all reason";	}

	if(action=="preparing"){
	actionMessage = "preparing me for something, choosing me to fulfill a destiny that only it could know";	}
	
	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
var modImage = "";

	
	if (creature=="spirit"){
	modImage = "url(images/spirit.png)"; }	
	
	else if(creature=="trent"){
	modImage = "url(images/trent.png)"; }	
	
	else if(creature=="nymph"){
	modImage = "url(images/nymph.png)"; }	
	
	else if(creature=="changeling"){
	modImage = "url(images/changeling.png)"; }

	
	
	
	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
document.getElementById('output').style.backgroundImage = modImage;
	document.getElementById('output').style.backgroundRepeat= "no-repeat";
			document.getElementById('output').style.backgroundAttachment= "fixed";
					document.getElementById('output').style.backgroundSize= "cover";
	
document.getElementById('output').innerHTML = "<h2>A Night In The Woods</h2><br><br>";
	
document.getElementById('output').innerHTML += "<p>On the night that I went to the woods, the trees were "+emotion+". The sky was "+vibe+" and the clouds that swirled overhead were even more so. I headed down the "+adjective+" and twisted path, further and further into the forest. Far ahead, through the thick "+fruitNut+" trees I heard a voice.</p>";
	
document.getElementById('output').innerHTML += "<p>The voice was that of a "+creatureMessage+". They called to me, whispering promises of "+desire+" and my will was far too weak to refuse such a temptation. Perhaps the woods were "+actionMessage+", or perhaps I had gone mad before ever crossing the tree line.</p>";
	
document.getElementById('output').innerHTML += "<p>I began to draw closer. As I did my heart began to race, the pull of the "+creature+" was stronger now. Entranced, I began to run blindly into the dark, my feet kicking up earth. The "+fruitNut+" trees suddenly disappeared as the forest broke to reveal a vast meadow of "+flower+"s. The "+creature+"’s call had stopped.</p>";
	
document.getElementById('output').innerHTML += "<p>Bewildered, I stood still and listened. A faint but audible rustle of leaves broke the quiet of the meadow. Behind me, something was moving.Turning slowly, I faced the forest. My eyes searched the darkness between the trees. There was nothing. I took a cautious step back into the woods.<br>Before I had even cleared the threshold, the air around me forgot the scent of "+flower+" The smell of "+desire+" was the only thought in my mind now. I stumbled forward, determined to find the "+creature+" The forest grew darker still as I pushed further, until there was no light left in the night. Then I heard them again.</p>";
	
document.getElementById('output').innerHTML += "<p>The voice was only a whisper at first, calling to me once again. I lunged blindly towards the source. My body struck trees and scraped through rough undergrowth as I followed the sound with futile desperation. The voice grew louder and louder as I ran, seemingly coming from all directions at once.<br>Just when the voice was too loud for me to bear, my body could run no further. I collapsed to the ground and all sound stopped. The forest was silent again. The scent of "+desire+" was nowhere. There was nothing but blackness and my body was numb. I was rendered senseless. </p>";
	
document.getElementById('output').innerHTML +=	"<p>Suddenly, the rustling of leaves returned and then stopped. I heard something scrabbling toward me, through the dirt and rock. Closer and closer still, until it was mere inches away. Against my ear a sudden voice whispered, “"+quote+".”<br>They jutted out from the darkness and grabbed hold of my "+bodyPart+". All at once, I was dragged into the night.<br>You can go into the woods on a "+vibe+" night, but only once. </p>";

	
	
	// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}		

	
}