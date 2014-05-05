#pragma strict

private var grounded:boolean;
var charspeed:int;


function OnCollisionEnter(c:Collision)
{
	if(c.gameObject.tag == "platform")
	{
		grounded = true;
	}
}

function OnCollisionExit(c:Collision)
{
	if(c.gameObject.tag == "platform")
	{
		grounded = false;
	}
}

function Start () {

	grounded = false;
	
}

function Update () {

	transform.Translate(Vector3.right * charspeed * Time.deltaTime * Input.GetAxis("Horizontal"));
	
	rigidbody.AddForce(Vector3(0,-10,0));
	
	if(grounded == true && Input.GetKeyDown(KeyCode.W))
	{
		//jump
		rigidbody.AddForce(Vector3(0,300,0));
	}

}