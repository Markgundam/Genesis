#pragma strict
var laser:Rigidbody;
var megalaser:Rigidbody;
var damage : int;
var reloadTime : float; //Max Reload Time
var maxCharge : float; //Max Charge Damage
var chargedmg : float; //Current charge for the lazer
var reloadLeft: float; //Current reload Time


function Start () {
	//Initialize Stuff
	chargedmg = 0f;
	reloadLeft = 0f;
}

function Update () {
	if(Input.GetMouseButtonDown(0)) //LMB DOWN
	{
		//Check below.
		if(reloadLeft == 0f){
			Instantiate (laser, this.transform.position, this.transform.rotation);
			reloadLeft = reloadTime;
		}
	}
	
	if(Input.GetMouseButton(0)) //LMB Hold
	{
		var tmpCharge:float = chargedmg + (Time.deltaTime * 3);//Add charge at the rate of 3 per second
		if(tmpCharge < maxCharge){  
			chargedmg = tmpCharge; 
		}else
		{
			chargedmg = maxCharge;
			Debug.Log("maxCharge");
		}
	}
	
	if(Input.GetMouseButtonUp(0)) //LMB Up
	{
		if(reloadLeft == 0f){ //If no reload is needed
			var x:Rigidbody;
			
			if(chargedmg == maxCharge)
			{
				x = Instantiate (megalaser, this.transform.position, this.transform.rotation);
			}else{
				x = Instantiate (laser, this.transform.position, this.transform.rotation);
			}
			var laser:LaserControllerPLAYER = x.GetComponent(LaserControllerPLAYER); //Get the LaserController Component (Script)
			damage = damage + chargedmg; //Add laser damage + charge
			chargedmg = 0f; //Reset Charge
			reloadLeft = reloadTime; //Set the reload timer
		}
	}
	
	if(reloadLeft >0) //Is the reload timer not done?
	{
		reloadLeft = reloadLeft - Time.deltaTime; //Reduce the timer
	}
	else
	{
		reloadLeft = 0f; //Keep the timer at 0f;
	}
}