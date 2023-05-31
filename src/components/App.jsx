import State from "./feedback/state"

export const App = () => {
  return (
    <div
      style={{
        padding: '60px',
        backgroundColor: 'beige',
        height: '100vh',
        display: 'flex',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <State
        state={{
          good: 0,
          neutral: 0,
          bad: 0
        }}
    />
    </div>
  );
};


