
import Link from 'next/link'

export default function Cabecalho() {
  return (
    <header className='bg-gray-800 text-white h-16'>
    <nav className='flex justify-around'>
      <Link className='link-cabecalho' href="/consumo/eletro-view">ELETRÔNICOS</Link> 
      <Link className='bloc my-5' href="/produtos/dinamicas/estranho/tenis-preto">TÊNIS PRETO</Link> 
      <Link className='bloc my-5' href="/produtos/dinamicas/vestuario/camisa-xadrez">Camisa-X</Link>
    </nav>
  </header>
  )
}
