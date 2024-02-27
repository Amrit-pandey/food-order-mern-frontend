
const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <span className="text-3xl text-white font-bold tracking-tight">MernEats.com</span>
            <span className="text-white tracking-tight font-bold flex gap-4">
                <span>Privacy policy</span>
                <span>Terms of service</span>
            </span>
        </div>
    </div>
  )
}

export default Footer