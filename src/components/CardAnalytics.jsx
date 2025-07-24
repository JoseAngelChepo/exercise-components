import { useEffect, useState } from "react";

const CardAnalytics = () => {
  const [data, setData] = useState('');

  const loadData = async () => {
    const baseUrl = 'http://127.0.0.1:5001/api/sse/stats'
    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/event-stream',
        'Authorization': 'Bearer ' + 'token'
      }
    })

    if (!response.ok) {
      alert('Error en SSE')
    }

    // Process the stream using ReadableStream
    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }

      const chunk = decoder.decode(value);
      const lines = chunk.split('\n').filter(line => line.trim());
    
      for (const line of lines) {
        // console.log(line)
        setData(line)
      }
    }
  }
  useEffect(() => {
    // loadData()
  })
  return (
    <>
      <h3>Card</h3>
      <p>{data}</p>
    </>
  )
}

export default CardAnalytics;