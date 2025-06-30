const NewsCard = ({ newsItem }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-6">
            <div className="relative">
                <img
                    src={newsItem.imageUrl || "https://via.placeholder.com/400x225"}
                    alt={newsItem.title}
                    className="w-full h-48 object-cover"
                />
                {newsItem.isVideo && (
                    <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                        {newsItem.duration || "2:30"}
                    </div>
                )}
            </div>

            <div className="p-4">
                <div className="flex items-center mb-2">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${newsItem.category === 'राजनीति' ? 'bg-red-100 text-red-800' : newsItem.category === 'क्राइम' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                        {newsItem.category}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">{newsItem.time}</span>
                </div>

                <h3 className="font-bold text-lg mb-2 line-clamp-2">{newsItem.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{newsItem.excerpt}</p>

                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="text-xs text-gray-500">By {newsItem.author}</span>
                    </div>
                    <div className="flex space-x-2">
                        <button className="text-gray-500 hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                        </button>
                        <button className="text-gray-500 hover:text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;