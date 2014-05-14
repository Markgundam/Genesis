#pragma strict
public var detected : boolean = false;

function OnTriggerEnter(otherColl : Collider)
{
	if(otherColl.tag == "Player")
	{
		detected = true;
	}
}

function OnTriggerExit(otherColl : Collider)
{
	if(otherColl.tag == "Player")
	{
		detected = false;
	}
}