// complete the given function

function palindrome(str){
let n=str.length;
		let startchar=0;
	   let endchar=n-1;
	 while(startchar<endchar){
		 if(str[startchar]!==str[endchar]){
	       console.log("false");
		 }
		 else{
			  startchar++;
		      endchar--;
		 }
		
	 }
	console.log("true");
	    
	
	
}
module.exports = palindrome
