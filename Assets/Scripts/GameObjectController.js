#pragma strict

var grounded:boolean;
var charspeed:int;
var health:int;
var maxhealth:int;
var receivedhealth:int;
static var PubHealth:int;
var escape:boolean;

var localScale: Vector3;

var pause:GameObject;

var horPower: float;

var robot : Transform;
var gun : Transform;

var anim : Animator;
var boom:boolean = true;
var renderers:MeshRenderer[];
var totalpoints:int;

static var Points:int;
var CurrentPoints:int;

var CanDie:boolean = true;

var skin:GUISkin;

function Start()
{
		escape = true;
}

function OnCollisionEnter(c:Collision)
{
	if(CanDie == true)
	{
		if(c.gameObject.tag == "carrierenemy")
		{
			health = health - 2;
			hit();
			
		}
		
		if(c.gameObject.tag == "turretenemy")
		{
			health = health - 1;
			hit();
		}
	}
	
}

function OnCollisionStay(c:Collision)
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

	if(PubHealth != 0)
	{
	CurrentPoints = Points;
	receivedhealth = receivedhealth + PubHealth;
	health = health + PubHealth;
	PubHealth = 0;
	}

	if(grounded == true)
	{
	//this.transform.position.y = 0.001;
	}	

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
			anim.SetBool("walk", false);;
		}
		
		rigidbody.AddForce(Vector3(0,-15,0)); //gravity?

	
	if(grounded == true && Input.GetKeyDown(KeyCode.W) || grounded == true && Input.GetKeyDown(KeyCode.UpArrow))
	{
		//jump
		rigidbody.AddForce(Vector3(0,500,0));
	}
	
	if(escape == false)
	{
		if(Input.GetKeyDown(KeyCode.Escape))
		{
			Debug.Log("escape false");
			Time.timeScale = 1;
			GameObject.Destroy(GameObject.FindGameObjectWithTag("pause"));
			escape = true;
		}
	}
	else if(Input.GetKeyDown(KeyCode.Escape))
	{
			Debug.Log("escape true");
			Time.timeScale = 0;
			Instantiate(pause, GameObject.FindGameObjectWithTag("MainCamera").transform.position, GameObject.FindGameObjectWithTag("MainCamera").transform.rotation);
			escape = false;
			
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

function OnGUI()
{
	GUI.skin = skin;
    GUI.Label(Rect (50,35,200,40), "Health: " + health);
	GUI.Label(Rect (50,60,200,40), "Points: " + Points);
}

function ReduceHealth(damageplayer:int)
{
	if(CanDie == true)
	{
		health = health - damageplayer;
		var currenthealth = health;
		if(health <= 0)
		{
			Application.LoadLevel(4);
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
