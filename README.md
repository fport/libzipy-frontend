# libzipy (React Front-end)
<p align="center"><img src="https://user-images.githubusercontent.com/56169582/114100897-a6dab200-98cd-11eb-8c5c-499a986c1c48.png" width="180px"/></p>



## Want to Contribute?

You have 2 things you can do:

1. Either open an issue about a bug, feature request, page, or component,
2. __Or__ close an issue, by writing and/or implementing it in your own fork!



## A Little About Design

[`Figma Design Sheet`](https://www.figma.com/file/j2kfzwz7OkVCafwScqjgAn/Libzipy-K%C3%BCt%C3%BCphane-Projesi?node-id=0%3A1)
is here in case you want to take a look.
Bear in mind that it's still in development!



## Development & Deploying Guide

Firstly, install your dependencies!

```sh
npm install
```

Next up, create yourself a `.env` file!

```sh
# .env
REACT_APP_API_URL = {your frontend api url here}
```

Then you can do:

```sh
npm start
```

for a development server, or

```sh
npm run build
```

for building the project into static, deployable files.



## Linting

> Additionally, you can do `yarn run lint` to see formatting errors
> and `yarn run lint:fix` to fix them.
> Don't worry if you forgot to lint your code!
> Someone will definitely fix it in another commit for you :smiley:


## .vscode settings.json
```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["js"],
  "editor.formatOnSave": true
}
```
## for disable eslint while coding
```
/* eslint-disable */
```


