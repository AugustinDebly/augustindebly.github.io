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
  <li><a href=\"https://orcid.org\" target=\"_blank\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" style=\"width:16px;height:16px;vertical-align:middle;\"><path fill=\"#A6CE39\" d=\"M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm-23.7 57.4h-13V198h13V57.4zm33.7 0v140.5h40.7c37.7 0 63.6-25.9 63.6-70.3 0-44.2-26-70.2-63.6-70.2h-40.7zm13 12.8h26.5c31.4 0 51.5 20.1 51.5 57.5 0 37.5-20.1 57.6-51.5 57.6H151V70.2zM80.3 44.5c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z\"/></svg> ORCID</a></li>\
  <li><a href=\"https://www.researchgate.net\" target=\"_blank\"><i class=\"fab fa-researchgate\"></i> ResearchGate</a></li>\
  <li><a href=\"https://scholar.google.com/citations?user=hjM90v8AAAAJ" target=\"_blank\"><i class="fa-brands fa-google-scholar"></i> Google Scholar</a></li>\
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
