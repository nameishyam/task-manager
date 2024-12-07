function App() {
  let message = `Bye`;
  let number = Math.random() * 100;
  if (number > 20) {
    message = `Hello`;
  }
  return (
    <h1>{number}, {message}</h1>
  );
}

export default App
