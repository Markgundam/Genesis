#pragma strict
var laser:Rigidbody;
var health:int;
var shoot:boolean;
var detect : DetectScript;
var sight : SightScript;
var moving : boolean = false;
var target : Transform; //Through inspector
var turret : Transform;

var smoothTime = 0.5f;
var xOffset : float = 0.2f;
var yOffset : float = 0f;
 
var thisTransform : Transform;

var anim:Animator;

function Start () {

    thisTransform = transform;
    shoot = false;
    yield StartCoroutine("shootEveryFewSeconds");
}

function Update () {

	rigidbody.AddForce(Vector3(0,-50,0));
	
	if(detect.detected)
	{
		shoot = true;
		
		if(!sight.sighted)
		{
			moving = true;
			anim.SetBool("move", true);

	        thisTransform.position.x = Mathf.Lerp( thisTransform.position.x, target.position.x - xOffset, Time.deltaTime * smoothTime);
	 		thisTransform.position.y = Mathf.Lerp( thisTransform.position.y, target.position.y + yOffset, Time.deltaTime * smoothTime);
		}
		else
		{
		moving = false;
		anim.SetBool("move",false);
		}
		
	}
	
	if(this.transform.localScale.x == 1)
	{
		turret.transform.rotation = Quaternion.Euler(0,0,285);
	}
	if(this.transform.localScale.x == -1)
	{
		turret.transform.rotation = Quaternion.Euler(0,0, 86);
	}

}

function shootEveryFewSeconds()
{
	while(true)
	{
		if (shoot == true)
		{
		Instantiate (laser, turret.transform.position, turret.transform.rotation);
		yield WaitForSeconds (1);
		shoot = false;
		}
	yield;
	}
}

function ReduceHealth(damageenemy1laser:int)
{
	health = health - damageenemy1laser;
	var currenthealth = health;
	Debug.Log(health);
	if(health <= 0)
	{
		GameObject.Destroy(this.gameObject);
	}
}

function ReduceHealth2(damageenemy1gatling:int)
{
	health = health - damageenemy1gatling;
	var currenthealth = health;
	Debug.Log(health);
	if(health <= 0)
	{
		GameObject.Destroy(this.gameObject);
	}
}

function ReduceHealth3(damageenemy1rail:int)
{
	health = health - damageenemy1rail;
	var currenthealth = health;
	Debug.Log(health);
	if(health <= 0)
	{
		GameObject.Destroy(this.gameObject);
	}
}