#pragma strict
var laserlazor:Rigidbody;
var lasergatling:Rigidbody;
var laserrail:Rigidbody;
var megalaser:Rigidbody;

var laserdamage : int;
var gatlingdamage : int;
var raildamage : int;
var weaponselect: int;

var reloadTime : float; //Max Reload Time
var maxCharge : float; //Max Charge Damage
var maxrailCharge : float; //Max Charge of Rail
var chargedmg : float; //Current charge for the lazer
var chargeraildmg: float; //Currect charge for the Rail
var reloadLeft: float; //Current reload Time

var weapon1:MeshRenderer[];
var weapon2:MeshRenderer[];
var weapon3:MeshRenderer[];


function Start () {
	//Initialize Stuff
	chargedmg = 0f;
	reloadLeft = 0f;
	weaponselect = 1;
}

function Update () {

	
	
	if(reloadLeft >0) //Is the reload timer not done?
	{
		reloadLeft = reloadLeft - Time.deltaTime; //Reduce the timer
	}
	else
	{
		reloadLeft = 0f; //Keep the timer at 0f;
	}
	
	
		
	if(Input.GetKeyDown(KeyCode.LeftAlt))
	{
		if(weaponselect == 3)
		{
			weaponselect = 0;
		}
		weaponselect++;
	}


	switch (weaponselect)
	{
	
	case 3:
	
		//show Rail, hide Gatling and Laser
		for(var r:MeshRenderer in weapon1)
		{
			r.enabled = false;
		}
		
		for(var r:MeshRenderer in weapon2)
		{
			r.enabled = false;
		}
		
		for(var r:MeshRenderer in weapon3)
		{
			r.enabled = true;
		}
		
	//RAIL CONTROL
	
				if(Input.GetMouseButton(0)) //LMB Hold
				{
				var tmpCharge2:float = chargeraildmg + (Time.deltaTime * 3);//Add charge at the rate of 3 per second
					if(tmpCharge2 < maxrailCharge)
					{  
						chargeraildmg = tmpCharge2; 
					}else
					{
						chargeraildmg = maxrailCharge;
							Debug.Log("maxrailCharge");
					}
				}
			
				if(Input.GetMouseButtonUp(0)) //LMB Up
				{
					if(reloadLeft == 0f)
					{ //If no reload is needed
						var rail:Rigidbody;

						if(chargeraildmg == maxrailCharge)
						{
							rail = Instantiate (laserrail, this.transform.position, this.transform.rotation);
						}else{
							//rail = Instantiate (laserlazor, this.transform.position, this.transform.rotation);
						}
						
						var raillaser:LaserControllerPLAYER = rail.GetComponent(LaserControllerPLAYER); //Get the LaserController Component (Script)
						laserdamage = laserdamage + chargedmg; //Add laser damage + charge
						chargeraildmg = 0f; //Reset Charge
						reloadLeft = reloadTime; //Set the reload timer
					}
				}
	
	break;
	
	
	
	
	case 2:
	
		//show Gatling, hide Laser and Rail
		for(var r:MeshRenderer in weapon1)
		{
			r.enabled = false;
		}
		
		for(var r:MeshRenderer in weapon2)
		{
			r.enabled = true;
		}
		
		for(var r:MeshRenderer in weapon3)
		{
			r.enabled = false;
		}
		
	//GATLING CONTROL
	
	if(Input.GetMouseButton(0)) //LMB Up
	{
		if(reloadLeft == 0f) //If no reload is needed
		{ 
			var gatling:Rigidbody;
			
			gatling = Instantiate (lasergatling, this.transform.position, this.transform.rotation);

			var gatlinglaser:LaserControllerPLAYER = gatling.GetComponent(LaserControllerPLAYER); //Get the LaserController Component (Script)
			reloadLeft = reloadTime; //Set the reload timer
		}
	}
	
	break;
	
	
	
	
	case 1:
	
	//show Laser, hide Gatling and Rail
	
		for(var r:MeshRenderer in weapon1)
		{
			r.enabled = true;
		}
		
		for(var r:MeshRenderer in weapon2)
		{
			r.enabled = false;
		}
		
		for(var r:MeshRenderer in weapon3)
		{
			r.enabled = false;
		}
		
	//LASER CONTROL
	
	if(Input.GetMouseButton(0)) //LMB Hold
	{
		var tmpCharge1:float = chargedmg + (Time.deltaTime * 3);//Add charge at the rate of 3 per second
		if(tmpCharge1 < maxCharge){  
			chargedmg = tmpCharge1; 
		}else
		{
			chargedmg = maxCharge;
			Debug.Log("maxCharge");
		}
	}
	
	if(Input.GetMouseButtonUp(0)) //LMB Up
	{
		if(reloadLeft == 0f){ //If no reload is needed
			var lazor:Rigidbody;
			
			if(chargedmg == maxCharge)
			{
				lazor = Instantiate (megalaser, this.transform.position, this.transform.rotation);
			}else{
				lazor = Instantiate (laserlazor, this.transform.position, this.transform.rotation);
			}
			var lazorlaser:LaserControllerPLAYER = lazor.GetComponent(LaserControllerPLAYER); //Get the LaserController Component (Script)
			laserdamage = laserdamage + chargedmg; //Add laser damage + charge
			chargedmg = 0f; //Reset Charge
			reloadLeft = reloadTime; //Set the reload timer
		}
	}
	
	break;
	}
	
	
	
}