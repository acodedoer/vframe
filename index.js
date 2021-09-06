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

  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(toolbox).style.display = "block";
  e.currentTarget.className += "active";
 }

 function setDiv1(e, div="instructions"){
    const nav = `<nav class="testTab" id ="testTab">
    <button id="btninstructions" class="tablinks active" onclick="setDiv1(event, 'instructions')">Task 1: Instructions</button>
    <button id ="btnfinal" class="tablinks" onclick="setDiv1(event,'final')">Task 1: Final Scene</button>
    </nav>`
   let str = "";
    const inst = `<div id = "instructions">Use the Components and Primitive blocks in the workspace (to the right) to complete the tasks below. Your completed scene, which will be shown in the output window, should look like the scene shown on the Final Scene tab.
    <ol>
    <li>Add a box to the scene
    <ul>
      <li>Set its position to (-1 0.5 0)</li>
      <li>Set its rotation to (0 45 0)</li>
      <li>Set its colour to #4CC3D9</li>
    </ul>
    </li>

    <li>Add a sphere to the scene
    <ul>
      <li>Set its position to (0 1.25 -2)</li>
      <li>Set its radius to 1.25</li>
      <li>Set its colour to #EF2D5E</li>
    </ul>
    </li>
    <li>Add a cylinder to the scene
    <ul>
      <li>Set its position to (0 0.75 0)</li>
      <li>Set its radius to 0.5</li>
      <li>Set its colour to #FFC65D</li>
    </ul>
    </li>
    <li>Add a plane to the scene
    <ul>
      <li>Set its position to (0 0 -4)</li>
      <li>Set its rotation to (-90 0 0)</li>
      <li>Set its colour to #7BC8A4</li>
      <li>Set its width to 4</li>
      <li>Set its height to 4</li>
    </ul>
    </li>
    <li>Add a plane to the scene
    <ul>
      <li>Set its position to (0 0 -4)</li>
      <li>Set its rotation to (-90 0 0)</li>
      <li>Set its colour to #7BC8A4</li>
      <li>Set its width to 4</li>
      <li>Set its height to 4</li>
    </ul>
    </li>
    <li>Add a sky to the scene
    <ul>
      <li>Set its colour to #7BC8A4</li>
    </ul>
    </li>

    <ol>
    </div>`
    const final = `<div id ='final' style="height:calc(100% - 48px); width:100%"><a-scene embedded>
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
    <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
    <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
    <a-sky color="#ECECEC"></a-sky></a-scene><div>`
    if(div == "instructions"){
      str= nav+ inst;
    }
    else if (div == "final"){
      str = nav + final;
    }
    const parent = document.getElementById("testDiv1")
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

 function setDiv2(e, div="instructions"){
  const nav = `<nav class="testTab" id ="testTab">
  <button id="btninstructions" class="tablinks active" onclick="setDiv2(event, 'instructions')">Task 2: Instructions</button>
  <button id ="btnfinal" class="tablinks" onclick="setDiv2(event,'final')">Task 2: Final Scene</button>
  </nav>`
 let str = "";
  const inst = `<div id = "instructions">Use the Components and Primitive blocks in the workspace (to the right) to complete the tasks below. Your completed scene, which will be shown in the output pane above, should look like the scene shown on the Final Scene tab.
  <ol>
  <li>Add a sphere to the scene.
  <ul>
    <li>Set its id to “sun”</li>
    <li>Set its position to (0 0 0)</li>
    <li>Set its radius to 3</li>
    <li>Set its material source to "https://www.solarsystemscope.com/textures/download/2k_sun.jpg"</li>
  </ul>
  </li>

  <li>Add another sphere to the scene as a child of the sphere with id "sun".
  <ul>
    <li>Set its id to "earth"</li>
    <li>Set its position to (4 0 0)</li>
    <li>Set its radius to 1</li>
    <li>Set its material source to "https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg"</li>
  </ul>
  </li>

  <li>Add another sphere to the scene as a child of the sphere with id "earth".
  <ul>
    <li>Set its id to "moon"</li>
    <li>Set its position to (4 0 0)</li>
    <li>Set its radius to 0.3</li>
    <li>Set its material source to "https://www.solarsystemscope.com/textures/download/2k_moon.jpg"</li>
  </ul>
  </li>

  <li>Add a sphere to the scene
  <ul>
    <li>Set its position to (0 1.25 -2)</li>
    <li>Set its radius to 1.25</li>
    <li>Set its colour to #EF2D5E</li>
  </ul>
  </li>
  <li>Add a cylinder to the scene
  <ul>
    <li>Set its position to (0 0.75 0)</li>
    <li>Set its radius to 0.5</li>
    <li>Set its colour to #FFC65D</li>
  </ul>
  </li>
  <li>Add a plane to the scene
  <ul>
    <li>Set its position to (0 0 -4)</li>
    <li>Set its rotation to (-90 0 0)</li>
    <li>Set its colour to #7BC8A4</li>
    <li>Set its width to 4</li>
    <li>Set its height to 4</li>
  </ul>
  </li>
  <li>Add a plane to the scene
  <ul>
    <li>Set its position to (0 0 -4)</li>
    <li>Set its rotation to (-90 0 0)</li>
    <li>Set its colour to #7BC8A4</li>
    <li>Set its width to 4</li>
    <li>Set its height to 4</li>
  </ul>
  </li>
  <li>Add a sky to the scene
  <ul>
    <li>Set its colour to #7BC8A4</li>
  </ul>
  </li>

  <ol>
  </div>`
  const final = `<div id ='final' style="height:calc(100% - 48px); width:100%"><a-scene embedded>
  <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
  <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
  <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
  <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
  <a-sky color="#ECECEC"></a-sky></a-scene><div>`
  if(div == "instructions"){
    str= nav+ inst;
  }
  else if (div == "final"){
    str = nav + final;
  }
  const parent = document.getElementById("testDiv2")
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

setDiv1("instructions")
setDiv2("instructions")
