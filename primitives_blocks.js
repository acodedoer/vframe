"use strict";

const primitivesBlocks =
[
/************************************ BEGIN PRIMITIVES ********************************************************/
/* Begin Camera*/
{//camera
  "type": "camera_primitive",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
  {
    "type": "field_label",
    "text": "camera",
    "name": "primitive_entity",
    "check": "camera"
  }],
  "output": "entity_primitive",
  "colour": "#00A100",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
{//camera far
  "type": "camera_far",
  "message0": "set camera far to %1",
  "args0": [
    {
      "type": "field_number",
      "name": "camera_far",
      "value": "10000"
    }
  ],
  "colour": "#00A100",
  "previousStatement": "camera_attribute",
  "nextStatement": "camera_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//camera fov
  "type": "camera_fov",
  "message0": "set camera fov to %1",
  "args0": [
    {
      "type": "field_number",
      "name": "camera_fov",
      "value": "80"
    }
  ],
  "colour": "#00A100",
  "previousStatement": "camera_attribute",
  "nextStatement": "camera_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//camera near
  "type": "camera_near",
  "message0": "set camera near to %1",
  "args0": [
    {
      "type": "field_number",
      "name": "camera_near",
      "value": "80"
    }
  ],
  "colour": "#00A100",
  "previousStatement": "camera_attribute",
  "nextStatement": "camera_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{ //camera look-controls-enabled 
  "type": "camera_look-controls-enabled",
  "message0": "%1 camera look controls",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "camera_look-controls-enabled",
      "options": [
        [ "enable", "true" ],
        [ "disable", "false" ]
      ]
    }
  ],
  "colour": "#00A100",
  "previousStatement": "camera_attribute",
  "nextStatement": "camera_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{ //camera reverse-mouse-drag 
  "type": "camera_reverse-mouse-drag",
  "message0": "%1 reverse mouse drag",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "camera_reverse-mouse-drag",
      "options": [
        [ "disable", "false" ],
        [ "enable", "true" ]
      ]
    }
  ],
  "colour": "#00A100",
  "previousStatement": "camera_attribute",
  "nextStatement": "camera_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{ //camera wasd-controls-enabled 
  "type": "camera_wasd-controls-enabled",
  "message0": "%1 camera wasd controls",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "camera_wasd-controls-enabled",
      "options": [
        [ "enable", "true" ],
        [ "disable", "false" ]
      ]
    }
  ],
  "colour": "#00A100",
  "previousStatement": "camera_attribute",
  "nextStatement": "camera_attribute",
  "tooltip": "",
  "helpUrl": ""
},
/* End Camera*/

