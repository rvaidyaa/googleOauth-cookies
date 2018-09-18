const passport = require("passport");

module.exports = (app) => {
    app.get(
        "/auth/google",
        passport.authenticate("google", {
            scope: ["profile", "email"]
        })
    );

    app.get("/auth/google/callback", passport.authenticate("google"));

    app.get("/api/logout", (req,res)=>{
        req.logout();//takes the cookie that contains the id in it, and kills the id in there, so user goes blank
        res.send(req.user);
    });

    app.get('/api/current_user', (req,res) =>{
        //req.session (has the cookie in it), req.session is sent to passport
        res.send(req.user);
    });
};
//hey passport i want you to be aware of a new strategy that is available and its googleStrategy
//console.developers.google.com
//when you sign up for google api you dont want oauth, you want to search google+
