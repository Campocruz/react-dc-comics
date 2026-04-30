export default function AppCard({ img, title }) {

  return (
    <div className="card">
      <div className="card-body">
        <img src={img} className="card-img-top" alt={title} />
        <p className="card-text">{title}</p>
      </div>
    </div>
  )
}