import React, { useContext } from "react";
import ReactDOM from "react-dom";

// Create a Context
const UserContext = React.createContext();
const EmailContext = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }

function App() {
  // const companies = [{ id: 1, name: "Sapient" }, { id: 2, name: "Mobify" }];
  const users = { id: 1, name: "Aidit" };
  const emails = [
    { id: 1, text: "My first email" },
    { id: 2, text: "My second email" }
  ];
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <UserContext.Provider value={users}>
      <EmailContext.Provider value={emails}>
        <Display />
        <DisplayViaUseContext />
      </EmailContext.Provider>
    </UserContext.Provider>
  );
}

function Display() {
  return (
    <>
      <UserContext.Consumer>
        {users => <p>Users: {users.name}</p>}
      </UserContext.Consumer>
      <EmailContext.Consumer>
        {emails => <p>Emails: {emails.length}</p>}
      </EmailContext.Consumer>
    </>
  );
}

function DisplayViaUseContext() {
  const user = useContext(UserContext);
  const emails = useContext(EmailContext);
  return (
    <div>
      Users: {user.name}, Emails: {emails.length}
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
