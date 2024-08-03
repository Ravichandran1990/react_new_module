import { useEffect } from "react";
import Test1 from "./test1";

function Test({ testDataPass }) {
  function onlineHandle() {
    console.log("Online Enabled");
  }

  function offlineHandle() {
    console.log("Offline enabled");
  }

  useEffect(() => {
    window.addEventListener('online', onlineHandle);
    window.addEventListener('offline', offlineHandle);
    return(()=>{
      window.removeEventListener('online', onlineHandle);
      window.removeEventListener('offline', offlineHandle);
    })
  }, [])
  console.log(testDataPass);
  return (
    <>
      <h1>Test Component Created</h1>
      <Test1 passData='Received Data'/>
      <br />
      {testDataPass.name}
    </>
  );
}

export default Test;
