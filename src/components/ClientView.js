import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import {post} from 'axios';

import PostResult from './PostResultView';
import KeywordResult from './KeywordResult';
import RankResult from './RankResult';
import { classes } from 'istanbul-lib-coverage';
import LinearProgress from "@material-ui/core/LinearProgress";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  buttonProgress: {
    position: "absolute",
    top:"50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  buttonSuccess:{

  },
  linearProgress: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    opacity: 0.4,
    borderRadius: 4
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid item xs={9}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="포스팅분석" {...a11yProps(0)} />
            <Tab label="키워드조회" {...a11yProps(1)} />
            <Tab label="순위조회" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <PostTab/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <KeywordTab/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <RankTab/>
        </TabPanel>
      </Grid>

    </div>
  );
}

class PostTab extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      postUrl:'',
      result:''
    }
  }
  handleFormSubmit=(e)=>{
    e.preventDefault();
    this.postAnalysis()
        .then((res)=>{ this.setState({result: res.data});

        });
  } 

  handleValueChange=(e)=>{
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  postAnalysis(){
    return post('/analysis', {command:this.state.postUrl});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          URL : <input type="text" name="postUrl" value={this.state.postUrl} width="60%" placeholder="분석할 주소를 입력하세요" onChange={this.handleValueChange}/>
          <Button type="submit" variant="contained" color="primary">분석</Button>

        </form>
        {this.state.result ? <PostResult postResult ={this.state.result}/> : "" }        
      </div>
    );
  }
}

class KeywordTab extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      keyword:'',
      result:''
    }
  }

  handleFormSubmit=(e)=>{
    e.preventDefault();
    this.keywordAnalysis()
        .then((res)=>{ this.setState({result: res.data});

        });
  } 

  handleValueChange=(e)=>{
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }
  
  keywordAnalysis(){

    return post('/keyword', {command:this.state.keyword});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          Keyword : <input type="text" name="keyword" value={this.state.keyword} placeholder="조회할 키워드를 입력하세요" onChange={this.handleValueChange}/>
          <Button type="submit" variant="contained" color="primary">조회</Button>
 
        </form>
        {this.state.result ? <KeywordResult keywordResult ={this.state.result}/> : "" }        
      </div>
    );
  }
}

class RankTab extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      rankId:'',
      rankKeyword:'',
      result:[],
      loading: false,
    }
  } 
  
  handleFormSubmit=(e)=>{
    e.preventDefault();

    this.setState({loading:true});
    this.rankAnalysis()
        .then((res)=>{ 

          
          if(this.state.result.length)
          {
            let tabledata = this.state.result;
            tabledata.push(res.data);
            this.setState({result:tabledata});

          }
          else{
            this.setState({result: [res.data]});

          }

          this.setState({loading:false});

        });
  } 


  handleValueChange=(e)=>{
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  rankAnalysis(){

    return post('/rank', {id:this.state.rankId, keyword:this.state.rankKeyword});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          아이디 : <input type="text" name="rankId" value={this.state.rankId} width="60%" placeholder="아이디를 입력하세요" onChange={this.handleValueChange}/>
          키워드 : <input type="text" name="rankKeyword" value={this.state.rankKeyword} width="60%" placeholder="키워드를 입력하세요" onChange={this.handleValueChange}/>
          <Button type="submit" variant="contained" color="primary" className={classes.buttonProgress} disabled={this.state.loading}>확인</Button>
          {this.state.loading && (<LinearProgress color='secondary' className={classes.linearProgress}/>)}

        </form>
        {this.state.result.length ? <RankResult rankResult ={this.state.result}/> : "" }      
      </div>

    );
  }
}
