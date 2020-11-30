import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';


function RenderDish({dish}){

    if(dish != null){

        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );

    }else{
        return(<div></div>);
    }   

}

function RenderComments({comments}){

    if(comments != null){
        const commentList = comments.map((d)=> {
            return(
            
                <li key={d.id}>
                    <p>{d.comment}</p> 
                    <p>--{d.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(d.date)))}</p>
                </li>
            
            );
        });
        return(
            <div>
                {/* <h4>Comments</h4> */}
                <ul className = "list-unstyled">
                    {commentList}
                </ul>
            </div>
        );

    }else{
        return(<div></div>);
    }

}

const DishDetail = (props) =>{

    const dish = props.dish;

    let comments = [];

    if(dish != null){
        comments = dish.comments;
    }

    return(
        <div className = "container">
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    <RenderDish dish = {dish}/>
                </div>
                <div  className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <RenderComments comments = {comments}/>
                </div>
            </div>
        </div>

    );

}

export default DishDetail;