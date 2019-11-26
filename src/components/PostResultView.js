import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
    root: {
      width: '100%',
      flexGrow: 1,
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
    tableRow:{
        "&$selected, &$selected:hover":{
            backgroundColor: "purple"
        }
    },
    hover: {},
    selected: {}
});

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);

class PostResult extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            content:this.props.postResult[2].text,
            selectedWord:''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick=(word)=>{
        return (event) =>{
            let patt = new RegExp(word, 'g');
            let newWord = '<span style="background-color: blue;">' + word + '</span>';

            let text = this.props.postResult[2].text;

            text = text.replace(patt, newWord);
            this.setState({content: text}, () =>{
            });
            this.setState({selectedWord:word},()=>{});
        }      
    }
    render(){
        const {classes} = this.props;
        const restrictRows = this.props.postResult[0];
        const repeatRows = this.props.postResult[1];

        return(
            <div className={classes.root}>
                <Grid container spacing={3} height={700} justify='center' align='center'>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                        <div style={{overflow:'auto', height:'250px'}}>

                          <Table stickyHeader aria-label="sticky table" size="small">
                                <colgroup>
                                    <col style={{width:'30%'}} />
                                    <col style={{width:'40%'}} />
                                    <col style={{width:'30%'}} />
                                </colgroup>
                                <TableHead>
                                <TableRow style={{backgroundColor:'blue', color:'white'}}>
                                    <StyledTableCell align="center">분류</StyledTableCell>
                                    <StyledTableCell align="center">단어</StyledTableCell>
                                    <StyledTableCell align="center">반복수</StyledTableCell>
                                </TableRow>
                                </TableHead>                          
                                <TableBody>
                                {restrictRows.map((row, index) => (
                                    <TableRow key={index} onClick={this.handleClick(row.word)}
                                    selected={this.state.selectedWord === row.word}
                                    classes={{hover: classes.hover, selected: classes.selected}}
                                    className={classes.tableRow}
                                    >
                                        {row.token ==="금지"? 
                                            <TableCell component="th" scope="row" style={{background:'red'}}>
                                            {row.token}
                                            </TableCell>
                                        : row.token ==="위험"? 
                                            <TableCell component="th" scope="row" style={{background:'yellow'}}>
                                            {row.token}
                                            </TableCell>
                                        :
                                            <TableCell component="th" scope="row" style={{background:'green'}}>
                                            {row.token}
                                            </TableCell>
                                        }

                                    <TableCell align="right">{row.word}</TableCell>
                                    <TableCell align="right">{row.num}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </div>
                        </Paper>     

                        <Paper className={classes.paper}>
                            <div style={{overflow:'auto', height:'400px'}}>
                            <Table stickyHeader aria-label="sticky table" size="small">
                                <TableHead style={{backgroundColor:'blue', color:'white'}}>
                                    <TableRow style={{backgroundColor:'blue', color:'white'}}>
                                        <StyledTableCell align='center'>단어</StyledTableCell>
                                        <StyledTableCell align="center">반복수</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                    <TableBody>
                                    {repeatRows.map((row, index) => (

                                        <TableRow key={index} onClick={this.handleClick(row.word)}
                                            selected={this.state.selectedWord === row.word}
                                            classes={{hover: classes.hover, selected: classes.selected}}
                                            className={classes.tableRow}
                                        >
                                        <TableCell component="th" scope="row">
                                            {row.word}
                                        </TableCell>

                                        <TableCell align="right">{row.num}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </Paper>                      

                    </Grid>
                    <Grid item xs={9}>
                        <Paper className={classes.paper}>
                            <div style={{overflow:'auto', height:'700px'}}>
                                <p dangerouslySetInnerHTML={{__html:this.state.content}}></p>
                            </div>
                        </Paper>
                        <p>총 글자 수 : {this.state.content.length}</p> 
                    </Grid>
                </Grid>
                
            </div>
        );
    }
}
export default withStyles(styles)(PostResult);