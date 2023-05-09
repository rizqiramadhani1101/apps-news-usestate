import {useState} from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const Appnews = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [news, setNews] = useState([]);
  
    const handleSearch = async () => {
      const response = await axios.get(
        `
        https://newsapi.org/v2/everything?q=tesla&from=2023-04-09&sortBy=publishedAt&apiKey=814bbb4170e840ac86cd415a9134e13f`
      );
      setNews(response.data.articles);
    };
  
    return (
      <Container>
        <h1> News Apps Eduwork</h1>
        <Row>
          <Col>
            <input className='input'
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button  onClick={handleSearch}>Search</button>
          </Col>
        </Row>
        <br />
        <Row>
          {news.map((article) => (
            <Col key={article.url}>
              <Card className='card'>
                <Card.Img className='img' variant="top" src={article.urlToImage} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  export default Appnews;