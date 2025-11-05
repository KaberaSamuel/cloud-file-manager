import "../styles/loader.css";

function Loader({ showWaitingMessage }) {
  return (
    <div className="app-loader">
      <div className="spinner"></div>
      {showWaitingMessage && (
        <div>
          <p>Hang on, the server is waking up</p>
          <p className="waiting-time">This can take 1-3 minutes</p>
        </div>
      )}
    </div>
  );
}

export default Loader;
