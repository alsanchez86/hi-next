import Header from '../Header';

export default (props) =>

<div className="layout">
    <Header />
    {props.children}
</div>