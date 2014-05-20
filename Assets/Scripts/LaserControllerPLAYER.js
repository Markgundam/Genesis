#pragma strict

var laserspeed:int;
var damageenemy1laser:int;
var damageenemy2laser:int;
var damageenemy3laser:int;

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

	if(this.gameObject.tag == "laserbullet")
	{
	
		if(coll.gameObject.tag == "carrierenemy")
		{
			var laserenemy1:CarrierEnemy = coll.gameObject.GetComponent(CarrierEnemy);
			laserenemy1.ReduceHealth(damageenemy1laser);
			GameObject.Destroy(this.gameObject);
		}
		
		if(coll.gameObject.tag == "turretenemy")
		{
			var laserenemy2:TurretEnemy = coll.gameObject.GetComponent(TurretEnemy);
			laserenemy2.ReduceHealth(damageenemy2laser);
			GameObject.Destroy(this.gameObject);
		}
		
		if(coll.gameObject.tag == "bossenemy")
		{
			var laserenemy3:BossEnemy = coll.gameObject.GetComponent(BossEnemy);
			laserenemy3.ReduceHealth(damageenemy3laser);
			GameObject.Destroy(this.gameObject);
		}
		
		if(coll.gameObject.tag == "platform")
		{
			GameObject.Destroy(this.gameObject);
		}
			
		if(coll.gameObject.tag == "crate")
		{
		
		GameObjectController.Points = GameObjectController.Points +2;
		GameObject.Destroy(coll.gameObject);
		GameObject.Destroy(this.gameObject);

		}
		
		if(coll.gameObject.tag == "cratespecial")
		{
		GameObjectController.PubHealth = GameObjectController.PubHealth +5;
		GameObject.Destroy(coll.gameObject);
		GameObject.Destroy(this.gameObject);
		}
		
		}		

}
