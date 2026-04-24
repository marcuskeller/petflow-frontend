import { APP_ROUTES } from "@/src/app/app.routes";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md text-emerald-700 text-lg">
      <h1>PetFlow</h1>
      <Link href={APP_ROUTES.public.register}>Criar Conta</Link>
    </nav>
  );
}
