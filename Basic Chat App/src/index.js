import React from 'react';
import ReactDOM from 'react-dom';
import Userlist from './containers/userList';
import Display from './containers/DisplayMes';
import Input from './components/input';
import './style.css'
class Cq extends React.Component {
    state={
        name:"gurmeet",
        arr:[{name:"gurmeet",msg:["hello","guru","ji"],i:0}],
        message:["hello","guru","ji"],
        i:1,
        idToDis:0,
        newMes:""
    }
    handleClick=(event)=>{
        const {name,arr,message,i}=this.state;
        if(name!==''&&name!==' ')
        arr.push({n:name,msg:[],i});
        this.setState({name:event.target.value,arr:arr,message:message,i:i+1,bgColor:'white'});
    }
    displayMessage=(event)=>{
        let a=parseInt(event.target.className);
        console.log(this.state.arr[a].message+" "+a+" "+typeof(a));
        this.setState({idToDis:a,message:this.state.arr[a].message})
    }
    handleChange=(event)=>{
        this.setState({name:event.target.value});
    }
    handleChangeMes=(event)=>{
        this.setState({newMes:event.target.value});
    }
    handleClickMes=(event)=>{
        const {name,arr,message,i,idToDis,newMes}=this.state;
        if(newMes!==''&&newMes!==' ')
        {
        arr[idToDis].msg.push(newMes);
        }
        this.setState({name:name,arr:arr,message:message,i:i,idToDis:idToDis,newMes:""});
    }
	render() {
        const {name,arr,message,id,idToDis,newMes}=this.state;
		return (
            <>
            <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <Input a="write name" b={this.state.name} c={this.handleChange}/>
            <button onClick={this.handleClick}>add</button>
            <br/>
            <div className="contacts">
            <table className="table-sm table-striped table-dark table-hovert t1">{arr.map((i,index)=><tr><td className={index-1} onClick={this.displayMessage}>{i.n}</td></tr>)}</table>
            </div>
            <Userlist/><br/><br/>
            <div className="message">
            {idToDis}<br/>
            <Display b={name} c={message} id={idToDis} ar={arr}/>
            
            </div>
            <div className="message1">
            <input className="msgIn" value={newMes} onChange={this.handleChangeMes}/>
            <button className="msgBtn" onClick={this.handleClickMes}>send Message</button>
            </div>
            </>
		)
	}
}

ReactDOM.render(
	<Cq />,
	document.getElementById('root')
);
