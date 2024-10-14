using Microsoft.Data.SqlClient;
using System.Data;
using WebAPI.Models;

namespace WebAPI.Views
{
    public class PostView
    {
        public static void InsertPostItem(Postingan postingan)
        {
            string query = "INSERT INTO [dbo].[Content] ([Judul], [Deskripsi], [Konten], [Image]) VALUES (@Judul, @Deskripsi, @Konten, @Image)";
            SqlParameter[] sqlParams = new SqlParameter[]
            {
                new SqlParameter("@Judul", SqlDbType.VarChar){ Value = postingan.Judul },
                new SqlParameter("@Deskripsi", SqlDbType.VarChar){ Value = postingan.Deskripsi },
                new SqlParameter("@Konten", SqlDbType.VarChar){ Value = postingan.Konten },
                new SqlParameter("@Image", SqlDbType.VarChar){ Value = postingan.Image }
            };

            CRUD.ExecuteNonQuery(query, sqlParams);
        }
        public static List<Postingan> SelectPostItem()
        {
            try
            {
                List<Postingan> result = new List<Postingan>();

                string query = @"SELECT * FROM Content";

                DataTable dt = CRUD.ExecuteQuery(query);
                foreach (DataRow row in dt.Rows)
                {
                    Postingan tempData = new Postingan
                    {
                        Judul = (string)row["Judul"],
                        Deskripsi = (string)row["Deskripsi"],
                        Konten = (string)row["Konten"],
                        Image = (string)row["Image"],
                    };

                    result.Add(tempData);
                }
                return result;
            }
            catch (Exception)
            {
                throw;
            }
        }
        public static void UpdatePostItem(string Judul, int IDPostingan)
        {
            string query = @"Update Content set Judul = @judul where IDPostingan = @id";

            SqlParameter[] sqlParams = new SqlParameter[]
            {
            new SqlParameter("@judul", SqlDbType.VarChar){ Value = Judul },
            new SqlParameter("@id", SqlDbType.VarChar){ Value = IDPostingan },
            };

            CRUD.ExecuteNonQuery(query, sqlParams);
        }
        public static void DeletePostItem(int IDPostingan)
        {
            string query = @"Delete Content where IDPostingan = @id";

            SqlParameter[] sqlParams = new SqlParameter[]
            {
            new SqlParameter("@id", SqlDbType.VarChar){ Value = IDPostingan },
            };

            CRUD.ExecuteNonQuery(query, sqlParams);
        }

    }
}
