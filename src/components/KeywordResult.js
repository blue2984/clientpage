import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import {withStyles} from '@material-ui/core/styles';


const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);

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
    tableWrapper: {
        maxHeight: 440,
        overflow: 'auto',
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    primaryColor:{
        backgroundColor: 'blue',
        color: 'white',
        
    }
});


class KeywordResult extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            classes:this.props,
            order:'asc',
            orderBy:'relKeyword',

        }
    }

    handleRequestSort = (property) => {
        return (event) =>{
        const isDesc = this.state.orderBy === property && this.state.order === 'desc';
        this.setState({order: isDesc? 'asc':'desc'});
        this.setState({orderBy : property});

        }
    };
    
    desc(a, b, orderBy) {

        if (b[orderBy] < a[orderBy]) {
        return -1;
        }
        if (b[orderBy] > a[orderBy]) {
        return 1;
        }
        return 0;
    }
    
    stableSort(array, cmp) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
        });

        return stabilizedThis.map(el => el[0]);
    }
    
    getSorting(order, orderBy) {
        let result = order === 'desc' ? (a, b) => this.desc(a, b, orderBy) : (a, b) => -this.desc(a, b, orderBy);

        return order === 'desc' ? (a, b) => this.desc(a, b, orderBy) : (a, b) => -this.desc(a, b, orderBy);
    }

    render(){
        const {classes} = this.props;
        const totalPost = this.props.keywordResult[0];
        const totalProduct = this.props.keywordResult[1];
        const keywordData = this.props.keywordResult[2]['keywordList'];
        const displaydata = keywordData.slice(1,Math.min(keywordData.length, 21));

        const headCells = [
            { id: 'relKeyword', numeric: false, disablePadding: true, label: '키워드' },
            { id: 'monthlyPcQcCnt', numeric: true, disablePadding: false, label: 'PC조회수' },
            { id: 'monthlyMobileQcCnt', numeric: true, disablePadding: false, label: 'Mobile조회수' },
            { id: 'monthlyAvePcClkCnt', numeric: true, disablePadding: false, label: 'PC클릭수' },
            { id: 'monthlyAveMobileClkCnt', numeric: true, disablePadding: true, label: 'Mobile클릭수' },
            { id: 'monthlyAvePcCtr', numeric: true, disablePadding: false, label: 'PC클릭률' },
            { id: 'monthlyAveMobileCtr', numeric: true, disablePadding: false, label: 'Mobile클릭률' },
        ];


        return(
            <div className={classes.root}>
                <Paper className={classes.paper}>

                    <Table className={classes.table} border={1} size="small" aria-label="a dense table">
                        <colgroup>
                            <col style={{width:'20%'}} />
                            <col style={{width:'20%'}} />
                            <col style={{width:'10%'}} />
                            <col style={{width:'10%'}} />
                            <col style={{width:'10%'}} />
                            <col style={{width:'10%'}} />
                            <col style={{width:'10%'}} />
                            <col style={{width:'10%'}} />
                        </colgroup>

                        <TableHead>
                        <TableRow className={classes.primaryColor}>
                            <TableCell align='center'>키워드</TableCell>
                            <TableCell align="center">총 글 수</TableCell>
                            <TableCell align="center">PC조회수</TableCell>
                            <TableCell align="center">Mobile조회수</TableCell>
                            <TableCell align="center">PC클릭수</TableCell>
                            <TableCell align="center">Mobile클릭수</TableCell>
                            <TableCell align="center">PC클릭률</TableCell>
                            <TableCell align="center">Mobile클릭률</TableCell>
                            <TableCell align="center">쇼핑상품수</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                            <TableCell align="center"component="th" scope="row" data-title="token">{keywordData[0].relKeyword}
                            </TableCell>

                            <TableCell align="center">{totalPost}</TableCell>
                            <TableCell align="center">{keywordData[0].monthlyPcQcCnt}</TableCell>
                            <TableCell align="center">{keywordData[0].monthlyMobileQcCnt}</TableCell>
                            <TableCell align="center">{keywordData[0].monthlyAvePcClkCnt}</TableCell>
                            <TableCell align="center">{keywordData[0].monthlyAveMobileClkCnt}</TableCell>
                            <TableCell align="center">{keywordData[0].monthlyAvePcCtr}</TableCell>
                            <TableCell align="center">{keywordData[0].monthlyAveMobileCtr}</TableCell>
                            <TableCell align="center">{totalProduct}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>     

                <Paper className={classes.paper}>
                     <div className={classes.tableWrapper}>
                     <Table stickyHeader aria-label="sticky table" size="small">
                        <colgroup>
                            <col style={{width:'15%'}} />
                            <col style={{width:'12.5%'}} />
                            <col style={{width:'15%'}} />
                            <col style={{width:'12.5%'}} />
                            <col style={{width:'15%'}} />
                            <col style={{width:'15%'}} />
                            <col style={{width:'15%'}} />
                        </colgroup>
                        <TableHead>
                            <TableRow >
                                {headCells.map(row => (
    
                                    <StyledTableCell
                                        key={row.id}
                                        sortDirection={this.state.orderBy === row.id ? this.state.order : false}
                                        align="center"
                                    >
                                        <TableSortLabel
                                            active={this.state.orderBy === row.id}
                                            direction={this.state.order}
                                            onClick={this.handleRequestSort(row.id)}
                                        >
                                            {row.label}

            
                                        </TableSortLabel>
                                    </StyledTableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                            <TableBody>
                                {this.stableSort(displaydata, this.getSorting(this.state.order, this.state.orderBy))
                                    .map((data, index) => (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="data" align="center">{data['relKeyword']}</TableCell>

                                            <TableCell align="center">{data['monthlyPcQcCnt']}</TableCell>

                                            <TableCell align="center">{data['monthlyMobileQcCnt']}</TableCell>


                                            <TableCell align="center">{data['monthlyAvePcClkCnt']}</TableCell>
                                            <TableCell align="center">{data['monthlyAveMobileClkCnt']}</TableCell>
                                            <TableCell align="center">{data['monthlyAvePcCtr']}</TableCell>
                                            <TableCell align="center">{data['monthlyAveMobileCtr']}</TableCell>
                                        </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </Paper>                                      
            </div>
        );
    }
}
export default withStyles(styles)(KeywordResult);