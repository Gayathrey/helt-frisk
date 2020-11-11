
let moreButtons = document.querySelectorAll(".more-button");
let dots = document.querySelectorAll(".dots");
let moreTexts = document.querySelectorAll(".more");

moreButtons.forEach(function(element, index){
	element.addEventListener("click", function(){

		if (dots[index].style.display === "none") {
			dots[index].style.display = "inline";
			element.innerHTML = "Read more"; 
			moreTexts[index].style.display = "none";
			
		  } else {
			dots[index].style.display = "none";
			element.innerHTML = "Read less"; 
			moreTexts[index].style.display = "inline";
		  }

	})
})


window.addEventListener( 'load', function()
{
	document.getElementById("Formular01").onsubmit = Valider;
});      

function Valider()
{
	var AntalFejl = 0;
	var FejlBesked1 = "";
	var FejlBesked2 = "";
	var FejlBesked3 = "";
	
	if( document.getElementById( 'InputNavn' ).value == "" )
	{	
		AntalFejl += 1;
		FejlBesked1 = "Skriv dit navn!";
	}
	else
	{
		var regexpbogstaver = /^[a-zA-Z ]+$/;
		if( !regexpbogstaver.test( document.getElementById('InputNavn').value ) )
		{
			AntalFejl += 1;
			FejlBesked1 = "Navn må kun indeholde bogstaver og mellemrum!";
		}
	}
	
	if( document.getElementById( 'InputPostnummer' ).value == "" )
	{
		AntalFejl += 1;
		FejlBesked2 = "Skriv dit postnummer!";
	}
	else
	{
		var regexptal = /^[0-9]+$/;
		if( !regexptal.test( document.getElementById('InputPostnummer').value ) )
		{
			AntalFejl += 1;
			FejlBesked2 += "Postnummer må kun indeholde tal!";
		}
	}
	
	if( document.getElementById( 'InputMail' ).value == "" )
	{
		AntalFejl += 1;
		FejlBesked3 = "Skriv din mail!";
	}
	else
	{
		var regexpmail = /^[A-Za-zÆØÅæøå0-9_.]+[@]{1}[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	if( !regexpmail.test( document.getElementById('InputMail').value ) )
		{
			AntalFejl += 1;
			FejlBesked3 = "Mail er ikke gyldig!";
		}
	}
	
	if( AntalFejl == 0 )
	{
		return true;
	}
	else
	{
		document.getElementById( 'FejlBesked1' ).innerHTML = FejlBesked1;
		document.getElementById( 'FejlBesked2' ).innerHTML = FejlBesked2;
		document.getElementById( 'FejlBesked3' ).innerHTML = FejlBesked3;
		return false;
	}
}
