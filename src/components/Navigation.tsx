import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface NavigationProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  return (
    <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-subtle">
      <div className="container mx-auto px-4 py-4">
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 bg-muted/50 p-1.5 h-auto">
            <TabsTrigger 
              value="home" 
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground transition-all duration-300 py-3 text-sm md:text-base font-medium rounded-lg"
            >
              Home
            </TabsTrigger>
            <TabsTrigger 
              value="publications"
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground transition-all duration-300 py-3 text-sm md:text-base font-medium rounded-lg"
            >
              Publications
            </TabsTrigger>
            <TabsTrigger 
              value="tools"
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground transition-all duration-300 py-3 text-sm md:text-base font-medium rounded-lg"
            >
              Tools
            </TabsTrigger>
            <TabsTrigger 
              value="people"
              className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground transition-all duration-300 py-3 text-sm md:text-base font-medium rounded-lg"
            >
              People
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default Navigation;
