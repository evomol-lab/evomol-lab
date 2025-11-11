import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  journal: string;
  year: string;
  doi: string;
  doiLink: string;
}

const PublicationsTab = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPublications = async () => {
      const orcidId = '0000-0002-6113-8834';
      const apiUrl = `https://pub.orcid.org/v3.0/${orcidId}/works`;

      try {
        const response = await fetch(apiUrl, {
          headers: { 'Accept': 'application/json' }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.group && data.group.length > 0) {
          const sortedWorks = data.group.sort((a: any, b: any) => {
            const dateA = a['work-summary'][0]['publication-date'];
            const dateB = b['work-summary'][0]['publication-date'];
            const yearA = dateA ? (dateA.year ? parseInt(dateA.year.value) : 0) : 0;
            const yearB = dateB ? (dateB.year ? parseInt(dateB.year.value) : 0) : 0;
            return yearB - yearA;
          });

          const pubs: Publication[] = sortedWorks.map((workGroup: any) => {
            const summary = workGroup['work-summary'][0];
            const title = summary.title.title.value;
            const journal = summary['journal-title'] ? summary['journal-title'].value : 'N/A';
            let year = '';
            if (summary['publication-date'] && summary['publication-date'].year) {
              year = summary['publication-date'].year.value;
            }

            let doi = '';
            let doiLink = '#';
            if (summary['external-ids'] && summary['external-ids']['external-id']) {
              const doiObj = summary['external-ids']['external-id'].find((id: any) => id['external-id-type'] === 'doi');
              if (doiObj) {
                doi = doiObj['external-id-value'];
                doiLink = `https://doi.org/${doi}`;
              }
            }

            return { title, journal, year, doi, doiLink };
          });

          setPublications(pubs);
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching ORCID data:', err);
        setError('Failed to load publications. Please try again later.');
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  return (
    <div className="animate-fade-in space-y-6">
      <Card className="shadow-medium border-border/50 overflow-hidden">
        <div className="h-2 bg-gradient-primary" />
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">Publications</h2>
          
          {loading && (
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
            </div>
          )}

          {error && (
            <p className="text-destructive">{error}</p>
          )}

          {!loading && !error && publications.length > 0 && (
            <ul className="space-y-5">
              {publications.map((pub, index) => (
                <li 
                  key={index} 
                  className="pb-5 border-b border-border/50 last:border-0 transition-all hover:pl-2 duration-300"
                >
                  <a 
                    href={pub.doiLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block space-y-2"
                  >
                    <div className="flex items-start gap-2">
                      <strong className="text-lg text-primary group-hover:text-primary-dark transition-colors flex-1">
                        {pub.title}
                      </strong>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-muted-foreground italic">
                      {pub.journal} ({pub.year})
                    </p>
                    {pub.doi && (
                      <p className="text-sm text-muted-foreground">
                        DOI: {pub.doi}
                      </p>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {!loading && !error && publications.length === 0 && (
            <p className="text-muted-foreground">No publications found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PublicationsTab;
