const { slugify } = require("./src/util/utilityFunctions");
const path = require("path");
const authors = require("./src/util/authors");
const _ = require("lodash");

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slugFromTitle = slugify(node.frontmatter.title);
    createNodeField({
      node,
      name: "slug",
      value: slugFromTitle
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const templates = {
    singlePost: path.resolve("src/templates/single-post.js"),
    tagsPage: path.resolve("src/templates/tags-page.js"),
    tagPosts: path.resolve("src/templates/tag-posts.js"),
    postList: path.resolve("src/templates/post-list.js"),
    authorPosts: path.resolve("src/templates/author-posts.js")
  }

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors);

    const posts = res.data.allMarkdownRemark.edges;


    // Create single blog post page
    posts.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.fields.slug}`,
        component: templates.singlePost,
        context: {
          // Passing slug for template to use to get post
          slug: node.fields.slug,
          // Find author imageUrl from authors and pass it to the single post template
          imageUrl: authors.find(x => x.name === node.frontmatter.author)
            .imageUrl
        }
      });
    });

    // Get all tags
    let tags = [];
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    })

    // ['design', 'code', ...]
    // {design: 5, code: 6, ...}

    let tagPostCounts = {}
    tags.forEach(tag => {
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
    })

    tags = _.uniq(tags)

    createPage({
      path: `/tags`,
      component:templates.tagsPage,
      context: {
        tags,
        tagPostCounts
      }
    })

    // Create tag posts pages
    tags.forEach(tag => {
      createPage({
        path: `/tag/${slugify(tag)}`,
        component: templates.tagPosts,
        context: {
          tag,
        }
      })
    })

    const postsPerPage = 3
    const numberOfPages = Math.ceil(posts.length / postsPerPage)

    Array.from({length: numberOfPages}).forEach((_, index) => {

      createPage({
        path: index === 0 ? `/blog` : `/blog/${index + 1}`,
        component: templates.postList,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          currentPage: index + 1,
          numberOfPages
        }
      })
    })

    authors.forEach(author => {
      createPage({
        path: `/author/${slugify(author.name)}`,
        component: templates.authorPosts,
        context: {
          authorName: author.name,
          imageUrl: author.imageUrl
        }
      })
    })
  })
};
