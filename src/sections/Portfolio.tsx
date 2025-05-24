import { useState } from 'react';
import { motion } from 'framer-motion';

const portfolioItems = [
    {
        id: 1,
        title: 'Branding Completo',
        description: 'Desenvolvimento de identidade visual para empresas',
        category: 'branding',
        image: 'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    },
    {
        id: 2,
        title: 'Social Media',
        description: 'Gestão completa de redes sociais',
        category: 'social',
        image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg'
    },
    {
        id: 3,
        title: 'Marketing Digital',
        description: 'Estratégias completas de marketing digital',
        category: 'marketing',
        image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg'
    }
];

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredItems = selectedCategory === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === selectedCategory);

    return (
        <section id="portfolio" className="min-h-screen w-full py-20 bg-[#262626] text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Nosso Portfólio
                </h2>
                
                <div className="flex justify-center gap-4 mb-12">
                    {['all', 'branding', 'social', 'marketing'].map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full transition-all ${
                                selectedCategory === category 
                                    ? 'bg-white text-black' 
                                    : 'bg-transparent border border-white'
                            }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map(item => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#333] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                        >
                            <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-300">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;