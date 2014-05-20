#pragma strict
var skinwebsite:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI () {

	GUI.skin = skinwebsite;

	if (GUI.Button (Rect (500,600,400,150), " ")) 
	{
		Application.LoadLevel(1);
	}	
	
}

