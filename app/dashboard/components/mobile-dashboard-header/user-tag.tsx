import { LogOutIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

interface UserTagProps {
    name: string;
    role: "user" | "admin";
}

export const UserTag = ({ name, role }: UserTagProps) => {
    return (
        <div className="w-full flex items-center justify-between gap-4">
            <div className="flex flex-col">
                <span className="text-lg font-semibold text-light-primary">
                    {name}
                </span>

                <span className="text-sm text-muted-foreground">
                    {role === "admin" ? "Administrador" : "Cliente"}
                </span>
            </div>

            <Button size="sm">
                Sair
                <LogOutIcon size={18} />
            </Button>
        </div>
    );
};
