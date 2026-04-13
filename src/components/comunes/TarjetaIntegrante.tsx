interface Props {
  nombre: string
  cargo: string
  foto?: string
  iniciales: string
}

export default function TarjetaIntegrante({ nombre, cargo, foto, iniciales }: Props) {
  return (
    <article className="miembro" aria-label={nombre}>
      {foto
        ? <img src={foto} alt={nombre} className="miembro-foto" />
        : <div className="miembro-foto" aria-hidden="true">{iniciales}</div>
      }
      <h3>{nombre}</h3>
      <p>{cargo}</p>
    </article>
  )
}
