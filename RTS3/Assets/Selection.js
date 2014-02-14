#pragma strict

var dragging = false;
var startPos : Vector2;
var currentPos : Vector2;
var gos : GameObject[];

function Start ()
{
	
}

function Update ()
{
	
}

function OnGUI ()
{
	if (Input.GetAxisRaw("Fire1") == 1 && Event.current.type == EventType.mouseDrag)
	{
       currentPos = Event.current.mousePosition;
       if (!dragging)
       {
         dragging = true;
         startPos = currentPos;
       }
	}
	else if (Event.current.type == EventType.mouseUp)
		dragging = false;
 
    if (dragging)
    {
       	GUI.Box (new Rect (startPos.x, startPos.y, currentPos.x - startPos.x, currentPos.y - startPos.y), "");
       	gos = GameObject.FindGameObjectsWithTag("Unit");
       	for (var go : GameObject in gos)
       	{
			if (go.GetComponent(Unit).owner == 1 && go.transform.position.x > startPos.x && go.transform.position.x < currentPos.x - startPos.x && go.transform.position.y > startPos.y && go.transform.position.y < currentPos.y - startPos.y)
				go.GetComponent(Unit).selected = true;
			else
				go.GetComponent(Unit).selected = false;
		}
	}
}