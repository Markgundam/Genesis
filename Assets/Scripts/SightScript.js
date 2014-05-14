#pragma strict
public var sighted : boolean = false;
var carrier:Transform;

function OnTriggerEnter(otherColl : Collider)
{
	if(otherColl.tag == "Player")
	{
		sighted = true;
		
		if (otherColl.transform.position.x > this.transform.position.x)
		{
		carrier.localScale.x = -1;
		
		}
		
		if (otherColl.gameObject.transform.position.x < this.transform.position.x)
		{
		carrier.localScale.x = 1;
		
		}
		
	}
}

function OnTriggerExit(otherColl : Collider)
{
	if(otherColl.tag == "Player")
	{
		sighted = false;
	}
}