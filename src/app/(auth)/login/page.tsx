import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="page">
      <form className="card">
        <h1>Entrar</h1>
        <p>Acesse sua conta do SaaS.</p>
        <label className="field">
          <span>E-mail</span>
          <Input type="email" name="email" autoComplete="email" required />
        </label>
        <label className="field">
          <span>Senha</span>
          <Input
            type="password"
            name="password"
            autoComplete="current-password"
            required
          />
        </label>
        <Button type="submit" className="btn-block">
          Entrar
        </Button>
        <p className="center-note">
          Não tem conta? <Link href="/register">Cadastre-se</Link>
        </p>
      </form>
    </main>
  );
}
