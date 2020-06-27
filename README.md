# Greasby Opticians 😎

<p align="center">
  <img width="500" src="src/assets/images/GO-logo.jpg" alt="Greasby Opticians Logo">
</p>

## Information about The Website

This website is the face of Greasby Opticians, a buisness in Greasby, England. I created the site using Vue js, Gridsome and Tailwind CSS.
See the [changelog](CHANGELOG.md) to see all updates to this project.

## Technologies Used

- **[Tailwind CSS](https://tailwindcss.com)**
  is a low-level CSS framework that allows you to build responsive css with html classes

- **[Gridsome](https://gridsome.org)**
  is a jamstack static site generator for vue, it allows you to use any cms, markdown and many forms of data to build websites that can be deployed on Github and hosted on [Netlify](https://www.netlify.com) or a similar host.

- **[Vue](https://vuejs.org)**
  is a JavaScript framework that is easy to use and build websites out of components and intergrate functionality into a site with ease.

- **[Mailgo](https://mailgo.js.org/)**
  a minimalist way to open email or phone links with mailgo, giving website users different options on how they would like to use the link they have just clicked. For example, when you click an email link, you can open it with Gmail, Outlook, your default email client or copy the link.

## File Structure

```
.
|- package.json
|- gridsome.config.js
|- gridsome.server.js
|- prettier.config.js
|- tailwind.config.js
|- CHANGELOG.md
|- static/
  |- admin/
    |- config.yml
    |- index.html
  |- announcements/
    |- first-update.md, etc..
|- src/
  |- main.js
  |- main.css
  |- pages/
    |- Index.vue
    |- About.vue, etc..
  |- layouts/
    |- Default.vue
    |- any other layouts..
  |- components/
    |- default/
      |- Navigation.vue
      |- Footer.vue, etc..
    |- modules/
      |- News.vue
      |- OpenTimes.vue, etc..
  |- assets/
    |- images/
      |- logos, images, etc..
    |- styles/
      |- resets, global styles, etc..
|- dist/
  |- index.html
  |- 404.html
  |- css/ style pages...
  The dist folder is built when 'gridsome build' is ran
```

## Using Gridsome

### Install Gridsome CLI tool

- Using YARN: `yarn global add @gridsome/cli`
- Using NPM: `npm install --global @gridsome/cli`

### Create a Gridsome project

- `gridsome create my-gridsome-site` to create a new project
- `cd my-gridsome-site` to open folder
- `gridsome develop` to start local dev server at http://localhost:8080
- `gridsome build` to build a dist folder with generated static files

Your super fast and secure static site is ready to be deployed 🙌

---

[changelog](CHANGELOG.md)

<p>Created with 
<a href="https://gridsome.org" target="_blank" rel="noopener"><img height="16" src="src/assets/images/amykble/gridsome.svg" alt="gridsome"></a>
<a href="https://vuejs.org" target="_blank" rel="noopener"><img height="16" src="src/assets/images/amykble/vue.svg.png" alt="vue"></a>
<a href="https://tailwindcss.com" target="_blank" rel="noopener"><img height="16" src="src/assets/images/amykble/tailwind.png" alt="tailwind"></a>
 by <a href="#" target="_blank" rel="noopener">Amy Keable</a></p>
