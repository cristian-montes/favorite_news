import React from "react";
import { Form, Title, OutterDiv} from './NewsArticleSearchStyles'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { Input } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   newsInput:{
       backgroundColor: 'rgba(241,243,244,0.239)',
       width: "500px",
       height: '50px',
       justifyItems: 'center',
       marginTop: '1.37%',
       borderRadius: '.4rem',
       padding:'1rem',
       color:'lightgrey',
       position: 'fixed',
       left: '37%',
    },

    newsButton:{
        width: "130px",
        height: '50px',
        marginTop: '1.37%',
       
    }
}
));




export default function NewsArticleSearch({ newsName,onHandleNewsNameChange, onHandleSubmit, newsTitle }){
    const classes = useStyles();
    return(
        <OutterDiv>
        <Form onSubmit={onHandleSubmit}>
        <Title>{newsTitle} NEWS</Title>
             <Input
             className={classes.newsInput}
            id="filled-adornment-amount"
            value={newsName}
            onChange={onHandleNewsNameChange}
            variant="filled" 
            label="Filled"
            startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
          />
              <Button 
                className={classes.newsButton}
                aria-label="get-news" 
                variant="contained" 
                color="primary" 
                size="small"
                onClick={onHandleSubmit}
                >
                Search News
            </Button>   
        </Form>
        </OutterDiv>
    )
}
