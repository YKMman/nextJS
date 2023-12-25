It`s a test project for "Телерадиохолдинг Optimedia"

What need to start this app? Almost nothing:
1. Postgres database - https://www.postgresql.org/
2. Node js (20.8.0) or latest - https://nodejs.org/en
3. VS CODE - https://code.visualstudio.com/


This is a full adaptive and cross-browser NEXTJS project with database postgres
FULLSTACK APP

Manual for use:
1. open folder in vs code -> ctrl shift ` or terminal -> git clone https://github.com/YKMman/nexttest.git
2. open postgres database
3. backslash! chcp 1251 to psql database (ru encoding)
4. open .env.local file and update variables with you postgres database
5. open .sql and ctrl c + ctrl v to postgres consol command
6. cd nexttest -> npm i -> npm run dev 
7. check project!


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
