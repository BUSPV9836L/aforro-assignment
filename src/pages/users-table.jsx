import { useEffect, useMemo, useState } from "react";
import {
  Search,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Building2,
  Mail,
  MapPin,
  Users,
} from "lucide-react";

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("All");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const cities = useMemo(() => {
    return ["All", ...new Set(users.map((u) => u.address.city))];
  }, [users]);

  const filteredUsers = useMemo(() => {
    let filtered = users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.company.name.toLowerCase().includes(search.toLowerCase());

      const matchesCity =
        cityFilter === "All" || user.address.city === cityFilter;

      return matchesSearch && matchesCity;
    });

    filtered.sort((a, b) => {
      let valueA;
      let valueB;

      switch (sortField) {
        case "email":
          valueA = a.email;
          valueB = b.email;
          break;
        case "company":
          valueA = a.company.name;
          valueB = b.company.name;
          break;
        case "city":
          valueA = a.address.city;
          valueB = b.address.city;
          break;
        default:
          valueA = a.name;
          valueB = b.name;
      }

      return sortOrder === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    });

    return filtered;
  }, [users, search, cityFilter, sortField, sortOrder]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const renderSortIcon = (field) => {
    if (sortField !== field)
      return <ArrowUpDown size={16} className="opacity-50" />;

    return sortOrder === "asc" ? (
      <ArrowUp size={16} />
    ) : (
      <ArrowDown size={16} />
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-white to-slate-200 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 p-6 sm:p-8 border-b border-slate-200">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative w-full sm:w-80">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search users..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-12 pl-11 pr-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 transition"
                />
              </div>

              <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="h-12 px-4 rounded-2xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-200">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th
                    onClick={() => handleSort("name")}
                    className="px-6 py-5 text-left text-sm font-semibold text-slate-700 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      Name
                      {renderSortIcon("name")}
                    </div>
                  </th>

                  <th
                    onClick={() => handleSort("email")}
                    className="px-6 py-5 text-left text-sm font-semibold text-slate-700 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      Email
                      {renderSortIcon("email")}
                    </div>
                  </th>

                  <th
                    onClick={() => handleSort("company")}
                    className="px-6 py-5 text-left text-sm font-semibold text-slate-700 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      Company
                      {renderSortIcon("company")}
                    </div>
                  </th>

                  <th
                    onClick={() => handleSort("city")}
                    className="px-6 py-5 text-left text-sm font-semibold text-slate-700 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      City
                      {renderSortIcon("city")}
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="py-20 text-center text-slate-500"
                    >
                      Loading users...
                    </td>
                  </tr>
                ) : filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-slate-100 hover:bg-slate-50/80 transition"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-md bg-slate-900 text-white flex items-center justify-center font-semibold shadow">
                            {user.name.charAt(0)}
                          </div>

                          <div>
                            <h3 className="font-semibold text-slate-900">
                              {user.name}
                            </h3>

                            <p className="text-sm text-slate-500">
                              @{user.username}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3 text-slate-700">
                          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                            <Mail size={18} />
                          </div>

                          <span className="text-sm sm:text-base break-all">
                            {user.email}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3 text-slate-700">
                          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                            <Building2 size={18} />
                          </div>

                          <span className="font-medium">
                            {user.company.name}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                          <MapPin size={15} />
                          {user.address.city}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-20 text-center">
                      <div className="flex flex-col items-center gap-3 text-slate-500">
                        <Users size={40} />
                        <p className="text-lg font-medium">No users found</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-5 bg-slate-50 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-900">
                {filteredUsers.length}
              </span>{" "}
              users
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600 shadow-sm">
              Sorted by
              <span className="font-semibold capitalize text-slate-900">
                {sortField}
              </span>
              ({sortOrder})
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
