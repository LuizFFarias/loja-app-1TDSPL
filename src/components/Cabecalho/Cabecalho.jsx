import React from 'react'
import Link from 'next/link'

export default function Cabecalho() {
  return (
    <header>
    <nav>
      <Link href="/produtos/estaticas/tenis">TÊNIS</Link> | 
      <Link href="/produtos/dinamicas/estranho/tenis-preto">TÊNIS PRETO</Link> |
      <Link href="/produtos/dinamicas/vestuario/camisa-xadrez">Camisa-X</Link>
    </nav>
  </header>
  )
}
