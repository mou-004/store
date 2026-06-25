const ErrorMessage = ({ message }) => {
  return (
    <div className="error-box">
      <div className="error-icon">⚠️</div>
      <h2>Unable to load products</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
