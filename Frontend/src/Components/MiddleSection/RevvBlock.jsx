import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function RevvBlock({title,bi,para,bii,cls}){
    const [isShown,setIsShown] = useState(false)

    const classes = useStyles();
    // console.log(bi);
        return(
        <div onMouseEnter={() => setIsShown(!isShown)}
        onMouseLeave={() => setIsShown(false)} isShown = {isShown} >   {isShown?
        <div className={cls} style={{backgroundImage:`url(${bii}) `}}>
            <h4>{title}</h4>
            <p>{para}</p>
        </div>:
        

            <div className={cls} style={{backgroundImage:`url(${bi})`}}>
                    <h4>{title}</h4>
    
            </div> 
            }

        </div>
        
    )
}
export {RevvBlock}