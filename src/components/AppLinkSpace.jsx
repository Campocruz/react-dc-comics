export default function AppLinkSpace({ title, linkList }) {

  return (
    <ul>
      <h3>{title}</h3>
      {
        linkList.map((item, index) => {
          return (
            <li key={index}>{item.linkList}</li>
          )
        })
      }
    </ul>
  )
}