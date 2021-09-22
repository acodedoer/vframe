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

  workspace.toolbox
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

function myUpdateFunction(event) {
  var workspace_code =  html_beautify(HtmlGenerator.workspaceToCode(workspace));
  const container = document.createElement('div');
  container.innerHTML = workspace_code;
  const assets = container.getElementsByTagName('a-assets');
  console.log(assets);
  document.getElementById("scene-assets").innerHTML = "";
  let asset_html = "";
  for(let item of assets){
    asset_html+= item.innerHTML;
    container.removeChild(item);
  };
  document.getElementById("scene-assets").innerHTML = html_beautify(asset_html);
  const scene = document.getElementById('scene');
  scene.innerHTML = container.innerHTML;
  document.getElementById('sourceCode').innerText = workspace_code;
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

