let workspace = Blockly.inject('blocklyArea', {
  toolbox: document.getElementById('toolbox'),
  scrollbars: false, collapse: true, zoom:
  {controls: true,
    wheel: true,
    startScale: 1.0,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,
    pinch: true},
});
workspace.toolbox_.flyout_.autoClose = false;

function myUpdateFunction(event) {
  var workspace_code = HtmlGenerator.workspaceToCode(workspace);
  const scene = document.getElementById('scene')
  scene.innerHTML = workspace_code
  document.getElementById("sourceCode").innerText = html_beautify(workspace_code)     
}
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