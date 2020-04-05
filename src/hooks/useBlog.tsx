import { useState,useEffect } from "react"

function useBlog() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(():any => {
    let mounted = true
    fetch("https://jsonplaceholder.ir/posts")
      .then((response) => response.json())
      .then((data) => mounted && setData(data))
      .then(()=>setLoading(false))
    return () => (mounted = false)
  }, [])

  return [loading, data]
}

export default useBlog
