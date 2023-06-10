import react from 'react';

const ScoreCard = ({ correctAnswers, section }) => {
    return (
        <div className="px-12">
            <h1 className='flex justify-center text-2xl font-semibold mb-8'>{section}</h1>
            <div className='bg-green-700 rounded-full'>
                <h1 className='flex justify-center text-5xl text-cream-primary font-semibold py-10'>{correctAnswers}</h1>
            </div>
        </div>
    );
}

export default ScoreCard;