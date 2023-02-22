function SearchResultsCard(props){
    return (
        <div>
            <h5>{props.title}</h5>
            <p>{props.address}</p>
            {/* <p>Website:{props.website}</p> */}
            {/* <p>Categories:{props.categories}</p> */}
        </div>
    )
}

function MapCard(props){
    return (
        <div>
            <h5>{props.title}</h5>
            <p>{props.address}</p>
        </div>
    )
}

export {SearchResultsCard, MapCard};