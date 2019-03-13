
function changePhoto(a)
{
	document.getElementById("show").src=a;
}

function SumTotal()
{
	d3.txtTotal.value=d3.txtUP.value * d3.txtQuan.value;
}

function buy()
{
	alert(
		'Buy successfully! Total: $'+d3.txtTotal.value
	)
}


