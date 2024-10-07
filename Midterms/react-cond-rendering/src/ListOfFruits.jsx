import PropTypes from 'prop-types';

export default function list(props){
    const listitem = props.items.map(item => 
        <li key={item.id}><strong>{item.name}</strong>:  &nbsp; {item.color}
        </li>)
    return(
        <>
        <h3 className="list-category">{props.category}</h3>
        <ol className="list">{listitem}</ol>
        </>
    )
}
list.defaultProps = {
    category: 'I dont like fruit',
    item:[]
}
