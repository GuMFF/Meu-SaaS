import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="flex min-h-full flex-1 items-center justify-center px-4 py-16">
      <form className="w-full max-w-sm space-y-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold text-zinc-900">Entrar</h1>
          <p className="text-sm text-zinc-600">Acesse sua conta do SaaS.</p>
        </div>
        <label className="block space-y-1.5 text-sm">
          <span>E-mail</span>
          <Input type="email" name="email" autoComplete="email" required />
        </label>
        <label className="block space-y-1.5 text-sm">
          <span>Senha</span>
          <Input
            type="password"
            name="password"
            autoComplete="current-password"
            required
          />
        </label>
        <Button type="submit" className="w-full">
          Entrar
        </Button>
        <p className="text-center text-sm text-zinc-600">
          Não tem conta?{" "}
          <Link href="/register" className="font-medium text-zinc-900 underline">
            Cadastre-se
          </Link>
        </p>
      </form>
    </main>
  );
}
