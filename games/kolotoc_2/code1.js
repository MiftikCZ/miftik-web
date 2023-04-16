gdjs.winCode = {};
gdjs.winCode.GDpopisek_95textObjects1= [];
gdjs.winCode.GDpopisek_95textObjects2= [];
gdjs.winCode.GDpopisek_95textObjects3= [];
gdjs.winCode.GDrespawn_95buttonObjects1= [];
gdjs.winCode.GDrespawn_95buttonObjects2= [];
gdjs.winCode.GDrespawn_95buttonObjects3= [];
gdjs.winCode.GDbackgroundObjects1= [];
gdjs.winCode.GDbackgroundObjects2= [];
gdjs.winCode.GDbackgroundObjects3= [];

gdjs.winCode.conditionTrue_0 = {val:false};
gdjs.winCode.condition0IsTrue_0 = {val:false};
gdjs.winCode.condition1IsTrue_0 = {val:false};


gdjs.winCode.mapOfGDgdjs_46winCode_46GDrespawn_9595buttonObjects1Objects = Hashtable.newFrom({"respawn_button": gdjs.winCode.GDrespawn_95buttonObjects1});gdjs.winCode.mapOfGDgdjs_46winCode_46GDrespawn_9595buttonObjects1Objects = Hashtable.newFrom({"respawn_button": gdjs.winCode.GDrespawn_95buttonObjects1});gdjs.winCode.eventsList0 = function(runtimeScene) {

{


gdjs.winCode.condition0IsTrue_0.val = false;
{
gdjs.winCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.winCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


{


gdjs.winCode.condition0IsTrue_0.val = false;
{
gdjs.winCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.winCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


};gdjs.winCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("popisek_text"), gdjs.winCode.GDpopisek_95textObjects1);
gdjs.copyArray(runtimeScene.getObjects("respawn_button"), gdjs.winCode.GDrespawn_95buttonObjects1);
{for(var i = 0, len = gdjs.winCode.GDrespawn_95buttonObjects1.length ;i < len;++i) {
    gdjs.winCode.GDrespawn_95buttonObjects1[i].setCenterXInScene((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2));
}
}{for(var i = 0, len = gdjs.winCode.GDpopisek_95textObjects1.length ;i < len;++i) {
    gdjs.winCode.GDpopisek_95textObjects1[i].setCenterXInScene((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("respawn_button"), gdjs.winCode.GDrespawn_95buttonObjects1);

gdjs.winCode.condition0IsTrue_0.val = false;
{
gdjs.winCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.winCode.mapOfGDgdjs_46winCode_46GDrespawn_9595buttonObjects1Objects, runtimeScene, false, true);
}if (gdjs.winCode.condition0IsTrue_0.val) {
/* Reuse gdjs.winCode.GDrespawn_95buttonObjects1 */
{for(var i = 0, len = gdjs.winCode.GDrespawn_95buttonObjects1.length ;i < len;++i) {
    gdjs.winCode.GDrespawn_95buttonObjects1[i].setAnimationName("default");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("respawn_button"), gdjs.winCode.GDrespawn_95buttonObjects1);

gdjs.winCode.condition0IsTrue_0.val = false;
{
gdjs.winCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.winCode.mapOfGDgdjs_46winCode_46GDrespawn_9595buttonObjects1Objects, runtimeScene, false, false);
}if (gdjs.winCode.condition0IsTrue_0.val) {
/* Reuse gdjs.winCode.GDrespawn_95buttonObjects1 */
{for(var i = 0, len = gdjs.winCode.GDrespawn_95buttonObjects1.length ;i < len;++i) {
    gdjs.winCode.GDrespawn_95buttonObjects1[i].setAnimationName("hover");
}
}
{ //Subevents
gdjs.winCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winCode.GDpopisek_95textObjects1.length = 0;
gdjs.winCode.GDpopisek_95textObjects2.length = 0;
gdjs.winCode.GDpopisek_95textObjects3.length = 0;
gdjs.winCode.GDrespawn_95buttonObjects1.length = 0;
gdjs.winCode.GDrespawn_95buttonObjects2.length = 0;
gdjs.winCode.GDrespawn_95buttonObjects3.length = 0;
gdjs.winCode.GDbackgroundObjects1.length = 0;
gdjs.winCode.GDbackgroundObjects2.length = 0;
gdjs.winCode.GDbackgroundObjects3.length = 0;

gdjs.winCode.eventsList1(runtimeScene);
return;

}

gdjs['winCode'] = gdjs.winCode;
