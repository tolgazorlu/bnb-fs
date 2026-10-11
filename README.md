# bnb-fs

A small React practice app that fetches a user list from a public API and filters it live by name.

## About
Built in February 2023 as a React fundamentals exercise (hooks, fetch, controlled input filtering).

## Features
- Fetches users from `https://jsonplaceholder.typicode.com/users`
- Live search/filter over the fetched list by name

## Tech stack
- React 18
- Create React App (react-scripts 5)

## Architecture
```
src/
  App.js        # root component
  UserList.js   # fetch + search/filter logic
public/
  index.html
```

## Getting started
```bash
npm install
npm start      # dev server on http://localhost:3000
npm run build  # production build
```

## Status
Learning project, not maintained.

## License
MIT, see [LICENSE](LICENSE).
