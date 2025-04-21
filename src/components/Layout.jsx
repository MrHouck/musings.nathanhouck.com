import { FAMILY } from "@/utils/constants";



export default function Layout({children }) {
    return (
    <body className={`${FAMILY.className} w-screen overflow-x-hidden h-screen text-[var(--primary)] bg-[var(--bg)] transition-colors flex justify-center`} suppressHydrationWarning>
        {children}
    </body>
    );
}