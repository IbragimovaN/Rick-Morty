export const PagesLayout = ({ isLoading, error, children }) => {
  return (
    <>
      {isLoading ? (
        <div>loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        children
      )}
    </>
  );
};
