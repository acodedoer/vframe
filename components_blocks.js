const componentsBlocks =
[
  /*Begin Interaction Components */
    {//event-set
      "type": "event-set",
      "message0": "add event-set %1",
      "args0": [
      {
        "type": "input_statement",
        "name": "event-set_properties",
      },
      ],
      "previousStatement": "component",
      "nextStatement": "component",
      "colour": "#0F0000",
      "tooltip": "",
      "helpUrl": ""
    },
    { //choose event 
      "type": "event-set__event",
      "message0": "set event to %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "event-set__event",
          "options": [
            [ "mouseenter", "mouseenter" ],
            [ "mouseleave", "mouseleave" ],
            ['click', 'click']
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#0F0000",
      "tooltip": "",
      "helpUrl": ""
    },
  /*End Interaction Components */

    /* Begin Animation Component*/
  {//animation
    "type": "animation",
    "message0": "add animation %1",
    "args0": [
    {
      "type": "input_statement",
      "name": "animation_properties",
      "check": "animation_property"
    },
    ],
    "previousStatement": "component",
    "nextStatement": "component",
    "colour": "#087149",
    "tooltip": "",
    "helpUrl": ""
  },
  { //property 
  "type": "animation-component_property",
  "message0": "animate %1 property",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "animation-component_property",
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
  "colour": "#087149",
  "tooltip": "",
  "helpUrl": ""
  },
  { //to 
    "type": "animation-component_to",
    "message0": "animate to %1",
    "args0": [
      {
        "type": "field_input",
        "name": "animation-component_to",
        "check": "animation_to"
      }
    ],
    "previousStatement": "animation_property",
    "nextStatement": "animation_property",
    "colour": "#087149",
    "tooltip": "",
    "helpUrl": ""
  },
  { //from 
    "type": "animation-component_from",
    "message0": "animate from %1",
    "args0": [
      {
        "type": "field_input",
        "name": "animation-component_from",
        "check": "animation_from"
      }
    ],
    "previousStatement": "animation_property",
    "nextStatement": "animation_property",
    "colour": "#087149",
    "tooltip": "",
    "helpUrl": ""
  },
  { //dur 
    "type": "animation-component_dur",
    "message0": "set animation duration to %1 ms",
    "args0": [
      {
        "type": "field_number",
        "name": "animation-component_dur",
        "check": "animation_dur"
      }
    ],
    "previousStatement": "animation_property",
    "nextStatement": "animation_property",
    "colour": "#087149",
    "tooltip": "",
    "helpUrl": ""
  },
  { //startEvents 
    "type": "animation-component_startEvents",
    "message0": "start animation on %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "animation-component_startEvents",
        "options": [
          [ "mouseenter", "mouseenter" ],
          [ "mouseleave", "mouseleave" ],
          ['click', 'click']
        ]
      }
    ],
    "previousStatement": "animation_property",
    "nextStatement": "animation_property",
    "colour": "#087149",
    "tooltip": "",
    "helpUrl": ""
  },
  { //pauseEvents 
    "type": "animation-component_pauseEvents",
    "message0": "pause animation on %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "animation-component_pauseEvents",
        "options": [
          [ "mouseenter", "mouseenter" ],
          [ "mouseleave", "mouseleave" ],
          ['click', 'click']
        ]
      }
    ],
    "previousStatement": "animation_property",
    "nextStatement": "animation_property",
    "colour": "#087149",
    "tooltip": "",
    "helpUrl": ""
  },
  { //resumeEvents 
    "type": "animation-component_resumeEvents",
    "message0": "resume animation on %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "animation-component_resumeEvents",
        "options": [
          [ "mouseenter", "mouseenter" ],
          [ "mouseleave", "mouseleave" ],
          ['click', 'click']
        ]
      }
    ],
    "previousStatement": "animation_property",
    "nextStatement": "animation_property",
    "colour": "#087149",
    "tooltip": "",
    "helpUrl": ""
  },
  { //loop 
    "type": "animation-component_loop",
    "message0": "set animation loop to %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "animation-component_loop",
        "options": [
          [ "true", "true" ],
          [ "false", "false" ]
        ]
      }
    ],
    "colour": "#087149",
    "previousStatement": "animation_property",
    "nextStatement": "animation_property",
    "tooltip": "",
    "helpUrl": ""
  },
  { //dir 
    "type": "animation-component_dir",
    "message0": "set animation direction to %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "animation-component_dir",
        "options": [
          [ "normal", "normal" ],
          [ "alternate", "alternate" ],
          [ "reverse", "reverse" ]
        ]
      }
    ],
    "colour": "#087149",
    "previousStatement": "animation_property",
    "nextStatement": "animation_property",
    "tooltip": "",
    "helpUrl": ""
  },
  /* End Animation*/

  /* Begin Camera Component*/
  {//camera
    "type": "camera",
    "message0": "add camera %1",
    "args0": [
    {
      "type": "input_statement",
      "name": "camera_properties",
      "check": "camera_property"
    },
    ],
    "previousStatement": "component",
    "nextStatement": "component",
    "colour": "#0F3E6C",
    "tooltip": "",
    "helpUrl": ""
  },
  { //camera active 
    "type": "camera-component_active",
    "message0": "set as active %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "camera-component_active",
        "options": [
          [ "true", "true" ],
          [ "fasle", "fasle" ],
        ]
      }
    ],
    "colour": "#0F3E6C",
    "previousStatement": "camera_property",
    "nextStatement": "camera_property",
    "tooltip": "",
    "helpUrl": ""
  },
  { //camera spectator 
    "type": "camera-component_spectator",
    "message0": "set as spectator %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "camera-component_spectator",
        "options": [
          [ "true", "true" ],
          [ "fasle", "fasle" ],
        ]
      }
    ],
    "colour": "#0F3E6C",
    "previousStatement": "camera_property",
    "nextStatement": "camera_property",
    "tooltip": "",
    "helpUrl": ""
  },
  { //camera far
    "type": "camera-component_far",
    "message0": "set camera far to %1",
    "args0": [
      {
        "type": "field_number",
        "name": "camera-component_far",
        "check": "number",
        "value": 10000
      }
    ],
    "previousStatement": "camera_property",
    "nextStatement": "camera_property",
    "colour": "#0F3E6C",
    "tooltip": "",
    "helpUrl": ""
  },
  { //camera fov
    "type": "camera-component_fov",
    "message0": "set camera fov to %1",
    "args0": [
      {
        "type": "field_number",
        "name": "camera-component_fov",
        "check": "number",
        "value": 80
      }
    ],
    "previousStatement": "camera_property",
    "nextStatement": "camera_property",
    "colour": "#0F3E6C",
    "tooltip": "",
    "helpUrl": ""
  },
  { //camera near
    "type": "camera-component_near",
    "message0": "set camera near to %1",
    "args0": [
      {
        "type": "field_number",
        "name": "camera-component_near",
        "check": "number",
        "value": 0.005
      }
    ],
    "previousStatement": "camera_property",
    "nextStatement": "camera_property",
    "colour": "#0F3E6C",
    "tooltip": "",
    "helpUrl": ""
  },
  { //camera zoom
    "type": "camera-component_zoom",
    "message0": "set camera zoom to %1",
    "args0": [
      {
        "type": "field_number",
        "name": "camera-component_zoom",
        "check": "number",
        "value": 1
      }
    ],
    "previousStatement": "camera_property",
    "nextStatement": "camera_property",
    "colour": "#0F3E6C",
    "tooltip": "",
    "helpUrl": ""
  },
  /* End Camera Component*/

  /*Begin Fog Component */
  {//fog
    "type": "fog",
    "message0": "add fog %1",
    "args0": [
    {
      "type": "input_statement",
      "name": "fog_properties",
      "check": "fog_property"
    },
    ],
    "previousStatement": "component",
    "nextStatement": "component",
    "colour": "#A7670C",
    "tooltip": "",
    "helpUrl": ""
  },
  { //fog type 
    "type": "fog-component_type",
    "message0": "set fog type to %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "fog-component_type",
        "options": [
          [ "linear", "linear" ],
          [ "exponential", "exponential" ],
        ]
      }
    ],
    "colour": "#A7670C",
    "previousStatement": "fog_property",
    "nextStatement": "fog_property",
    "tooltip": "",
    "helpUrl": ""
  },
  { //fog color
    "type": "fog-component_color",
    "message0": "set fog color to %1",
    "args0": [
      {
        "type": "field_colour",
        "name": "fog-component_color",
        "check": "colour",
        "colour": '#000'
      }
    ],
    "previousStatement": "fog_property",
    "nextStatement": "fog_property",
    "colour": "#A7670C",
    "tooltip": "",
    "helpUrl": ""
  },
  { //fog near
    "type": "fog-component_near",
    "message0": "set linear fog's near to %1",
    "args0": [
      {
        "type": "field_number",
        "name": "fog-component_near",
        "check": "number",
        "value": 1
      }
    ],
    "previousStatement": "fog_property",
    "nextStatement": "fog_property",
    "colour": "#A7670C",
    "tooltip": "",
    "helpUrl": ""
  },
  { //fog far
    "type": "fog-component_far",
    "message0": "set linear fog's far to %1",
    "args0": [
      {
        "type": "field_number",
        "name": "fog-component_far",
        "check": "number",
        "value": 1000
      }
    ],
    "previousStatement": "fog_property",
    "nextStatement": "fog_property",
    "colour": "#A7670C",
    "tooltip": "",
    "helpUrl": ""
  },
  { //fog density
    "type": "fog-component_density",
    "message0": "set exponential fog's density to %1",
    "args0": [
      {
        "type": "field_number",
        "name": "fog-component_density",
        "check": "number",
        "value": 0.00025
      }
    ],
    "previousStatement": "fog_property",
    "nextStatement": "fog_property",
    "colour": "#A7670C",
    "tooltip": "",
    "helpUrl": ""
  },
  /*End Fog Component */

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
  "previousStatement": "component",
  "nextStatement": "component",
  "colour": "#A73C0C",
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
  "previousStatement": "component",
  "nextStatement": "component",
  "colour": "#A73C0C",
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
  "previousStatement": "component",
  "nextStatement": "component",
  "colour": "#A73C0C",
  "tooltip": "",
  "helpUrl": ""
  },
  /* End Transformation*/

  /* Begin Material */
  {//material
    "type": "material",
    "message0": "add material %1",
    "args0": [
    {
      "type": "input_statement",
      "name": "material_properties",
      "check": "material_property"
    },
    ],
    "previousStatement": "component",
    "nextStatement": "component",
    "colour": "#172073",
    "tooltip": "",
    "helpUrl": ""
  },
  {//material colour
    "type": "material-component_color",
    "message0": "colour %1",
    "args0": [
      {
        "type": "field_colour",
        "name": "material-component_color",
      }
    ],
    "colour": "#172073",
    "previousStatement": "material_property",
    "nextStatement": "material_property",
    "tooltip": "",
    "helpUrl": ""
  },
  {//material src
    "type": "material-component_src",
    "message0": "set material source to %1",
    "args0": [
      {
        "type": "field_input",
        "name": "material-component_src",
        "check": "TEXT"
      }
    ],
    "previousStatement": "material_property",
    "nextStatement": "material_property",
    "colour": "#172073",
    "tooltip": "",
    "helpUrl": ""
  },
  { //material properties
    "type": "material-component_properties",
    "message0": "set material %1 to %2",
    "args0": [
      {
        "type": "field_input",
        "name": "property",
        "text": "property"
      },
      {
        "type": "field_input",
        "name": "value",
        "text": "value"
      }
    ],
    "previousStatement": "material_property",
    "nextStatement": "material_property",
    "colour": "#172073",
    "tooltip": "",
    "helpUrl": ""
  },
  /* End Material */
]

for (let iBlock in componentsBlocks) {
    function makeBlock(json) {
      Blockly.Blocks[json.type] = {
        init: function() {
          this.jsonInit(json);
        }
      }
    }
    makeBlock(componentsBlocks[iBlock]);
  }