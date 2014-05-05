#pragma strict

var playerPosition:Vector3;
function Start () {

}

function Update () {

	playerPosition = GameObject.FindGameObjectWithTag("Player").transform.position;
	
    var rot : Quaternion = Quaternion.LookRotation(playerPosition - this.transform.position, Vector3.forward);
    transform.rotation = Quaternion.Euler(0,0,90+rot.eulerAngles.z);   
    
 
}