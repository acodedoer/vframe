"use strict";

const entitiesBlocks =
[
/* Begin Entities*/
  {//entity
    "type": "entity",
    "message0": "create entity %1 component(s) %2 child(ren) %3",
    "args0": [
    {
        "type": "input_dummy"
    },
    {
        "type": "input_statement",
        "name": "components",
        "check": "component"
    },
    {
        "type": "input_statement",
        "name": "children",
        "check": "entity"
    }
    ],
    "previousStatement": "entity",
    "nextStatement": "entity",
    "colour": "#7A0000",
    "tooltip": "",
    "helpUrl": ""
  },
  {//childless entity
  "type": "entity_childless",
  "message0": "create entity %1 component(s) %2",
  "args0": [
  {
      "type": "input_dummy"
  },
  {
      "type": "input_statement",
      "name": "components",
      "check": "component"
  },
  ],
  "previousStatement": "entity",
  "nextStatement": "entity",
  "colour": "#7A0000",
  "tooltip": "",
  "helpUrl": ""
  },
  ,
  {//entity id
    "type": "entity_id",
    "message0": "set entity id to %1",
    "args0": [
      {
        "type": "field_input",
        "name": "entity_id",
        "value": 18
      }
    ],
    "colour": "#7A0000",
    "previousStatement": "component",
    "nextStatement": "component",
    "tooltip": "",
    "helpUrl": ""
  },
  {//primitive entity
    "type": "primitive_entity",
    "message0": "create a primitive%1 component(s) %2 child(ren) %3",
    "args0": [
    {
      "type": "input_value",
      "name": "primitive_entity",
      "check": "entity_primitive"
    },
    {
      "type": "input_statement",
      "name": "components",
      "check": "component"
    },
    {
      "type": "input_statement",
      "name": "children",
      "check": ["entity", "primitive"]
    }
    ],
    "previousStatement": ["entity", "primitive"],
    "nextStatement": ["entity", "primitive"],
    "colour": "#FF0A0A",
    "tooltip": "",
    "helpUrl": ""
  },
  { //childless primitive entity
    "type": "primitive_entity_childless",
    "message0": "create a primitive %1 component(s) %2",
    "args0": [
    {
      "type": "input_value",
      "name": "primitive_entity",
      "check": "entity_primitive"
    },
    {
      "type": "input_statement",
      "name": "components",
      "check": "component"
    }
    ],
    "previousStatement": ["entity", "primitive"],
    "nextStatement": ["entity", "primitive"],
    "colour": "#FF0A0A",
    "tooltip": "",
    "helpUrl": ""
  },
  {//entity id
    "type": "primitiveentity_id",
    "message0": "set entity id to %1",
    "args0": [
      {
        "type": "field_input",
        "name": "primitiveentity_id",
        "value": 18
      }
    ],
    "colour": "#FF0A0A",
    "previousStatement": "component",
    "nextStatement": "component",
    "tooltip": "",
    "helpUrl": ""
  },
/* End Entities*/
]
for (let iBlock in entitiesBlocks) {
  function makeBlock(json) {
    Blockly.Blocks[json.type] = {
      init: function() {
        this.jsonInit(json);
      }
    }
  }
  makeBlock(entitiesBlocks[iBlock]);
}