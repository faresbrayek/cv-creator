function handleSubmit () {
    const Prenom = document.getElementById('Prenom').value;
    const surname = document.getElementById('surname').value;
	const Ville = document.getElementById('Ville').value;
	const Codepostal = document.getElementById('Codepostal').value;
	const Etatcivil = document.getElementById('Etatcivil').value;
	const telephone = document.getElementById('telephone').value;
	const Email = document.getElementById('Email').value;
	const date = document.getElementById('date').value;
	const comments = document.getElementById('comments').value;
	const l = document.getElementById('l').value;
	const ee = document.getElementById('ee').value;
	const tt = document.getElementById('tt').value;
	const zz = document.getElementById('zz').value;
    
    sessionStorage.setItem("PRENOM", Prenom);
    sessionStorage.setItem("SURNAME", surname);
	sessionStorage.setItem("VILLE", Ville);
	sessionStorage.setItem("Codepostal", Codepostal);
	sessionStorage.setItem("Etatcivil", Etatcivil);
	sessionStorage.setItem("telephone", telephone);
	sessionStorage.setItem("Email", Email);
	sessionStorage.setItem("date", date);
	sessionStorage.setItem("comments", comments);
	sessionStorage.setItem("l", l);
	sessionStorage.setItem("ee", ee);
	sessionStorage.setItem("tt", tt);
	sessionStorage.setItem("zz", zz);

    return;
}
