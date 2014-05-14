#pragma strict

var mousePosition :Vector3 ;
function Start () {

}

function Update () {
	mousePosition = Input.mousePosition;            
    mousePosition = Camera.main.ScreenToWorldPoint(mousePosition);
    mousePosition.z *= -1;
    var rot : Quaternion = Quaternion.LookRotation(this.transform.position -mousePosition  , Vector3.forward);
   // transform.rotation = rot;   
  /* 
   var theRotation:float;
   
   theRotation = Mathf.Clamp(,63,140);
   */
    transform.eulerAngles = new Vector3(0, -180, rot.eulerAngles.z+90); 
}