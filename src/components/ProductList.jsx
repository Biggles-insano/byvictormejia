import ProductCard from './ProductCard'

export default function ProductList({ title, products }) {
  return (
    <section style={{ margin: '2rem 0' }}>
      <h2>{title}</h2>
      <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', padding: '1rem 0' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}