import AppBannerIcon from "./AppBannerIcon";

// const iconList = [
//   {
//     id: 1,
//     iconClass: "bi bi-2-square-fill",
//     iconText: "Digital comics"
//   },
//   {
//     id: 2,
//     iconClass: "bi bi-2-square-fill",
//     iconText: "comics"
//   },
//   {
//     id: 3,
//     iconClass: "bi bi-2-square-fill",
//     iconText: "digital"
//   }
// ];

export default function AppBannerSup({ iconList }) {

  return (
    <div className="bg-primary">
      <div className="row align-items-beetwen">
        {
          iconList.map((item) => {
            return (
              <div key={item.id} className="col-2">
                <AppBannerIcon iconClass={item.iconClass} iconText={item.iconText} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}