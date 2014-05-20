#pragma strict
#pragma implicit
 
var laserlazor:Rigidbody;
var lasergatling:Rigidbody;
var laserrail:Rigidbody;
var megalaser:Rigidbody;

var laserdamage : int;
var gatlingdamage : int;
var raildamage : int;
var weaponselect: int;

var showPerc:boolean = false;

var reloadTime : float; //Max Reload Time
var maxCharge : float; //Max Charge Damage
var maxrailCharge : float; //Max Charge of Rail
var chargedmg : float; //Current charge for the lazer
var chargeraildmg: float; //Currect charge for the Rail
var reloadLeft: float; //Current reload Time

var weapon1:MeshRenderer[];
var weapon2:MeshRenderer[];
var weapon3:MeshRenderer[];

var laser:AudioSource;
var explosion:AudioSource;
var gatlingbullet:AudioSource;

var skin:GUISkin;
var ChargePerc:int;

var laserbool:boolean; 
var gatlingbool:boolean;
var railbool:boolean; 

var laserGUI:Texture;
var gatlingGUI:Texture;
var railGUI:Texture;


function Start () {
	//Initialize Stuff
	chargedmg = 0f;
	reloadLeft = 0f;
	weaponselect = 1;
	
	laserbool = false;
	gatlingbool = false;
	railbool = false;
	
	//GetComponent(AudioSource) = charge;
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
	
	railbool = true;
	gatlingbool = false;
	laserbool = false;
	
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
				showPerc = true;
				
				if(Input.GetMouseButton(0)) //LMB Hold
				{
				
				//play charge audio
				
				
				var tmpCharge2:float = chargeraildmg + (Time.deltaTime * 3);//Add charge at the rate of 3 per second
				
				if(showPerc == true)
				{
				ChargePerc = (tmpCharge2 / maxrailCharge) * 100;
				}
				
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
					sound = false;
					ChargePerc = 0;
					
					if(reloadLeft == 0f)
					{ //If no reload is needed
						var rail:Rigidbody;

						if(chargeraildmg == maxrailCharge)
						{
							explosion.Play();
							rail = Instantiate (laserrail, this.transform.position, this.transform.rotation);

						}else{
						}
						
						laserdamage = laserdamage + chargedmg; //Add laser damage + charge
						chargeraildmg = 0f; //Reset Charge
						reloadLeft = reloadTime; //Set the reload timer
					}
				}
	
	break;
	
	
	
	
	case 2:
	
	gatlingbool = true;
	railbool = false;
	laserbool = false;
	
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
	showPerc = false;
	
	if(Input.GetMouseButton(0)) //LMB Up
	{
		if(reloadLeft == 0f) //If no reload is needed
		{ 
			var gatling:Rigidbody;
			
			gatlingbullet.Play();
			gatling = Instantiate (lasergatling, this.transform.position, this.transform.rotation);

			var gatlinglaser:LaserControllerPLAYER = gatling.GetComponent(LaserControllerPLAYER); //Get the LaserController Component (Script)
			reloadLeft = reloadTime; //Set the reload timer
		}
	}
	
	break;
	
	
	
	
	case 1:
	
	railbool = false;
	gatlingbool = false;
	laserbool = true;
	
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
	showPerc = true;
	
	if(Input.GetMouseButton(0)) //LMB Hold
	{
		var tmpCharge1:float = chargedmg + (Time.deltaTime * 3);//Add charge at the rate of 3 per second
		
		if(showPerc == true)
		{
		ChargePerc = (tmpCharge1 / maxCharge) * 100;
		}
		
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
			ChargePerc = 0;
			
			if(chargedmg == maxCharge)
			{
				explosion.Play();
				lazor = Instantiate (megalaser, this.transform.position, this.transform.rotation);

			}else{
				laser.Play();
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

function OnGUI()
{
	GUI.Label(Rect(1550, 35, 200, 100), "Laser Gun");
	GUI.Label(Rect(1550, 50, 200, 100), "LMB: 4");
	GUI.Label(Rect(1550, 65, 200, 100), "Hold and Release LMB: 8");
	
	GUI.Label(Rect(1550, 125, 200, 100), "Gatling Gun");
	GUI.Label(Rect(1550, 140, 200, 100), "Hold LMB: 2");
	
	GUI.Label(Rect(1550, 200, 200, 100), "Rail Gun");
	GUI.Label(Rect(1550, 215, 200, 100), "Hold and Release LMB: 10");
	
	GUI.Label(Rect(50, 900, 200, 100), "Controls:");
	GUI.Label(Rect(50, 915, 200, 100), "D - Move Right");
	GUI.Label(Rect(50, 930, 200, 100), "A - Move Left");
	GUI.Label(Rect(50, 945, 200, 100), "W - Jump");
	GUI.Label(Rect(50, 960, 200, 100), "W + A/D + Right Click - Jet Boost");
	GUI.Label(Rect(50, 975, 200, 100), "Left Click - Shoot");
	GUI.Label(Rect(50, 990, 200, 100), "Alt - Switch weapons");
	GUI.Label(Rect(50, 1005, 200, 100), "Escape - Pause");
	
	if(showPerc == true)
	{
	GUI.skin = skin;
    GUI.Label(Rect (50,100,200,40), "Charge: " + ChargePerc + "%");
    }
        
    if(laserbool == true)
    {
    	GUI.DrawTexture(new Rect(1750, 20, 146, 242), laserGUI);
    	
    }
    
    if(gatlingbool == true)
    {
   		GUI.DrawTexture(new Rect(1750, 20, 146, 242), gatlingGUI);
    }
    
    if(railbool == true)
    {
    	GUI.DrawTexture(new Rect(1750, 20, 146, 242), railGUI);
    }
}