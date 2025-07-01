import Head from "next/head";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import NewsSection from "@/components/NewsSection";
import RightSidebar from "@/components/RightSidebar";
import Footer from "@/components/Footer";

export default function Home() {
  // Sample news data
  const breakingNews = [
    {
      title:
        "यार्ड रिपोर्ट: दिल्ली में भारी बारिश के बाद जलभराव, यातायात प्रभावित",
      excerpt:
        "दिल्ली में लगातार हो रही बारिश के कारण शहर के कई इलाकों में जलभराव की स्थिति बनी हुई है। यातायात प्रभावित होने के कारण लोगों को काफी दिक्कतों का सामना करना पड़ रहा है।",
      imageUrl: "https://images.unsplash.com/photo-1601758003122-53c40e686a19",
      category: "टॉप न्यूज़",
      time: "2 घंटे पहले",
      author: "राहुल शर्मा",
      isVideo: false,
    },
  ];

  const featuredNews = [
    {
      title:
        "मोदी सरकार का बड़ा फैसला: LPG सिलेंडर की कीमत में 200 रुपये की कटौती",
      excerpt:
        "केंद्र सरकार ने आज LPG सिलेंडर की कीमत में 200 रुपये की कटौती की घोषणा की है। यह राहत उज्ज्वला योजना के तहत मिलने वाले सिलेंडर पर भी लागू होगी।",
      imageUrl: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957",
      category: "भारत",
      time: "4 घंटे पहले",
      author: "प्रिया सिंह",
      isVideo: false,
    },
    {
      title: "IPL 2023: आज का मैच हाइलाइट्स - RCB बनाम MI",
      excerpt:
        "रॉयल चैलेंजर्स बैंगलोर और मुंबई इंडियंस के बीच खेला गया आज का मैच काफी रोमांचक रहा। विराट कोहली की शानदार पारी के बावजूद RCB मैच हार गया।",
      imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
      category: "खेल",
      time: "6 घंटे पहले",
      author: "विकास गुप्ता",
      isVideo: true,
      duration: "3:45",
    },
    {
      title: "बॉलीवुड एक्ट्रेस की शादी: देखें एक्सक्लूसिव तस्वीरें",
      excerpt:
        "मशहूर बॉलीवुड एक्ट्रेस ने आज अपने लंबे समय के बॉयफ्रेंड से शादी रचाई। सेलेब्रिटीज से भरी इस शादी की तस्वीरें सोशल मीडिया पर वायरल हो रही हैं।",
      imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
      category: "मनोरंजन",
      time: "8 घंटे पहले",
      author: "नीता जोशी",
      isVideo: false,
    },
  ];

  const politicsNews = [
    {
      title: "राजनीतिक संकट: विपक्ष ने सरकार पर उठाए गंभीर सवाल",
      excerpt:
        "संसद के मॉनसून सत्र में विपक्ष ने सरकार पर कई गंभीर सवाल उठाए हैं। विपक्षी नेताओं का आरोप है कि सरकार जनता के मुद्दों से ध्यान भटका रही है।",
      imageUrl: "https://images.unsplash.com/photo-1551524559-8af4e6624178",
      category: "राजनीति",
      time: "5 घंटे पहले",
      author: "अमित वर्मा",
      isVideo: false,
    },
    {
      title: "चुनावी सर्वे: किस पार्टी को मिल सकता है बहुमत?",
      excerpt:
        "आगामी विधानसभा चुनावों को लेकर हुए नए सर्वे में बड़ा उलटफेर देखने को मिला है। सर्वे के अनुसार मौजूदा सरकार को फिर से बहुमत मिल सकता है।",
      imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c",
      category: "राजनीति",
      time: "7 घंटे पहले",
      author: "संजय मिश्रा",
      isVideo: true,
      duration: "4:12",
    },
  ];

  const crimeNews = [
    {
      title:
        "दिल्ली में बड़ा अपहरण मामला: पुलिस ने दो आरोपियों को गिरफ्तार किया",
      excerpt:
        "दिल्ली पुलिस ने एक बड़े अपहरण मामले में दो आरोपियों को गिरफ्तार किया है। पुलिस का कहना है कि आरोपियों ने 50 लाख रुपये की फिरौती की मांग की थी।",
      imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
      category: "क्राइम",
      time: "3 घंटे पहले",
      author: "रवि कुमार",
      isVideo: false,
    },
    {
      title: "साइबर धोखाधड़ी: 100 से अधिक लोगों के बैंक खाते हुए खाली",
      excerpt:
        "साइबर अपराधियों ने एक नए तरीके से 100 से अधिक लोगों के बैंक खातों से पैसे निकाल लिए। पुलिस ने मामले की जांच शुरू कर दी है।",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      category: "क्राइम",
      time: "9 घंटे पहले",
      author: "अनिल शर्मा",
      isVideo: false,
    },
  ];

  return (
    <>
      <Head>
        <title>दैनिक भास्कर - हिंदी न्यूज़, Latest News in Hindi</title>
        <meta
          name="description"
          content="दैनिक भास्कर - हिंदी में ताज़ा खबरें, ब्रेकिंग न्यूज़, राजनीति, मनोरंजन, खेल, बिज़नेस और विश्व समाचार"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Add Hindi font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex-1 p-4">
        {/* Breaking News Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 border-l-4 border-red-600">
          <div className="flex items-center mb-2">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mr-2">
              यार्ड रिपोर्ट
            </span>
            <span className="text-sm text-gray-500">ताज़ा अपडेट</span>
          </div>
          <h2 className="text-xl font-bold mb-2">{breakingNews[0].title}</h2>
          <p className="text-gray-700 mb-3">{breakingNews[0].excerpt}</p>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">
              By {breakingNews[0].author} | {breakingNews[0].time}
            </span>
            <button className="text-red-600 font-medium">पूरी खबर पढ़ें</button>
          </div>
        </div>

        {/* Featured News */}
        <NewsSection title="फीचर्ड न्यूज़" newsItems={featuredNews} />

        {/* Politics News */}
        <NewsSection title="राजनीति" newsItems={politicsNews} />

        {/* Crime News */}
        <NewsSection title="क्राइम" newsItems={crimeNews} />
      </main>
    </>
  );
}
