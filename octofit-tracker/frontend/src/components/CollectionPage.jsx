export default function CollectionPage({
  title,
  description,
  items,
  error,
  isLoading,
  emptyMessage,
  children,
}) {
  return (
    <section className="py-5" aria-labelledby="collection-title">
      <p className="small text-uppercase text-success fw-semibold mb-2">OctoFit Tracker</p>
      <h1 id="collection-title" className="h2 fw-bold">{title}</h1>
      <p className="text-body-secondary mb-4">{description}</p>

      {isLoading && <p role="status">Loading {title.toLowerCase()}...</p>}
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      {!isLoading && !error && items.length === 0 && (
        <div className="alert alert-light border" role="status">{emptyMessage}</div>
      )}
      {!isLoading && !error && items.length > 0 && children}
    </section>
  )
}
