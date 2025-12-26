const admin = require("firebase-admin");
const fs = require("fs");
const csv = require("csv-parser");

const SERVICE_ACCOUNT =
  require("./electronicvotingsystem-783e4-firebase-adminsdk-fbsvc-52756514d4.json");
const CSV_FILE = "./users.csv";
const DOMAIN = "@vote.local";

admin.initializeApp({
  credential: admin.credential.cert(SERVICE_ACCOUNT),
});

const auth = admin.auth();

const users = [];

fs.createReadStream(CSV_FILE)
  .pipe(csv())
  .on("data", (row) => {
    users.push({
      email: row.ID + DOMAIN,
      password: row.Password,
    });
  })
  .on("end", async () => {
    console.log(`登録開始：${users.length}件`);

    for (const user of users) {
      try {
        await auth.createUser({
          email: user.email,
          password: user.password,
        });
        console.log(`登録成功: ${user.email}`);
      } catch (e) {
        console.error(`失敗: ${user.email}`, e.message);
      }
    }

    console.log("登録完了");
  });