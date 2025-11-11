import { Card, CardContent } from "@/components/ui/card";

const HomeTab = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <Card className="shadow-medium border-border/50 overflow-hidden">
        <div className="h-2 bg-gradient-primary" />
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Welcome to EvoMol-Lab
          </h2>
          
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <p className="text-justify">
              The Laboratory of Evolution of Molecules and Systems (EvoMol-Lab) is one of the research groups associated with the Bioinformatics Multidisciplinary Environment (BioME), at the Metrópole Digital Institute (IMD) of the Federal University of Rio Grande do Norte (UFRN).
            </p>
            
            <p className="text-justify">
              EvoMol-Lab's mission is to study evolutionary processes that act on molecules, supramolecular complexes, and systems (pathways and interaction networks) and the structural and functional effects caused by genetic variation, using approaches from Bioinformatics, molecular modeling, and evolutionary sequence analysis.
            </p>
            
            <p className="text-justify">
              Its Principal Investigator is Prof. João Paulo MS Lima, Full Professor at UFRN.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeTab;
