function Test({ testDataPass }) {
  console.log(testDataPass);
  return (
    <>
      <h1>Test Component Created</h1>
      {testDataPass.name}
    </>
  );
}

export default Test;
