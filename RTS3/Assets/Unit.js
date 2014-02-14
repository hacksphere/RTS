#pragma strict

var speed = .2;
var power = 10;
var vel : Vector2;
var wayPoints = new ArrayList();
var selected = false;
var owner = 1;

function Start ()
{
	
}

function Update ()
{
	transform.lossyScale.Set(power / 10, .1, power / 10);
	if (Input.GetAxisRaw("Fire2") == 1 && selected)
	{
		var mousePos : Vector2 = GameObject.Find("Camera").camera.ScreenToWorldPoint(Input.mousePosition);
		wayPoints.Add(mousePos);
	}
	if (wayPoints.Count > 0)
	{
		var currentWayPoint : Vector2 = wayPoints[0];
		vel = currentWayPoint - transform.position;
		//vel *= 99999999;
		vel = Vector2.ClampMagnitude(vel, speed);
		transform.position += vel;
		if (transform.position == currentWayPoint)
			wayPoints.RemoveAt(0);
	}
}