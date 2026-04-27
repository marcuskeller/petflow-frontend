import { APP_ROUTES } from "@/src/app/app.routes";
import Link from "next/link";
import { Button } from "@/src/shared/components/ui/button";

export function Navbar() {
  return (
    <nav className="grid grid-cols-3 items-center font-bold bg-gray-100 text-emerald-700 tracking-tight p-4">
      <div className="flex justify-start  text-2xl">
        <link
          href={APP_ROUTES.public.home}
          className="hover:opacity-80 transition-opacity"
        />
        <h1>PetFlow</h1>
        <link />
      </div>

      <div className="flex justify-center">
        <ul className="flex gap-4">
          <li>
            <Link href={APP_ROUTES.public.home}>Explorar</Link>
          </li>
        </ul>
      </div>

      <div className="flex justify-end">
        <Button className="bg-emerald-700 hover:bg-emerald-800 text-white p-4">
          <Link href={APP_ROUTES.public.register}>Criar Conta</Link>
        </Button>
      </div>
    </nav>
  );
}
