import appFactory from './app';

const app = appFactory();

app.listen(3000, function () {
    console.log('Application is running on http://localhost:3000/');
})