#pragma strict
var skinwebsite:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI () {

	GUI.skin = skinwebsite;

	if (GUI.Button (Rect (400,600,350,150), " ")) 
	{
		Application.LoadLevel(1);
	}	
	
}

