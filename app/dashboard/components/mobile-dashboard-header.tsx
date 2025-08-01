import Image from "next/image";
import { AlignLeftIcon } from "lucide-react";

import { DashboardNav } from "./dashboard-nav";
import { Button } from "@/components/ui/button";
import { UserTag } from "./mobile-dashboard-header/user-tag";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export const MobileDashboardHeader = () => {
    return (
        <header className="w-full px-6 py-4 sm:px-16 md:hidden">
            <div className="w-full flex items-center justify-between">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <AlignLeftIcon className="text-light-primary" />
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="left" className="flex flex-col gap-10">
                        <SheetHeader>
                            <SheetTitle className="flex items-center justify-center">
                                <Image
                                    src="/images/logo.svg"
                                    alt="MKDev"
                                    width={110}
                                    height={45}
                                    className="object-contain object-center"
                                />
                            </SheetTitle>
                        </SheetHeader>

                        <div className="flex-1 flex flex-col justify-between">
                            <DashboardNav />

                            <UserTag name="John Doe" role="admin" />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};
