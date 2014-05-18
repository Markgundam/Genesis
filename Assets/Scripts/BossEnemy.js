#pragma strict
var laser:Rigidbody;
var health:int;
var shoot:boolean;
var detect : DetectScript;
var sight : SightScript;
var moving : boolean = false;
var target : Transform; //Through inspector
var turret1 : Transform;
var turret2 : Transform;
var turret3 : Transform;

var movementsound : AudioSource;

var explosion:Rigidbody;

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
	
	if(moving == true)
	{
	movementsound.Play();
	}
	else{
	movementsound.Stop();
	}
	
	if(this.transform.localScale.x == 1)
	{
		turret1.transform.rotation = Quaternion.Euler(0,0,285);
		turret2.transform.rotation = Quaternion.Euler(0,0,285);
		turret3.transform.rotation = Quaternion.Euler(0,0,285);
	}
	if(this.transform.localScale.x == -1)
	{
		turret1.transform.rotation = Quaternion.Euler(0,0, 86);
		turret2.transform.rotation = Quaternion.Euler(0,0, 86);
		turret3.transform.rotation = Quaternion.Euler(0,0, 86);
	}

}

function shootEveryFewSeconds()
{
	while(true)
	{
		if (shoot == true)
		{
		Instantiate (laser, turret1.transform.position, turret1.transform.rotation);
		Instantiate (laser, turret2.transform.position, turret2.transform.rotation);
		Instantiate (laser, turret3.transform.position, turret3.transform.rotation);
		yield WaitForSeconds (1);
		shoot = false;
		}
	yield;
	}
}

function ReduceHealth(damageenemy3laser:int)
{
	health = health - damageenemy3laser;
	var currenthealth = health;
	Debug.Log(health);
	if(health <= 0)
	{
		Instantiate (explosion, this.transform.position, this.transform.rotation);
		GameObjectController.Points = GameObjectController.Points +10;
		GameObject.Destroy(this.gameObject);
	}
}

function ReduceHealth2(damageenemy3gatling:int)
{
	health = health - damageenemy3gatling;
	var currenthealth = health;
	Debug.Log(health);
	if(health <= 0)
	{
		Instantiate (explosion, this.transform.position, this.transform.rotation);
		GameObjectController.Points = GameObjectController.Points +10;
		GameObject.Destroy(this.gameObject);
	}
}

function ReduceHealth3(damageenemy3rail:int)
{
	health = health - damageenemy3rail;
	var currenthealth = health;
	Debug.Log(health);
	if(health <= 0)
	{
		Instantiate (explosion, this.transform.position, this.transform.rotation);
		GameObjectController.Points = GameObjectController.Points +10;
		GameObject.Destroy(this.gameObject);
		
	}
}