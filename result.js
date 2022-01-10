window.addEventListener('load', () => {
    
    const Prenom = sessionStorage.getItem('PRENOM');
    const surname = sessionStorage.getItem('SURNAME');
	const Ville = sessionStorage.getItem('VILLE');
	const Codepostal = sessionStorage.getItem('Codepostal');
	const Etatcivil = sessionStorage.getItem('Etatcivil');
	const telephone = sessionStorage.getItem('telephone');
	const Email = sessionStorage.getItem('Email');
	const date = sessionStorage.getItem('date');
	const comments = sessionStorage.getItem('comments');
	const l = sessionStorage.getItem('l');
	const ee = sessionStorage.getItem('ee');
	const zz = sessionStorage.getItem('zz');
	const tt = sessionStorage.getItem('tt');
    
    document.getElementById('result-Prenom').innerHTML = Prenom;
    document.getElementById('result-surname').innerHTML = surname;
    document.getElementById('result-Ville').innerHTML = Ville;
    document.getElementById('result-Codepostal').innerHTML = Codepostal;
    document.getElementById('result-Etatcivil').innerHTML = Etatcivil;
    document.getElementById('result-telephone').innerHTML = telephone;
    document.getElementById('result-Email').innerHTML = Email;
    document.getElementById('result-date').innerHTML = date;
    document.getElementById('result-comments').innerHTML = comments;
	document.getElementById('result-l').innerHTML = l;
	document.getElementById('result-ee').innerHTML = ee;
	document.getElementById('result-zz').innerHTML = zz;
	document.getElementById('result-tt').innerHTML = tt;
})