import residentialAreaRouter from './residentionalArea';

export default (app) => {
    app.use('/residentionalArea', residentialAreaRouter());
}