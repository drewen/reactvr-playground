
import Card from '../components/Card';
import { getStatus } from '../hooks/status'
import { useQuery } from 'react-query'
import React from 'react';

const handleSelect = fn => () => {
  fn()
}

const StatusCard = props => {
  const { url, name, image, position } = props
  const { isLoading, isError, data, error, refetch } = useQuery(name, getStatus(url), { enabled: false })
  let text
  if (isLoading) {
    text = 'Loading...'
  } else if (isError) {
    text = `Error: ${error.message}`
  } else if (!data) {
    text = 'Interact with me!'
  } else {
    text = `${name}:
${data.timestamp}
Url: ${data.url}
Status: ${data.status}
Response Time: ${data.responseTime}
`
  }

  return (
    <Card handleSelect={handleSelect(refetch)} image={image} position={position} text={text} material={{color: 'white'}} />
  );
};

const CARD_OFFSET = 1

const StatusPage = () => {
  const sites = [
    {
      name: 'Google',
      url: 'http://localhost:3001/google',
      image: '/Google_2015_logo.svg.png',
    },
    {
      name: 'Amazon',
      url: 'http://localhost:3001/amazon',
      image: '/Amazon logo.png',
    }
  ];

  const cardCount = sites.length

  const statusCards = sites.map((site, index) => {
    const xOffset = index * CARD_OFFSET
    return <StatusCard key={index} position={{x: xOffset}} {...site} />
  })

  return (
    <>
      {statusCards}
    </>
  );
};

export default StatusPage;
