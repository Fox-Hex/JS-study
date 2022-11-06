const makeUser = ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});

const user1 = makeUser({
  friends: [
    makeUser({ id: 5 }),
    makeUser({ id: 1 }), // общий друг
  ],
});
const user2 = makeUser({
  friends: [
    makeUser({ id: 1 }), // общий друг
    makeUser({ id: 8 }),
  ],
});

// const getMutualFriends = (user1, user2) => {
//   const sharedFriends = user1.getFriends().filter((friend1) => {
//     return user2.getFriends().some((friend2) => friend2.id === friend1.id)
//   })
//   return sharedFriends
// };
// console.log(getMutualFriends(user1, user2))

const getMutualFriends2 = (user1, user2) => {
  const friends1 = user1.getFriends()
  const friends2 = user2.getFriends()
  const friends2IDs = friends2.map(({id}) => id)
  return friends1.filter((friend) => friends2IDs.includes(friend.id))
}
console.log(getMutualFriends2(user1, user2))

