function rot13(str) {
  //Regular alphabet
  var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
  
  //rot13 alphabet
  var alphabets13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
  //reult array which we will push 
  var result = [];
  //Nested for loop to iterate through alphabet array and string to return the matching letters and push it to the result array
  for(let i=0; i<str.length; i++){
      for(let j =0; j<alphabets.length; j++){
          if(str[i] === alphabets[j]){
          result.push(alphabets13[j]);
          }
      }
  }
  //join to make the word
  return resultStr.join("");
  };

rot13("SERR PBQR PNZC");// return FREE CODE CAMP
rot13("SERR CVMMN!");//return FREE PIZZA!
