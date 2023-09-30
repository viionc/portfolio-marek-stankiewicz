import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import SkillsPage from "./components/SkillsPage";
import ActiveSectionContextProvider from "./context/ActiveSectionContext";
import Stars from "./components/Stars";

function App() {
    return (
        <>
            <ActiveSectionContextProvider>
                <div className="flex flex-col items-center justify-center px-4">
                    <Navbar></Navbar>
                    <LandingPage></LandingPage>
                    <SkillsPage></SkillsPage>
                    <AboutPage></AboutPage>
                    <ProjectsPage></ProjectsPage>
                    <ContactPage></ContactPage>
                </div>
                <Stars></Stars>
            </ActiveSectionContextProvider>

            <footer className="flex items-center justify-center w-full bg-gray-700 h-[2.5rem]">
                © Marek Stankiewicz 2023, all rights reserved.
            </footer>
        </>
    );
}

export default App;
