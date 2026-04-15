music_index = 0;
const music_array = ["","https://www.domu.reisen/assets/1.mp3","https://www.domu.reisen/assets/2.mp3"];
const sfx_array = ["",];
//upload some stuff to neocities so i can use it
const background_array = ["", "https://textures.neocities.org/thumbnails/humans-and-technology/thumb_cc440038.jpg", "https://textures.neocities.org/thumbnails/humans-and-technology/thumb_qhh50039.jpg"];
const characters = new Map();
characters.set("dogu", ["https://www.domu.reisen/media/7-WJ4WSXL3.png","https://static.wikia.nocookie.net/touhorror-teahouse/images/f/fe/Th11Kisume.png", ]);
characters.set("komaeda", ["https://static.wikia.nocookie.net/danganronpa/images/3/37/Nagito_Komaeda_Halfbody_Sprite_%285%29.png", "https://static.wikia.nocookie.net/danganronpa/images/d/d8/Nagito_Komaeda_Halfbody_Sprite_%2817%29.png"])

const dogu1 = {
  name:'dogu',
  sprites: ["https://www.domu.reisen/media/7-WJ4WSXL3.png","https://static.wikia.nocookie.net/touhorror-teahouse/images/f/fe/Th11Kisume.png", ]
};
const komaeda = {
  name:'komaeda',
  sprites: ["https://static.wikia.nocookie.net/danganronpa/images/3/37/Nagito_Komaeda_Halfbody_Sprite_%285%29.png", "https://static.wikia.nocookie.net/danganronpa/images/d/d8/Nagito_Komaeda_Halfbody_Sprite_%2817%29.png"]
};
const character_array = ["",dogu1, komaeda];


function processInput() {
  let input = document.getElementById("command").value;
  tokens = input.split(" ");
  console.log(tokens)
  if(tokens[0] == "" && tokens.length== 1){
    // empty string
     document.getElementById("terminal").append("sorry, i can't understand you... try again");
     document.getElementById("terminal").append(document.createElement("br"));
  }
  if (input[0]== "/"){
     if (tokens[0] == "/help"){
       print_help();
     }
    else if (tokens[0] == "/sfx" && tokens.length == 2){
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
    else if (tokens[0] == "/background"){
      if (tokens[1] == "color"){
        document.getElementById("viz").style.backgroundImage = ""
         document.getElementById("viz").style.backgroundColor = tokens[2]; 
         document.getElementById("terminal").append("background color changed to " + tokens[2]);
      document.getElementById("terminal").append(document.createElement("br"));
      }
      else if (tokens[1] == "image"){
         document.getElementById("viz").style.backgroundImage = "url(" + background_array[tokens[2]] + ")";
        
  document.getElementById("terminal").append("background image changed to " + background_array[tokens[2]]);
      document.getElementById("terminal").append(document.createElement("br"));
      }
      
    }
    else if (tokens[0] == "/character"){
     if (tokens[1] == "L") {
       if (tokens[2] == 0){
         document.getElementById("sprite1").style.visibility = 'hidden'
       
        document.getElementById("terminal").append("hid left sprite");
      document.getElementById("terminal").append(document.createElement("br"));
       }
       else if (characters.has(tokens[2])){
         document.getElementById("sprite1").style.visibility = 'visible';
                  document.getElementById("sprite1").src = characters.get(tokens[2])[tokens[3]]
      
                document.getElementById("terminal").append("left character changed to " + tokens[2] +" sprite src" + characters.get(tokens[2])[tokens[3]]);
      document.getElementById("terminal").append(document.createElement("br"));
         
       }
       else{
          document.getElementById("terminal").append( tokens[2] +" is not a character in memory");
      document.getElementById("terminal").append(document.createElement("br"));
         
         
       }
     
     }
      else if (tokens[1] == "R" || tokens[1] =='r') {
        if (tokens[2] == 0){
          
         document.getElementById("sprite1").style.visibility = 'hidden'
       
        document.getElementById("terminal").append("hid right sprite");
      document.getElementById("terminal").append(document.createElement("br"));
       }
    else if (characters.has(tokens[2])){
         document.getElementById("sprite2").style.visibility = 'visible';
       
document.getElementById("sprite2").src = characters.get(tokens[2])[tokens[3]]
      
                document.getElementById("terminal").append("right character changed to " + tokens[2] +" sprite src" + characters.get(tokens[2])[tokens[3]]);
      document.getElementById("terminal").append(document.createElement("br"));
    } else{
          document.getElementById("terminal").append( tokens[2] +" is not a character in memory");
      document.getElementById("terminal").append(document.createElement("br"));
         
         
       }
                                        
      }
      else if (tokens[1] == "name"){
        
        
       const currentText = document.getElementById("name1");
  currentText.innerText = tokens[2];
      }
      else{
        
        document.getElementById("terminal").append("sorry, i can't understand you... try again");
      document.getElementById("terminal").append(document.createElement("br"));
      
    }
    }
    else{
      document.getElementById("terminal").append("sorry, i can't understand you... try again");
      document.getElementById("terminal").append(document.createElement("br"));
    }
  }
  else{
    //not a command, treat as dialogue and print to screen
    
           const currentText = document.getElementById("currenttext");
    
  currentText.innerText = input;
document.getElementById("terminal").append(input);
    document.getElementById("terminal").append(document.createElement("br"));
  }
  
  
}



function print_help(){
    document.getElementById("terminal").append("HELP MENU");
     document.getElementById("terminal").append(document.createElement("br"));
 
        document.getElementById("terminal").append("---");
    
document.getElementById("terminal").append(document.createElement("br"));
     document.getElementById("terminal").append("/background color (namespace/rgb/hex)");
    
document.getElementById("terminal").append(document.createElement("br"));
     document.getElementById("terminal").append("/background image (#) (0 to remove)"); 
  document.getElementById("terminal").append(document.createElement("br"));
    
document.getElementById("terminal").append("/character position (L/R) index of (0 to remove)");
 
document.getElementById("terminal").append(document.createElement("br"));    
   document.getElementById("terminal").append("/sfx (#)");

 document.getElementById("terminal").append(document.createElement("br"));
    document.getElementById("terminal").append("/music (#) (0 to remove)");
    
    document.getElementById("terminal").append(document.createElement("br"));
 }

 // revise this to be more helpful