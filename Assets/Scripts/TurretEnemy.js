#pragma strict

var laser:Rigidbody;
var health:int;
var shoot:boolean;

var thisTransform : Transform;
var target : Transform;

function Start () {
	thisTransform = transform;
    shoot = false;
    yield StartCoroutine("shootEveryFewSeconds");
}

function Update () {

}

function shootEveryFewSeconds()
{
	while(true)
	{	
		if (shoot == true)
		{
		
		Instantiate (laser, gameObject.FindGameObjectWithTag("Enemyturret").transform.position, gameObject.FindGameObjectWithTag("Enemyturret").transform.rotation);
		yield WaitForSeconds (1);
		shoot = false;
		}
	yield;
	}
}

function ReduceHealth(damageenemy2:int)
{
	health = health - damageenemy2;
	var currenthealth = health;
	Debug.Log(health);
	if(health <= 0)
	{
		GameObject.Destroy(this.gameObject);
	}
}