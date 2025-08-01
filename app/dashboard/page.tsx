import { Button } from "@/components/ui/button";

const DashboardPage = () => {
    return (
        <div className="w-full mt-10 px-6">
            <div className="w-full flex flex-col gap-6">
                <h1 className="text-4xl font-bold text-light-primary">
                    Notificações
                </h1>

                <Button size="lg" className="w-full">
                    Limpar todos
                </Button>
            </div>
        </div>
    );
};

export default DashboardPage;
