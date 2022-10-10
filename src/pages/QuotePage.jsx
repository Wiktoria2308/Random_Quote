import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";
import { useQuery } from 'react-query'
import { getRandomQuote } from '../services/QuotesAPI'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const QuotePage = () => {
    const { data, error, isError, isLoading, refetch } = useQuery('quote', getRandomQuote)

    return (
        <div className="container" id="quote-box">
            {isLoading && <p className="my-3">Loading ...</p>}

            {isError && (
                <Alert variant='warning'>({error})</Alert>
            )}
            {data && (<Card style={{ width: "100%", maxWidth: "40rem" }}>
            <FontAwesomeIcon className='quote-icon' icon={faQuoteRight} />
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p className='text' id="text">{data.content}</p>
                            <footer className="blockquote-footer">
                                <cite id="author" title="Source Title">{data.author}</cite>
                            </footer>
                    </blockquote>
                </Card.Body>
                <Card.Footer className='card-footer'>
                    <a id='tweet-quote' className='tweet-quote' target="_blank" href='https://twitter.com/intent/tweet'><FontAwesomeIcon icon={faTwitter} /></a>
                    <Button id="new-quote" className='new-quote' onClick={refetch}>
                        New Quote
                    </Button>
                </Card.Footer>
            </Card>)}
            </div>
    )
}

export default QuotePage