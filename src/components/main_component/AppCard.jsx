export default function AppCard({ src, alt, title }) {

  return (
    <div className="card">
      <img src={src} className="card-img-top" alt={alt} />
      <div className="card-body">
        <p className="card-text">{title}</p>
      </div>
    </div>
  )
}