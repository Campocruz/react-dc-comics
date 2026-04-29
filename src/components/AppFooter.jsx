import iconList from '../assets/data/appIconList.js'
import linkList from '../assets/data/appLinkList.js'
import AppBannerInf from './AppBannerInf.jsx'
import AppBannerSup from './AppBannerSup.jsx'
import AppLinkSpace from './AppLinkSpace.jsx'

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