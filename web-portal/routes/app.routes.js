module.exports = app => {
  app.get('/', (req, res) => {
    res.render('home', { id: 'home', title: 'Home', url: req.url })
  })
  app.get('/post/:id', (req, res) => {
    const postId = req.params.id
    const breadcrumbs = [
      {
        name: `Post - ${postId}`
      }
    ]
    res.render('post/post', { id: 'post', title: 'Post', url: req.url, postId, breadcrumbs })
  })
  app.get('/contacts', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Contacts'
      }
    ]
    res.render('contacts/contacts', { id: 'contacts', title: 'Contacts', url: req.url, breadcrumbs })
  })
  app.get('/privacy', (req, res) => {
    const breadcrumbs = [
      {
        name: 'Privacy'
      }
    ]
    res.render('privacy/privacy', { id: 'privacy', title: 'Privacy', url: req.url, breadcrumbs })
  })
}
