import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface Person {
  name: string;
  image: string;
  bio?: string;
  house?: string;
  links?: { label: string; url: string }[];
  personalBio?: string;
}

const PeopleTab = () => {
  const pi: Person = {
    name: "João Paulo M S Lima",
    image: "JP.png",
    bio: "Biologist, Bioinformatics specialist, Ph.D. in Biochemistry. My main research area is the Evolution of Molecules and Metabolic Pathways, using Bioinformatics/Structural Bioinformatics and Molecular Phylogeny approaches. At present, I am a Full Professor at the Biochemistry Department of the Universidade Federal do Rio Grande do Norte. Also, I am a faculty member of the Bioinformatics graduate program (PPg-Bioinfo-IMD/UFRN), a principal investigator at the Bioinformatics Multidisciplinary Environment (BioME), and an associate researcher at the Institute of Tropical Medicine of Rio Grande do Norte (IMT-RN).",
    personalBio: "Father of humans and dogs. Scientist, amateur cyclist, gravel enthusiast.",
    house: "Hufflepuff",
    links: [
      { label: "CV Lattes", url: "http://lattes.cnpq.br/3289758851760692" },
      { label: "Página Docente da UFRN", url: "https://docente.ufrn.br/201900369630/perfil" },
      { label: "SIGAA", url: "https://sigaa.ufrn.br/sigaa/public/docente/portal.jsf?siape=1513597" },
      { label: "OrcID", url: "https://orcid.org/0000-0002-6113-8834" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Joao-Lima-31" },
      { label: "LinkedIN", url: "https://www.linkedin.com/in/jo%C3%A3o-paulo-ms-lima-b0667351/" },
      { label: "LinkTree", url: "https://linktr.ee/jpmslima" }
    ]
  };

  const mscStudents: Person[] = [
    {
      name: "Laís de Carvalho Gonçalves",
      image: "lais.jpeg",
      bio: "Cat mom, origamist, and amateur musician (ukulele and cavaquinho). Biomedical scientist and scientist by vocation!",
      house: "Ravenclaw",
      links: [
        { label: "CV Lattes", url: "https://lattes.cnpq.br/6541513579851095" },
        { label: "Email", url: "mailto:lais.goncalves.034@ufrn.edu.br" }
      ]
    }
  ];

  const gradStudents: Person[] = [
    {
      name: "Djorkaeff Oliveira Fontinele",
      image: "DJ.jpg",
      bio: "Biologist, Bioinformatics Masters' Degree Student.",
      house: "Hufflepuff",
      links: [
        { label: "CV Lattes", url: "http://lattes.cnpq.br/6052514253634998" },
        { label: "Email", url: "mailto:djorkaeff.fontinele.604@ufrn.edu.br" }
      ]
    },
    {
      name: "João Vitor Santos de França",
      image: "JV.jpg",
      bio: "Biologist, Bioinformatics Masters' Degree Student. Flamengo fan, Handball goalkeeper, and Natural Sciences Teacher.",
      house: "Slytherin",
      links: [
        { label: "CV Lattes", url: "http://lattes.cnpq.br/7286686048350979" },
        { label: "Email", url: "mailto:joao.vitor.santos.051@ufrn.edu.br" }
      ]
    },
    {
      name: "Juliana Rayssa Barros Felix",
      image: "Felix.gif",
      bio: "Biologist, Bioinformatics Masters' Degree Student.",
      house: "Gryffindor",
      links: [
        { label: "CV Lattes", url: "http://lattes.cnpq.br/3279922019273895" },
        { label: "Email", url: "mailto:juliana.barros.703@ufrn.edu.br" }
      ]
    },
    {
      name: "Laura Shimohara Bradaschia",
      image: "Shimohara.jpg",
      bio: "Biotechnologist, Bioinformatics Masters' Degree Student.",
      house: "Hufflepuff",
      links: [
        { label: "CV Lattes", url: "http://lattes.cnpq.br/5307797438965920" },
        { label: "Email", url: "mailto:laura.shimohara.041@ufrn.edu.br" }
      ]
    },
    {
      name: "Leonardo Luiz de Sena Fernandes",
      image: "leo.jpg",
      bio: "Bachelor in Farmaceutical Sciences and Biomedical Sciences, Bioinformatics Masters' Degree Student.",
      house: "Not a Harry Potter's Fan.",
      links: [
        { label: "CV Lattes", url: "http://lattes.cnpq.br/9545283697850276" },
        { label: "Email", url: "mailto:leonardo.luiz.089@ufrn.edu.br" }
      ]
    }
  ];

  const undergradStudents: Person[] = [
    {
      name: "Arthur Henrique Dantas de Azevedo",
      image: "arthur.jpg",
      bio: "Biomedical Sciences undergraduate student at UFRN, undergraduate researcher at EvoMol-Lab, and Bioinformatics enthusiast.",
      house: "Slytherin",
      links: [
        { label: "CV Lattes", url: "https://lattes.cnpq.br/6534445554074000" },
        { label: "Email", url: "mailto:arthur.henrique.079@ufrn.edu.br" }
      ]
    }
  ];

  const renderPerson = (person: Person) => (
    <div className="flex flex-col md:flex-row gap-6 items-start group hover:bg-accent/30 transition-colors rounded-lg p-4 -mx-4">
      <div className="flex-shrink-0 mx-auto md:mx-0">
        <img 
          src={person.image} 
          alt={person.name}
          className="w-40 h-40 rounded-full object-cover border-4 border-border shadow-medium"
        />
      </div>
      
      <div className="flex-1 space-y-4">
        <h4 className="text-2xl font-semibold text-secondary">{person.name}</h4>
        
        {person.bio && (
          <p className="text-foreground/80 text-justify leading-relaxed">{person.bio}</p>
        )}
        
        {person.links && person.links.length > 0 && (
          <ul className="space-y-2">
            {person.links.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium"
                >
                  <ExternalLink className="h-4 w-4" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        
        {person.personalBio && (
          <div className="space-y-2">
            <h5 className="text-lg font-semibold text-secondary">Personal Bio</h5>
            <p className="text-foreground/80">{person.personalBio}</p>
          </div>
        )}
        
        {person.house && (
          <div className="space-y-2">
            <h5 className="text-lg font-semibold text-secondary">House</h5>
            <p className="text-foreground/80">{person.house}</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="animate-fade-in space-y-6">
      <Card className="shadow-medium border-border/50 overflow-hidden">
        <div className="h-2 bg-gradient-primary" />
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Scientists</h2>
          
          <img 
            src="EvoMol-Lab-Nov2025.jpeg" 
            alt="EvoMol-Lab Team - November 2025"
            className="w-full h-auto rounded-xl shadow-medium mb-8"
          />

          <h3 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-border">
            Principal Investigator
          </h3>
          {renderPerson(pi)}
          
          <Separator className="my-8" />
          
          <h3 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-border">
            M.Sc.
          </h3>
          <div className="space-y-6">
            {mscStudents.map((person, index) => (
              <div key={index}>
                {renderPerson(person)}
              </div>
            ))}
          </div>
          
          <Separator className="my-8" />
          
          <h3 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-border">
            Grad Students
          </h3>
          <div className="space-y-8">
            {gradStudents.map((person, index) => (
              <div key={index}>
                {renderPerson(person)}
              </div>
            ))}
          </div>
          
          <Separator className="my-8" />
          
          <h3 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-border">
            Undergrad Students
          </h3>
          <div className="space-y-6">
            {undergradStudents.map((person, index) => (
              <div key={index}>
                {renderPerson(person)}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PeopleTab;
