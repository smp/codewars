function friend (friends) {
  return friends.filter((x) => {
    if (x.length === 4) {
      return x
    }
  })
}

console.log(friend(['foobar', 'toms', 'to']))
