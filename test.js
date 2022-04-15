function removeChar(str){

    //You got this!
    //  return [...str]
    //          .splice(1,0)
    //          .splice(str.length -1, 1)
    //          .join("")
    return str.substring(1, str.length-1)
    
   
};
console.log(removeChar("nilor"));
   