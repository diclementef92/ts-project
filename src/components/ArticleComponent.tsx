import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import IArticle from "../interfaces/IArticle";

interface ArticleProps {
  article: IArticle;
  c?: number;
}

const ArticleComponent = ({ article }: ArticleProps) => {
  //   useEffect(() => {
  //   }, []);

  return (
    <Card>
      <Card.Img variant="left" src={article.imageUrl} />
      <Card.Body>
        <Card.Text>{article.title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArticleComponent;
