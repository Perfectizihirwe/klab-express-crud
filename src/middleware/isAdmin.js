import { User } from "../models";

export const isAdmin = async (req, res, next) => {
  try {
    const { userId } = req;

    const user = await User.findById(userId);

    console.log(user, "User");

    if (user?.role != "admin") {
      return res.status(403).json({
        message: "Action is only for admins",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server error",
    });
  }
};

// const req = {
//   userId: "6345734686344736sf32dee",
//   version: "ES14",
//   developers: "13M",
// };

// const { userId } = req;

// console.log(userId);
