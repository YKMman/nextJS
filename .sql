create DATABASE nextjs;
\c nextjs;

CREATE TABLE special (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE material (
    id SERIAL PRIMARY KEY,
    image VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

INSERT INTO special (type, title, description) VALUES
('Спецпроект', 'ВКУС НИЖНЕГО', 'Уникальный фестиваль еды, который проходит в Нижнем Новгороде. Это событие собирает тысячи людей, чтобы попробовать разнообразные блюда, созданные местными шеф-поварами, и познакомиться с кулинарными традициями региона.');

INSERT INTO material (image, title, description) VALUES 
('1', 'Фестиваль «Вкус Нижнего»', 
'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel saepe omnis distinctio quae velit dolor eligendi ullam corporis reiciendis doloremque, voluptatem, aspernatur iste sed fugiat minima! Ea eum unde voluptates? - 1'),

('2', 'Строительство
Новой ветки метро', 
'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel saepe omnis distinctio quae velit dolor eligendi ullam corporis reiciendis doloremque, voluptatem, aspernatur iste sed fugiat minima! Ea eum unde voluptates? - 2'),

('3', '«Alfa Future People»', 
'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel saepe omnis distinctio quae velit dolor eligendi ullam corporis reiciendis doloremque, voluptatem, aspernatur iste sed fugiat minima! Ea eum unde voluptates? - 3'),

('4', 'Бакалея в Нижнем Новгороде', 
'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel saepe omnis distinctio quae velit dolor eligendi ullam corporis reiciendis doloremque, voluptatem, aspernatur iste sed fugiat minima! Ea eum unde voluptates? - 4'),

('5', 'Открылся новый ресторан в Нижнем новгороде', 
'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel saepe omnis distinctio quae velit dolor eligendi ullam corporis reiciendis doloremque, voluptatem, aspernatur iste sed fugiat minima! Ea eum unde voluptates? - 5'),

('6', 'Проходит акция в детских садиках', 
'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel saepe omnis distinctio quae velit dolor eligendi ullam corporis reiciendis doloremque, voluptatem, aspernatur iste sed fugiat minima! Ea eum unde voluptates? - 6'),

('7', 'Центральную площадь украсили под Новый Год', 
'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel saepe omnis distinctio quae velit dolor eligendi ullam corporis reiciendis doloremque, voluptatem, aspernatur iste sed fugiat minima! Ea eum unde voluptates? - 7');
