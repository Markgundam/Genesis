#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
	if (GUI.Button (Rect (200,350,250,100), "Play Game")) {
		Application.LoadLevel(1);
	}	
	
	if (GUI.Button (Rect (600,350,250,100), "Go to Website")) {
		
	}	
}

