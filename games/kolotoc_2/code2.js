gdjs.deathCode = {};
gdjs.deathCode.GDpopisek_95textObjects1= [];
gdjs.deathCode.GDpopisek_95textObjects2= [];
gdjs.deathCode.GDpopisek_95textObjects3= [];
gdjs.deathCode.GDrespawn_95buttonObjects1= [];
gdjs.deathCode.GDrespawn_95buttonObjects2= [];
gdjs.deathCode.GDrespawn_95buttonObjects3= [];
gdjs.deathCode.GDbackgroundObjects1= [];
gdjs.deathCode.GDbackgroundObjects2= [];
gdjs.deathCode.GDbackgroundObjects3= [];

gdjs.deathCode.conditionTrue_0 = {val:false};
gdjs.deathCode.condition0IsTrue_0 = {val:false};
gdjs.deathCode.condition1IsTrue_0 = {val:false};


gdjs.deathCode.mapOfGDgdjs_46deathCode_46GDrespawn_9595buttonObjects1Objects = Hashtable.newFrom({"respawn_button": gdjs.deathCode.GDrespawn_95buttonObjects1});gdjs.deathCode.mapOfGDgdjs_46deathCode_46GDrespawn_9595buttonObjects1Objects = Hashtable.newFrom({"respawn_button": gdjs.deathCode.GDrespawn_95buttonObjects1});gdjs.deathCode.eventsList0 = function(runtimeScene) {

{


gdjs.deathCode.condition0IsTrue_0.val = false;
{
gdjs.deathCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.deathCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


{


gdjs.deathCode.condition0IsTrue_0.val = false;
{
gdjs.deathCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.deathCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


};gdjs.deathCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("popisek_text"), gdjs.deathCode.GDpopisek_95textObjects1);
gdjs.copyArray(runtimeScene.getObjects("respawn_button"), gdjs.deathCode.GDrespawn_95buttonObjects1);
{for(var i = 0, len = gdjs.deathCode.GDrespawn_95buttonObjects1.length ;i < len;++i) {
    gdjs.deathCode.GDrespawn_95buttonObjects1[i].setCenterXInScene((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2));
}
}{for(var i = 0, len = gdjs.deathCode.GDpopisek_95textObjects1.length ;i < len;++i) {
    gdjs.deathCode.GDpopisek_95textObjects1[i].setCenterXInScene((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("respawn_button"), gdjs.deathCode.GDrespawn_95buttonObjects1);

gdjs.deathCode.condition0IsTrue_0.val = false;
{
gdjs.deathCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.deathCode.mapOfGDgdjs_46deathCode_46GDrespawn_9595buttonObjects1Objects, runtimeScene, false, true);
}if (gdjs.deathCode.condition0IsTrue_0.val) {
/* Reuse gdjs.deathCode.GDrespawn_95buttonObjects1 */
{for(var i = 0, len = gdjs.deathCode.GDrespawn_95buttonObjects1.length ;i < len;++i) {
    gdjs.deathCode.GDrespawn_95buttonObjects1[i].setAnimationName("default");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("respawn_button"), gdjs.deathCode.GDrespawn_95buttonObjects1);

gdjs.deathCode.condition0IsTrue_0.val = false;
{
gdjs.deathCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.deathCode.mapOfGDgdjs_46deathCode_46GDrespawn_9595buttonObjects1Objects, runtimeScene, false, false);
}if (gdjs.deathCode.condition0IsTrue_0.val) {
/* Reuse gdjs.deathCode.GDrespawn_95buttonObjects1 */
{for(var i = 0, len = gdjs.deathCode.GDrespawn_95buttonObjects1.length ;i < len;++i) {
    gdjs.deathCode.GDrespawn_95buttonObjects1[i].setAnimationName("hover");
}
}
{ //Subevents
gdjs.deathCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.deathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.deathCode.GDpopisek_95textObjects1.length = 0;
gdjs.deathCode.GDpopisek_95textObjects2.length = 0;
gdjs.deathCode.GDpopisek_95textObjects3.length = 0;
gdjs.deathCode.GDrespawn_95buttonObjects1.length = 0;
gdjs.deathCode.GDrespawn_95buttonObjects2.length = 0;
gdjs.deathCode.GDrespawn_95buttonObjects3.length = 0;
gdjs.deathCode.GDbackgroundObjects1.length = 0;
gdjs.deathCode.GDbackgroundObjects2.length = 0;
gdjs.deathCode.GDbackgroundObjects3.length = 0;

gdjs.deathCode.eventsList1(runtimeScene);
return;

}

gdjs['deathCode'] = gdjs.deathCode;
