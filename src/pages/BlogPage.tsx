import React from "react"
import { Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"

import useBlog from "hooks/useBlog"

function Blog() {
  const [loading, posts] :any = useBlog()
  return (
    <>
      <p>اینجا صفحه بلاگ است</p>
      {loading ? (
        <p>درحال بارگذاری</p>
      ) : (
        posts.map((post:any,index:number) => <Post key={'Blog'+index} {...post} />)
      )}
    </>
  )
}

function Post({ title, body, id }:any) {
  return (
    <Card>
      <CardBody>
        <Link to={`/post/${id}`}>
          <CardTitle>{title}</CardTitle>
        </Link>
      </CardBody>
    </Card>
  )
}

export default Blog
