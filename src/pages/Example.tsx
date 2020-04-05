import React from "react"
import Debug from "components/Debug"

function Example(props: { match: { params: { sort: string } } }) {
  const sort = props.match.params.sort || "asc"

  return <Debug sort={sort} />
}

export default Example
