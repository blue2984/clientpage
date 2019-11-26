import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
    root: {
      width: '100%',
      flexGrow: 1
    },
    paper: {
      marginTop: theme.spacing(3),
      width: '100%',
      overflowX: 'auto',
      marginBottom: theme.spacing(2),
    },
    table: {
              borderRight: '1px solid black',
    },
});

class RankResult extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            items: []
        }
    }
    render(){
        const {classes} = this.props;
        const resultData = this.props.rankResult;


        return(
            <div className={classes.root}>    
                <Paper className={classes.paper}>
                    <Table className={classes.table} border={1} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow style={{backgroundColor:'blue', color:'white'}}>
                                <TableCell align="center">키워드</TableCell>
                                <TableCell align="center">아이디</TableCell>
                                <TableCell align="center">PC블탭순위</TableCell>
                                <TableCell align="center">뷰탭순위</TableCell>
                                <TableCell align="center">총 글 수</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
 
                            {resultData.map((row, index) =>(
                                <TableRow key={index}>
                                <TableCell component="th" align="center" >{row.keyword}
                                </TableCell>

                                <TableCell align="center">{row.id}</TableCell>
                                <TableCell align="center">{row.rankBlogTab}</TableCell>
                                <TableCell align="center">{row.rankViewTab}</TableCell>
                                <TableCell align="center">{row.totalPost}</TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );    
    }        
}
export default withStyles(styles)(RankResult);