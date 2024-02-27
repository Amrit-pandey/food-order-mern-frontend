import landingPage from '../assets/landing.png'
import appDownload from '../assets/appDownload.png'
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col text-center -mt-16 gap-5">
            <h1 className="text-5xl tracking-tight font-bold text-orange-600">Tuck into a take away.</h1>
            <span className="text-xl">Food is just a click away!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingPage} alt="landingpage.png" />
            <div className='flex flex-col text-center justify-center items-center gap-5'>
                <span className='font-bold tracking-tighter text-3xl'>Order takeaway even faster!</span>
                <span>Download the MernEats App for faster ordering and personalised recommandations.</span>
            <img src={appDownload} alt="appDownload.png" />
                </div>            
        </div>
    </div>
  )
}

export default HomePage
