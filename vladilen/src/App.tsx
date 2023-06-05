import React from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";

// При удалении нумарция поста будет начинаться с 1, так и задумано
function App() {

  return (
    <div>
      <Form />
      <UserList />

    </div>
  );
}

export default App;