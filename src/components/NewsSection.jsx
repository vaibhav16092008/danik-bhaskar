import NewsCard from './NewsCard';

const NewsSection = ({ title, newsItems }) => {
    return (
        <section className="mb-8">
            <div className="flex items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <a href="#" className="ml-auto text-red-600 text-sm font-medium">सभी देखें</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.map((item, index) => (
                    <NewsCard key={index} newsItem={item} />
                ))}
            </div>
        </section>
    );
};

export default NewsSection;