function palindrome(str) {
  //Converting all strings to lowercase and match it with regex
  const x = str.toLowerCase().match(/[a-z0-9]/g)
  //return if its true or false after reversing the word and joining it with join statement
  return x.join("") === x.reverse().join("")
}

palindrome("eye"); //returns true
palindrome('Hello'); //return false
palindrome('RacE CAr'); //returns true
