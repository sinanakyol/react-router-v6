import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function User() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h2>User Detail</h2>
      {loading && <div>Loading...</div>}
      {!loading && <code>{JSON.stringify(user)}</code>}
      <br />
      <br />

      <div>
        {parseInt(id) < 10 ? (
          <Link to={`/users/${parseInt(id) + 1}`}>
            Next User {parseInt(id) + 1}{" "}
          </Link>
        ) : (
          <Link to={`/users/${1}`}> Turn Head </Link>
        )}
      </div>
    </div>
  );
}
export default User;
