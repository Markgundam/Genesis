#pragma strict
var laserspeed:int;
var damageplayer:int;

function Start () {


}

function Update () {
	
	transform.Translate(Vector3.up * -50 * Time.deltaTime);	
}

function OnCollisionEnter(coll : Collision)
{
Debug.Log(this.gameObject.tag + "  " + coll.gameObject.tag);

	if(this.gameObject.tag == "enemybullet")
	
	{
		if(coll.gameObject.tag == "Player")
		{
			coll.gameObject.GetComponent(GameObjectController).hit();
			var player:GameObjectController = coll.gameObject.GetComponent(GameObjectController);
			player.ReduceHealth(damageplayer);
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
	}

}

