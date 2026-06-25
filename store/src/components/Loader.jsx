const Loader = () => {
  return (
    <section className="skeleton-grid">
      {Array.from({ length: 8 }).map((_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton skeleton-image"></div>
          <div className="skeleton skeleton-pill"></div>
          <div className="skeleton skeleton-line long"></div>
          <div className="skeleton skeleton-line medium"></div>
          <div className="skeleton skeleton-button"></div>
        </div>
      ))}
    </section>
  );
};

export default Loader;
