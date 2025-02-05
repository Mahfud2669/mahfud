import HomeSideNav from '@/app/ui/home/home-sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <HomeSideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto m:p-12">{children}</div>
        </div>
    );
}