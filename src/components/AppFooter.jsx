import footerData from '../assets/data/appFooterData.js'
import AppBannerInf from './AppBannerInf.jsx'
import AppBannerSup from './AppBannerSup.jsx'
import AppLinkSpace from './AppLinkSpace.jsx'

export default function AppFooter() {

  const iconList = footerData[0].items;
  const footerLink = footerData[1].items;

  return (
    <>
      <div id="iconSpace" className="row align-items-center justify-content-around bg-primary">
        <AppBannerSup iconList={iconList} />
      </div>
      <AppLinkSpace footerLink={footerLink} />
      <AppBannerInf />
    </>
  )
}