import Link from "next/link";
import {
    AppWindowIcon,
    BellIcon,
    FolderGit2Icon,
    ReceiptIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const DashboardNav = () => {
    return (
        <nav className="w-full flex flex-col gap-6">
            <Button
                variant={true ? "notification" : "secondary"}
                size="lg"
                className="w-full flex items-center justify-between"
            >
                <div className="flex items-center gap-2">
                    <BellIcon size={20} />

                    <span>Notificação</span>
                </div>

                <span className="w-8 h-8 rounded-lg border-2 border-light-primary flex items-center justify-center">
                    1
                </span>
            </Button>

            <div className="w-full h-px bg-white/10" />

            <ul className="w-full flex flex-col gap-4">
                <li>
                    <Button
                        variant={false ? "default" : "nav"}
                        size="lg"
                        className="w-full justify-start"
                        asChild
                    >
                        <Link href="/dashboard/projetos">
                            <AppWindowIcon size={20} />
                            <span>Projetos</span>
                        </Link>
                    </Button>
                </li>

                <li>
                    <Button
                        variant={false ? "default" : "nav"}
                        size="lg"
                        className="w-full justify-start"
                        asChild
                    >
                        <Link href="/dashboard/portfolio">
                            <FolderGit2Icon size={20} />
                            <span>Portfólio</span>
                        </Link>
                    </Button>
                </li>

                <li>
                    <Button
                        variant={false ? "default" : "nav"}
                        size="lg"
                        className="w-full justify-start"
                        asChild
                    >
                        <Link href="/dashboard/pagamentos">
                            <ReceiptIcon size={20} />
                            <span>Pagamentos</span>
                        </Link>
                    </Button>
                </li>
            </ul>
        </nav>
    );
};
