function decimalToBinary(num) {
	 
	  let answer = "";
	  while(num != 0){
		  answer = (num % 2) + answer ;
		  num =  Math.floor(num / 2);
	  }
	return answer;
}

window.decimalToBinary = decimalToBinary;
