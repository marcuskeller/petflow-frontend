import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Button } from "@/shared/components/ui/button";

export default function RegisterPage() {
  return (
    <div className="flex grow items-center justify-center">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl bold text-primary">
            Criar conta
          </CardTitle>
          <CardDescription>
            Digite as informações abaixo para fazer o seu cadastro.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-4">
              <div className="grid gap-2 text-left">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@exemplo.com"
                  required
                />
              </div>
              <div className="grid gap-2 text-left">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  required
                />
              </div>
              <div className="grid gap-2 text-left">
                <Label htmlFor="password">Confirme sua senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha novamente"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Cadastrar-se
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
