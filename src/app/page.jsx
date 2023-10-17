import Link from "next/link"
import { analyticsId } from "../../next.config"

export default function Home() {
  return (
    <>
    <h1>HOME PAGE</h1>
    <div>
      <Link href="/produtos/tenis">TÊNIS</Link> | 
      <Link href="/produtos/produto/tenis-preto">TÊNIS PRETO</Link> |
      <Link href="/produtos/produto/camisa-xadrez">Camisa Xadrez</Link>
      
    </div>
    </>
  )
}
