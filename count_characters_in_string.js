// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count(string) {
  const a = string.split('');
  const d = { };
  // take item out of list
  a.forEach((element) => {
    if (element in d) {
      // then iterate
      d[element] += 1;
    } else { // add key
      d[element] = 1;
    }
  });
  console.log(d);
  return d;
}

// count('aba');
// count('');
