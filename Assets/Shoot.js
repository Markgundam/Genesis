#pragma strict
var laser:Rigidbody;


function Start () {

}

function Update () {

if(Input.GetKeyDown(KeyCode.Space))
	{
		Instantiate (laser);
	}
}