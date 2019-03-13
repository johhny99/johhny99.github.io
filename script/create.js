function create()
{
	var name=f1.txtName.value;
	var price=f1.txtPrice.value;
	var detail=f1.txtDtl.value;
	var manu=f1.txtMan.value;
	var asin=f1.txtASIN.value;
	
	document.write(name+"</br>");
	document.write(price+"</br>");
	document.write(detail+"</br>");
	document.write(manu+"</br>");
	document.write(asin+"</br>");
}
function update()
{
	var name=f1.txtName.value;
	var price=f1.txtPrice.value;
	var detail=f1.txtDtl.value;
	var manu=f1.txtMan.value;
	var asin=f1.txtASIN.value;
	alert('Updating........')
	document.write(name+"</br>");
	document.write(price+"</br>");
	document.write(detail+"</br>");
	document.write(manu+"</br>");
	document.write(asin+"</br>");
}
function Delete(a)
{
	alert('Delete successful')
}
//	var i = a.parentNode.parentNode.rowIndex;
//	document.getElementById("pro").deleteRow(i);