/* Geometry Based Primitives*/
{//box primitive
  "type": "box_primitive",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
    {
      "type": "field_label",
      "text": "box",
      "name": "primitive_entity",
      "check": "geometry_primitive"
    }
  ],
  "output": "entity_primitive",
  "colour": "#00567F",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
{//sphere primitive with attributes
  "type": "sphere_primitive",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
    {
      "type": "field_label",
      "text": "sphere",
      "name": "primitive_entity",
      "check": "geometry_primitive"
    }
  ],
  "output": "entity_primitive",
  "colour": "#00567F",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
{//circle primitive
  "type": "circle_primitive",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
    {
      "type": "field_label",
      "text": "circle",
      "name": "primitive_entity",
      "check": "geometry_primitive"
    },
  ],
  "output": "entity_primitive",
  "colour": "#00567F",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
{//cylinder primitive
  "type": "cylinder_primitive",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
    {
      "type": "field_label",
      "text": "cylinder",
      "name": "primitive_entity",
      "check": "geometry_primitive"
    }
  ],
  "output": "entity_primitive",
  "colour": "#00567F",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
{//cone primitive
  "type": "cone_primitive",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
    {
      "type": "field_label",
      "text": "cone",
      "name": "primitive_entity",
      "check": "geometry_primitive"
    },
  ],
  "output": "entity_primitive",
  "colour": "#00567F",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
{//plane primitive
  "type": "plane_primitive",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
  {
    "type": "field_label",
    "text": "plane",
    "name": "primitive_entity",
    "check": "geometry_primitive"
  },
  ],
  "output": "entity_primitive",
  "colour": "#00567F",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
{//torus primitive
  "type": "torus_primitive",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
  {
    "type": "field_label",
    "text": "torus",
    "name": "primitive_entity",
    "check": "geometry_primitive"
  }],
  "output": "entity_primitive",
  "colour": "#00567F",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
{//dedacahedron primitive
  "type": "dodecahedron_primitive",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
  {
    "type": "field_label",
    "text": "dodecahedron",
    "name": "primitive_entity",
    "check": "geometry_primitive"
  }],
  "output": "entity_primitive",
  "colour": "#00567F",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
{//icosahedron primitive
  "type": "icosahedron_primitive",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
  {
    "type": "field_label",
    "text": "icosahedron",
    "name": "primitive_entity",
    "check": "geometry_primitive"
  }],
  "output": "entity_primitive",
  "colour": "#00567F",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
{//octahedron primitive
  "type": "octahedron_primitive",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
  {
    "type": "field_label",
    "text": "octahedron",
    "name": "primitive_entity",
    "check": "geometry_primitive"
  }],
  "output": "entity_primitive",
  "colour": "#00567F",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
{//tetrahedron primitive
  "type": "tetrahedron_primitive",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
  {
    "type": "field_label",
    "text": "tetrahedron",
    "name": "primitive_entity",
    "check": "geometry_primitive"
  }],
  "output": "entity_primitive",
  "colour": "#00567F",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
{//torus-knot primitive
  "type": "torus-knot_primitive",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
  {
    "type": "field_label",
    "text": "torus-knot",
    "name": "primitive_entity",
    "check": "geometry_primitive"
  }],
  "output": "entity_primitive",
  "colour": "#00567F",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
{ //geometry atrributes
  "type": "geometry_attributes",
  "message0": "set geometry's %1 to %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "attribute",
      "options": [
        [ "width", "width" ],
        [ "height", "height" ],
        [ "depth", "depth" ],
        [ "radius", "radius" ],
        [ "segments", "segments" ],
        [ "font", "font" ],
        [ "font-image", "font-image" ],
        [ "height", "height" ],
      ]
    },
    {
      "type": "field_input",
      "name": "value",
      "value": ""
    }
  ],
  "colour": "#C4C408",
  "previousStatement": ["geometry_attribute", "primitive_attribute"],
  "nextStatement": ["geometry_attribute", "primitive_attribute"],
  "tooltip": "",
  "helpUrl": ""
},
{//geometry colour
  "type": "geometry_color",
  "message0": "colour %1",
  "args0": [
    {
      "type": "field_colour",
      "name": "geometry_color",
    }
  ],
  "colour": "#00567F",
  "previousStatement": "geometry_attribute",
  "nextStatement": "geometry_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//geometry arc
  "type": "geometry_arc",
  "message0": "arc %1",
  "args0": [
    {
      "type": "field_number",
      "name": "geometry_arc",
      "value": 360
    }
  ],
  "colour": "#00567F",
  "previousStatement": "geometry_attribute",
  "nextStatement": "geometry_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//geometry depth
  "type": "geometry_depth",
  "message0": "depth %1",
  "args0": [
    {
      "type": "field_number",
      "name": "geometry_depth",
      "value": 1
    }
  ],
  "colour": "#00567F",
  "previousStatement": "geometry_attribute",
  "nextStatement": "geometry_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//geometry height
  "type": "geometry_height",
  "message0": "height %1",
  "args0": [
    {
      "type": "field_number",
      "name": "geometry_height",
      "value": 1
    }
  ],
  "colour": "#00567F",
  "previousStatement": "geometry_attribute",
  "nextStatement": "geometry_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//geometry width
  "type": "geometry_width",
  "message0": "width %1",
  "args0": [
    {
      "type": "field_number",
      "name": "geometry_width",
      "value": 1
    }
  ],
  "colour": "#00567F",
  "previousStatement": "geometry_attribute",
  "nextStatement": "geometry_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//geometry radius
  "type": "geometry_radius",
  "message0": "radius %1",
  "args0": [
    {
      "type": "field_number",
      "name": "geometry_radius",
      "value": 1
    }
  ],
  "colour": "#00567F",
  "previousStatement": "geometry_attribute",
  "nextStatement": "geometry_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//geometry segments
  "type": "geometry_segments",
  "message0": "segments %1",
  "args0": [
    {
      "type": "field_number",
      "name": "geometry_segments",
      "value": 32
    }
  ],
  "colour": "#00567F",
  "previousStatement": "geometry_attribute",
  "nextStatement": "geometry_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//geometry segmentsDepth
  "type": "geometry_segmentsDepth",
  "message0": "segmentsDepth %1",
  "args0": [
    {
      "type": "field_number",
      "name": "geometry_segmentsDepth",
      "value": 1
    }
  ],
  "colour": "#00567F",
  "previousStatement": "geometry_attribute",
  "nextStatement": "geometry_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//geometry segmentsHeight
  "type": "geometry_segmentsHeight",
  "message0": "segmentsHeight %1",
  "args0": [
    {
      "type": "field_number",
      "name": "geometry_segmentsHeight",
      "value": 1
    }
  ],
  "colour": "#00567F",
  "previousStatement": "geometry_attribute",
  "nextStatement": "geometry_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//geometry segmentsWidth
  "type": "geometry_segmentsWidth",
  "message0": "segmentsWidth %1",
  "args0": [
    {
      "type": "field_number",
      "name": "geometry_segmentsWidth",
      "value": 1
    }
  ],
  "colour": "#00567F",
  "previousStatement": "geometry_attribute",
  "nextStatement": "geometry_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//geometry segmentsRadial
  "type": "geometry_segmentsRadial",
  "message0": "segmentsRadial %1",
  "args0": [
    {
      "type": "field_number",
      "name": "geometry_segmentsRadial",
      "value": 18
    }
  ],
  "colour": "#00567F",
  "previousStatement": "geometry_attribute",
  "nextStatement": "geometry_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{ //geometry atrributes
  "type": "geometry_attributes",
  "message0": "set geometry %1 to %2",
  "args0": [
    {
      "type": "field_input",
      "name": "attribute",
      "text": "attribute"
    },
    {
      "type": "field_input",
      "name": "value",
      "text": "value"
    }
  ],
  "colour": "#00567F",
  "previousStatement": "geometry_attribute",
  "nextStatement": "geometry_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{ //image
  "type": "image_primitive",
  "message0": "a%1 %2 from %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
    {
      "type": "field_label",
      "text": "image",
      "name": "primitive_entity"
    },
    {
      "type": "field_input",
      "check": "text",
      "name": "src"
    }
  ],
  "output": "entity_primitive",
  "colour": "#00567F",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
{ //video
  "type": "video_primitive",
  "message0": "a%1 %2 from %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
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
  "colour": "#00567F",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
{ //videosphere
  "type": "videosphere_primitive",
  "message0": "a%1 %2 from %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
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
  "colour": "#00567F",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
{ //curved image
  "type": "curvedimage_primitive",
  "message0": "a%1 %2 from %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
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
  "colour": "#00567F",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
{ //sky
  "type": "sky_primitive",
  "message0": "a%1 %2 from %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
    {
      "type": "field_label",
      "text": "sky",
      "name": "primitive_entity"
    },
    {
      "type": "field_input",
      "check": "text",
      "name": "src"
    }
  ],
  "output": "entity_primitive",
  "colour": "#00567F",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
/* End Geometry Based Primitives*/

/* Begin Sound Primitive */
{ //sound primitive
  "type": "sound_primitive",
  "message0": "%1 %2 from %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
  {
    "type": "field_label",
    "text": "sound",
    "name": "primitive_entity"
  },
  {
    "type": "field_input",
    "check": "text",
    "name": "src"
  }],
  "output": "entity_primitive",
  "colour": "#A1005B",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
{//sound volume
  "type": "sound_volume",
  "message0": "set volume to %1",
  "args0": [
    {
      "type": "field_number",
      "name": "sound_volume",
      "value": 1000
    }
  ],
  "colour": "#A1005B",
  "previousStatement": "sound_attribute",
  "nextStatement": "sound_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//sound autoplay
  "type": "sound_autoplay",
  "message0": "set autoplay sound to %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "sound_autoplay",
      "options": [
        [ "false", "false" ],
        [ "true", "true" ]
      ]
    },
  ],
  "colour": "#A1005B",
  "previousStatement": "sound_attribute",
  "nextStatement": "sound_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//sound loop
  "type": "sound_loop",
  "message0": "set loop sound %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "sound_loop",
      "options": [
        [ "false", "false" ],
        [ "true", "true" ]
      ]
    },
  ],
  "colour": "#A1005B",
  "previousStatement": "sound_attribute",
  "nextStatement": "sound_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//sound on
  "type": "sound_on",
  "message0": "play sound on %1",
  "args0": [
   {
        "type": "field_input",
        "check": "text",
        "name": "sound_on"
    },
  ],
  "colour": "#A1005B",
  "previousStatement": "sound_attribute",
  "nextStatement": "sound_attribute",
  "tooltip": "",
  "helpUrl": ""
},
/* End Sound Primitive */

