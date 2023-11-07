// complete the given function

function palindrome(str){
let n=str.length;
		let startchar=0;
	   let endchar=str.lenght-1;
	 while(startchar<endchar){
		 if(str[startchar]!=str[endchar]){
			 return false;
		 }
		 else{
			  startchar++;
		      endchar--;
		 }
		
	 }
	return true;
	    
	
	
}
module.exports = palindrome
