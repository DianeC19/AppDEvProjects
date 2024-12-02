import { Link } from 'react-router-dom';

const games = [
  {
    id: 1,
    name: 'Hollow Knight',
    description: 'An action-adventure game set in a beautifully hand-drawn world filled with challenging enemies and deep lore.',
    image: 'https://th.bing.com/th/id/OIP.fKzjBJCJVhSdKUYz50HBjQHaEP?w=286&h=180&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: 2,
    name: 'Stardew Valley',
    description: 'A farming simulation game where you can grow crops, raise animals, and build relationships with townsfolk.',
    image: 'https://th.bing.com/th/id/OIP.IxttfG-Rkss5r6fw8CTh8wAAAA?w=288&h=180&c=7&r=0&o=5&pid=1.7',
  },
  {
    id: 3,
    name: 'Celeste',
    description: 'A platformer about climbing a mountain, tackling challenges, and overcoming personal struggles.',
    image: 'https://th.bing.com/th/id/OIP.EJd6f_xu6JR0LMlutnX5eQHaIA?w=150&h=180&c=7&r=0&o=5&pid=1.7',
   },
  {
    id: 4,
    name: 'The Witcher 3: Wild Hunt',
    description: 'An open-world RPG featuring complex characters, rich storytelling, and immersive gameplay.',
    image: 'https://th.bing.com/th/id/OIP.gutc-Pcl4ynTGUkgwMC2TwHaEK?w=309&h=180&c=7&r=0&o=5&pid=1.7',
    },
  {
    id: 5,
    name: 'Among Us',
    description: 'A multiplayer game of teamwork and betrayal where players work together to complete tasks while trying to identify the impostor.',
    image: 'https://th.bing.com/th/id/OIP.CCi0bjGCRuGRcm45SIKUtwHaEK?w=294&h=180&c=7&r=0&o=5&pid=1.7',
  },
];

export default function Games() {
  return (
    <div>
      <h1>Games List:</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <Link to={`/games/${game.id}`} state={{ game }}>
              <strong>{game.name}</strong>
            </Link>
            <p>{game.description}</p>
            <img 
              src={game.image} 
              alt={game.name} 
              style={{ width: '100px', height: 'auto' }} 
            />
            <Link to={`/games/${game.id}/review`} state={{ game }} className="review-link">
              See Reviews
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}