"use strict";

const htmlBlocks =
[
/* Begin Entities*/
{//entity
  "type": "entity",
  "message0": "entity %1 component(s) %2 child(ren) %3",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "attribute",
    "check": "attribute"
  },
  {
    "type": "input_statement",
    "name": "children",
    "check": "entity"
  }
  ],
  "previousStatement": "entity",
  "nextStatement": "entity",
  "colour": "#323031",
  "tooltip": "",
  "helpUrl": ""
},
{//childless entity
  "type": "entity_childless",
  "message0": "entity %1 component(s) %2",
  "args0": [
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "attribute",
    "check": "attribute"
  },
  ],
  "previousStatement": "entity",
  "nextStatement": "entity",
  "colour": "#323031",
  "tooltip": "",
  "helpUrl": ""
},
{//primitive entity
  "type": "primitive_entity",
  "message0": "primitive %1 attribute(s) %2 child(ren) %3",
  "args0": [
  {
    "type": "input_value",
    "name": "primitive_entity",
    "check": "entity_primitive"
  },
  {
    "type": "input_statement",
    "name": "attributes",
    "check": "attribute"
  },
  {
    "type": "input_statement",
    "name": "children",
    "check": ["entity", "primitive"]
  }
  ],
  "previousStatement": ["entity", "primitive"],
  "nextStatement": ["entity", "primitive"],
  "colour": "#323031",
  "tooltip": "",
  "helpUrl": ""
},
{ //childless primitive entity
  "type": "primitive_entity_childless",
  "message0": "primitive %1 attribute(s) %2",
  "args0": [
  {
    "type": "input_value",
    "name": "primitive_entity",
    "check": "entity_primitive"
  },
  {
    "type": "input_statement",
    "name": "attributes",
    "check": "attribute"
  }
  ],
  "previousStatement": ["entity", "primitive"],
  "nextStatement": ["entity", "primitive"],
  "colour": "#323031",
  "tooltip": "",
  "helpUrl": ""
},
/* End Entities*/

/* Begin Geometry Primitives*/
{//box primitive
  "type": "box_primitive",
  "message0": "%1",
  "args0": [
  {
    "type": "field_label",
    "text": "box",
    "name": "primitive_entity",
    "check": "geometry_primitive"
  }],
  "output": "entity_primitive",
  "colour": "#db3a34",
  "tooltip": "",
  "helpUrl": ""
},
{//sphere primitive
  "type": "sphere_primitive",
  "message0": "%1",
  "args0": [
  {
    "type": "field_label",
    "text": "sphere",
    "name": "primitive_entity",
    "check": "geometry_primitive"
  }],
  "output": "entity_primitive",
  "colour": "#db3a34",
  "tooltip": "",
  "helpUrl": ""
},
{//cylinder primitive
  "type": "cylinder_primitive",
  "message0": "%1",
  "args0": [
  {
    "type": "field_label",
    "text": "cylinder",
    "name": "primitive_entity",
    "check": "geometry_primitive"
  }],
  "output": "entity_primitive",
  "colour": "#db3a34",
  "tooltip": "",
  "helpUrl": ""
},
{//cone primitive
  "type": "cone_primitive",
  "message0": "%1",
  "args0": [
  {
    "type": "field_label",
    "text": "cone",
    "name": "primitive_entity",
    "check": "geometry_primitive"
  }],
  "output": "entity_primitive",
  "colour": "#db3a34",
  "tooltip": "",
  "helpUrl": ""
},
{//plane primitive
  "type": "plane_primitive",
  "message0": "%1",
  "args0": [
  {
    "type": "field_label",
    "text": "plane",
    "name": "primitive_entity",
    "check": "geometry_primitive"
  }],
  "output": "entity_primitive",
  "colour": "#db3a34",
  "tooltip": "",
  "helpUrl": ""
},
{//torus primitive
  "type": "torus_primitive",
  "message0": "%1",
  "args0": [
  {
    "type": "field_label",
    "text": "torus",
    "name": "primitive_entity",
    "check": "geometry_primitive"
  }],
  "output": "entity_primitive",
  "colour": "#db3a34",
  "tooltip": "",
  "helpUrl": ""
},
{//dedacahedron primitive
  "type": "dodecahedron_primitive",
  "message0": "%1",
  "args0": [
  {
    "type": "field_label",
    "text": "dodecahedron",
    "name": "primitive_entity",
    "check": "geometry_primitive"
  }],
  "output": "entity_primitive",
  "colour": "#db3a34",
  "tooltip": "",
  "helpUrl": ""
},
{//icosahedron primitive
  "type": "icosahedron_primitive",
  "message0": "%1",
  "args0": [
  {
    "type": "field_label",
    "text": "icosahedron",
    "name": "primitive_entity",
    "check": "geometry_primitive"
  }],
  "output": "entity_primitive",
  "colour": "#db3a34",
  "tooltip": "",
  "helpUrl": ""
},
{//octahedron primitive
  "type": "octahedron_primitive",
  "message0": "%1",
  "args0": [
  {
    "type": "field_label",
    "text": "octahedron",
    "name": "primitive_entity",
    "check": "geometry_primitive"
  }],
  "output": "entity_primitive",
  "colour": "#db3a34",
  "tooltip": "",
  "helpUrl": ""
},
{//tetrahedron primitive
  "type": "tetrahedron_primitive",
  "message0": "%1",
  "args0": [
  {
    "type": "field_label",
    "text": "tetrahedron",
    "name": "primitive_entity",
    "check": "geometry_primitive"
  }],
  "output": "entity_primitive",
  "colour": "#db3a34",
  "tooltip": "",
  "helpUrl": ""
},
{//torus-knot primitive
  "type": "torus-knot_primitive",
  "message0": "%1",
  "args0": [
  {
    "type": "field_label",
    "text": "torus-knot",
    "name": "primitive_entity",
    "check": "geometry_primitive"
  }],
  "output": "entity_primitive",
  "colour": "#db3a34",
  "tooltip": "",
  "helpUrl": ""
},
/* End Geometry Primitives*/

