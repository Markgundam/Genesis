#pragma strict

var skinExit:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI ()
{
	GUI.skin = skinExit;
	
	if(GUI.Button(Rect(1020,550,400,150), " "))
	{
		Application.Quit();
	}


}