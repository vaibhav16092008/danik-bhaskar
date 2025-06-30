const VideoCard = ({ video }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-4">
            <div className="relative">
                <img
                    src={video.thumbnail || "https://via.placeholder.com/300x170"}
                    alt={video.title}
                    className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-red-600 bg-opacity-80 rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                    {video.duration || "2:30"}
                </div>
            </div>

            <div className="p-3">
                <h3 className="font-bold text-md mb-1 line-clamp-2">{video.title}</h3>
                <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{video.views || "1.2M views"}</span>
                    <span>{video.time || "2 hours ago"}</span>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;