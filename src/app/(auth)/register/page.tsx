import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <main className="flex min-h-full flex-1 items-center justify-center px-4 py-16">
      <form className="w-full max-w-sm space-y-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold text-zinc-900">Criar conta</h1>
          <p className="text-sm text-zinc-600">Comece com uma organização depois do cadastro.</p>
        </div>
        <label className="block space-y-1.5 text-sm">
          <span>Nome</span>
          <Input type="text" name="name" autoComplete="name" required />
        </label>
        <label className="block space-y-1.5 text-sm">
          <span>E-mail</span>
          <Input type="email" name="email" autoComplete="email" required />
        </label>
        <label className="block space-y-1.5 text-sm">
          <span>Senha</span>
          <Input
            type="password"
            name="password"
            autoComplete="new-password"
            required
          />
        </label>
        <Button type="submit" className="w-full">
          Cadastrar
        </Button>
        <p className="text-center text-sm text-zinc-600">
          Já tem conta?{" "}
          <Link href="/login" className="font-medium text-zinc-900 underline">
            Entrar
          </Link>
        </p>
      </form>
    </main>
  );
}
