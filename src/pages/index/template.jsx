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
        label="Async click redux"
        icon="pi pi-check"
    />
</>