/* Begin Dimension */
{//depth
  "type": "entity_depth",
  "message0": "depth %1",
  "args0": [
    {
      "type": "field_number",
      "name": "entity_depth",
      "value": 1
    }
  ],
  "colour": "#705D56",
  "previousStatement": "attribute",
  "nextStatement": "attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//height
  "type": "entity_height",
  "message0": "height %1",
  "args0": [
    {
      "type": "field_number",
      "name": "entity_height",
      "value": 1
    }
  ],
  "colour": "#705D56",
  "previousStatement": "attribute",
  "nextStatement": "attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//width
  "type": "entity_width",
  "message0": "width %1",
  "args0": [
    {
      "type": "field_number",
      "name": "entity_width",
      "value": 1
    }
  ],
  "colour": "#705D56",
  "previousStatement": "attribute",
  "nextStatement": "attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//radius
  "type": "entity_radius",
  "message0": "radius %1",
  "args0": [
    {
      "type": "field_number",
      "name": "entity_radius",
      "value": 1
    }
  ],
  "colour": "#705D56",
  "previousStatement": "attribute",
  "nextStatement": "attribute",
  "tooltip": "",
  "helpUrl": ""
},
/* End Dimension */

/*Begin Transformation */
{//scale
  "type": "entity_scale",
  "message0": "scale:  x%1 y%2 z%3",
  "args0": [
    {
      "type": "field_number",
      "name": "x",
      "value": 0
    },
    {
      "type": "field_number",
      "name": "y",
      "value": 0
    },
    {
      "type": "field_number",
      "name": "z",
      "value": 0
    }
  ],
  "previousStatement": "attribute",
  "nextStatement": "attribute",
  "colour": "#3993dd",
  "tooltip": "",
  "helpUrl": ""
},
{//position
  "type": "entity_position",
  "message0": "position:  x%1 y%2 z%3",
  "args0": [
    {
      "type": "field_number",
      "name": "x",
      "value": 0
    },
    {
      "type": "field_number",
      "name": "y",
      "value": 0
    },
    {
      "type": "field_number",
      "name": "z",
      "value": 0
    }
  ],
  "previousStatement": "attribute",
  "nextStatement": "attribute",
  "colour": "#3993dd",
  "tooltip": "",
  "helpUrl": ""
},
{//rotation
  "type": "entity_rotation",
  "message0": "rotation:  x%1 y%2 z%3",
  "args0": [
    {
      "type": "field_number",
      "name": "x",
      "value": 0
    },
    {
      "type": "field_number",
      "name": "y",
      "value": 0
    },
    {
      "type": "field_number",
      "name": "z",
      "value": 0
    }
  ],
  "previousStatement": "attribute",
  "nextStatement": "attribute",
  "colour": "#3993dd",
  "tooltip": "",
  "helpUrl": ""
},/* End Transformation*/

