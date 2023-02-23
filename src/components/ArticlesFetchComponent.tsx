import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import IArticle from "../interfaces/IArticle";
import ArticleComponent from "./ArticleComponent";

const ArticleFetchComponent = () => {
  const baseUrl = "https://api.spaceflightnewsapi.net/v3/blogs";
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await fetch(baseUrl);
      if (res.ok) {
        let data: IArticle[];
        data = await res.json();
        setArticles(data);
        console.log(articles);
      } else {
        console.log("Error in fetch status: ", res.status);
      }
    } catch (error) {
      console.log("Fatal error in fetch: ", error);
    }
  };
  return (
    <Container>
      <Row>
        {articles.map((article) => (
          <ArticleComponent article={article} key={article.id} />
        ))}
      </Row>
    </Container>
  );
};

export default ArticleFetchComponent;