/* Begin Cursor Primitive */
{ //cursor primitive
  "type": "cursor_primitive",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
  {
    "type": "field_label",
    "text": "cursor",
    "name": "primitive_entity"
  }],
  "output": "entity_primitive",
  "colour": "#C97A00",
  "mutator": "custom_attributes_mutator",
  "tooltip": "",
  "helpUrl": ""
},
{//cursor far
  "type": "cursor_far",
  "message0": "far %1",
  "args0": [
    {
      "type": "field_number",
      "name": "cursor_far",
      "value": 1000
    }
  ],
  "colour": "#C97A00",
  "previousStatement": "cursor_attribute",
  "nextStatement": "cursor_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//cursor fuse-timeout
  "type": "cursor_fuse-timeout",
  "message0": "fuse-timeout %1",
  "args0": [
    {
      "type": "field_number",
      "name": "cursor_fuse-timeout",
      "value": 1500
    }
  ],
  "colour": "#C97A00",
  "previousStatement": "cursor_attribute",
  "nextStatement": "cursor_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//cursor interval
  "type": "cursor_interval",
  "message0": "interval %1",
  "args0": [
    {
      "type": "field_number",
      "name": "cursor_interval",
      "value": 100
    }
  ],
  "colour": "#C97A00",
  "previousStatement": "cursor_attribute",
  "nextStatement": "cursor_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//cursor objects
  "type": "cursor_objects",
  "message0": "objects %1",
  "args0": [
    {
      "type": "field_number",
      "name": "cursor_objects",
      "value": 100
    }
  ],
  "colour": "#C97A00",
  "previousStatement": "cursor_attribute",
  "nextStatement": "cursor_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{//cursor fuse
  "type": "cursor_fuse",
  "message0": "fuse %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "cursor_fuse",
      "options": [
        [ "false", "false" ],
        [ "true", "true" ]
      ]
    },
  ],
  "colour": "#C97A00",
  "previousStatement": "cursor_attribute",
  "nextStatement": "cursor_attribute",
  "tooltip": "",
  "helpUrl": ""
},
/* End Cursor Primitive */

