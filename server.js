const express = require('express');
const connectToMongoose = require('./db');
const userRouter = require('./routes/user');
const galleryRouter = require('./routes/gallery');
const likeRouter = require('./routes/like');
const commentRouter = require('./routes/comment');
const followRouter = require('./routes/follow');
const workShopRouter = require('./routes/workShop');
const notificationRouter = require('./routes/notification');

connectToMongoose();

let app = express();

app.use(express.static("public"));
app.use(express.json());
app.set('view engine', 'pug');

app.use('/users', userRouter);
app.use('/galleries', galleryRouter);
app.use('/likes', likeRouter);
app.use('/comments', commentRouter);
app.use('/follows', followRouter);
app.use('/workShops', workShopRouter);
app.use('/notifications', notificationRouter);

app.listen(3000);
console.log("Server listening at http://localhost:3000");
