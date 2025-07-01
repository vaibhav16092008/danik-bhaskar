const Sidebar = () => {
    const categories = [
        { name: "टॉप न्यूज़", icon: "🔥" },
        { name: "भारत", icon: "🇮🇳" },
        { name: "राज्य", icon: "🏛️" },
        { name: "DB ओरिजिनल्स", icon: "⭐" },
        { name: "क्राइम", icon: "🚨" },
        { name: "राजनीति", icon: "🏛️" },
        { name: "लाइफस्टाइल", icon: "🍽️" },
        { name: "धर्म/मंत्र", icon: "🕉️" },
        { name: "दुनिया", icon: "🌎" },
        { name: "शिक्षा", icon: "📚" },
        { name: "खेल", icon: "⚽" },
        { name: "टेक्नोलॉजी", icon: "📱" },
        { name: "मनोरंजन", icon: "🎬" },
        { name: "ऑटो", icon: "🚗" },
        { name: "बिज़नेस", icon: "💼" },
    ];

    return (
        <div className="w-64 bg-white shadow-md hidden lg:block  h-full overflow-y-auto">
            <div className="p-4">
                <h3 className="font-bold text-lg mb-4 text-gray-800">श्रेणियाँ</h3>
                <ul className="space-y-2">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-100">
                                <span className="mr-3">{category.icon}</span>
                                <span className="text-gray-700">{category.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Download App Banner */}
                <div className="mt-8 bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <h4 className="font-bold text-blue-800 mb-2">अपने मोबाइल पर पढ़ें</h4>
                    <p className="text-sm text-gray-600 mb-3">दैनिक भास्कर ऐप डाउनलोड करें</p>
                    <div className="flex space-x-2">
                        <button className="bg-black text-white px-3 py-1 rounded text-sm flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.3-.15-.68-.06-.88.21l-1.88 3.24c-1.68-1.08-3.76-1.77-6.03-1.77-2.27 0-4.35.69-6.03 1.77L2.7 5.66c-.19-.27-.57-.36-.88-.21-.3.16-.42.54-.26.85L3.4 9.48C1.5 11.1.4 13.28.4 15.6c0 4.6 3.74 8.4 8.4 8.4h6.4c4.66 0 8.4-3.8 8.4-8.4 0-2.32-1.1-4.5-3-6.12zM7.4 20.4c-2.65 0-4.8-2.15-4.8-4.8s2.15-4.8 4.8-4.8 4.8 2.15 4.8 4.8-2.15 4.8-4.8 4.8z" />
                            </svg>
                            Android
                        </button>
                        <button className="bg-black text-white px-3 py-1 rounded text-sm flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.7 12.8c0-.6-.1-1.1-.3-1.6-.2-.5-.5-.9-.9-1.3s-.8-.7-1.3-.9c-.5-.2-1-.3-1.6-.3-.5 0-1 .1-1.5.3-.5.2-.9.5-1.3.9l-.1.1c-.3.3-.6.6-.8.9-.2.3-.4.6-.5.9-.1.3-.2.6-.2.9 0 .3.1.6.2.9.1.3.3.6.5.9.2.3.5.6.8.9l.1.1c.4.4.8.7 1.3.9.5.2 1 .3 1.5.3.6 0 1.1-.1 1.6-.3.5-.2.9-.5 1.3-.9s.7-.8.9-1.3c.2-.5.3-1 .3-1.6zm-6.1 0c0-.3.1-.6.2-.8.1-.2.3-.5.5-.7.2-.2.4-.4.7-.6.2-.2.5-.3.8-.4.3-.1.6-.2.9-.2.3 0 .6.1.9.2.3.1.6.2.8.4.2.2.5.4.7.6.2.2.4.5.5.7.1.2.2.5.2.8 0 .3-.1.6-.2.8-.1.2-.3.5-.5.7-.2.2-.4.4-.7.6-.2.2-.5.3-.8.4-.3.1-.6.2-.9.2-.3 0-.6-.1-.9-.2-.3-.1-.6-.2-.8-.4-.2-.2-.5-.4-.7-.6-.2-.2-.4-.5-.5-.7-.1-.2-.2-.5-.2-.8zM22.7 12.8c0 1.2-.2 2.3-.6 3.4-.4 1.1-1 2-1.7 2.8-.7.8-1.6 1.4-2.6 1.9-1 .5-2.1.7-3.3.7-.6 0-1.2-.1-1.8-.2-.6-.1-1.2-.3-1.7-.6-.5-.3-1-.6-1.4-1.1-.4-.5-.8-1-1.1-1.6-.3-.6-.5-1.3-.7-2-.2-.7-.3-1.4-.3-2.2 0-1.2.2-2.3.6-3.4.4-1.1 1-2 1.7-2.8.7-.8 1.6-1.4 2.6-1.9 1-.5 2.1-.7 3.3-.7.6 0 1.2.1 1.8.2.6.1 1.2.3 1.7.6.5.3 1 .6 1.4 1.1.4.5.8 1 1.1 1.6.3.6.5 1.3.7 2 .2.7.3 1.4.3 2.2z" />
                            </svg>
                            iOS
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;