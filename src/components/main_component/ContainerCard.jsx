import AppCard from "../main_component/AppCard";

export default function ContainerCard({ comics }) {

  return (
    <div className="containerCard">
      <div className="row row-cols-4">
        {comics.map((item) => {
          return (
            <div key={item.id} className="col">
              <AppCard img={item.thumb} title={item.title} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

