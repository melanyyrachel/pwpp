import{useState} from'react';
import {container, label, textarea, button } from "react-bootstrap";

const Contact= () => {
    const [judul, setJudul] = useState('turu');
    function handleName(e){
        setJudul(e.target.value);
    }
return(
    <container>
    <div align="center"><br/>
    <h1 className="text-white text-center mt-4" id="contact">{judul}</h1>
    <div class="container-fluid"><br/>
    <div class="col-7">

    <h4><label for="floatingTextarea" className="text-white">Name</label></h4>
<textarea class="form-control" id="floatingTextarea" onChange={handleName}></textarea><br/>
</div>

<div class="col-7">
<h4>
<label for="floatingTextarea" className="text-white">Comments</label></h4>
<textarea class="form-control" id="floatingTextarea"></textarea><br/>
</div>
<h3>
<button type="submit" class="btn btn-danger mt-4">SEND</button></h3>
</div>
</div>
</container>
)
}
export default Contact;