import { Button } from 'primereact/button';

export default (props) =>

<>
    <p>Counter: {props.counter}</p>

    <Button
        onClick={props.handleIncrease}>
            Increase
    </Button>

    <Button
        onClick={props.handleDecrease}>
            Decrease
    </Button>

    <Button
        label="get batman films"
        icon="pi pi-check"
        onClick={props.getBatmanFilms}
    />

    <ul>
        {props.shows?.map(({show}) => (
            <li key={show?.id}>
                <div href="/shows/[id]" as={`/shows/${show?.id}`}>
                    <a>{show?.name}</a>
                </div>
            </li>
            ))
        }
    </ul>

    <p>
        Quote: {props.quote.text}
    </p>
</>