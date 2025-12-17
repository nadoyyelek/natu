import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";
import PageHeader from "../components/PageHeader";

export default function MainLayout() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* bubble kanan atas */}
            <div className="absolute -top-24 -right-24 h-72 w-72 bg-green-400 rounded-full blur-3xl opacity-40 -z-10"></div>

            <AppBar />
            <PageHeader />

            <main className="p-6">
                <Outlet />
            </main>
        </div>
    );
}
