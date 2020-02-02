import React from 'react';
import { Link } from 'gatsby';
import { FirebaseContext } from 'gatsby-plugin-firebase';

const BlogPage2 = () => {
  const firebase = React.useContext(FirebaseContext);

  const [posts, setPosts] = React.useState({
    posts: [],
    title: ''
  })

  React.useEffect(() => {
    if(!firebase) {
      return
    }

    firebase
    .database()
    // .ref("/posts").on('value', (snapshot) => {
    //   let posts = [];
    //   snapshot.forEach(childSnapshot => {
    //     posts.push({...childSnapshot.val(), key: childSnapshot.key })
    //     console.log(posts)
    //     setPosts({
    //       ...posts,
    //       posts: posts
    //     })
    //   })
    // })
    .ref("/posts")
    .once("value")
    .then(snapshot => {
      setPosts(snapshot.val())
    })
  }, [firebase])

  console.log(posts.posts)
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default BlogPage2