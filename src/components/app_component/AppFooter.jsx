import iconList from '../../assets/data/appIconList.js'
import linkList from '../../assets/data/appLinkList.js'
import AppBannerInf from '../footer_component/AppBannerInf.jsx'
import AppBannerSup from '../footer_component/AppBannerSup.jsx'
import AppLinkSpace from '../footer_component/AppLinkSpace.jsx'

export default function AppFooter() {

  // const iconList = data[0].items;
  // const footerLink = data[1].items;

  return (
    <>
      <div id="iconSpace" className="row align-items-center justify-content-around bg-primary">
        <AppBannerSup iconList={iconList} />
      </div>
      {
        linkList.map((item) => {
          return (
            <AppLinkSpace key={item.id} linkList={item.linkList} title={item.title} />
          )
        })
      }
      <AppBannerInf />
    </>
  )
}