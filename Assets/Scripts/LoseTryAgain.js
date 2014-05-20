#pragma strict

var skinTry:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI ()
{
	GUI.skin = skinTry;

	if(GUI.Button(Rect(500,550,400,150), " "))
	{
		Application.LoadLevel(1);
	}

}