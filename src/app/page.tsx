import Link from "next/link";

export default function Home() {
  return (
    <main className="hero">
      <p className="kicker">Meu SaaS</p>
      <h1>Multi-tenant pronto para crescer.</h1>
      <p className="lead">
        Login, organizações e cobrança em uma base Next.js + Prisma + Stripe.
      </p>
      <div className="actions">
        <Link href="/register" className="btn">
          Começar
        </Link>
        <Link href="/login" className="btn btn-secondary">
          Entrar
        </Link>
      </div>
    </main>
  );
}
