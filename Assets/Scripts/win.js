#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(coll:Collision)
{
	if(coll.gameObject.tag == "Player")
	{
		Application.LoadLevel(5);
	}
}