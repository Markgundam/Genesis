#pragma strict

var skinExit:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI ()
{
	GUI.skin = skinExit;
	
	if(GUI.Button(Rect(900,600,350,150), " "))
	{
		Application.Quit();
	}


}