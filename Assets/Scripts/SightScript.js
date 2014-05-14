#pragma strict
public var sighted : boolean = false;

function OnTriggerEnter(otherColl : Collider)
{
	if(otherColl.tag == "Player")
	{
		sighted = true;
	}
}

function OnTriggerExit(otherColl : Collider)
{
	if(otherColl.tag == "Player")
	{
		sighted = false;
	}
}