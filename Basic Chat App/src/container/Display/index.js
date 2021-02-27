import React from 'react';
export default class Display extends React.Component
{
    constructor(props){
        super(props);
        console.log(props+"hi");
        //this.setState({a:props.b,msg:props.c});
        this.state={
        a:props.b,
        msg:props.c,
        ar:props.ar,
        id:props.id
        }          
    } 
		render()
        {
            const{a,msg,ar,id}=this.state;
            console.log(id);
        return (
            <>
                {ar[this.props.id].msg.map((i)=><div className="msgBox">{i}</div>)}
            </>
		)
    }
}