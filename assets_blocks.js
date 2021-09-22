"use strict";

const assetsBlocks =
[
/* Begin Assets*/
  {//assets
    "type": "assets",
    "message0": "preload asset(s) %1",
    "args0": [
    {
        "type": "input_statement",
        "name": "assets",
        "check": "asset"
    }
    ],
    "colour": "#000000",
    "tooltip": "",
    "helpUrl": ""
  },
  {//assets
    "type": "asset-item",
    "message0": "asset-item %1",
    "args0": [
    {
        "type": "input_statement",
        "name": "asset-item",
        "check": "asset_property"
    }
    ],
    "previousStatement": "asset",
    "nextStatement": "asset",
    "colour": "#000000",
    "tooltip": "",
    "helpUrl": ""
  },
  { //asset id 
    "type": "asset_id",
    "message0": "set asset id to %1",
    "args0": [
      {
        "type": "field_input",
        "name": "asset_id"
      }
    ],
    "previousStatement": "asset_property",
    "nextStatement": "asset_property",
    "colour": "#000000",
  },
  
  { //asset src 
    "type": "asset_src",
    "message0": "set asset src to %1",
    "args0": [
      {
        "type": "field_input",
        "name": "asset_src"
      }
    ],
    "previousStatement": "asset_property",
    "nextStatement": "asset_property",
    "colour": "#000000",
  }
/* End Assets*/
]
for (let iBlock in assetsBlocks) {
  function makeBlock(json) {
    Blockly.Blocks[json.type] = {
      init: function() {
        this.jsonInit(json);
      }
    }
  }
  makeBlock(assetsBlocks[iBlock]);
}