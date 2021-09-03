const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 8000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

const UserRoutes = require('./routes/user');
app.use('/user', UserRoutes);

const ProfileRoutes = require('./routes/profile');
app.use('/profile', ProfileRoutes);

const PostRoutes = require('./routes/post');
app.use('/post', PostRoutes);

db.sequelize.sync().then( () => {
    app.listen(PORT, () => {
        console.log(`listening at http://localhost:${PORT}`)
    })
})
