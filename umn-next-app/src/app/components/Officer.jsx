function Officer(props) {
    return(<div className="officer-box">
    <img src={props.img} alt={props.alt}></img>
      <h4>{props.name}</h4>
      <p>{props.title}</p>
  </div>);
}

export default Officer;