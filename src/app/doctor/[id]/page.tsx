import dynamic from "next/dynamic";
import { SiteHeader } from '@/components/ui/siteheader';
import { SiteFooter } from "@/components/ui/sitefooter";
import { Skeleton } from "@/components/ui/skeleton";

const ExcalidrawWrapper = dynamic(
    async () => (await import("@/components/ui/excalidrawWrapper")).default,
    {
        ssr: false,
        loading: () => (
            <div className="flex justify-center items-center h-screen">
                <Skeleton className="h-96 w-full max-w-3xl" />
            </div>
        ),
    }
);

export default function Page() {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <SiteHeader />
                <div className="z-50">
                    <ExcalidrawWrapper />
                </div>
                <SiteFooter />
            </div>
        </>
    );
}
