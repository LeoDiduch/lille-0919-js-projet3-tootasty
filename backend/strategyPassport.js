const { connection, JWTSecret } = require("./conf");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    (email, password, done) => {
      connection.query(
        "SELECT * FROM user WHERE email = ? LIMIT 1",
        [email],
        (err, user) => {
          if (!user) return done(null, false, { message: "User not found !" });
          if (err) return done(err);
          const isPasswordOk = bcrypt.compareSync(password, user[0].password);
          if (!isPasswordOk)
            return done(null, false, { message: "Wrong password !" });
          return done(null, user);
        }
      );
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWTSecret
    },
    (jwtPayload, done) => {
      return done(null, jwtPayload);
    }
  )
);
