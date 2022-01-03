import {Pagination , PaginationItem } from "@material-ui/lab";
import useStyles from './styles.js';

const Paginate = () => {
    const classes =  useStyles(); 

    return (
        <Pagination className={classes.ul}
    )

}