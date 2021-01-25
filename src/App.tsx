import React, { useState } from 'react';
import GlobalStyle from './style/globalStyled'
import Card from './components/card'
import Input from './components/input'
import List from './components/list'
function App() {
  const [updateValues,setUpdateValues] = useState(false)
  return (
    <div className="App">
      <GlobalStyle/>
      <Card>
        <Input updateValues={()=> setUpdateValues(i => !i)} placeholder='nova tarefa'/>
        <List updateValues={updateValues} />
      </Card>
    </div>
  );
}

export default App;
