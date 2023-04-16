gdjs.mainCode = {};
gdjs.mainCode.GDbattle_95buttonObjects1= [];
gdjs.mainCode.GDbattle_95buttonObjects2= [];
gdjs.mainCode.GDcloudObjects1= [];
gdjs.mainCode.GDcloudObjects2= [];
gdjs.mainCode.GDtitleObjects1= [];
gdjs.mainCode.GDtitleObjects2= [];
gdjs.mainCode.GDplay_95textObjects1= [];
gdjs.mainCode.GDplay_95textObjects2= [];
gdjs.mainCode.GDmax_95score_95textObjects1= [];
gdjs.mainCode.GDmax_95score_95textObjects2= [];

gdjs.mainCode.conditionTrue_0 = {val:false};
gdjs.mainCode.condition0IsTrue_0 = {val:false};
gdjs.mainCode.condition1IsTrue_0 = {val:false};


gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDbattle_9595buttonObjects1Objects = Hashtable.newFrom({"battle_button": gdjs.mainCode.GDbattle_95buttonObjects1});gdjs.mainCode.eventsList0 = function(runtimeScene) {

{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.mainCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "default", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


};gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDbattle_9595buttonObjects1Objects = Hashtable.newFrom({"battle_button": gdjs.mainCode.GDbattle_95buttonObjects1});gdjs.mainCode.eventsList1 = function(runtimeScene) {

{


gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.mainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("battle_button"), gdjs.mainCode.GDbattle_95buttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("max_score_text"), gdjs.mainCode.GDmax_95score_95textObjects1);
{gdjs.evtTools.advancedWindow.setMaximizable(true);
}{gdjs.evtTools.advancedWindow.setFullScreenable(true);
}{gdjs.evtTools.storage.readStringFromJSONFile("player", "max_score", runtimeScene, runtimeScene.getVariables().get("max_score_temp"));
}{for(var i = 0, len = gdjs.mainCode.GDmax_95score_95textObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDmax_95score_95textObjects1[i].setString("Max score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("max_score_temp")));
}
}{for(var i = 0, len = gdjs.mainCode.GDbattle_95buttonObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDbattle_95buttonObjects1[i].setX(0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("battle_button"), gdjs.mainCode.GDbattle_95buttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("max_score_text"), gdjs.mainCode.GDmax_95score_95textObjects1);
gdjs.copyArray(runtimeScene.getObjects("play_text"), gdjs.mainCode.GDplay_95textObjects1);
{for(var i = 0, len = gdjs.mainCode.GDplay_95textObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplay_95textObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.mainCode.GDplay_95textObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDplay_95textObjects1[i].setCenterYInScene((( gdjs.mainCode.GDbattle_95buttonObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDbattle_95buttonObjects1[0].getY()) + ((( gdjs.mainCode.GDbattle_95buttonObjects1.length === 0 ) ? 0 :gdjs.mainCode.GDbattle_95buttonObjects1[0].getHeight()) / 2));
}
}{for(var i = 0, len = gdjs.mainCode.GDmax_95score_95textObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDmax_95score_95textObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.mainCode.GDbattle_95buttonObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDbattle_95buttonObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("battle_button"), gdjs.mainCode.GDbattle_95buttonObjects1);

gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDbattle_9595buttonObjects1Objects, runtimeScene, true, false);
}if (gdjs.mainCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.mainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("battle_button"), gdjs.mainCode.GDbattle_95buttonObjects1);

gdjs.mainCode.condition0IsTrue_0.val = false;
{
gdjs.mainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_46mainCode_46GDbattle_9595buttonObjects1Objects, runtimeScene, true, true);
}if (gdjs.mainCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "default", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.mainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainCode.GDbattle_95buttonObjects1.length = 0;
gdjs.mainCode.GDbattle_95buttonObjects2.length = 0;
gdjs.mainCode.GDcloudObjects1.length = 0;
gdjs.mainCode.GDcloudObjects2.length = 0;
gdjs.mainCode.GDtitleObjects1.length = 0;
gdjs.mainCode.GDtitleObjects2.length = 0;
gdjs.mainCode.GDplay_95textObjects1.length = 0;
gdjs.mainCode.GDplay_95textObjects2.length = 0;
gdjs.mainCode.GDmax_95score_95textObjects1.length = 0;
gdjs.mainCode.GDmax_95score_95textObjects2.length = 0;

gdjs.mainCode.eventsList1(runtimeScene);
return;

}

gdjs['mainCode'] = gdjs.mainCode;
