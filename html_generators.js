"use strict";

const HtmlGenerator = new Blockly.Generator('HTML');

HtmlGenerator.init = function(workspace) {};
HtmlGenerator.finish = function(code) {return code;};

HtmlGenerator.scrub_ = function(block, code) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  const nextCode = HtmlGenerator.blockToCode(nextBlock);
  return code + nextCode;
};

HtmlGenerator['entity'] = function(block) {
  const components = HtmlGenerator.statementToCode(block, 'component');
  const children = HtmlGenerator.statementToCode(block, 'attribute');
  const code = `<a-entity ${components}> ${children} </a-entity>`;
  console.log(code)
  return code;
};

HtmlGenerator['primitive_entity'] = function(block) {
  const primitive = HtmlGenerator.statementToCode(block, 'primitive_entity',Blockly.JavaScript.ORDER_ATOMIC).trim();
  const entity = primitive.slice(0,primitive.indexOf("_"));
  let src = primitive.slice(primitive.indexOf("_") +1);
  if (src=='src="null"') {src=""}
  const attributes = HtmlGenerator.statementToCode(block, 'attributes',Blockly.JavaScript.ORDER_ATOMIC);
  const children = HtmlGenerator.statementToCode(block, 'children',Blockly.JavaScript.ORDER_ATOMIC);
  const code = `<a-${entity} ${attributes}> ${children} </a-${entity}>`;
  return code;
};

HtmlGenerator['primitive_entity_childless'] = function(block) {
  const primitive = HtmlGenerator.statementToCode(block, 'primitive_entity',Blockly.JavaScript.ORDER_ATOMIC).trim();
  const entity = primitive.slice(0,primitive.indexOf("_"));
  let src = primitive.slice(primitive.indexOf("_") +1);
  if (src=='src="null"') {src=""}
  const attributes = HtmlGenerator.statementToCode(block, 'attributes',Blockly.JavaScript.ORDER_ATOMIC);
  const code = `<a-${entity} ${src} ${attributes}> </a-${entity}>`;
  return code;
};

const primitive_geometries = ['light_primitive','box_primitive', 'cone_primitive', 'cylinder_primitive', 'dodecahedron_primitive', 'icosahedron_primitive', 'octahedron_primitive', 'plane_primitive', 'sphere_primitive', 'tetrahedron_primitive', 'torus-knot_primitive', 'torus_primitive', 'curvedimage_primitive', 'gltf-model_primitive', 'image_primitive', 'videosphere_primitive', 'video_primitive', 'text_primitive']
for(let i = 0; i<primitive_geometries.length; i++){
  HtmlGenerator[primitive_geometries[i]] = function(block) {
    const src= [block.getFieldValue('src'), Blockly.JavaScript.ORDER_ATOMIC][0];
    const entity = [block.getFieldValue('primitive_entity'), Blockly.JavaScript.ORDER_ATOMIC][0]
    return `${entity}_src="${src}"`;
  }
}

const primitive_attributes = ['entity_depth', 'entity_width', 'entity_height', 'entity_radius', 'material_color', 'material_src', 'text_value', 'text_font', 'light_angle', 'light_color', 'light_type']
for(let i = 0; i<primitive_attributes.length; i++){
  HtmlGenerator[primitive_attributes[i]] = function(block) {
    const value = [block.getFieldValue(primitive_attributes[i]), Blockly.JavaScript.ORDER_ATOMIC][0];
    const attribute = primitive_attributes[i].slice(primitive_attributes[i].indexOf("_") +1);
    return ` ${attribute}="${value}"`
  }
}

HtmlGenerator['animation'] = function(block) {
  const attributes = HtmlGenerator.statementToCode(block, 'animation_properties',Blockly.JavaScript.ORDER_ATOMIC);
  const code = `animation="${attributes}"`;
  return code;
};

HtmlGenerator['animations'] = function(block) {
  const attributes1 = HtmlGenerator.statementToCode(block, 'animation_properties_1',Blockly.JavaScript.ORDER_ATOMIC);
  const attributes2 = HtmlGenerator.statementToCode(block, 'animation_properties_2',Blockly.JavaScript.ORDER_ATOMIC);
  const code = `animation="${attributes1}" animation__1="${attributes2}"`;
  return code;
};

const animation_properties = ['animation_property', 'animation_to', 'animation_from', 'animation_startEvents','animation_dur', 'animation_loop', 'animation_dir']
for(let i = 0; i<animation_properties.length; i++){
  HtmlGenerator[animation_properties[i]] = function(block) {
    console.log([block.getFieldValue(animation_properties[i]), Blockly.JavaScript.ORDER_ATOMIC])
    const value = [block.getFieldValue(animation_properties[i]), Blockly.JavaScript.ORDER_ATOMIC][0];
    const attribute = animation_properties[i].slice(animation_properties[i].indexOf("_") +1);
    return ` ${attribute}: ${value};`
  }
}

const components_with_vector = ['entity_scale', 'entity_position', 'entity_rotation']
for(let i = 0; i<components_with_vector.length; i++){
  HtmlGenerator[components_with_vector[i]] = function(block) {
    const x = [block.getFieldValue('x'), Blockly.JavaScript.ORDER_ATOMIC][0];
    const y = [block.getFieldValue('y'), Blockly.JavaScript.ORDER_ATOMIC][0];
    const z = [block.getFieldValue('z'), Blockly.JavaScript.ORDER_ATOMIC][0];
    const copmonent = components_with_vector[i].slice(components_with_vector[i].indexOf("_") +1);
    return ` ${copmonent}="${x} ${y} ${z}"`
  }
}