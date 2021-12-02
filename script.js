function check(form) {
	var name=form.name.value;
			pass=form.password.value;
			email=form.email.value;
			comment=form.comment.value;
			file=form.file.value;
			rules=form.rules;
			span=form.getElementsByClassName('error');
			i=0;
			if(name.length<3) {
				i++;
				span[0].style.display='block';
			}
			else span[0].style.display='none';
			if(email.length<7||email.indexOf('@')<0||email.indexOf('.')<0) {
				i++;
				span[1].style.display='block';
			}
			else span[1].style.display='none';
			if(pass.length<6) {
				i++;
				span[2].style.display='block';
			}
			else span[2].style.display='none';
			if(!rules.checked) {
				i++;
				span[3].style.display='block';
				span[3].style.marginLeft='33px';
			}
			else span[3].style.display='none';
			if(i==0) return true;
			else return false;
}