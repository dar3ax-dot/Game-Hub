function Footer() {
    return (  
        <footer className="w-full pt-10 ">
            <div className="flex justify-center gap-x-7 h-auto items-center cursor-pointer">
               
                
                <ul className="flex gap-x-6 text-amber-50 text-2xl">
                    <li><i class="bi bi-youtube" ></i></li>
                    <li><i class="bi bi-tiktok"></i></li>
                    <li><i class="bi bi-instagram"></i></li>
                </ul>
               <h1 className="text-3xl text-blue-500">تابعنا </h1>
                    
   
                
            </div>
            <div className=" w-[98%] h-[100px] m-auto rounded-b-2xl mt-10">
                   <div className="px-5">
                    <h1 className="text-center text-3xl text-blue-400">الشركة</h1>
                    <ul className="flex gap-x-14 justify-center text-white pt-4">
                        <li>من نحن</li>
                        <li>سياسة الخصوصية</li>
                        <li>اتصل بنا </li>
                        <li> شركائنا</li>
                        
                    </ul>
                   </div>
            </div>
        </footer>
    );
}

export default Footer;