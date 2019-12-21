window.onload = function(){
const navbarBtn = document.querySelector('.navbar__btn');
const navbarLinks = document.querySelector('.navbar__links');


navbarBtn.addEventListener('click', function(){
	
	var value = navbarLinks.classList.contains('navbar__collapse');
	
	if(value){
		navbarLinks.classList.remove('navbar__collapse')
		navbarBtn.classList.remove('changeBtn')	
	}
	else{
		
		navbarLinks.classList.add('navbar__collapse')
		navbarBtn.classList.add('changeBtn')	
	}
	
	
})
 	      
}