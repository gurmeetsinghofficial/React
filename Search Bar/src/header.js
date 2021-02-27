import React from 'react'
export default class Header extends React.Component{
    state={
        loc:["aa","bb","cc","dd","bb","abcd"],
        name1:[{n:'Sagar',loc:'kaithal'},{n:'Rahul',loc:'Chandigarh'},{n:'Rahul KL',loc:'Ambala'},{n:'Sant',loc:'Rajpura'},{n:'Sumit',loc:'Patiala'},{n:'Ritwik',loc:'Karnal'},{n:'Sagar1',loc:'panipat'},{n:'Sagar2',loc:'Sonipat'},{n:'Sagar',loc:'kaithal'},{n:'Rahul',loc:'Chandigarh'},{n:'Rahul KL',loc:'Ambala'},{n:'Sant',loc:'Rajpura'},{n:'Sumit',loc:'Patiala'},{n:'Ritwik',loc:'Karnal'},{n:'Sagar1',loc:'panipat'},{n:'Sagar2',loc:'Sonipat'}],
        filtered:[{n:'Sagar',loc:'kaithal'},{n:'Rahul',loc:'Chandigarh'},{n:'Rahul KL',loc:'Ambala'},{n:'Sant',loc:'Rajpura'},{n:'Sumit',loc:'Patiala'},{n:'Ritwik',loc:'Karnal'},{n:'Sagar1',loc:'panipat'},{n:'Sagar2',loc:'Sonipat'},{n:'Sagar',loc:'kaithal'},{n:'Rahul',loc:'Chandigarh'},{n:'Rahul KL',loc:'Ambala'},{n:'Sant',loc:'Rajpura'},{n:'Sumit',loc:'Patiala'},{n:'Ritwik',loc:'Karnal'},{n:'Sagar1',loc:'panipat'},{n:'Sagar2',loc:'Sonipat'}],
        query:""
    }
    handleInputChange=(event)=>{
        const query=event.target.value;
        this.setState((prevState)=>{
            const filtered=prevState.name1.filter((element)=>{
                return element.n.toLowerCase().includes(query.toLowerCase());
            });
            return{
                query,
                filtered
            }
        });
    }
    render(){
        return (
            <>
            <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            
            <input style={{width:'800px',height:'100px',fontSize:'16px'}} placeholder="Search your Restraunts" onChange={this.handleInputChange}/><p></p>
            <table class="table"><th><td>Name</td><td>Location</td></th></table>
            <div style={{height:'350px',width:'800px',overflow:'scroll'}}>
                <table class="table table-striped table-dark table-hover">{this.state.filtered.map((i)=><tr><td>{i.n}</td><td>{i.loc}</td></tr>)}</table>
            </div></>
        );
    }
}