
gdjs.evtsExt__AdvancedJump__AdvancedJump = gdjs.evtsExt__AdvancedJump__AdvancedJump || {};

/**
 * Behavior generated from Advanced jump
 */
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump = class AdvancedJump extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.CoyoteTimeFrameDuration = behaviorData.CoyoteTimeFrameDuration !== undefined ? behaviorData.CoyoteTimeFrameDuration : Number("0,1") || 0;
    this._behaviorData.PlatformerBehavior = behaviorData.PlatformerBehavior !== undefined ? behaviorData.PlatformerBehavior : "";
    this._behaviorData.CanCoyoteJump = false;
    this._behaviorData.WasInTheAir = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.CoyoteTimeFrameDuration !== newBehaviorData.CoyoteTimeFrameDuration)
      this._behaviorData.CoyoteTimeFrameDuration = newBehaviorData.CoyoteTimeFrameDuration;
    if (oldBehaviorData.PlatformerBehavior !== newBehaviorData.PlatformerBehavior)
      this._behaviorData.PlatformerBehavior = newBehaviorData.PlatformerBehavior;
    if (oldBehaviorData.CanCoyoteJump !== newBehaviorData.CanCoyoteJump)
      this._behaviorData.CanCoyoteJump = newBehaviorData.CanCoyoteJump;
    if (oldBehaviorData.WasInTheAir !== newBehaviorData.WasInTheAir)
      this._behaviorData.WasInTheAir = newBehaviorData.WasInTheAir;

    return true;
  }

  // Properties:
  
  _getCoyoteTimeFrameDuration() {
    return this._behaviorData.CoyoteTimeFrameDuration !== undefined ? this._behaviorData.CoyoteTimeFrameDuration : Number("0,1") || 0;
  }
  _setCoyoteTimeFrameDuration(newValue) {
    this._behaviorData.CoyoteTimeFrameDuration = newValue;
  }
  _getPlatformerBehavior() {
    return this._behaviorData.PlatformerBehavior !== undefined ? this._behaviorData.PlatformerBehavior : "";
  }
  _setPlatformerBehavior(newValue) {
    this._behaviorData.PlatformerBehavior = newValue;
  }
  _getCanCoyoteJump() {
    return this._behaviorData.CanCoyoteJump !== undefined ? this._behaviorData.CanCoyoteJump : false;
  }
  _setCanCoyoteJump(newValue) {
    this._behaviorData.CanCoyoteJump = newValue;
  }
  _getWasInTheAir() {
    return this._behaviorData.WasInTheAir !== undefined ? this._behaviorData.WasInTheAir : false;
  }
  _setWasInTheAir(newValue) {
    this._behaviorData.WasInTheAir = newValue;
  }
}

// Methods:
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3= [];

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWasInTheAir()) ) {
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isFalling() ) {
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("__CoyoteTime_CoyoteJump");
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).setCanJump();
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCanCoyoteJump(true);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCanCoyoteJump() ) {
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].timerElapsedTime("__CoyoteTime_CoyoteJump", (gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCoyoteTimeFrameDuration())) ) {
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}}
if (gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).setCanNotAirJump();
}
}{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCanCoyoteJump(false);
}
}}

}


{



}


{


{
/* Reuse gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateWasInTheAir((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCoyoteTimeFrameDuration() > 0 ) {
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateWasInTheAir((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.GDObjectObjects2= [];

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.GDObjectObjects1[i].removeTimer("__CoyoteTime_CoyoteJump");
}
}}

}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.GDObjectObjects2= [];

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateWasInTheAir((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.onActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects2= [];

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1);

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCoyoteTimeFrameDuration() <= 0 ) {
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateWasInTheAir((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCoyoteTimeFrameDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CoyoteTime")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTime = function(CoyoteTime, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
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
if (argName === "CoyoteTime") return CoyoteTime;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.SetCoyoteTimeContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.GDObjectObjects2= [];

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.GDObjectObjects1);

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCanCoyoteJump() ) {
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJump = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.CanCoyoteJumpContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext = {};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1= [];
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects2= [];

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.condition3IsTrue_0 = {val:false};


gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasInTheAir(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1);

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.condition1IsTrue_0.val = false;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isOnFloor()) ) {
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isGrabbingPlatform()) ) {
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerBehavior")).isOnLadder()) ) {
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.condition2IsTrue_0.val = true;
        gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[k] = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length = k;}}
}
if (gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.condition2IsTrue_0.val) {
/* Reuse gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasInTheAir(true);
}
}}

}


};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAir = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerBehavior": this._getPlatformerBehavior()
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump.prototype.UpdateWasInTheAirContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}


gdjs.registerBehavior("AdvancedJump::AdvancedJump", gdjs.evtsExt__AdvancedJump__AdvancedJump.AdvancedJump);
