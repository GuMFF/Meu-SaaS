import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function OnboardingPage() {
  return (
    <main className="page">
      <form className="card">
        <h1>Criar sua organização</h1>
        <p>Esse será o tenant do seu SaaS (ex.: acme-corp).</p>
        <label className="field">
          <span>Nome da empresa</span>
          <Input name="name" placeholder="Acme Corp" required />
        </label>
        <label className="field">
          <span>Slug</span>
          <Input name="slug" placeholder="acme-corp" required />
        </label>
        <Button type="submit" className="btn-block">
          Continuar
        </Button>
      </form>
    </main>
  );
}
