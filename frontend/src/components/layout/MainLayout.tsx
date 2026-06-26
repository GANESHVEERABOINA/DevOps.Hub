import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    // overflow-x-hidden: మొబైల్ లో కంటెంట్ పక్కకి జరిగి అడ్డంగా స్క్రోల్ అవ్వకుండా ఆపుతుంది
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#050505]">
      <Header /> 
      
      {/* w-full: ప్రతి డివైజ్ లో 100% వెడల్పు తీసుకుంటుంది.
        max-w-screen-2xl: మరీ పెద్ద టీవీల్లో ఓపెన్ చేసినప్పుడు కంటెంట్ మరీ సాగిపోకుండా సెంటర్ లో ఉంచుతుంది.
        mx-auto: కంటెంట్ ని మధ్యలో ఉంచుతుంది.
      */}
      <main className="flex-1 w-full max-w-screen-2xl mx-auto pb-24 md:pb-8 md:pl-28 pt-20">
        <Outlet /> 
      </main>
      
      {isHomePage && <Footer />}
    </div>
  );
}