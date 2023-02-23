import { useState, useEffect } from "react";
import { Card, Button, Col } from "react-bootstrap";
import IArticle from "../interfaces/IArticle";

interface ArticleProps {
  article: IArticle;
  c?: number;
}

const ArticleComponent = ({ article }: ArticleProps) => {
  //   useEffect(() => {
  //   }, []);

  return (
    <Col xs={12} sm={6} md={4}>
      <Card className="m-2">
        <Card.Img variant="top" src={article.imageUrl} />
        <Card.Body>
          <Card.Text>{article.title}</Card.Text>
          <Button>Leggi</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ArticleComponent;
