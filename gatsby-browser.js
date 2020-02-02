/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// ES5 way
// exports.onClientEntry = () => {
// ES6 way

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    require(`intersection-observer`)
    console.log(`👍 IntersectionObserver is polyfilled`)
  }
};