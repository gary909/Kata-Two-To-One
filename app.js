function longest(s1, s2) {
    let my1 = s1.split(""); // split string into array
    let my2 = s2.split("");
    const children = my1.concat(my2); // join both arrays
    let uniqueChars = [...new Set(children)]; // remove any duplicates
    var sorted = uniqueChars.sort(); // sort into order
    return sorted.join(''); // make array into string, removing commas
}

console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); // "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions")); // "acefghilmnoprstuy"