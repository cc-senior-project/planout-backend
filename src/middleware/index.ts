const knex = require("../knex");
const admin = require("../firebase-config/firebase.config");

class Middleware {
  async decodeToken(req: any, res: any, next: any) {
    const token = req.headers.authorization?.split(" ")[1];
    console.log("this is type", typeof token);
    console.log("token:", token);

    try {
      const decodedVal = await admin.auth().verifyIdToken(token);
      const uid = decodedVal.uid;
      if (decodedVal) {
        req.user = decodedVal;
        const users = await knex
          .select("email")
          .from("users")
          .where("email", req.user.email);
        const emails = users.map((user: any) => user.email);
        if (emails.includes(req.user.email)) {
          return next();
        } else {
          const names = req.user.name.split(" ");
          const userInfo = {
            first_name: names[0],
            last_name: names[names.length - 1],
            email: req.user.email,
          };
          await knex.insert(userInfo).into("users");
          return next();
        }
      }
      return res.json({ message: "not authorized" });
    } catch (error) {
      console.log("error:", error);
      return res.json(error);
    }
  }
}

module.exports = new Middleware();
