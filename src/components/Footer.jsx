const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="font-bold text-lg mb-4">दैनिक भास्कर</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">हमारे बारे में</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">संपर्क करें</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">करियर</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">ई-पेपर</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">न्यूज़</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">भारत</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">राज्य</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">दुनिया</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">बिज़नेस</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">मनोरंजन</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">बॉलीवुड</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">टीवी</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">वेब सीरीज</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">गेमिंग</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">सपोर्ट</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">सहायता</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">गोपनीयता नीति</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">शर्तें</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">विज्ञापन दें</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
                    <p>© 2023 दैनिक भास्कर. सर्वाधिकार सुरक्षित</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="#" className="hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                        </a>
                        <a href="#" className="hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </a>
                        <a href="#" className="hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                        <a href="#" className="hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;