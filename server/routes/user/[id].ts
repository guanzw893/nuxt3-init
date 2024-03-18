const list = [
  {
    id: 1,
    username: 'user1',
    nickname: 'user1',
    avatar: 'https://picsum.photos/200/200'
  },
  {
    id: 2,
    username: 'user2',
    nickname: 'user2',
    avatar: 'https://picsum.photos/200/200'
  }
]

export default defineEventHandler((event) => {
  const id = event.context.params!.id

  return list.find((item) => item.id === Number(id))
})
