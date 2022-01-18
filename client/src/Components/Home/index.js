import { Card, ListGroup } from "react-bootstrap";
import '../styles/home.css';

function Home(){
    return (
        <Card className="h">
            <p>
            Welcome to Movie Talk! This application allows you to search any movie, read information about the movie, and read user's comments about the movie.
            Anyone can search and read the comments, but if you want to post your own, you must create a new account or login to an existing account. Enjoy!
            </p>
        </Card>
    )
}

export default Home;