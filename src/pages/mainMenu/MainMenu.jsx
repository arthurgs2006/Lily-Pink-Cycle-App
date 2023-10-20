import HeaderContent from '../../components/HeaderContent';
import MainContent from '../../components/mainContent';
import '../../style/style.scss'



export default function() {
  return(
    <div className="main" data-aos='fade-up'>
      <HeaderContent homeButton={true} />
      <MainContent />
    </div>
  )
}

