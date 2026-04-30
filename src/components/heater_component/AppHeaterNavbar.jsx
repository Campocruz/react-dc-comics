export default function AppHeaterNavbar({ links }) {

  return (
    <nav className='navBar'>
      {links.map((link) => {
        return (<a className="text-white" key={link.id} href="">{link.text}</a>)
      })}
    </nav>
  )
}