module.exports = function(app) {

    app.get('/v1/user', function(req, res) {
        res.send([{
            _id:1,
            name: 'Mac',
            gender: 'f'
        }, {
            _id:2,
            name: 'Wine',
            gender: 'm'
        }, {
            _id:3,
            name: 'Line',
            gender: 'f'
        }]);
    });

    app.post('/v1/user', function(req, res) {
        res.send('post ok');
    });

    app.put('/v1/user/*', function(req, res){
        res.send('put ok');
    });

    app.delete('/v1/user/*', function(req, res){
        res.send('delete ok');
    });


    app.get('/v1/user_json', function(req, res) {
        res.send([{
            _id:1,
            name: 'vue',
            gender: 'f'
        }, {
            _id:2,
            name: 'ember',
            gender: 'f'
        }, {
            _id:3,
            name: 'react',
            gender: 'f'
        }]);
    });

    app.post('/v1/user_json', function(req, res) {
        res.send({code: 0, res:{user: {name:'hello', '_id': 1}}, 'msg': 'post ok'});
    });

    app.put('/v1/user_json/*', function(req, res){
        res.send({code: 0, res:{user: {name: 'world'}}, 'msg': 'put ok'});
    });

    app.delete('/v1/user_json/*', function(req, res){
        res.send({code: 0, res:{}, 'msg': 'delete ok'});
    });
};
