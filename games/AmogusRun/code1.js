gdjs.deadCode = {};
gdjs.deadCode.GDjsi_95dead_95textObjects1= [];
gdjs.deadCode.GDjsi_95dead_95textObjects2= [];
gdjs.deadCode.GDokObjects1= [];
gdjs.deadCode.GDokObjects2= [];

gdjs.deadCode.conditionTrue_0 = {val:false};
gdjs.deadCode.condition0IsTrue_0 = {val:false};
gdjs.deadCode.condition1IsTrue_0 = {val:false};
gdjs.deadCode.condition2IsTrue_0 = {val:false};


gdjs.deadCode.mapOfGDgdjs_46deadCode_46GDokObjects1Objects = Hashtable.newFrom({"ok": gdjs.deadCode.GDokObjects1});gdjs.deadCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("jsi_dead_text"), gdjs.deadCode.GDjsi_95dead_95textObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.deadCode.GDokObjects1);
{for(var i = 0, len = gdjs.deadCode.GDjsi_95dead_95textObjects1.length ;i < len;++i) {
    gdjs.deadCode.GDjsi_95dead_95textObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.deadCode.GDokObjects1.length ;i < len;++i) {
    gdjs.deadCode.GDokObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.deadCode.GDokObjects1);

gdjs.deadCode.condition0IsTrue_0.val = false;
gdjs.deadCode.condition1IsTrue_0.val = false;
{
gdjs.deadCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.deadCode.mapOfGDgdjs_46deadCode_46GDokObjects1Objects, runtimeScene, true, false);
}if ( gdjs.deadCode.condition0IsTrue_0.val ) {
{
gdjs.deadCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.deadCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


};

gdjs.deadCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.deadCode.GDjsi_95dead_95textObjects1.length = 0;
gdjs.deadCode.GDjsi_95dead_95textObjects2.length = 0;
gdjs.deadCode.GDokObjects1.length = 0;
gdjs.deadCode.GDokObjects2.length = 0;

gdjs.deadCode.eventsList0(runtimeScene);
return;

}

gdjs['deadCode'] = gdjs.deadCode;
