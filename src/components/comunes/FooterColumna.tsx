import { Link } from 'react-router-dom'

interface FooterLink {
  label: string
  to: string
}

interface Props {
  titulo: string
  links: FooterLink[]
}

export default function FooterColumna({ titulo, links }: Props) {
  return (
    <div className="footer-columna">
      <h3>{titulo}</h3>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
