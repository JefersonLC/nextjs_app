
export default function ProductsPageLayout({ children }) {
  return (
    <>
      <div>
        <h1>List of Products:</h1>
        {children}
      </div>
    </>
  );
}
