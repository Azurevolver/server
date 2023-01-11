const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', 
    passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    // 照順序執行
    // 在取得google登入之後，google引導browser到/auth/google/callback
    // passport.authenticate這個middleware接手，取得登入結果
    // 最後引導至/surveys頁面
    app.get('/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
        console.log("[DEBUG] user logout");
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
        console.log("[DEBUG] BE current user ");
    })
};

