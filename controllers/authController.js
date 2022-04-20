const Url = require("../models/Url");
const User = require("../models/User");
const { nanoid } = require("nanoid");
const { use } = require("../routes/auth");

const registerForm = (req, res) => {
  res.render("register");
};
const registerUser = async (req, res) => {
  console.log(req.body);
  const { userName, email, password } = req.body;
  try {
    
    let user = await User.findOne({ email: email });
        
        if (user) throw new Error("ya existe el usuario");
        user = new User({ userName, email, password, tokenConfirm: nanoid(5) });
        await user.save();

    // enviar correo electronico

    //const salt = await bcrypt.genSalt(10);
    //console.log( await bcrypt.hash(user.password, salt));
    //res.json(user);
        
        res.redirect("/auth/login");

  } catch (error) {
    res.json({ error: error.message });
  }
  //res.json(req.body)
};

const confirmarCuenta = async (req, res) => {
  const { token } = req.params;
  //res.json(token)
  try {
    let user = await User.findOne({ tokenConfirm: token });
    if (!user) {
      throw new Error("No existe este usuario");
    }
    user.cuentaConfirmada = true;
    user.tokenConfirm = null;
    await user.save();
    res.redirect("/auth/login");
  } catch (error) {
    res.json({ error: error.message });
  }
  //res.json({token});
};

const loginForm =  (req, res) => {
  res.render("login");
};
const loginUser = async (req, res)=>{
    const {email, password} = req.body
    try {
        const user = await User.findOne({
            email: email
        })
        if(!user) throw new Error('No existe este email')
        console.log("Existe"+user);
        if(!user.cuentaConfirmada) throw new Error('Falta Confirmar Cuenta');
        if(!(await user.comparePassword(password))) throw new Error('Contraseña incorrecta');
        res.redirect('/')
    } catch (error) {
        console.log(error);
        res.send(error.message)
        //res.redirect('/auth/login')
    }
}

module.exports = {
  registerForm,
  loginForm,
  registerUser,
  confirmarCuenta,
  loginUser,
};
