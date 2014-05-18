#pragma strict
var detect : DetectScript;

var explosion:Rigidbody;

var laser:Rigidbody;
var health:int;
var shoot:boolean;

var thisTransform : Transform;

function Start () {

	thisTransform = transform;
    shoot = false;
    //yield StartCoroutine("shootEveryFewSeconds");
    shootEveryFewSeconds();
}

function Update () {


}

function shootEveryFewSeconds()
{
		if(detect.detected)
		{
			shoot = true;
			
			Debug.Log(shoot);
			
			if (shoot == true)
			{
				Instantiate (laser, gameObject.FindGameObjectWithTag("Enemyturret").transform.position, gameObject.FindGameObjectWithTag("Enemyturret").transform.rotation);
				yield WaitForSeconds (1);
				shoot = false;
			}
			
		
		}
		
}

function ReduceHealth(damageenemy2laser:int)
{
	health = health - damageenemy2laser;
	var currenthealth = health;
	Debug.Log(health);
	if(health <= 0)
	{
		Instantiate (explosion, this.transform.position, this.transform.rotation);
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
		Instantiate (explosion, this.transform.position, this.transform.rotation);
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
		Instantiate (explosion, this.transform.position, this.transform.rotation);
	 	GameObjectController.Points = GameObjectController.Points +5;
		GameObject.Destroy(this.gameObject);
	}
}