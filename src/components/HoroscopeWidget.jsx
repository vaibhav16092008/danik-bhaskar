const HoroscopeWidget = () => {
    return (
        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100 mb-6">
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
    );
};

export default HoroscopeWidget;