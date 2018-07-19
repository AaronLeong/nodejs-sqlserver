
const mssql = require('./mssql.js');  
const defaultconfig = {
    userName: 'admin',
    password: 'c0mm0n-adm1n-new',
    server:'',
    options: {database: 'test'}
};
const conn = new mssql.mssql(defaultconfig);  

function mssql_query(sql) {
  return new Promise((resolve, reject) => {
    conn.query(sql,function(err,data){
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

mssql_query("select * from t_project_sms").then(data => console.log(data)).catch(err => console.log(err))


