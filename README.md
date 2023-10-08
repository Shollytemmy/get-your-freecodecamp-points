# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

[freecodecam-pulic api](https://api.freecodecamp.org/api/users/get-public-profile?username=bunyameen)


# FreeCodecamp User's Tracker

This is a web App project that aim solely on tracking user's activities or progress on FreeCodecamp platform by gettin the daily progress on any users based on their engagement on the platform.

This Project aim to integrate Firebase Authentication for signIn and Out of any users with firestore to persist the current user data.

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Environment Variables

 this project secure and protect its Api key from exposing by using .env, environment variables check it in your .env file

`API_KEY`

`VITE_SOME_KEY=123QWE`

# Guides on how to clone this project and create your own brach

# download a repository on GitHub to our machine
# Use the command below
git clone https://github.com/

# change into the `repo` directory
cd repo

# create a new branch to store any new changes. In this case your own branch(tips: use your name as the your branch name)
git branch my-branch

# switch to that branch (line of development)
git checkout my-branch

# make changes, for example, you  edit `file1.md` and `file2.md` using the text editor

# stage the changed files
git add . or git add file1.md file2.md

# take a snapshot of the staging area (anything that's been added) by commiting it to the github
git commit -m "my snapshot"

# push changes to github
git push --set-upstream origin my-branch