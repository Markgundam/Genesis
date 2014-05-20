#pragma strict
var skinexit:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI () {

	GUI.skin = skinexit;

	if (GUI.Button (Rect (1020,600,400,150), " ")) 
	{
		Application.Quit();
	}	
	
}

