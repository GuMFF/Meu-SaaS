import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <main className="page">
      <form className="card">
        <h1>Criar conta</h1>
        <p>Comece com uma organização depois do cadastro.</p>
        <label className="field">
          <span>Nome</span>
          <Input type="text" name="name" autoComplete="name" required />
        </label>
        <label className="field">
          <span>E-mail</span>
          <Input type="email" name="email" autoComplete="email" required />
        </label>
        <label className="field">
          <span>Senha</span>
          <Input
            type="password"
            name="password"
            autoComplete="new-password"
            required
          />
        </label>
        <Button type="submit" className="btn-block">
          Cadastrar
        </Button>
        <p className="center-note">
          Já tem conta? <Link href="/login">Entrar</Link>
        </p>
      </form>
    </main>
  );
}
