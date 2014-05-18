#pragma strict


function Start () {

	StartCoroutine("DieAfterAWhile");
}

function Update () {

}

function DieAfterAWhile()
{
	yield WaitForSeconds(1.8);
	GameObject.Destroy(this.gameObject);
}