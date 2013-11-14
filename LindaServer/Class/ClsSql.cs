using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;

namespace LindaServer.Class
{
    public class ClsSql
    {
        public SqlConnection sqlCon;
        public ClsSql()
        {
            string sqlConStr = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            sqlCon = new SqlConnection(sqlConStr);
            OpenConnection();
        }
        public void OpenConnection()
        {
            try
            {
                sqlCon.Open();
            }
            catch (Exception ex)
            {
                
                throw;
            }
        }
        public void CloseConnection()
        {
            try
            {
                sqlCon.Close();
            }
            catch (Exception ex)
            {

                throw;
            }
        }
        public string GetRsValue(string sql)
        {
            string result="";
            
            return result;
        }
    }
}