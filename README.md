It`s a test project for "Телерадиохолдинг Optimedia"

What need to start this app? Almost nothing:
1. Postgres database
2. Node js


This is a full adaptive and cross-browser NEXTJS project with database postgres
FULLSTACK APP

Manual for use:
1. download all files
2. open postgres database
3. open .env.local file and update variables with you postgres database
4. open .sql and ctrl c + ctrl v to postgres consol command
5. Update name file on package.json -   "name": "nexttest",                            ((!important))
6. To name folder - nexttest                              ((!important))
7. open folder in vs code
8. npm i -D encoding -> npm i -> npm run dev 
9. check project!


About this project:
We have server layout. This layout is have two components(Content, Slider)
Slider componet - it client component, which display slider and data get from api route
Content component - it server component, which display content data get from api route

Why slider is client component, but content in server component? - 
Because slider use swiper package.json to display swiper content. We use react-hooks and refs to good display on page
Content is server component - because not use react hooks. 
Everything component in nextjs - server component


How get data from nextjs project? we have folder 'api', where we do request and get data from database.
Api folder - is reserved folder name

DOCS:
https://nextjs.org/
https://react.dev/
