#pragma strict

var skinTry:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI ()
{
	GUI.skin = skinTry;

	if(GUI.Button(Rect(400,600,350,150), " "))
	{
		Application.LoadLevel(1);
	}

}