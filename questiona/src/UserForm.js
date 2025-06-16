import React, { useEffect, useState } from 'react'

const UserForm = () => {
    const [form, setForm] = useState({firstname: "", lastname: "", age: ""});
    const [user, setUser] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            setUser(JSON.parse(storedUsers));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(user));
    }, [user]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({ ...form, [name]: value});
        setError("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstname, lastname, age} = form;

        if (!firstname || !lastname || !age) {
            setError("All Fields must be filled");
            return;
        }

        if (isNaN(age) || age < 0) {
            setError("Age must be a valid number");
            return;
        }

        const numericAge = parseInt(age);
        if (numericAge < 18) {
            setForm({ firstname: "", lastname: "", age: ""});
            return;
        }

        const fullname = `${firstname} ${lastname}`;
        const ageGroup = numericAge < 30 ? "Below 30" : "Above 30";
        const newUser = { fullname, ageGroup};
        setUser([...user, newUser]);
        setForm({ firstname: "", lastname: "", age: "" });

    }

  return (
    <div className='bg-black min-h-screen w-full text-white'>
      <div className=''>
        <h1 className='text-2xl font-bold text-blue-600'>User Group</h1>
      </div>
      { error && (
        <div className='bg-red-500 text-white p-4 rounded mt-4'>
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center mt-10'>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          className="px-3 py-2 text-black border-black border w-1/3 mb-4"
          value={form.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          className="px-3 py-2 text-black border-black border w-1/3 mb-4"
          value={form.lastname}
          onChange={handleChange}
        />
        <input
          type="number"
          name='age'
          placeholder="Age"
          className="px-3 py-2 text-black border-black border w-1/3 mb-4"
          value={form.age}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>

      <section>
        <h1 className='text-2xl text-white font-bold'>User Data</h1>
          <ol className='list-decimal list-outside'>
            {
            user.map((item, index) => (
               <li key={index}>{item.fullname} - {item.ageGroup}</li>
            ))
        }
          </ol>
        
      </section>
    </div>
  )
}

export default UserForm