/* Begin Model Primitives */
{ //gltf model
  "type": "gltf-model_primitive",
  "message0": "a%1 from %2",
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
  "colour": "#C97A00",
  "tooltip": "",
  "helpUrl": ""
},
{ //obj model
  "type": "obj-model_primitive",
  "message0": "a%1 src %2 mtl %3",
  "args0": [
  {
    "type": "field_label",
    "text": "obj-model",
    "name": "primitive_entity"
  },
  {
    "type": "field_input",
    "check": "text",
    "name": "src"
  },
  {
    "type": "field_input",
    "check": "text",
    "name": "mtl"
  }],
  "output": "entity_primitive",
  "colour": "#C97A00",
  "tooltip": "",
  "helpUrl": ""
},
/* End Model Primitives */


/*Begin Media Primitives*/
{ //gltf model
  "type": "gltf-model_primitive",
  "message0": "a%1 from %2",
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
  "colour": "#430088",
  "tooltip": "",
  "helpUrl": ""
},
/*End Media Primitives*/

/*Begin Text Primitives*/
{ //text
  "type": "text_primitive",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_label",
      "text": "text",
      "name": "primitive_entity"
    },
    {
      "type": "input_statement",
      "name": "attributesStatements",
      "check": "text_attribute",
    },
  ],
  "output": "entity_primitive",
  "colour": "#00DB9E",
  "tooltip": "",
  "helpUrl": ""
},
{ //text atrributes
  "type": "text_attributes",
  "message0": "set text %1 to %2",
  "args0": [
    {
      "type": "field_input",
      "name": "attribute",
      "text": "attribute"
    },
    {
      "type": "field_input",
      "name": "value",
      "text": "value"
    }
  ],
  "colour": "#00DB9E",
  "previousStatement": "text_attribute",
  "nextStatement": "text_attribute",
  "tooltip": "",
  "helpUrl": ""
},
{ //text value
  "type": "text_value",
  "message0": "set text value to %1",
  "args0": [
    {
      "type": "field_input",
      "name": "text_value",
      "value": ""
    }
  ],
  "colour": "#00DB9E",
  "previousStatement": "text_attribute", 
  "nextStatement": "text_attribute", 
  "tooltip": "",
  "helpUrl": ""
},
{ //text font
  "type": "text_font",
  "message0": "set text font to %1",
  "args0": [
    {
      "type": "field_input",
      "name": "text_font",
      "value": ""
    }
  ],
  "colour": "#00DB9E",
  "previousStatement": "text_attribute", 
  "nextStatement": "text_attribute", 
  "tooltip": "",
  "helpUrl": ""
},
/*End Text Primitives*/
  
