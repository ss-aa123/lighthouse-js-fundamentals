for(let i = 100; i<=200; i++){
  if(i % 3 === 0 && i % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if(i % 3 === 0){
    console.log("Loopy");
  } else if(i % 4 === 0){
    console.log("Lighthouse");
  } else {
    console.log(i);
  }
}

//new and improved code
for (const num of nums) {
  let output = "";

  if (num % 3 === 0) {
    output += "Loopy";
  }
  if (num % 4 === 0) {
    output += "Lighthouse";
  }
  console.log(output === "" ? num : output);
}
