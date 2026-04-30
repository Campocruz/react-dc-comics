import AppBannerIcon from "../footer_component/AppBannerIcon";

export default function AppBannerSup({ iconList }) {

  return (
    <>
      {
        iconList.map((item) => {
          return (
            <div key={item.id} className="col-2">
              <AppBannerIcon iconClass={item.iconClass} iconText={item.iconText} />
            </div>
          )
        })
      }
    </>
  )
}