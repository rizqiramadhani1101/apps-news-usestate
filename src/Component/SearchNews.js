import {useState,useEffect} from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const SearchNews = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=apple&from=2023-05-08&to=2023-05-08&sortBy=popularity${searchTerm}&apiKey=814bbb4170e840ac86cd415a9134e13f`
      );
      setNews(response.data.articles);
    };

    fetchNews();
  }, [searchTerm]);

//   const handleSearch = () => {
//     fetchNews();
//   };

  return (
    <Container>
        <h1>News App Eduwork</h1>
        <br />
      <Row>
        <Col>
          <input className='inputan' placeholder='cari berita disini'
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* <button onClick={handleSearch}>Search</button> */}
        </Col>
      </Row>
      <br /> 
      <Row>
        {news.map((article) => (
          <Col key={article.url}>
            <Card>
              <Card.Img variant="top" src={article.urlToImage} />
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

export default SearchNews
