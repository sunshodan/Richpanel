import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1> FB Helpdesk</h1>
      <form>
        <input type="text" placeholder="username" className="username" />
        <br />
        <br />
        <input type="password" placeholder="password" className="password" />
        <br />
        <br />
        <button type="submit">Login</button>
        <br />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}