/* Begin Light*/
{//light
  "type": "light_primitive",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "primitive_attributes",
      "options": [
        [ "default", "default" ],
        [ "custom", "custom" ]
      ]
    },
    {
      "type": "field_label",
      "text": "light",
      "name": "primitive_entity",
      "check": "geometry_primitive"
    }
  ],
  "output": "entity_primitive",
  "colour": "#ADC400",
  "mutator": "custom_attributes_mutator",
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
  "colour": "#ADC400",
  "previousStatement": "light_attribute",
  "nextStatement": "light_attribute",
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
  "colour": "#ADC400",
  "previousStatement": "light_attribute",
  "nextStatement": "light_attribute",
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
  "colour": "#ADC400",
  "previousStatement": "light_attribute",
  "nextStatement": "light_attribute",
  "tooltip": "",
  "helpUrl": ""
},
/* End Light*/


]
for (let iBlock in primitivesBlocks) {
  function makeBlock(json) {
    Blockly.Blocks[json.type] = {
      init: function() {
        this.jsonInit(json);
      }
    }
  }
  makeBlock(primitivesBlocks[iBlock]);
}

Blockly.Blocks.CUSTOM_ATTRIBUTES_MUTATOR_MIXIN = {
  /**
   * Create XML to represent whether the 'divisorInput' should be present.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    var attributesStatements = (this.getFieldValue('primitive_attributes') == 'custom');
    container.setAttribute('attributesStatements', attributesStatements);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
    var attributesStatements = (xmlElement.getAttribute('attributesStatements') == 'true');
    this.updateShape_(attributesStatements);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this {Blockly.Block}
   */
  updateShape_: function(options) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('attributesStatements');
    if (options.confirm) {
      console.log(this)
      if (!inputExists) {
        this.appendStatementInput('attributesStatements')
            .setCheck(['geometry_attribute', 'camera_attribute', 'cursor_attribute', 'light_attribute', 'sound_attribute']);
      }
    } else if (inputExists) {
      this.removeInput('attributesStatements');
    }
  }
};

Blockly.Blocks.CUSTOM_ATTRIBUTES_MUTATOR_EXTENSION = function() {
  this.getField('primitive_attributes').setValidator(function(option) {
    let attributesOption = (option == 'custom');
    let options={"confirm":attributesOption, "check": this}
    this.getSourceBlock().updateShape_(options);
  });
};

Blockly.Extensions.registerMutator('custom_attributes_mutator',
    Blockly.Blocks.CUSTOM_ATTRIBUTES_MUTATOR_MIXIN,
    Blockly.Blocks.CUSTOM_ATTRIBUTES_MUTATOR_EXTENSION,
    null);

