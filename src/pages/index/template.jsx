import { Button } from 'primereact/button';

export default (props) =>

<>
    <p>Counter: {props.count}</p>
    <button onClick={props.handleIncrease}>Increase</button>
    <button onClick={props.handleDecrease}>Decrease</button>

    <Button
        label="Async click redux"
        icon="pi pi-check"
    />
</>