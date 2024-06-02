import PropTypes from 'prop-types';
import styles from './List.module.css'

function List(props){

    // getting the array & category
    const category = props.category;
    const itemList = props.items;

    // mapping to produce output
    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name} :&nbsp;
                                            <b>{item.calories}</b></li>);

    return(
        <>
            <h3 className={styles.listCategory}>{category}</h3>
            <ol className={styles.listItems}>{listItems}</ol>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
}

List.defaultProps = {
    category: "Category",
    items: [],
}



export default List;