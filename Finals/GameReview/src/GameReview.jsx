import React, { useState } from 'react';

export default function GameReview() {
    const [review, setReview] = useState('');
    const [date, setDate] = useState('');
    const [reviewsList, setReviewsList] = useState([]);

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const submitReview = () => {
        if (review && date) {
            setReviewsList([...reviewsList, { review, date }]);
            setReview('');
            setDate('');
        }
    };

    return (
        <div className="game-review-container">
            <h2>Submit Your Game Review</h2>
            <textarea
                placeholder="Write your review here..."
                value={review}
                onChange={handleReviewChange}
            />
            <br />
            <input
                type="date"
                value={date}
                onChange={handleDateChange}
            />
            <br />
            <button type="button" onClick={submitReview}>Submit Review</button>
            <h3>Reviews:</h3>
            <ul>
                {reviewsList.map((item, index) => (
                    <li key={index}>
                        <strong>{item.date}: </strong>{item.review}
                    </li>
                ))}
            </ul>
        </div>
    );
}