/* Begin Material */
{//colour
  "type": "material_color",
  "message0": "colour %1",
  "args0": [
    {
      "type": "field_colour",
      "name": "material_color",
    }
  ],
  "colour": "#4daa57",
  "previousStatement": "attribute",
  "nextStatement": "attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//src
  "type": "material_src",
  "message0": "src %1",
  "args0": [

    {
      "type": "field_input",
      "name": "material_src",
      "check": "TEXT"
    }
  ],
  "previousStatement": "attribute",
  "nextStatement": "attribute",
  "colour": "#4daa57",
  "tooltip": "",
  "helpUrl": ""
},
/* End Material */

/*Begin Media Primitives*/
{ //curved image
  "type": "curvedimage_primitive",
  "message0": "%1 from %2",
  "args0": [
  {
    "type": "field_label",
    "text": "curvedimage",
    "name": "primitive_entity"
  },
  {
    "type": "field_input",
    "check": "text",
    "name": "src"
  }],
  "output": "entity_primitive",
  "colour": "#ee9b00",
  "tooltip": "",
  "helpUrl": ""
},
{ //gltf model
  "type": "gltf-model_primitive",
  "message0": "%1 from %2",
  "args0": [
  {
    "type": "field_label",
    "text": "gltf-model",
    "name": "primitive_entity"
  },
  {
    "type": "field_input",
    "check": "text",
    "name": "src"
  }],
  "output": "entity_primitive",
  "colour": "#ee9b00",
  "tooltip": "",
  "helpUrl": ""
},
{ //image
  "type": "image_primitive",
  "message0": "%1 from %2",
  "args0": [
  {
    "type": "field_label",
    "text": "image",
    "name": "primitive_entity"
  },
  {
    "type": "field_input",
    "check": "text",
    "name": "src"
  }],
  "output": "entity_primitive",
  "colour": "#ee9b00",
  "tooltip": "",
  "helpUrl": ""
},
{ //video
  "type": "video_primitive",
  "message0": "%1 from %2",
  "args0": [
  {
    "type": "field_label",
    "text": "video",
    "name": "primitive_entity"
  },
  {
    "type": "field_input",
    "check": "text",
    "name": "src"
  }],
  "output": "entity_primitive",
  "colour": "#ee9b00",
  "tooltip": "",
  "helpUrl": ""
},
{ //videosphere
  "type": "videosphere_primitive",
  "message0": "%1 from %2",
  "args0": [
  {
    "type": "field_label",
    "text": "videosphere",
    "name": "primitive_entity"
  },
  {
    "type": "field_input",
    "check": "text",
    "name": "src"
  }],
  "output": "entity_primitive",
  "colour": "#ee9b00",
  "tooltip": "",
  "helpUrl": ""
},
/*End Media Primitives*/

/*Begin Text Primitives*/
{ //text
  "type": "text_primitive",
  "message0": "%1",
  "args0": [
  {
    "type": "field_label",
    "text": "text",
    "name": "primitive_entity"
  }],
  "output": "entity_primitive",
  "colour": "#C4C408",
  "tooltip": "",
  "helpUrl": ""
},
{ //text value
  "type": "text_value",
  "message0": "value %1",
  "args0": [
    {
      "type": "field_input",
      "name": "text_value",
      "value": ""
    }
  ],
  "colour": "#C4C408",
  "previousStatement": "attribute",
  "nextStatement": "attribute",
  "tooltip": "",
  "helpUrl": ""
},
{ //text font
  "type": "text_font",
  "message0": "font %1",
  "args0": [
    {
      "type": "field_input",
      "name": "text_font",
      "value": ""
    }
  ],
  "colour": "#C4C408",
  "previousStatement": "attribute",
  "nextStatement": "attribute",
  "tooltip": "",
  "helpUrl": ""
},
/*End Text Primitives*/

