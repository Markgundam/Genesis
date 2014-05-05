#pragma strict

var laserspeed:int;

function Start () {

}

function Update () {

	transform.Translate(Vector3.up * 50 * Time.deltaTime);

}