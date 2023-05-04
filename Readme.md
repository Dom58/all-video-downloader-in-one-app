# How to access this application
1. Open cmd and clone the application by running
```bash 
git clone https://github.com/Dom58/all-video-downloader-in-one-app.git
```
and run `npm install` or `yarn install` to install backend dependencies

2. Type `cd frontend` on your cmd and run `npm install` or `yarn install` to install frontend dependencies

## Running a Backend
Run `npm run dev` or `yarn dev` to run development app and test the API using Cmd
1. Open your postman and test youtube video download
by 
```bash 
http://localhost:4000/api/videos/youtube/download
```

2. Run a frontend application
by 
```bash 
npm run start or yarn run start
```

# GIT hints
## Delete .git folder
```bash
1. rmdir /s /q .git

2. rd /s /q .git
```

## Windows git "warning: LF will be replaced by CRLF", is that warning tail backward?
```bash 
git config --global core.autocrlf false
```
