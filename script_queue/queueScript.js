const html_text = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
  
  </style>
  <title>Scene</title>
</head>
<body>

  <div class="viz" id="viz">
       <div id="textarea">
       <div class="nameandsprite">
           <p class="name" id='name1'> dogu</p>
           <img src="https://www.domu.reisen/media/7-WJ4WSXL3.png" id="sprite1">
           
           <img  id="sprite2">
         <p class="name" id="name2"> </p>
        </div>
        <div class="textbox">
            <div class="text" id="type"> 
              <div class="spaceforCurrent">
                <p id="currenttext"> sample text</p>
              </div>
            </div>
      </div>
    </div>

</body>
</html>`


music_index = 0;
const music_array = ["",];
const sfx_array = ["",];
//upload some stuff to neocities so i can use it
const background_array = ["",];
const characters = new Map();
characters.set("dogu", ["https://www.domu.reisen/media/7-WJ4WSXL3.png","https://static.wikia.nocookie.net/touhorror-teahouse/images/f/fe/Th11Kisume.png", ]);
characters.set("komaeda", ["https://static.wikia.nocookie.net/danganronpa/images/3/37/Nagito_Komaeda_Halfbody_Sprite_%285%29.png", "https://static.wikia.nocookie.net/danganronpa/images/d/d8/Nagito_Komaeda_Halfbody_Sprite_%2817%29.png"])


function processInput() {
  let input = document.getElementById("command").value;
  tokens = input.split(" ");
  console.log(tokens)
  if(tokens[0] == "" && tokens.length== 1){
    // empty string
    console.log("empty string");
  }
  if (input[0]== "/"){
    if (tokens[0] == "/sfx" && tokens.length == 2){
      //test later
        let audio = new Audio(sfx_array(tokens[2]));
  audio.play();
    }
    else if (tokens[0] == "/music" && tokens.length == 2){
      //test later
        let audio = new Audio(music_array[tokens[1]]);
  audio.play();
      audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
        //repeats 4ever....
}, false);
    }
    else if (tokens[0] == "/background"  && tokens.length == 3){
      if (tokens[1] == "color"){
        document.getElementById("viz").style.backgroundImage = ""
         document.getElementById("viz").style.backgroundColor = tokens[2]; 
         console.log("background color changed to " + tokens[2]);
      }
      else if (tokens[1] == "image"){
         document.getElementById("viz").style.backgroundImage = "url(" + background_array[tokens[2]] + ")";
        
        console.log("background image changed to " + background_array[tokens[2]]);
      }
      
    }
    else if (tokens[0] == "/character"  && tokens.length >= 3 ){
     if (tokens[1] == "L") {
       if (tokens[2] == 0){
         document.getElementById("sprite1").style.visibility = 'hidden'
       
        console.log("hid left sprite");
      
       }
       else if (characters.has(tokens[2])){
         document.getElementById("sprite1").style.visibility = 'visible';
                  document.getElementById("sprite1").src = characters.get(tokens[2])[tokens[3]]
      
                console.log("left character changed to " + tokens[2] +" sprite src" + characters.get(tokens[2])[tokens[3]]);
      
         
       }
       else{
          console.log( tokens[2] +" is not a character in memory");
      
       }
     
     }
      else if (tokens[1] == "R" || tokens[1] =='r') {
        if (tokens[2] == 0){
          
         document.getElementById("sprite1").style.visibility = 'hidden'
       
        console.log("hid right sprite");
      
       }
    else if (characters.has(tokens[2])){
         document.getElementById("sprite2").style.visibility = 'visible';
         document.getElementById("sprite2").src = characters.get(tokens[2])[tokens[3]]
         console.log("right character changed to " + tokens[2] +" sprite src" + characters.get(tokens[2])[tokens[3]]);
         
    } else{
          console.log( tokens[2] +" is not a character in memory");
            
       }
                                        
      }
      else if (tokens[1] == "name" && tokens.length == 3){
       const currentText = document.getElementById("name1");
  currentText.innerText = tokens[2];
      }
      else{
      console.log("sorry, i can't understand you... try again");
      
      
    }
    }
    else if (tokens[0] == "/new"){
      if (tokens[1]== 'character'){
        characters.set(tokens[2], [])
      }
      else if (tokens[1]== 'sprite'){
 let sprites_list = characters.get(tokens[2])
 
        sprites_list.push(tokens[3])
        characters.set(tokens[2], sprites_list)
      }
      else if (tokens[1]== 'music'){
        music_array.push(tokens[2])
      }
      else if (tokens[1]== 'sfx'){
        sfx_array.push(tokens[2])
      }
      else if (tokens[1]== 'background'){
        background_array.push(tokens[2])
      }
    }
    else if (tokens[0] == "/delete"){
      if (tokens[1]== 'character'){
       characters.delete(tokens[2]);
      }
      else if (tokens[1]== 'sprite'){
        let curr_sprites = characters.get(tokens[2]);
        console.log(curr_sprites)
        const index = curr_sprites[tokens[3]-1];
        
        curr_sprites.splice(index, 1); 
        characters.set(tokens[2], curr_sprites)
      }
      else if (tokens[1]== 'music'){
        const index = music_array[tokens[2]-1];
        if (index > -1) { // only splice array when item is found
        music_array.splice(index, 1); // 2nd parameter means remove one item only
        }

      }
      else if (tokens[1]== 'sfx'){
         const index = sfx_array.indexOf[tokens[2]-1];
        if (index > -1) { // only splice array when item is found
        sfx_array.splice(index, 1); // 2nd parameter means remove one item only
        }
      }
      else if (tokens[1]== 'background'){
         const index = background_array[tokens[2]-1];
        if (index > -1) { // only splice array when item is found
        background_array.splice(index, 1); // 2nd parameter means remove one item only
        }
      }
    }

    else{
      console.log("sorry, i can't understand you... try again");
    }
  }
  else{
    //not a command, treat as dialogue and print to screen
    
           const currentText = document.getElementById("currenttext");
    
  currentText.innerText = input;
console.log(input);
  }
  
  
}

  
// array with dialoguez
const script = [];
// starting point for dialogue
var index = 0
// text advancing functions only activate after the page 

function addtoArray(){
   let input = document.getElementById("command").value;
  script.push(input);
  console.log(script)
}

// function createScene(){
  
// }

function makeDocument() {
  const frame = document.getElementById("theFrame");

  const doc = document.implementation.createHTMLDocument("help");
  doc.write(html_text);

  // Copy the new HTML document into the frame

  const destDocument = frame.contentDocument;
  const srcNode = doc.documentElement;
  const newNode = destDocument.importNode(srcNode, true);

  destDocument.replaceChild(newNode, destDocument.documentElement);
}

document.getElementById("create-doc").addEventListener("click", makeDocument);
