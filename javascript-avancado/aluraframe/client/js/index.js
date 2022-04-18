var campos = [

document.querySelector('#data'),
document.querySelector('#quantidade'),
document.querySelector('#valor')

];

var form = document.querySelector('.form');

var tbody = document.querySelector('table tbody');

form.addEventListener("submit", function(event) {

	event.preventDefault();

	var tr = document.createElement('tr');

	campos.forEach(function (campos) {
		var td = document.createElement('td');
		td.textContent = campos.value;
		tr.appendChild(td);

	});

	var tdVolume = document.createElement("td");
	tdVolume.textContent = campos[1].value * campos[2].value;

	tr.appendChild(tdVolume);
});