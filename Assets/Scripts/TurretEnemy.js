#pragma strict
var Detect2 : DetectScript2;

var explosion:Rigidbody;

var laser:Rigidbody;
var health:int;
var shoot:boolean;

var target:Transform;
var boom:Transform;

var thisTransform : Transform;

function Start () {

	thisTransform = transform;
    shoot = false;
    yield StartCoroutine("shootEveryFewSeconds");
}

function Update () {
		
		if(Detect2.detected)
		{
			shoot = true;
			
			Debug.Log(shoot);
		}
}

function shootEveryFewSeconds()
{
		while(true)
	{
		if (shoot == true)
		{
		Instantiate (laser, target.transform.position, target.transform.rotation);
		yield WaitForSeconds (1);
		shoot = false;
		}
	yield;
	}
		
		
}

function ReduceHealth(damageenemy2laser:int)
{
	health = health - damageenemy2laser;
	var currenthealth = health;
	Debug.Log(health);
	if(health <= 0)
	{
		Instantiate (explosion, boom.transform.position, boom.transform.rotation);
		GameObjectController.Points = GameObjectController.Points +5;
		GameObject.Destroy(this.gameObject);
	}
	
}

function ReduceHealth2(damageenemy2gatling:int)
{
	health = health - damageenemy2gatling;
	var currenthealth = health;
	Debug.Log(health);
	if(health <= 0)
	{
		Instantiate (explosion, boom.transform.position, boom.transform.rotation);
		GameObjectController.Points = GameObjectController.Points +5;
		GameObject.Destroy(this.gameObject);
	}
}

function ReduceHealth3(damageenemy2rail:int)
{
	health = health - damageenemy2rail;
	var currenthealth = health;
	Debug.Log(health);
	if(health <= 0)
	{
		Instantiate (explosion, boom.transform.position, boom.transform.rotation);
	 	GameObjectController.Points = GameObjectController.Points +5;
		GameObject.Destroy(this.gameObject);
	}
}