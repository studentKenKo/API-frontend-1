import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Spin } from 'antd';
//import articles from './data/articles.json'
import http from '../common/http-common.js';
import { LoadingOutlined } from '@ant-design/icons';


function Article() {  
  //console.log(articles)
  const [loading, setLoading] = React.useState(true);
  const [articles, setArticles] = React.useState(null)
  React.useEffect(()=> {
    http.get('/articles')
    .then((response)=>{      
      setArticles(response.data)      
    }).then(()=>{setLoading(false)})
  }, [])

  if(loading){
    const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;
    return (<Spin indicator={antIcon} />)
  } else {
    if(!articles){
      return (
        <div>There is no article available now.</div>
      )
    } else { 
      //console.log(articles)
      return (
        <Row justify="space-around">    
        { 
          articles && 
            articles.map(({id, title, alltext})=> (
              <Col span={8} key={id}>
                <Card  title={title} style={{ width: 300 }} bordered={true}>       
                  <p>{alltext}</p>  
                  <p></p>
                  <Link to={`/a/${id}`}>Details</Link>
                </Card>
              </Col>))
        }
        </Row>);
    }
  }
}
export default Article;
