#pragma strict

var movingUp:boolean;
var spd:float;
var loc1:float;
var loc2:float;

function Start () {

	movingUp = true;
	spd = 0.5;
}

function Update () {

 
 	if (movingUp == true)
	{
		transform.Translate(Vector3.down * spd * Time.deltaTime);
		spd += 0.05;
		if (transform.position.y <= loc1)
		{
			movingUp = false;
			spd=0;
			
		}
	}
	
	if (movingUp == false)
	{
		transform.Translate(Vector3.up * spd * Time.deltaTime);
		spd += 0.05;
		if (transform.position.y >= loc2)
		{
			movingUp = true;
			spd=0;
		}
	}
}

