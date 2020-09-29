gdjs.New_32scene2Code = {};
gdjs.New_32scene2Code.GDNewObjectObjects1= [];
gdjs.New_32scene2Code.GDNewObjectObjects2= [];
gdjs.New_32scene2Code.GDNewObject2Objects1= [];
gdjs.New_32scene2Code.GDNewObject2Objects2= [];
gdjs.New_32scene2Code.GDNewObject3Objects1= [];
gdjs.New_32scene2Code.GDNewObject3Objects2= [];
gdjs.New_32scene2Code.GDNewObject4Objects1= [];
gdjs.New_32scene2Code.GDNewObject4Objects2= [];
gdjs.New_32scene2Code.GDNewObject5Objects1= [];
gdjs.New_32scene2Code.GDNewObject5Objects2= [];
gdjs.New_32scene2Code.GDNewObject6Objects1= [];
gdjs.New_32scene2Code.GDNewObject6Objects2= [];
gdjs.New_32scene2Code.GDNewObject7Objects1= [];
gdjs.New_32scene2Code.GDNewObject7Objects2= [];
gdjs.New_32scene2Code.GDNewObject8Objects1= [];
gdjs.New_32scene2Code.GDNewObject8Objects2= [];
gdjs.New_32scene2Code.GDNewObject9Objects1= [];
gdjs.New_32scene2Code.GDNewObject9Objects2= [];
gdjs.New_32scene2Code.GDNewObject10Objects1= [];
gdjs.New_32scene2Code.GDNewObject10Objects2= [];

gdjs.New_32scene2Code.conditionTrue_0 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition2IsTrue_0 = {val:false};


gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32scene2Code.GDNewObject3Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.New_32scene2Code.GDNewObject5Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32scene2Code.GDNewObject3Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene2Code.GDNewObject2Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.New_32scene2Code.GDNewObject5Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene2Code.GDNewObject2Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32scene2Code.GDNewObject3Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject9Objects1Objects = Hashtable.newFrom({"NewObject9": gdjs.New_32scene2Code.GDNewObject9Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32scene2Code.GDNewObject3Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene2Code.GDNewObject2Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject10Objects1Objects = Hashtable.newFrom({"NewObject10": gdjs.New_32scene2Code.GDNewObject10Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32scene2Code.GDNewObject3Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject10Objects1Objects = Hashtable.newFrom({"NewObject10": gdjs.New_32scene2Code.GDNewObject10Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene2Code.GDNewObject2Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject9Objects1Objects = Hashtable.newFrom({"NewObject9": gdjs.New_32scene2Code.GDNewObject9Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32scene2Code.GDNewObject3Objects1});gdjs.New_32scene2Code.eventsList0 = function(runtimeScene) {

{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad8");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene2Code.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject2Objects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad4");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene2Code.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject2Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad6");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene2Code.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject2Objects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene2Code.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.New_32scene2Code.GDNewObject5Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject5Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDNewObject3Objects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject3Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects, 350, 230, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene2Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.New_32scene2Code.GDNewObject5Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject2Objects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject5Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject2Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject2Objects1Objects, 350, 230, "");
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene2Code.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject3Objects1[i].flipX(true);
}
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene2Code.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject3Objects1[i].flipX(false);
}
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad4");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene2Code.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject2Objects1[i].flipX(false);
}
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Numpad6");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene2Code.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject2Objects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene2Code.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject9"), gdjs.New_32scene2Code.GDNewObject9Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject9Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDNewObject3Objects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject3Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects, 1345, 100, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject10"), gdjs.New_32scene2Code.GDNewObject10Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene2Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene2Code.GDNewObject3Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject2Objects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject10Objects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene2Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject10Objects1Objects, false, runtimeScene, false);
}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene2Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject9"), gdjs.New_32scene2Code.GDNewObject9Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject2Objects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject9Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene2Code.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject3Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects, 1345, 100, "");
}}

}


};

gdjs.New_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene2Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject5Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject5Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject6Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject6Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject7Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject7Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject8Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject8Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject9Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject9Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject10Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject10Objects2.length = 0;

gdjs.New_32scene2Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene2Code'] = gdjs.New_32scene2Code;
