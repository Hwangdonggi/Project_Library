const express = require("express");
const app = express();
const mysql = require("mysql2/promise");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors()); // CORS 미들웨어를 추가하여 클라이언트에서의 요청 허용

const port = 3000;

app.listen(port);
const DATABASE = {
  CONFIG: {
    host: "localhost",
    user: "root",
    password: "1111",
    database: "library",
  },

  QUERY: {
    LECTURE_ROOM: {},
    COURSE: {},
    COURSE_SCHEDULE: {},
    CURRICULUM: {},
    TUTOR: {
      FINDALL: "select * from book",
    },
    EDUCATION: {},
    STUDENT: {},
    ENROLLMENT: {},
  },
};

const executeQuery = async (query, params = []) => {
  try {
    const connection = await mysql.createConnection(DATABASE.CONFIG);
    const [results] = await connection.query(query, params);
    await connection.end();
    return results;
  } catch (err) {
    console.log(err);
  }
};

const getBooks = async () => await executeQuery(DATABASE.QUERY.TUTOR.FINDALL);

app.get("/api/book", async (req, res) => {
  res.json(await getBooks());
});
