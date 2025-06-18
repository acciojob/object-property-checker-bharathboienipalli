const sampleObject = {
  red: "#FF0000",
  green: "#00FF00",
  white: "#FFFFFF"
};

function hasKey(key) {
  return sampleObject.hasOwnProperty(key);
}

console.log(hasKey("red"));  
console.log(hasKey("blue")); 
console.log(hasKey("white")); 