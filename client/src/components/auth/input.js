import { Grid, InputAdornment, TextField  ,IconButton} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import React from 'react';


const Input = ({half,name ,autoFocus , handleChange ,handleShowPassword , type ,label }) => {


    return (
        <Grid  item xs={12} md={half?6:12}>
            <TextField
                name = {name}
                label = {label}
                onChange = {handleChange}
                autoFocus = {autoFocus}
                fullWidth 
                variant = 'outlined'
                required 
                type={type} 
                InputProps={( name == 'password') ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                            {type === 'password' ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
              )
                }
                :null
                }

            />
        </Grid>
    )
}
export default Input;