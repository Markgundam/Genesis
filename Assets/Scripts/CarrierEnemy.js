#pragma strict
var laser:Rigidbody;
var health:int;
var shoot:boolean;
var detect : DetectScript;
var sight : SightScript;
var moving : boolean = false;
var target : Transform; //Through inspector

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
		
	}else{
	if(moving)
	{
	moving = !moving;
	anim.SetBool("move", moving);
	}
	}
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

function ReduceHealth(damageenemy1:int)
{
	health = health - damageenemy1;
	var currenthealth = health;
	Debug.Log(health);
	if(health <= 0)
	{
		GameObject.Destroy(this.gameObject);
	}
}

