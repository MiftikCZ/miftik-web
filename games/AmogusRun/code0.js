gdjs.gameCode = {};
gdjs.gameCode.GDgroundObjects1= [];
gdjs.gameCode.GDgroundObjects2= [];
gdjs.gameCode.GDgroundObjects3= [];
gdjs.gameCode.GDpanacekObjects1= [];
gdjs.gameCode.GDpanacekObjects2= [];
gdjs.gameCode.GDpanacekObjects3= [];
gdjs.gameCode.GDautickoObjects1= [];
gdjs.gameCode.GDautickoObjects2= [];
gdjs.gameCode.GDautickoObjects3= [];
gdjs.gameCode.GDscoreObjects1= [];
gdjs.gameCode.GDscoreObjects2= [];
gdjs.gameCode.GDscoreObjects3= [];

gdjs.gameCode.conditionTrue_0 = {val:false};
gdjs.gameCode.condition0IsTrue_0 = {val:false};
gdjs.gameCode.condition1IsTrue_0 = {val:false};


gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.gameCode.GDscoreObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "auticko spawn");
}{for(var i = 0, len = gdjs.gameCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDscoreObjects1[i].returnVariable(gdjs.gameCode.GDscoreObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


};gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDautickoObjects1Objects = Hashtable.newFrom({"auticko": gdjs.gameCode.GDautickoObjects1});gdjs.gameCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("auticko"), gdjs.gameCode.GDautickoObjects2);
gdjs.copyArray(runtimeScene.getObjects("ground"), gdjs.gameCode.GDgroundObjects2);
{for(var i = 0, len = gdjs.gameCode.GDgroundObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDgroundObjects2[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.gameCode.GDautickoObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDautickoObjects2[i].setX(gdjs.gameCode.GDautickoObjects2[i].getX() - (5.25 + gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) / 120));
}
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "auticko spawn") > 2.40 + gdjs.randomInRange(0.0, 0.20);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.gameCode.GDscoreObjects1);
gdjs.gameCode.GDautickoObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDautickoObjects1Objects, 1312, 492, "");
}{for(var i = 0, len = gdjs.gameCode.GDautickoObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDautickoObjects1[i].setWidth(229);
}
}{for(var i = 0, len = gdjs.gameCode.GDautickoObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDautickoObjects1[i].setHeight(90);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "auticko spawn");
}{for(var i = 0, len = gdjs.gameCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDscoreObjects1[i].returnVariable(gdjs.gameCode.GDscoreObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}}

}


};gdjs.gameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("panacek"), gdjs.gameCode.GDpanacekObjects2);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDpanacekObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDpanacekObjects2[i].getX() < -(145) ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDpanacekObjects2[k] = gdjs.gameCode.GDpanacekObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDpanacekObjects2.length = k;}if (gdjs.gameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "dead", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.gameCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.gameCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDscoreObjects1[i].setString("Score: " + (gdjs.RuntimeObject.getVariableString(gdjs.gameCode.GDscoreObjects1[i].getVariables().getFromIndex(0))));
}
}}

}


};gdjs.gameCode.eventsList3 = function(runtimeScene) {

{


gdjs.gameCode.eventsList0(runtimeScene);
}


{


gdjs.gameCode.eventsList1(runtimeScene);
}


{


gdjs.gameCode.eventsList2(runtimeScene);
}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDgroundObjects1.length = 0;
gdjs.gameCode.GDgroundObjects2.length = 0;
gdjs.gameCode.GDgroundObjects3.length = 0;
gdjs.gameCode.GDpanacekObjects1.length = 0;
gdjs.gameCode.GDpanacekObjects2.length = 0;
gdjs.gameCode.GDpanacekObjects3.length = 0;
gdjs.gameCode.GDautickoObjects1.length = 0;
gdjs.gameCode.GDautickoObjects2.length = 0;
gdjs.gameCode.GDautickoObjects3.length = 0;
gdjs.gameCode.GDscoreObjects1.length = 0;
gdjs.gameCode.GDscoreObjects2.length = 0;
gdjs.gameCode.GDscoreObjects3.length = 0;

gdjs.gameCode.eventsList3(runtimeScene);
return;

}

gdjs['gameCode'] = gdjs.gameCode;
