import {useState} from "react";
import Button from '@mui/material/Button';


function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <Button variant="contained" onClick={() => {
          setShow((state) => !state);
        }}>click me</Button>
      </div>
      {show && <div>clicked!</div>}
    </>
  );
}

export default App;
