import React from 'react'
import { Select, InputLabel, MenuItem, FormControl } from '@material-ui/core';

const OrderArticles = ({ handleChange }) => {
    return (
        <div>
            <FormControl>
                <InputLabel>Order</InputLabel>
                <Select onChange={handleChange} name="order" value="order articles">
                    <MenuItem value="asc">Ascending</MenuItem>
                    <MenuItem value="desc">Descending</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default OrderArticles
