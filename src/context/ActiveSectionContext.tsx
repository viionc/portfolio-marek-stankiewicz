import {useState, createContext, ReactNode, useContext} from "react";
import {links} from "../data/links";

export type SectionName = (typeof links)[number]["text"];
type ActiveSectionContextProviderProps = {
    children: ReactNode;
};
type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    lastClick: number;
    setLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const useActiveSection = () => {
    let context = useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error("Context is null");
    }
    return context;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [lastClick, setLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider
            value={{activeSection, setActiveSection, lastClick, setLastClick}}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}
