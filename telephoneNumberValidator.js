function telephoneCheck(str) {
  
// starts with 1 followed by space or just 1 (? = not required)
// "(" followed by 3 digits OR just 3 digits 
// followed by - OR space (? = not required) another 3 digits followed by - OR space (? = not required) 
// ends with 4 digits 

 return /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/.test(str);
}

telephoneCheck("555-555-5555"); //returns true
telephoneCheck("1 555-555-5555"); //returns true
telephoneCheck("5555555555"); //return true
