import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-24">
      <p className="text-sm font-medium text-zinc-500">Meu SaaS</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900">
        Multi-tenant pronto para crescer.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-zinc-600">
        Login, organizações e cobrança em uma base Next.js + Prisma + Stripe.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/register">
          <Button>Começar</Button>
        </Link>
        <Link href="/login">
          <Button variant="secondary">Entrar</Button>
        </Link>
      </div>
    </main>
  );
}
