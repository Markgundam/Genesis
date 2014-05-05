#pragma strict

var mousePosition :Vector3 ;
function Start () {

}

function Update () {
	mousePosition = Input.mousePosition;            
    mousePosition = Camera.main.ScreenToWorldPoint(mousePosition);
    var rot : Quaternion = Quaternion.LookRotation(this.transform.position - mousePosition, Vector3.forward);
    transform.rotation = rot;   
    transform.eulerAngles = new Vector3(0, 0, transform.eulerAngles.z); 
}