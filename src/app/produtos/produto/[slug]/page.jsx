import React from 'react'
import Link from 'next/link'

export default function MeuProduto({params}){
    return(
        <div>
            <h1>Recuperando o parametro [slug]</h1>
            <div>
                <p>O valor é: {params.slug}</p>
            </div>
            <div>
            <p><Link href="/">Voltar...</Link></p>
        </div>
        </div>
    )
}