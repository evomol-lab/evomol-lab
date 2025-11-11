import { useState } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HomeTab from "@/components/tabs/HomeTab";
import PublicationsTab from "@/components/tabs/PublicationsTab";
import ToolsTab from "@/components/tabs/ToolsTab";
import PeopleTab from "@/components/tabs/PeopleTab";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-background">
      <Header 
        bannerImg="banner.png"
        logoImg="EvoMol-logo.png"
      />
      
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {activeTab === "home" && <HomeTab />}
        {activeTab === "publications" && <PublicationsTab />}
        {activeTab === "tools" && <ToolsTab />}
        {activeTab === "people" && <PeopleTab />}
      </main>
      
      <footer className="text-center py-8 text-muted-foreground text-sm border-t border-border/50 mt-12">
        <p>&copy; {new Date().getFullYear()} EvoMol-Lab | Federal University of Rio Grande do Norte (UFRN)</p>
      </footer>
    </div>
  );
};

export default Index;
