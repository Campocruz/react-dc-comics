import footerData from '../assets/data/appFooterData.js'
import AppBannerInf from './AppBannerInf.jsx'
import AppBannerSup from './AppBannerSup.jsx'
import AppLinkSpace from './AppLinkSpace.jsx'

export default function AppFooter() {

  const iconList = footerData[0].items;
  const footerLink = footerData[1].items;

  return (
    <>
      <div className='container-flush'>
        <AppBannerSup iconList={iconList} />
        <AppLinkSpace footerLink={footerLink} />
        <AppBannerInf />
      </div>
    </>
  )
}