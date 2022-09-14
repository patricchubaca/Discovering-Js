document
.querySelector('#myButton')
.onclick = () => 
fetch('http://localhost:3000/notas')
.then(res => {
	if(res.ok) return res.json();
	return Promise.redirect(res.statusText);
})
.then(notas => console.log(notas))
.catch(console.log)

