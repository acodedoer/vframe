let workspace = Blockly.inject('blocklyArea', {
  toolbox: document.getElementById('componentToolbox'),
  scrollbars: false, collapse: true, zoom:
  {controls: true,
    wheel: true,
    startScale: 1.0,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,
    pinch: true},
});

function setCategories(e, toolbox){
  workspace.updateToolbox(document.getElementById(toolbox));
  workspace.getFlyout().setVisible(false);

  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  document.getElementById(toolbox).style.display = "block";
  e.currentTarget.className += " active";
 }

 function setDiv2(e, div="instructions"){
  const nav = `<nav class="testTab" id ="testTab">
  <button id="btninstructions" class="tablinks_ active" onclick="setDiv2(event, 'instructions')">Task 2: Instructions</button>
  <button id ="btnfinal" class="tablinks_" onclick="setDiv2(event,'final')">Task 2: Final Scene</button>
  </nav>`
 let str = "";
  const inst = `<div id = "instructions">Use the Components and Primitive blocks in the workspace (to the left) to complete the tasks below. Your completed scene, which will be shown in the output pane above, should look like the scene shown on the Final Scene tab.
  <ol>
  <li class="list">Add a sphere to the scene.
  <ul>
    <li>Set its id to “sun”</li>
    <li>Set its position to (0 0 -7)</li>
    <li>Set its radius to 3</li>
    <li>Set its color to a bright shade of yellow</li>
  </ul>
  </li>

  <li class="list">Add another sphere to the scene as a child of the sphere with id "sun".
  <ul>
    <li>Set its id to "earth"</li>
    <li>Set its position to (7 0 0)</li>
    <li>Set its color to a light shade of blue</li>
  </ul>
  </li>

  <li class="list">Add another sphere to the scene as a child of the sphere with id "earth".
  <ul>
    <li>Set its id to "moon"</li>
    <li>Set its position to (1.5  0 0)</li>
    <li>Set its radius to 0.2</li>
    <li>Set its color to gray</li>
  </ul>
  </li>

  <li class="list">Add an animation component to the sphere with id “sun”
  <ul>
    <li>Set up the animation component to raotate the sun 360 degrees about it y axis for a duraion of 15 seconds</li>
    <li>Set the animation loop to "true"</li>
  </ul>
  </li>

  <li class="list">Add an animation component to the sphere with id “earth”
  <ul>
  <li>Set up the animation component to raotate the earth 360 degrees about it y axis for a duraion of 5 seconds</li>
  <li>Set the animation loop to "true"</li>
  </ul>
  </li>
  <ol>
  </div>`
  const final = `<div id ='final' style="height:calc(100% - 48px); width:100%"><a-scene embedded>
  <a-entity id="scene">
  <a-sphere radius="3" id="sun" color="#ffcc33" position="0 0 -10" animation__515="  property: rotation;to: 0 360 0;loop: true;dur: 15000;" material="" geometry="">
  <a-sphere radius="1" id="earth" color="#87CEEB" position="7 0 0" animation__516="  property: rotation;to: 0 360 0;dur: 5000;loop: true;" material="" geometry="">   <a-sphere id="moon" color="#808080" radius="0.2" position="1.5 0 0" material="" geometry="">
  </a-sphere></a-sphere></a-sphere></a-entity></a-scene><div>`
  if(div == "instructions"){
    str= nav+ inst;
  }
  else if (div == "final"){
    str = nav + final;
  }
  const parent = document.getElementById("testDiv")
  parent.innerHTML = str;
  if(div=="final"){
    document.getElementById("btninstructions").classList.remove("active");
    document.getElementById("btnfinal").classList.add("active");
  }
  else{
    document.getElementById("btnfinal").classList.remove("active");
    document.getElementById("btninstructions").classList.add("active");
  }
}

function myUpdateFunction(event) {
  console.log(workspace)
  var workspace_code = HtmlGenerator.workspaceToCode(workspace);
  const scene = document.getElementById('scene')
  scene.innerHTML = workspace_code   
}
workspace.addChangeListener(myUpdateFunction);

window.onbeforeunload = function(e) {
  return 'Dialog text here.';
};


workspace.addChangeListener(myUpdateFunction);

window.onbeforeunload = function(e) {
  return 'Dialog text here.';
};

 
document.getElementById("save").addEventListener("click", ()=>{
  try {
    const xml = Blockly.Xml.workspaceToDom(workspace);
    const xml_text = Blockly.Xml.domToText(xml);
    
    const link = document.createElement('a');
    link.download="project.xml";
    link.href="data:application/octet-stream;utf-8," + encodeURIComponent(xml_text);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (e) {
    window.location.href="data:application/octet-stream;utf-8," + encodeURIComponent(xml_text);
    alert(e);
  }
})


document.getElementById("myfile").addEventListener("change", function (e){
  importBlocksFile(this)
})
function importBlocksFile(element) {
  try {	
    var file = element.files[0];
    if(file.name.substring(file.name.lastIndexOf('.')+1, file.name.length).toLowerCase() == "xml")
    {
      var fr = new FileReader();           
      fr.onload = function (event) {
        var xml = Blockly.Xml.textToDom(event.target.result);
        workspace.clear();
        Blockly.Xml.domToWorkspace(xml,workspace);
      };
      fr.readAsText(file);
    }
    else{
      alert("Wrong file type");
    }
  } catch (e) {
    alert(e);
  }	 
}

setDiv2("instructions")
