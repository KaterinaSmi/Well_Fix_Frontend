import { Helmet } from 'react-helmet';
import DoneIcon from '@mui/icons-material/Done';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Meistä – WellFix Rakennus Oy | Rakennus- ja korjauspalvelut</title>
        <meta
          name="description"
          content="WellFix Rakennus Oy tarjoaa laadukkaita rakennus-, korjaus- ja remonttipalveluja pääkaupunkiseudulla. Tutustu meihin ja toimintaperiaatteisiimme."
        />
        <meta
          name="keywords"
          content="Rakennuspalvelut, korjauspalvelut, remontit Helsinki, WellFix Rakennus Oy, rakennusliike, laatutyö, aikatauluvarmuus, Meistä, rakennustiimi, betonityöt, ulkotyöt, sisätyöt"
        />
      </Helmet>

      <div className='container-about'>
        {/* Section 1: Company Info */}
        <div id='company-info'>
          <div className='right-div'>
            <img
              src="svarka.jpg"
              alt="Hitsaustyö"
              className="about-image"
            />
          </div>
          <div className='left-div'>
            <h2 className='bigger-font'>Meistä – WellFix Rakennus Oy</h2>
            <p className='roboto-medium'>
              <DoneIcon sx={{ height: '20px', color: '#f9b57a' }} />
              WellFix Rakennus Oy on vuonna 2021 perustettu rakennusliike.
            </p>
            <p className='roboto-medium'>
              <DoneIcon sx={{ height: '20px', color: '#f9b57a' }} />
              Tarjoamme laadukkaita korjaus-, rakennus- ja remonttipalveluja pääkaupunkiseudulla.
            </p>
            <p className='roboto-medium'>
              <DoneIcon sx={{ height: '20px', color: '#f9b57a' }} />
              Tiimissämme on kokeneita ammattilaisia, joilla on laaja kokemus rakennusalalta.
            </p>
            <span className='aboutLink'>
              <a
                href='/files/Esittely.pdf'
                title="Lue lisää WellFix Rakennus Oy:stä PDF-muodossa"
              >
                Lue lisää meistä (PDF)
              </a>
            </span>
          </div>
        </div>

        {/* Section 2: Company Values */}
        <div id='company-info'>
          <div className='left-div'>
            <h2 className='bigger-font'>Lupaamme – Laatu & Luotettavuus</h2>
            <p className='roboto-medium'>
              <DoneIcon sx={{ height: '20px', color: '#f9b57a' }} />
              <strong>Aikataulu:</strong> Pidämme kiinni aikarajoista ja budjeteista ilman kompromisseja.
            </p>
            <p className='roboto-medium'>
              <DoneIcon sx={{ height: '20px', color: '#f9b57a' }} />
              <strong>Laatu:</strong> Taataan korkeimmat työstandardit kaikissa rakennus- ja korjauspalveluissamme.
            </p>
            <p className='roboto-medium'>
              <DoneIcon sx={{ height: '20px', color: '#f9b57a' }} />
              <strong>Yksilöllinen lähestymistapa:</strong> Huomioimme jokaisen asiakkaan toiveet ja vaatimukset.
            </p>
            <br />
          </div>
          <div className='right-div'>
            <img
              src="beton.jpg"
              alt="Betonityömaa"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