/* Begin Animation*/
{//animation
  "type": "animation",
  "message0": "animation %1",
  "args0": [
  {
    "type": "input_statement",
    "name": "animation_properties",
    "check": "animation_property"
  },
  ],
  "previousStatement": "attribute",
  "nextStatement": "attribute",
  "colour": "#6200b3",
  "tooltip": "",
  "helpUrl": ""
},
{//animations
  "type": "animations",
  "message0": "animation 1 %1 animation 2 %2 ",
  "args0": [
  {
    "type": "input_statement",
    "name": "animation_properties_1",
    "check": "animation_property"
  },
  {
    "type": "input_statement",
    "name": "animation_properties_2",
    "check": "animation_property"
  },
  ],
  "previousStatement": "attribute",
  "nextStatement": "attribute",
  "colour": "#6200b3",
  "tooltip": "",
  "helpUrl": ""
},
{ //property 
"type": "animation_property",
"message0": "property %1",
"args0": [
  {
    "type": "field_dropdown",
    "name": "animation_property",
    "options": [
      [ "colour", "color" ],
      [ "position", "position" ],
      [ "rotation", "rotation" ],
      [ "scale", "scale" ],
    ]
  }
],
"colour": "#6200b3",
"previousStatement": "animation_property",
"nextStatement": "animation_property",
"tooltip": "",
"helpUrl": ""
},
{ //to 
  "type": "animation_to",
  "message0": "to %1",
  "args0": [
    {
      "type": "field_input",
      "name": "animation_to",
      "check": "animation_to"
    }
  ],
  "previousStatement": "animation_property",
  "nextStatement": "animation_property",
  "colour": "#6200b3",
  "tooltip": "",
  "helpUrl": ""
  },
{ //from 
  "type": "animation_from",
  "message0": "from %1",
  "args0": [
    {
      "type": "field_input",
      "name": "animation_from",
      "check": "animation_from"
    }
  ],
  "previousStatement": "animation_property",
  "nextStatement": "animation_property",
  "colour": "#6200b3",
  "tooltip": "",
  "helpUrl": ""
},
{ //dur 
  "type": "animation_dur",
  "message0": "dur %1",
  "args0": [
    {
      "type": "field_input",
      "name": "animation_dur",
      "check": "animation_dur"
    }
  ],
  "previousStatement": "animation_property",
  "nextStatement": "animation_property",
  "colour": "#6200b3",
  "tooltip": "",
  "helpUrl": ""
},
{ //startEvents 
  "type": "animation_startEvents",
  "message0": "startEvents %1",
  "args0": [
    {
      "type": "field_input",
      "name": "animation_startEvents",
      "check": "animation_startEvents"
    }
  ],
  "previousStatement": "animation_property",
  "nextStatement": "animation_property",
  "colour": "#6200b3",
  "tooltip": "",
  "helpUrl": ""
},
{ //loop 
  "type": "animation_loop",
  "message0": "loop %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "animation_loop",
      "options": [
        [ "true", "true" ],
        [ "false", "false" ]
      ]
    }
  ],
  "colour": "#6200b3",
  "previousStatement": "animation_property",
  "nextStatement": "animation_property",
  "tooltip": "",
  "helpUrl": ""
},
{ //dir 
  "type": "animation_dir",
  "message0": "dir %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "animation_dir",
      "options": [
        [ "normal", "normal" ],
        [ "alternate", "alternate" ],
        [ "reverse", "reverse" ]
      ]
    }
  ],
  "colour": "#6200b3",
  "previousStatement": "animation_property",
  "nextStatement": "animation_property",
  "tooltip": "",
  "helpUrl": ""
},
/* End Animation*/
  
/* Begin Light*/
{//light
  "type": "light_primitive",
  "message0": "%1",
  "args0": [
  {
    "type": "field_label",
    "text": "light",
    "name": "primitive_entity",
    "check": "geometry_primitive"
  }],
  "output": "entity_primitive",
  "colour": "#ff6392",
  "tooltip": "",
  "helpUrl": ""
},
{//light type
  "type": "light_type",
  "message0": "type %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "light_type",
      "options": [
        [ "ambient", "ambient" ],
        [ "hemisphere", "hemisphere" ],
        [ "directional", "directional" ],
        [ "point", "point" ],
        [ "spot", "spot" ],
  ]}
  ],
  "colour": "#ff6392",
  "previousStatement": "attribute",
  "nextStatement": "attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//light angle
  "type": "light_angle",
  "message0": "angle %1",
  "args0": [
    {
      "type": "field_number",
      "name": "light_angle",
      "value": 60
    }
  ],
  "colour": "#ff6392",
  "previousStatement": "attribute",
  "nextStatement": "attribute",
  "tooltip": "",
  "helpUrl": ""
},

{//light color
  "type": "light_color",
  "message0": "color %1",
  "args0": [
    {
      "type": "field_colour",
      "name": "light_color",
      "value": 60
    }
  ],
  "colour": "#ff6392",
  "previousStatement": "attribute",
  "nextStatement": "attribute",
  "tooltip": "",
  "helpUrl": ""
},
  /* End Light*/
]



for (let iBlock in htmlBlocks) {
  function makeBlock(json) {
    Blockly.Blocks[json.type] = {
      init: function() {
        this.jsonInit(json);
      }
    }
  }
  makeBlock(htmlBlocks[iBlock]);
}