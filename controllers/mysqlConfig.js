//mysqlConfig.js
var mysql = require('mysql')
// docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql
const config = {
    // 数据库配置
    database: {
        DATABASE: 'newmap', //数据库名称
        USERNAME: 'root', //mysql用户名
        PASSWORD: '123456', //mysql密码
        PORT: '3306', //mysql端口号
        HOST: '121.40.110.100' //服务器ip
    }
}
var connection = mysql.createConnection({
  // disable FOUND_ROWS flag, enable IGNORE_SPACE flag
});

var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
});

let allServices = {
    query: function (sql, values) {
        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err)
                } else {
                  console.log(connection)
                    connection.query(sql, values, (err, rows) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        connection.release()
                    })
                }
            })
        })
    },
    findAllUsers: function () {
        let _sql = `select * from lat_lng`
        return allServices.query(_sql)
    },
  //  findUserData: function (name) {
  //       let _sql = `select * from user_table where name="${name}";`
  //       return allServices.query(_sql)
  //   },
  //   addUserData: (obj) => {
  //        let _sql = "insert into user_table set name=?,password=?;"
  //        return allServices.query(_sql, obj)
  //    },
}

module.exports = allServices;
