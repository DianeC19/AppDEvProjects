import { useParams, useNavigate, Link } from "react-router-dom";

const reviews = {
  1: [
    "Stunning visuals!",
    "Challenging gameplay.",
    "Great story.",
    "Engaging characters.",
    "Beautiful soundtrack."
  ],
  2: [
    "Very relaxing.",
    "Great for all ages.",
    "Addictive gameplay.",
    "Charming art style.",
    "Endless possibilities."
  ],
  3: [
    "Incredible platforming.",
    "Emotional depth.",
    "Perfect difficulty curve.",
    "Fantastic level design.",
    "Amazing soundtrack."
  ],
  4: [
    "Immersive world.",
    "Fantastic quests.",
    "Rich storytelling.",
    "Great character development.",
    "Breathtaking graphics."
  ],
  5: [
    "Fun with friends.",
    "Great strategy.",
    "Exciting gameplay.",
    "Perfect for parties.",
    "Creative mechanics."
  ],
};

export default function Review() {
  const { id } = useParams();
  const navigate = useNavigate();
  const gameReviews = reviews[id] || [];

  return (
    <div>
      <h1>Reviews:</h1>
      <ul>
        {gameReviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
      <button onClick={() => navigate(-1)}>Back to Game</button>
    </div>
  );
}