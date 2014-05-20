#pragma strict

var laserspeed:int;
var damageenemy1gatling:int;
var damageenemy2gatling:int;
var damageenemy3gatling:int;
var points:int;

function Start () {

	if(GameObject.FindGameObjectWithTag("Player").transform.localScale.x == 1)
	{	
		this.transform.rotation = Quaternion.Euler(90,90,0);
	}
	if(GameObject.FindGameObjectWithTag("Player").transform.localScale.x == -1)
	{
		this.transform.rotation = Quaternion.Euler(270,90,0);
	}
}

function Update () {
	
	transform.Translate(Vector3.up * 50 * Time.deltaTime);
	
	
	
}

function OnCollisionEnter(coll : Collision)
{
Debug.Log(this.gameObject.tag + "  " + coll.gameObject.tag);
	
	if(this.gameObject.tag == "gatlingbullet")
	{
	
		if(coll.gameObject.tag == "carrierenemy")
		{
			var gatlingenemy1:CarrierEnemy = coll.gameObject.GetComponent(CarrierEnemy);
			gatlingenemy1.ReduceHealth2(damageenemy1gatling);
			GameObject.Destroy(this.gameObject);
		}
		
		if(coll.gameObject.tag == "turretenemy")
		{
			var gatlingenemy2:TurretEnemy = coll.gameObject.GetComponent(TurretEnemy);
			gatlingenemy2.ReduceHealth2(damageenemy2gatling);
			GameObject.Destroy(this.gameObject);
		}
		
		if(coll.gameObject.tag == "bossenemy")
		{
			var laserenemy3:BossEnemy = coll.gameObject.GetComponent(BossEnemy);
			laserenemy3.ReduceHealth3(damageenemy3gatling);
			GameObject.Destroy(this.gameObject);
		}
	
	}	
		
	if(coll.gameObject.tag == "platform")
	{
		GameObject.Destroy(this.gameObject);
	}
		
	if(coll.gameObject.tag == "crate")
	{
	
	GameObjectController.Points = GameObjectController.Points +2;
	GameObject.Destroy(coll.gameObject);
	//yield WaitForSeconds(2);
	GameObject.Destroy(this.gameObject);

	}
	
	if(coll.gameObject.tag == "cratespecial")
	{
	GameObjectController.PubHealth = GameObjectController.PubHealth +5;
	GameObject.Destroy(coll.gameObject);
	GameObject.Destroy(this.gameObject);
	}

	if(coll.gameObject.tag == "crateinvincibility")
	{
	//Add Invincibility code
	GameObject.Destroy(coll.gameObject);
	GameObject.Destroy(this.gameObject);
	}
	
	if(coll.gameObject.tag == "cratemorelasers")
	{
	//Add more lasers code
	GameObject.Destroy(coll.gameObject);
	GameObject.Destroy(this.gameObject);
	}
	

}
