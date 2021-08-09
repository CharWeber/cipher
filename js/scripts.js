jQuery(document).ready(function() {
  const sentence = prompt("12345");

  function firstAndLast(){
    const first = sentence.charAt(0);
    const last = sentence.charAt(sentence.length -1);
    const newstring = (first + last).toUpperCase();
    return alert(newstring);
  }

  firstAndLast();
});

// var string = "erehT era a tsav rebmun fo secruoser rof gninrael erom tpircsavaJ";
// // you can split, reverse, join " " first and then "" too
// string.split("").reverse().join("").split(" ").reverse().join(" ")