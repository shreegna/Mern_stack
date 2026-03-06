import express from "express";
import session from "express-session";
import expressLayouts from "express-ejs-layouts"
const app = express();
app.use(expressLayouts)
app.set("layout","layout")
app.use(express.static("public"))
app.set("view engine","ejs")
app.set("views","views")
app.listen(5000, () => console.log("Server Started"));
app.use(express.urlencoded({extended: true}));
app.use(
    session({
        secret:"mySecretKey",
        resave:false,
        saveUninitialized:false,
    }),
);
let users=[
    {username:"shree",
        email:"shree@gmail.com",
        password:"1234"
    },
    { username:"ammu",
        email:"ammu12@gmail.com",
        password:"3333"
    }
];
app.get("/login", (req, res) => {
  res.render("login",{error:null});
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (user) {
    if (user.password === password) {
        req.session.user=user;//session id gets created
      res.redirect("/");
    } else {
      res.render("login", { error: "Invalid Password" });
    }
  } else {
    res.render("login", { error: "User not found" });
  }
  // res.redirect("/");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  users = [...users, req.body];
  res.redirect("/");
});

app.get("/", (req, res) => {
    if (req.session.user){
  res.render("dashboard",{users});
    }else{
        res.redirect("/login")
    }
});