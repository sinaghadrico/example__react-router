import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import usePrevious from "hooks/usePrevious"
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';

function Post(props: any) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const prevProps:any = usePrevious(props);


  useEffect(() => {
    console.log('mount')
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchData = async () => {
    try {
      const { page } = props.match.params
      
      fetch(`https://jsonplaceholder.ir/posts/${page}`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .finally(() => setLoading(false))
    } catch (err) {
      // setError(err);
    }
  }

  
  useEffect(() => {
    const { page } = props.match.params
    if (prevProps && prevProps.match.params.page !== page) {
      fetchData()
    }
  });

  useEffect(() => {
    console.log('mount')
  }, [])

  return (
    
    <>
      <Link to={`/post/${Number(props.match.params.page)+1}`}>پست بعدی</Link>
      <br/>
      {loading ? "در حال بار گذاری" : <PostCard {...data} />}
    </>
  )
}

export default Post




function PostCard({ title, body}:any) {
  return (
    
    <Card>
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardText>{body}</CardText>
    </CardBody>
  </Card>
  )
}