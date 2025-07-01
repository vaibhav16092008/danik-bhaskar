import VideoCard from './VideoCard';

const RightSidebar = () => {
    const trendingVideos = [
        { title: "दिल्ली में बारिश के बाद जलभराव की स्थिति", views: "1.5M", time: "3 hours ago" },
        { title: "मोदी जी का नया भाषण: क्या कहा?", views: "2.1M", time: "5 hours ago" },
        { title: "IPL 2023: आज का मैच हाइलाइट्स", views: "3.7M", time: "1 day ago" },
        { title: "बॉलीवुड सेलेब्स की शादी की तैयारियाँ", views: "890K", time: "2 days ago" },
    ];

    return (
        <div className="w-72 bg-white shadow-md hidden xl:block h-full overflow-y-auto p-4">
            {/* Ad Banner */}
            <div className="mb-6 bg-gray-100 p-4 rounded-lg border border-gray-200 text-center">
                <p className="text-xs text-gray-500 mb-2">ADVERTISEMENT</p>
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Google Maps Ad</span>
                </div>
            </div>

            {/* Trending Videos */}
            <div className="mb-6">
                <h3 className="font-bold text-lg mb-3 text-gray-800">ट्रेंडिंग वीडियो</h3>
                <div className="space-y-4">
                    {trendingVideos.map((video, index) => (
                        <VideoCard key={index} video={video} />
                    ))}
                </div>
            </div>

            {/* Horoscope Widget */}
            <div className="mb-6 bg-yellow-50 rounded-lg p-4 border border-yellow-100">
                <h3 className="font-bold text-lg mb-2 text-gray-800">आज का राशिफल</h3>
                <div className="space-y-2">
                    {['मेष', 'वृष', 'मिथुन', 'कर्क', 'सिंह', 'कन्या', 'तुला', 'वृश्चिक', 'धनु', 'मकर', 'कुंभ', 'मीन'].map((sign) => (
                        <div key={sign} className="flex items-center justify-between border-b border-yellow-100 pb-2">
                            <span className="font-medium">{sign}</span>
                            <span className="text-sm text-gray-600">★★★☆☆</span>
                        </div>
                    ))}
                </div>
                <a href="#" className="block text-center text-blue-600 text-sm mt-3">पूरा राशिफल पढ़ें</a>
            </div>

            {/* Static Links */}
            <div className="text-sm text-gray-600 space-y-2">
                <a href="#" className="block hover:text-red-600">हमारे बारे में</a>
                <a href="#" className="block hover:text-red-600">संपर्क करें</a>
                <a href="#" className="block hover:text-red-600">गोपनीयता नीति</a>
                <a href="#" className="block hover:text-red-600">सदस्यता</a>
                <a href="#" className="block hover:text-red-600">करियर</a>
            </div>
        </div>
    );
};

export default RightSidebar;