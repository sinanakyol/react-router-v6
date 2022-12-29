import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, Outlet } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);

  const activeClassName = "liElement";

  return (
    <div>
      <h2>Users</h2>
      {loading && <div>Loading...</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              to={`${user.id}`}
            >
              {" "}
              {user.name}{" "}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Bu sayfa içerisinde istediğimiz bir kullanıcı bilgisini User komponenti ile sunmak istediğimizde, User komponentini kullanmadan, Users komponenti içerisinde kullacını bilgisinin görüntülenmesini istediğimiz yere Outlet  komponentini ekleyerek işlem yapabiliriz. Gerekli yönlendirme route işlemlerini yaptığımız alandan yapılacaktır. */}

      <Outlet />

      {/* "User" componentini "Routes" içerisinde burada tanımlayabiliriz. Bu şekilde olursa "path="users" altında "/*" ifadesi eklenir. */}
    </div>
  );
}

export default Users;
