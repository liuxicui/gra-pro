import React from 'react';
import {hashHistory} from 'react-router';
import axios from "axios";

import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import AccountCircle from "material-ui/svg-icons/action/account-circle";
import Snackbar from 'material-ui/Snackbar';

class Header extends React.Component {
  constructor(){
    super();
    this.state={
      open: false ,     //登录注册的开关
      action:"signin", //登录注册表单的选项
      username:"",      //表单用户名的value
      password:"",      //表单密码的value
      isLogin:false,    //是否登录的状态
      user:"",          //登录后后台返回的用户名
      userId:"",        //登录后后台返回的userid
      openMenu:false,   //登录后右上角弹出式菜单的开关
      snackBar:false    //登出时弹出的提示框开关
    }
  }
  componentWillMount(){
      if(localStorage.user && localStorage.user){
        this.setState({isLogin:true,user:localStorage.user,userId:localStorage.userId})
      }
  }
  handleClose(){
    this.setState({
      open: false
    })
  }
  handleOpen(){
    this.setState({
      open: true
    })
  }
  handleUsername(e,username){
    this.setState({username:username.trim()});
  }
  handlePassword(e,password){
    this.setState({password:password.trim()});
  }
  handleSubmit(){
    let data = {username:this.state.username,password:this.state.password};
    axios.post("https://localhost:3000", data)
    .then(res =>{
      this.setState({open:false,isLogin:true,user:res.data.user,userId:res.data.userId})
      localStorage.setItem("user",res.data.user);
      localStorage.setItem("userId",res.data.userId);
    })
    .catch(err=>{
      if(err.response){
        alert(err.response.data.msg)
      }else{
        console.log("Error",err);
      }
    })
  }
  handleOnRequestChange(value){
    this.setState({
      openMenu: value,
    })
  }
  handleMenuItem(e,child){
    console.log("yin");
    if (child.props.value === "3") this.logout()
  }
  logout(){
    axios.get("https://localhost:3000")
    .then(res => {
      this.setState({isLogin:false,user:"",userId:"",snackBar:true})
      localStorage.user = "";
      localStorage.userId = "";
    })
  }
  render () {
    const actions = [
      <FlatButton
        label="确认"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit.bind(this)}
      />
    ];
    return(
      <div>
        <header>
          <FlatButton label="返回" onClick={() => hashHistory.goBack()} />
          <h2>我的博客</h2>
          <div className='right-bar'>
            <FlatButton label="登录/注册" onTouchTap = {this.handleOpen.bind(this)}/>
          </div>
        </header>
        <Dialog
         actions={actions}
         open={this.state.open}
         onRequestClose={this.handleClose.bind(this)}
         >
         {<FlatButton label="登录" primary = {this.state.action=="signin" ? true : false}
           onTouchTap={() => this.setState({action:"signin"})}/>}
         {<FlatButton label="注册" primary = {this.state.action=="signup" ? true : false}
           onTouchTap={() => this.setState({action:"signup"})}/>}<br/>
           <TextField hintText="username" onChange = {this.handleUsername.bind(this)}/><br />
           <TextField hintText="password" type = "password" onChange = {this.handlePassword.bind(this)}/><br />
       </Dialog>
       <Snackbar
            open={this.state.snackBar}
            message="退出成功"
            autoHideDuration={2000}
            onRequestClose={() => this.setState({snackBar:false})}
            bodyStyle={{textAlign:"center"}}
        />
      </div>
    )
  }
}


export default Header;
