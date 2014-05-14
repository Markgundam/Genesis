#pragma strict

var grounded:boolean;
var charspeed:int;
var health:float;

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
		rigidbody.AddForce(Vector3(0,400,0));
	}
	
	//BOOST CONTROL

	if(grounded == false && Input.GetMouseButtonDown(1) && Input.GetKey(KeyCode.D))
	{
		//jump
		rigidbody.AddForce(Vector3(400,0,0));
	}
	
	if(grounded == false && Input.GetMouseButtonDown(1) && Input.GetKey(KeyCode.A))
	{
		//jump
		rigidbody.AddForce(Vector3(-400,0,0));
	}
	
}

function ReduceHealth(damageenemy:int)
{
	health = health - damageenemy;
	if(health <= 0)
	{
		//change scene to lose scene
	}
}