
const Navigation = () => {
    return (
         <nav className="flex justify-between max-w-full h-[72px] px-8 items-center bg-gray-300"> 

      <div className="brand_logo">
        <img src="/images/brand_logo.png" alt="Brand_logo" className="w-16"  />
      </div>

      <ul className="flex gap-[24px]">
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      
      <button className="bg-red-600 text-white h-[32px] px-[16px] py-[4px] font-medium rounded-sm">login</button>
    </nav>
    )
}
export default Navigation;