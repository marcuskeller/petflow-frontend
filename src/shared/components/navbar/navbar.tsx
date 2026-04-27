import { APP_ROUTES } from "@/app/app.routes";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";

export function Navbar() {
  return (
    <nav className="grid grid-cols-3 items-center font-bold bg-gray-100 text-primary tracking-tight p-4">
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
        <Button className=" hover:bg-emerald-800 text-white p-4">
          <Link href={APP_ROUTES.public.register}>Criar Conta</Link>
        </Button>
      </div>
    </nav>
  );
}
