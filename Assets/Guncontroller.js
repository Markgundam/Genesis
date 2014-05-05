#pragma strict


function Start () {

}

function Update () {

if(Input.GetKey(KeyCode.UpArrow))
	{
		transform.Rotate(Vector3.forward * 70 * Time.deltaTime);
	}
if(Input.GetKey(KeyCode.DownArrow))
	{
		transform.Rotate(Vector3.forward * -70 * Time.deltaTime);
	}

}