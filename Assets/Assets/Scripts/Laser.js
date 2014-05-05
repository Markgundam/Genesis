#pragma strict
var damageplayer: int;
var damageenemy1: int;

function Start () {
}

function Update () {
	
}

function OnCollisionEnter(coll : Collision)
{
	if(coll.gameObject.tag == "enemy")
	{
		var enemy:Enemy = coll.gameObject.GetComponent(Enemy);
		enemy.ReduceHealth(damageplayer);

	}
	
	if(coll.gameObject.tag == "Player")
	{
	
		var player:Charactercontroller = coll.gameObject.GetComponent(Charactercontroller);
		player.ReduceHealth(damageenemy1);

	}
	
}

function OnBecameInvisible () 
{
	GameObject.Destroy(this.gameObject);
}