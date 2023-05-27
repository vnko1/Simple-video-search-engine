![image](https://github.com/thelostsoul88/vite-template/assets/48189332/03304ce3-18d3-476c-857a-bf4db07472de)

 Ready to use template Vite
 
 To use:
 - press button 'Use this template' and press 'create a new repo'

Setup base on vite.config:

base: "/[REPO_NAME]/"
In package.json:

"name": "[REPO_NAME]",

If You use a SPA app, for deployment on gh-pages, you should use hashRouter instead of browserRouter. Also, the hashRouter component must be given the props "basename='/reponame'>"
