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
  const components = HtmlGenerator.statementToCode(block, 'components');
  const children = HtmlGenerator.statementToCode(block, 'children');
  const code = `<a-entity ${components}> ${children} </a-entity>`;
  console.log(code)
  return code;
};

HtmlGenerator['primitive_entity'] = function(block) {
  const primitive = HtmlGenerator.statementToCode(block, 'primitive_entity',Blockly.JavaScript.ORDER_ATOMIC).trim();
  const components = HtmlGenerator.statementToCode(block, 'components',Blockly.JavaScript.ORDER_ATOMIC);
  const children = HtmlGenerator.statementToCode(block, 'children',Blockly.JavaScript.ORDER_ATOMIC);
  const code = primitive.slice(0, primitive.indexOf(">  </a-")) + components + `> ${children}` + primitive.slice(primitive.indexOf("</a-"));
  return code;
};

HtmlGenerator['primitive_entity_childless'] = function(block) {
  const primitive = HtmlGenerator.statementToCode(block, 'primitive_entity',Blockly.JavaScript.ORDER_ATOMIC).trim();
  const components = HtmlGenerator.statementToCode(block, 'components',Blockly.JavaScript.ORDER_ATOMIC);
  const code = primitive.slice(0, primitive.indexOf(">  </a-")) + components + primitive.slice(primitive.indexOf(">  </a-"));
  return code;
};

const primitive_geometries = ['cursor_primitive','sound_primitive','sky_primitive','light_primitive','box_primitive', 'cone_primitive', 'cylinder_primitive', 'dodecahedron_primitive', 'icosahedron_primitive', 'octahedron_primitive', 'plane_primitive', 'sphere_primitive', 'tetrahedron_primitive', 'torus-knot_primitive', 'torus_primitive', 'curvedimage_primitive', 'gltf-model_primitive', 'image_primitive', 'videosphere_primitive', 'video_primitive', 'text_primitive', 'camera_primitive']
for(let i = 0; i<primitive_geometries.length; i++){
  HtmlGenerator[primitive_geometries[i]] = function(block) {
    const src= [block.getFieldValue('src'), Blockly.JavaScript.ORDER_ATOMIC][0];
    const entity = [block.getFieldValue('primitive_entity'), Blockly.JavaScript.ORDER_ATOMIC][0]
    const attributes = HtmlGenerator.statementToCode(block, 'attributesStatements',Blockly.JavaScript.ORDER_ATOMIC);
    let src_ =""
    if(src!==null){src_ = `src="${src}"` }
    return `<a-${entity} ${src_} ${attributes}>  </a-${entity}>`;
  }
}

const primitive_attributes = ['entity_id','geometry_depth','sound_autoplay','sound_loop','sound_on','sound_volume','geometry_color', 'cursor_far','cursor_fuse','cursor_fuse-timeout','cursor_interval','cursor_objects', 'geometry_width', 'geometry_height', 'geometry_radius', 'text_value', 'text_font', 'light_angle', 'light_color', 'light_type', "camera_wasd-controls-enabled", "camera_reverse-mouse-drag", "camera_look-controls-enabled", "camera_near", "camera_fov", "camera_far"]
for(let i = 0; i<primitive_attributes.length; i++){
  HtmlGenerator[primitive_attributes[i]] = function(block) {
    const value = [block.getFieldValue(primitive_attributes[i]), Blockly.JavaScript.ORDER_ATOMIC][0];
    const attribute = primitive_attributes[i].slice(primitive_attributes[i].indexOf("_") +1);
    return ` ${attribute}="${value}"`
  }
}

const free_properties = ['material-component_properties'];
for(let i = 0; i<free_properties.length; i++){
  HtmlGenerator[free_properties[i]] = function(block) {
    const property = [block.getFieldValue('property'), Blockly.JavaScript.ORDER_ATOMIC][0];
    const value = [block.getFieldValue('value'), Blockly.JavaScript.ORDER_ATOMIC][0];
    return `${property}:${value}`;
  };
}

const free_attributes = ['text_attributes','geometry_attributes'];
for(let i = 0; i<free_attributes.length; i++){
  HtmlGenerator[free_attributes[i]] = function(block) {
    const attribute = [block.getFieldValue('attribute'), Blockly.JavaScript.ORDER_ATOMIC][0];
    const value = [block.getFieldValue('value'), Blockly.JavaScript.ORDER_ATOMIC][0];
    return `${attribute} = "${value}"`;
  };
}

const components = ['animation', 'camera', 'fog', 'material']
for(let i = 0; i<components.length; i++){
  HtmlGenerator[components[i]] = function(block) {
    const attributes = HtmlGenerator.statementToCode(block, `${components[i]}_properties`,Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${components[i]}="${attributes}"`;
    console.log(code)
    return code;
  }
}


HtmlGenerator['animations'] = function(block) {
  const attributes1 = HtmlGenerator.statementToCode(block, 'animation_properties_1',Blockly.JavaScript.ORDER_ATOMIC);
  const attributes2 = HtmlGenerator.statementToCode(block, 'animation_properties_2',Blockly.JavaScript.ORDER_ATOMIC);
  const code = `animation="${attributes1}" animation__1="${attributes2}"`;
  return code;
};

const component_properties = ['animation-component_property', 'animation-component_to', 'animation-component_from', 'animation-component_startEvents','animation-component_dur', 'animation-component_loop', 'animation-component_dir', 'camera-component_active', 'camera-component_far','camera-component_fov','camera-component_near','camera-component_spectator','camera-component_zoom', 'fog-component_type', 'fog-component_color', 'fog-component_near', 'fog-component_far', 'fog-component_density', 'material-component_color', 'material-component_src', ]
for(let i = 0; i<component_properties.length; i++){
  HtmlGenerator[component_properties[i]] = function(block) {
    const value = [block.getFieldValue(component_properties[i]), Blockly.JavaScript.ORDER_ATOMIC][0];
    const attribute = component_properties[i].slice(component_properties[i].indexOf("_") +1);
    return `${attribute}: ${value};`
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