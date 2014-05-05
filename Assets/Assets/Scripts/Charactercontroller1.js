#pragma strict

var grounded:boolean;
var charspeed:int;
var health:float;
var localScale: Vector3;
var pressedleft:boolean;
var pressedright:boolean;

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
	pressedright = true;
	pressedleft = false;
	
}

function Update () {

	transform.Translate(Vector3.left * charspeed * Time.deltaTime * Input.GetAxis("Horizontal"));
	
	if(pressedleft==false)
	{
		if(Input.GetKeyDown(KeyCode.A))
		{
			transform.localScale += Vector3(-2,0,0);
			pressedleft = true;
			pressedright = false;
		}
	}
	
	if(pressedright==false)
	{
		if(Input.GetKeyDown(KeyCode.D))
		{
			transform.localScale += Vector3(2,0,0);
			pressedright = true;
			pressedleft = false;
		}
	}
	
	if(grounded == true && Input.GetKeyDown(KeyCode.D) || Input.GetKeyDown(KeyCode.A))
	{
		animation.Play("Walk");
		animation["Walk"].speed= 2.0;
	}
	
	else if(Input.GetKeyUp(KeyCode.D) || Input.GetKeyUp(KeyCode.A))
	{
		animation.Play("Idle");
	}
	
	

	rigidbody.AddForce(Vector3(0,-10,0));
	
	if(grounded == true && Input.GetKeyDown(KeyCode.W))
	{
		//jump
		rigidbody.AddForce(Vector3(0,400,0));
		
	}
	
	if(grounded == false)
	{
		animation.Play("Idle");
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