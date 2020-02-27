

function _open( url, width, height ) {
	window.open( url, '', 'width=' + width + ',height=' + height + ',left=' + ((window.innerWidth - width)/2) + ',top=' + ((window.innerHeight - height)/2) );
 }


 
 
jQuery('Document').ready(function(){
	
$('#summ').on ('click', function(){
document.location.href = "content/sumprop/summ.html";
});	



$('#koeff').on ('click', function(){
document.location.href = "content/koeffsnig/koeff.html";
});	
	
		
$('#post').on ('click', function(){
document.location.href = "content/post/post.html";
});			
		
$('#title').on ('click', function(){
document.location.href = "index.html";
});			
		
		

	

}); 

