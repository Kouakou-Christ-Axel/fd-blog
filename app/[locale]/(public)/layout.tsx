import {cn} from "@/lib/utils";
import PublicHeader from "@/components/partials/public-header";
import PublicFooter from "@/components/partials/public-footer";

const LayoutPublic = async ({children}: { children: React.ReactNode }) => {
    return (
        <>
            <PublicHeader/>
            <div
                className={cn(
                    "flex min-h-svh w-full flex-col bg-white",
                    "pt-16 lg:pt-20"
                )}
            >
                {children}
            </div>
            <PublicFooter/>
        </>
    );
};

export default LayoutPublic;
