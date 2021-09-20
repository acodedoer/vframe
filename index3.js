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

 function setDiv3(e, div="instructions"){
  const nav = `<nav class="testTab" id ="testTab">
  <button id="btninstructions" class="tablinks_ active" onclick="setDiv3(event, 'instructions')">Task 3: Instructions</button>
  <button id ="btnfinal" class="tablinks_" onclick="setDiv3(event,'final')">Task 3: Final Scene</button>
  </nav>`
 let str = "";
  const inst = `<div id = "instructions">Use the Components and Primitive blocks, and the blocks already added in the workspace (to the right) to complete the tasks below. Your completed scene, which will be shown in the pane above, should look like the scene shown on the Final Scene tab.
  <ol>
  <li>Add an environment to the scene.
  <ul>
    <li>Set its preset to "Egypt"</li>
    <li>Set its dressing amount to 20</li>
  </ul>
  <li>Change the y position of all three boxes in the scene to 1</li>
  <li>Change the colour of the box with id "box2" to "#88888"</li>
  <li>Change the scale of the boxes with id "box1" and "box3" to (1 1 2)</li>
  <li>Add a new camera to the scene
  <ul>
    <li>Set its position (0 3 5)</li>
  </ul>
  </li>
  <li>Add a cursor to the scene as a child of the new camera</li>
  <li>Add an animation component to the box with id "box2"
  <ul>
    <li>Set its start animation event to "mouseenter"</li>
    <li>Set its animation propert to "position"</li>
    <li> Set it to animate to position 2 along the y axis</li>
  </ul>
  </li>
  <li>Add another animation component to the box with id "box2"
  <ul>
    <li>Set its start animation event to "mouseleave"</li>
    <li>Set its animation propert to "position""</li>
    <li> Set it to animate to position 1 along the y axis</li>
  </ul>
  </li>
  <ol>
  </div>`
  const final = `<div id ='final' style="height:calc(100% - 48px); width:100%"><a-scene embedded>
  <a-entity id="scene">
  <a-entity environment="  preset: egypt;dressingAmount: 20;"></a-entity>
      <a-camera position="0 3 5" camera="" rotation="" look-controls="" wasd-controls="">   
        <a-cursor>  </a-cursor>
      </a-camera>
      <a-box color="#990000" id="box1" position="-3 1 0" scale="1 1 2" material="" geometry="">  </a-box>
      <a-box color="#888888" id="box2" position="0 1 0" material="" geometry="" animation__mouseenter="property: position; to: 0 2 0;startEvents: mouseenter" animation__mouseleave="property: position; to: 0 1 0;startEvents: mouseleave">  </a-box>
      <a-box color="#3333ff" id="box3" position="3 1 0" scale="1 1 2"material="" geometry="">  </a-box> </a-scene><div>`
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
function importBlocksFile() {
  const file = document.getElementById("task3");
  Blockly.Xml.domToWorkspace(workspace, file);

}

setDiv3("instructions");
importBlocksFile();
