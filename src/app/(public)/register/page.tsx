"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { LockKeyhole, LucideIcon, Mail, UserRound } from "lucide-react";
import {
  BaseSyntheticEvent,
  ChangeEvent,
  ComponentProps,
  useState,
} from "react";
import { UserModel } from "@/shared/models/user-model";
import { registerUser } from "@/service/auth.service";
import { APP_ROUTES } from "@/app/app.routes";
import { router } from "next/client";

interface FormFieldProps extends ComponentProps<"input"> {
  label: string;
  icon: LucideIcon;
}
const FormField = ({
  label,
  id,
  icon: Icon,
  type,
  placeholder,
}: FormFieldProps) => (
  <div className="grid gap-2 text-left">
    <label
      className="text-xs font-semibold tracking-wider text-muted-foreground uppercase ml-1"
      htmlFor={id}
    >
      {label}
    </label>
    <div className="relative flex items-center justify-center w-full">
      <Icon className="absolute left-3 h-4 w-4 text-muted-foreground pointer-events-none" />
      <Input
        className="pl-10"
        id={id}
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  </div>
);

export default function RegisterPage() {
  const [formData, setFormData] = useState<UserModel>({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      await registerUser(formData);
      alert("Cadastro realizado com sucesso! Bem-vindo ao PetFlow.");
      await router.push(APP_ROUTES.public.home);
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Ocorreu um erro inesperado ao tentar cadastrar.");
      }
    }
  };

  return (
    <div className="flex grow items-center justify-center">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="text-3xl font-bold text-primary">
            Criar conta
          </CardTitle>
          <CardDescription>
            Comece sua jornada para encontrar um novo amigo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <FormField
                label="NOME DE USUÁRIO"
                id="username"
                icon={UserRound}
                type="text"
                placeholder="Digite seu nome de usuário"
                value={formData.username}
                onChange={handleChange}
              />

              <FormField
                label="EMAIL"
                id="email"
                icon={Mail}
                type="email"
                placeholder="Digite seu email"
                value={formData.email}
                onChange={handleChange}
              />

              <FormField
                label="SENHA"
                id="password"
                icon={LockKeyhole}
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Digite sua senha"
              />

              <FormField
                label="SENHA NOVAMENTE"
                id="confirm_password"
                icon={LockKeyhole}
                type="password"
                placeholder="Digite sua senha novamente"
                value={formData.confirm_password}
                onChange={handleChange}
              />
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
