// Functions for each action-command.

function help(){
  return "<h2><span style=\"color:#eb926d;\">Help:</span></h2><table>\
  <tr>\
    <td>all</td>\
    <td>Give me the complete picture</td>\
  </tr>\
  <tr>\
    <td>about</td>\
    <td>Everything you want to know</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>How to get in touch</td>\
  </tr>\
  <tr>\
    <td>links</td>\
    <td>ORCID, LinkedIn and all the others</td>\
  </tr>\
  <tr>\
    <td>publications</td>\
    <td>Academic stuff</td>\
  </tr>\
  <tr>\
    <td>cv</td>\
    <td>Everything in a pdf</td>\
  </tr>\</table>";
}

function contact(){
  return "<h2><span style=\"color:#cc6666;\">Contact:</span></h2><table>\
  <tr>\
    <td>Academic email</td>\
    <td><a href=\"mailto:augustin.debly@univ-nantes.fr\">augustin.debly@univ-nantes.fr</a></td>\
  </tr>\
  <tr>\
    <td>Other email</td>\
    <td><a href=\"mailto:augustin.debly@gmail.com\">augustin.debly@gmail.com</a></td>\
  </tr>\</table>";
}

function about(){
  return "<p>This will be written someday.</p>";
}

function cv(){
  return "<span style=\"color:#8abeb7;\"><h2>CV:</h2></span><p>\tDownload from <a href=\"src/cv.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a>.</p>";
}

function credits(){
  return "<p>Built by <a href=\"https://www.github.com/CedArctic\" target=\"_blank\"><i class=\"fab fa-github\"></i> CedArctic</a></p>";
}

function links(){
  return "<span style=\"color: #b5bd68;\"><h2>Links:</h2></span><ul>\
  <li><a href=\"https://www.linkedin.com\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></li>\
  <li><a href=\"https://orcid.org\" target=\"_blank\"><i class=\"fab fa-orcid\"></i> ORCID</a></li>\
  <li><a href=\"https://www.researchgate.net\" target=\"_blank\"><i class=\"fab fa-researchgate\"></i> ResearchGate</a></li>\
  <li><a href=\"https://scholar.google.com\" target=\"_blank\"><i class=\"fas fa-graduation-cap\"></i> Google Scholar</a></li>\
  <li><a href=\"https://www.github.com\" target=\"_blank\"><i class=\"fab fa-github\"></i> Github</a></li>\
  </ul>";
}

// Main Function
function commandProcessor(e){

  //Check if the enter key is pressed
  if(e.keyCode == 13){

    //Clear the area where info will be printed
    document.getElementById('injected').innerHTML= "";

    //Get user input
    var txtInput = document.getElementById('txtBox').value;

    //Select what info to print according to command
    if(txtInput == "help"){
      document.getElementById('injected').innerHTML=help();
    }else if (txtInput=="all") {
      document.getElementById('injected').innerHTML=about() + "\n\n\n" + links() + "\n\n\n" + contact() + "\n\n\n" + cv();
    }else if (txtInput == "about") {
      document.getElementById('injected').innerHTML=about();
    }else if (txtInput == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput == "cv") {
      document.getElementById('injected').innerHTML=cv();
    }else if (txtInput=="links") {
      document.getElementById('injected').innerHTML=links();
    }else if (txtInput == "credits") {
      document.getElementById('injected').innerHTML=credits();
    }else{
      document.getElementById('injected').innerHTML = help();
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}
