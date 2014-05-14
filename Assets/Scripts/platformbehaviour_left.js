#pragma strict

var movingLeft:boolean;
var spd:float;
var loc1:float;
var loc2:float;

function Start () {

	movingLeft = true;
	spd = 0.5;
}

function Update () {

 
 	if (movingLeft == true)
	{
		transform.Translate(Vector3.left * spd * Time.deltaTime);
		spd += 0.05;
		if (transform.position.x <= loc1)
		{
			movingLeft = false;
			spd=0;
			
		}
	}
	
	if (movingLeft == false)
	{
		transform.Translate(Vector3.right * spd * Time.deltaTime);
		spd += 0.05;
		if (transform.position.x >= loc2)
		{
			movingLeft = true;
			spd=0;
		}
	}
}

