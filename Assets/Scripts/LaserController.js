#pragma strict
var laserspeed:int;
var damageenemy1:int;
var damageenemy2:int;

function Update () {
	transform.Translate(Vector3.up * 50 * Time.deltaTime);
}

function OnCollisionEnter(coll : Collision)
{
Debug.Log(this.gameObject.tag + "  " + coll.gameObject.tag);
	if(this.gameObject.tag == "playerbullet")
	{
	
		if(coll.gameObject.tag == "carrierenemy")
		{
			var enemy1:CarrierEnemy = coll.gameObject.GetComponent(CarrierEnemy);
			enemy1.ReduceHealth(damageenemy1);
			GameObject.Destroy(this.gameObject);
		}
		
		if(coll.gameObject.tag == "turretenemy")
		{
			Debug.Log("HitTUR");	
			var enemy2:TurretEnemy = coll.gameObject.GetComponent(TurretEnemy);
			enemy2.ReduceHealth(damageenemy2);
			GameObject.Destroy(this.gameObject);
		}
		
	}
	else{
			if(coll.gameObject.tag == "player")
			{	}
		}
		
	if(coll.gameObject.tag == "platform")
	{
		GameObject.Destroy(this.gameObject);
	}
		
	if(coll.gameObject.tag == "crate")
	{
	GameObject.Destroy(coll.gameObject);
	GameObject.Destroy(this.gameObject);
	//do Powerup
	}

}

