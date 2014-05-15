#pragma strict

var grounded:boolean;
var charspeed:int;
var health:float;
var localScale: Vector3;
var horPower: float;
var robot : Transform;
var gun : Transform;
var anim : Animator;
var boom:boolean = true;
var renderers:MeshRenderer[];
var totalpoints:int;
var CanDie:boolean = true;

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

function Update () {

	horPower = Input.GetAxis("Horizontal");
		if(horPower != 0f)
		{	
			if(horPower < 0)
			{
				robot.localScale.x = -1;
			}
			else if(horPower > 0)
			{
				robot.localScale.x = 1;
			}
		
			anim.SetBool("walk", true);
			transform.Translate(Vector3.left * charspeed * Time.deltaTime * horPower);
		}
		else
		{		
			anim.SetBool("walk", false);
		}
		
		rigidbody.AddForce(Vector3(0,-10,0)); //gravity?

	
	if(grounded == true && Input.GetKeyDown(KeyCode.W) || grounded == true && Input.GetKeyDown(KeyCode.UpArrow))
	{
		//jump
		rigidbody.AddForce(Vector3(0,500,0));
		
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
		//rigidbody.AddForce(Vector3(-400,0,0));
	}
	
}



function ReduceHealth(damageplayer:int)
{
	if(CanDie == true)
	{
		health = health - damageplayer;
		var currenthealth = health;
		Debug.Log(health);
		if(health <= 0)
		{
			GameObject.Destroy(this.gameObject);
		}
	}
}

function hit() 
{
	if(CanDie == true)
	{
	StartCoroutine(flash());
	}
}

function flash()
{	
	for(var i=0; i<8; i++)
	{
	boom = !boom;
	Debug.Log(boom + " " + i);
	for(var r:MeshRenderer in renderers)
	{
		
		r.enabled = boom;
	}
	yield WaitForSeconds(0.1);
	}
}

function ReceivePoints(points:int)
{
	totalpoints = totalpoints + points;
}