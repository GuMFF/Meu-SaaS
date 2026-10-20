import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function OnboardingPage() {
  return (
    <main className="mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-4 py-16">
      <form className="space-y-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold text-zinc-900">
            Criar sua organização
          </h1>
          <p className="text-sm text-zinc-600">
            Esse será o tenant do seu SaaS (ex.: acme-corp).
          </p>
        </div>
        <label className="block space-y-1.5 text-sm">
          <span>Nome da empresa</span>
          <Input name="name" placeholder="Acme Corp" required />
        </label>
        <label className="block space-y-1.5 text-sm">
          <span>Slug</span>
          <Input name="slug" placeholder="acme-corp" required />
        </label>
        <Button type="submit" className="w-full">
          Continuar
        </Button>
      </form>
    </main>
  );
}
