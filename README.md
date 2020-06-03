# Greasby Opticians 😎

<p align="center">
  <img width="500" src="src/assets/images/GO-logo.jpg" alt="Greasby Opticians Logo">
</p>

## Information about The Website

This website is the face of Greasby Opticians, a buisness in Greasby, England.  I created the site using Vue js, Gridsome and Tailwind CSS.
See the [changelog](CHANGELOG.md) to see all updates to this project.

## Technologies Used

* **Tailwind CSS:**
    [Tailwind CSS](https://tailwindcss.com) is a low-level CSS framework that allows you to build responsive css with html classes

* **Gridsome:**
    [Gridsome](https://gridsome.org) is a jamstack static site generator for vue, it allows you to use any cms, markdown and many forms of data to build websites that can be deployed on Github and hosted on [Netlify](https://www.netlify.com) or a similar host.

* **Vue:**
    [Vue](https://vuejs.org) is a JavaScript framework that is easy to use and build websites out of components and intergrate functionality into a site with ease.

## File Structure

```
.
|- gridsome.config.js
|- gridsome.server.js
|- package.json
|- tailwind.config.js
    |- static/
    |- src/
        |- main.js
        |- main.css
        |- pages/
            |- Index.vue
            |- About.vue
            |- etc..
        |- layouts/
            |- Default.vue
            |- any other layouts..
        |- components/
            |- Navigation.vue
            |- Footer.vue
            |- etc..
        |- assets/
            |- images/
                |- logos, images, etc..
            |- styles/
                |- resets, global styles, etc..
    |- dist/
        |- index.html
        |- 404.html
        |- about/ and other pages..
            |- index.html (about page index)
        |- css/ style pages..
        |- assets/
            |- static/ images etc..
        |- js/ scripts..
        |- data/ data for each page..
```

## Using Gridsome

### Install Gridsome CLI tool

* Using YARN: `yarn global add @gridsome/cli`
* Using NPM: `npm install --global @gridsome/cli`

### Create a Gridsome project
* `gridsome create my-gridsome-site` to create a new project
* `cd my-gridsome-site` to open folder
* `gridsome develop` to start local dev server at http://localhost:8080
* `gridsome build` to build a dist folder with generated static files
The super fast and secure static site is ready to be deployed 🙌

----------
[changelog](CHANGELOG.md)
