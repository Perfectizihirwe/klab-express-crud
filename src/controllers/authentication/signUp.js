import { generateToken, hashPassword } from "../../utils";
import { User } from "../../models";

export const signUp = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(409).json({
        message: "User with this email already exists",
      });
    }

    let hashedPassword = await hashPassword(req.body.password);

    req.body.password = hashedPassword;

    let newUser = await User.create(req.body);

    let token = generateToken({
      _id: newUser._id,
      email: newUser.email,
    });

    res.status(201).json({
      message: "User registered successfully",
      access_token: token,
      user: {
        email: newUser.email,
        location: newUser.location,
        fullNames: newUser.fullNames,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
