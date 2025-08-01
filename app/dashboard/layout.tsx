import { MobileDashboardHeader } from "./components/mobile-dashboard-header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full md:flex">
            <div className="hidden md:block">Menu</div>

            <div className="w-full">
                <MobileDashboardHeader />
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
