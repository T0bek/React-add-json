import logo from './logo.svg';
import './App.css';
import User from './componetns/users.js';
import Password from './componetns/passwords.js';
function App() {
  return (
    <div className="App">
      <User/>
      <table>
        <tr>
          <th>hasło</th>
          <th>szyfr</th>
        </tr>
      <Password/>
      </table>
    </div>
  );
}

export default App;
