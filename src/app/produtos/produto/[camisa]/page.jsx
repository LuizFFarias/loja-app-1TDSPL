import React from 'react'
import Link from 'next/link'

export default function CamisaSlug({params}) {
  return (
    <div>
        <h1>Dados de Camisas</h1>
        <div>
            <p>O valor é : {params.camisa}</p>
        </div>
        <div>
            <p><Link href="/">Voltar...</Link></p>
        </div>
    </div>
  )
}
