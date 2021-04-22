export default function ({ route, redirect }) {
  const path = route.path
  const hash = route.hash
  const type = route.query.type
  console.log('path:', path)
  console.log('hash:', hash)
  if (path === '/articles/' || path === '/articles/article/') {
    redirect('/')
  }
}
