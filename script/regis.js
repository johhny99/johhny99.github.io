// JavaScript Document
function check()
{
	
	var re=/\w@\w/;
	var er=/^[0-9]+$/;
	var email=F2.uEm.value;
	var fName=F2.uFName.value;
	var reemail=F2.uREm.value;
	var uName=F2.uName.value;
	var uPass=F2.uPass.value;
	var uRPass=F2.uRPass.value;
	var uMB=F2.uMb.value;
	var uAdd=F2.uAdd.value;
	if (re.test(email))
	{
		if(reemail==email)
			{
				if(uRPass==uPass)
					{
						if(er.test(uMB))
							{
								document.write(fName+"</br>"+email+"</br>"+uName+"</br>"
											  +uPass+"</br>"+uMB+"</br>"+uAdd);
							}else{alert('Retype Mobile Phone')}
					}else{alert('Retype Password')}
			}else{alert('Retype Email')}
	}else{alert('Retype Email')}
}


