import logo from './logo.svg';
import './App.css';
import './myStyles.css'
import { Row,Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <div style={{
      display:'flex',
      // flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      // marginTop:'50px',
      backgroundColor: '#0163E6',
      // height:"100%"
    }}>
      <Container>
      <Row className="justify-content-center">
    <Col className="d-flex justify-content-center" style={{margin:"20px 0px"}}>
      <Box price = "$0" variant="free" a={{text:'Single User',valid:true}} a1={{text:"5GB Storage", valid:true}} a2={{text:"Unlimited Public Projects",valid:true}} a3={{text:"Community Access",valid:true}} nA={{text:"Unlimited Private Projects",valid:false}} nA1={{text:"Dedicated Phone Support",valid:false}} nA2={{text:"Free Subdomain",valid:false}} nA3 ={{text:"Monthly Status Report",valid:false}}/>
    </Col>
    <Col className="d-flex justify-content-center" style={{margin:"20px 0px"}}>
      <Box price = "$9" variant="plus" a={{text:'5 Users',valid:true}} a1={{text:"50GB Storage", valid:true}} a2={{text:"Unlimited Public Projects",valid:true}} a3={{text:"Community Access",valid:true}} nA={{text:"Unlimited Private Projects",valid:true}} nA1={{text:"Dedicated Phone Support",valid:true}} nA2={{text:"Free Subdomain",valid:true}} nA3 ={{text:"Monthly Status Report",valid:false}}/>
    </Col>
    <Col className="d-flex justify-content-center" style={{margin:"20px 0px"}}>
      <Box price = "$49" variant="pro" a={{text:'Unlimited User',valid:true}} a1={{text:"150GB Storage", valid:true}} a2={{text:"Unlimited Public Projects",valid:true}} a3={{text:"Community Access",valid:true}} nA={{text:"Unlimited Private Projects",valid:true}} nA1={{text:"Dedicated Phone Support",valid:true}} nA2={{text:"Free Subdomain",valid:true}} nA3 ={{text:"Monthly Status Report",valid:true}}/>
    </Col>
   
    </Row>
    </Container>
    </div>
  )
}

let primary ='primary';

function Box (props){

  return (
    <div className ={`App ${primary}`} style={{
  
      // border:'solid 1px black',
      borderRadius:'20px',
      height: '100%',
      width: '400px',
      backgroundColor:'white',
      // margin:"20px 0px"
      // display: 'flex',
      // flexDirection:"column",
      // justifyContent:"space-around"
    }}>
      <p style={{color:'rgb(173, 171, 171)',padding:"20px",fontSize:"22px"}}>{props.variant}</p>
      <h1 style={{display:'inline'}}>{props.price}</h1><p style={{display:'inline'}}>/month</p>
      {/* <br></br> */}
      <p style={{color:'rgb(173, 171, 171)'}}>________________________________________________________</p>
      {/* <br></br> */}
      <div style={{
        textAlign:'left',
        marginLeft: '30px'
      }}>
      <h4 style={{opacity:props.a.valid?"":'0.3'}}>{props.a.valid?"✓":"✖"}{props.a.text}</h4>
      <h4 style={{opacity:props.a1.valid?"":'0.3'}}>{props.a1.valid?"✓":"✖"}{props.a1.text}</h4>
      <h4 style={{opacity:props.a2.valid?"":'0.3'}}>{props.a2.valid?"✓":"✖"}{props.a2.text}</h4>
      <h4 style={{opacity:props.a3.valid?"":'0.3'}}>{props.a3.valid?"✓":"✖"} {props.a3.text}</h4>
      <h4 style={{opacity:props.nA.valid?"":'0.3'}}>{props.nA.valid?"✓":"✖"} {props.nA.text}</h4>
      <h4 style={{opacity:props.nA1.valid?"":'0.3'}}>{props.nA1.valid?"✓":"✖"} {props.nA1.text}</h4>
      <h4 style={{opacity:props.nA2.valid?"":'0.3'}}>{props.nA2.valid?"✓":"✖"} {props.nA2.text}</h4>
      <h4 style={{opacity:props.nA3.valid?"":'0.3'}}>{props.nA3.valid?"✓":"✖"} {props.nA3.text}</h4>
      
      </div>
      <button style={{
        borderRadius:'20px',
         height:'40px',
         width:'350px', 
         margin:'30px 0px', 
         backgroundColor:'#569AFE',
         border:'none'}}>BUTTON</button>
    </div>
  );
}

export default App;
