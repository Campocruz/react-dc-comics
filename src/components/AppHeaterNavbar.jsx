export default function AppHeaterNavbar(props) {

  return (
    <nav className='navBar'>

      {props.list.map((item, index) => {
        return <a key={index} href="">{item}</a>
      })}

    </nav>
  )
}