#pragma strict

var laserspeed:int;
var damageenemy1rail:int;
var damageenemy2rail:int;
var points:int;

function Start () {


}

function Update () {
	
	transform.Translate(Vector3.up * 50 * Time.deltaTime);
	
	if(GameObject.FindGameObjectWithTag("Player").transform.localScale.x == 1)
	{	
		this.transform.rotation = Quaternion.Euler(90,90,0);
	}
	if(GameObject.FindGameObjectWithTag("Player").transform.localScale.x == -1)
	{
		this.transform.rotation = Quaternion.Euler(270,90,0);
	}
	
}

function OnCollisionEnter(coll : Collision)
{
Debug.Log(this.gameObject.tag + "  " + coll.gameObject.tag);
	
	if(this.gameObject.tag == "railbullet")
	{
	
		if(coll.gameObject.tag == "carrierenemy")
		{
			var railenemy1:CarrierEnemy = coll.gameObject.GetComponent(CarrierEnemy);
			railenemy1.ReduceHealth3(damageenemy1rail);
			GameObject.Destroy(this.gameObject);
		}
		
		if(coll.gameObject.tag == "turretenemy")
		{
			var railenemy2:TurretEnemy = coll.gameObject.GetComponent(TurretEnemy);
			railenemy2.ReduceHealth3(damageenemy2rail);
			GameObject.Destroy(this.gameObject);
		}
	
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
	var cratepoints:GameObjectController = gameObject.GetComponent(GameObjectController);
	cratepoints.ReceivePoints(points);
	}
	
		if(coll.gameObject.tag == "cratespecial")
	{
	GameObject.Destroy(coll.gameObject);
	GameObject.Destroy(this.gameObject);
	
	//do Powerup
	}

	

}
