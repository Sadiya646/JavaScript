function isAnagram(s1, s2) {
  // TODO: Implement this function
   s1 = s1.toLowerCase().replace(/[^a-z]/g, "");
    s2 = s2.toLowerCase().replace(/[^a-z]/g, "");

    if (s1.length !== s2.length) {
        return false;
    }

    return s1.split("").sort().join("") === s2.split("").sort().join("");
}