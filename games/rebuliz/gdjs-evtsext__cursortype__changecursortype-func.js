gdjs.evtsExt__CursorType__ChangeCursorType = {};

gdjs.evtsExt__CursorType__ChangeCursorType.conditionTrue_0 = {val:false};
gdjs.evtsExt__CursorType__ChangeCursorType.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__CursorType__ChangeCursorType.userFunc0x824af0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const cursor = runtimeScene.getGame().getVariables().get("__CursorType_defaultCursor").getAsString() || "default"
runtimeScene.getGame().getRenderer().getCanvas().style.cursor = cursor
};
gdjs.evtsExt__CursorType__ChangeCursorType.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{runtimeScene.getGame().getVariables().get("__CursorType_defaultCursor").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("cursor_type") : ""));
}}

}


{


{
}

}


{


gdjs.evtsExt__CursorType__ChangeCursorType.userFunc0x824af0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CursorType__ChangeCursorType.func = function(runtimeScene, cursor_type, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "cursor_type") return cursor_type;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CursorType__ChangeCursorType.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

