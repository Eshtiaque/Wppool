import React from 'react';
import author1 from '../assets/images/man1.png';
import author2 from '../assets/images/man2.png';

const stories = [
    {
        id: 1,
        name: 'Shahabudin Sagor',
        image: author1,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
    },
    {
        id: 2,
        name: 'Nayeem Khan',
        image: author2,
        description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
        id: 3,
        name: 'Shagor Shahabudin',
        image: author1,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
    },
    {
        id: 4,
        name: 'Nayeem Khan',
        image: author2,
        description: 'Key Takeaways from Robotics Invest 2023',
    },
    {
        id: 5,
        name: 'Shahabudin Sagor',
        image: author1,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
    },
    {
        id: 6,
        name: 'Shagor Shahabudin',
        image: author2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
    },
];

const StoriesSection = () => {
    return (
        <section id='stories' className="bg-gray-100 py-10 pt-24">
            <div className="container mx-auto px-4 md:px-24">
                <h2 className="text-4xl font-serif mb-2">Stories & Ideas</h2>
                <p className="text-gray-600 mb-24">The latest news and updates</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-24">
                    {stories.map((story) => (
                        <div key={story.id} className="bg-white rounded-lg shadow-lg p-6 relative h-48">
                            <div className="flex items-center ">
                                <div className="relative h-8 w-32 mr-4">
                                    <img src={story.image} alt={story.name} className=" absolute -top-20 h-32 w-32 " />
                                </div>
                            </div>
                            <h3 className="text-blue-700 font-semibold">
                                By: {story.name}</h3>
                            <p className="text-gray-700 mb-4">{story.description}</p>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg shadow-blue-900/50  bottom-2 absolute ">
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="border mt-32 max-w-7xl mx-auto border-[#90b8f0]"/>

        </section>

    );
};

export default StoriesSection;
