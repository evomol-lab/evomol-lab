interface HeaderProps {
  bannerImg?: string;
  logoImg?: string;
}

const Header = ({ bannerImg, logoImg }: HeaderProps) => {
  return (
    <header className="bg-gradient-header border-b border-border/50">
      <div className="container mx-auto px-4 py-6">
        {bannerImg && (
          <div className="mb-6 rounded-xl overflow-hidden shadow-medium animate-fade-in">
            <img 
              src={bannerImg} 
              alt="EvoMol Lab Banner" 
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 animate-slide-up">
            {logoImg && (
              <img 
                src={logoImg} 
                alt="EvoMol Lab Logo" 
                className="h-16 md:h-20 object-contain"
              />
            )}
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              EvoMol-Lab
            </h1>
          </div>
          
          <h2 className="text-xl md:text-2xl font-semibold text-secondary">
            Laboratory of Evolution of Molecules and Systems
          </h2>
          
          <p className="text-muted-foreground text-sm md:text-base max-w-3xl mx-auto">
            Associated with the Bioinformatics Multidisciplinary Environment (BioME),
            Metrópole Digital Institute (IMD), Federal University of Rio Grande do Norte (UFRN)
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
