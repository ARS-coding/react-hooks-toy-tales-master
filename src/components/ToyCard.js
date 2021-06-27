import React from "react";
import {useState} from "react";

function ToyCard({ name, imgURL, likes = 0, id, filterData }) {

  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(true);

  function handleLike(event) {
    event.preventDefault()
    let newLike = id + 1;
    setIsLiked(!isLiked);
    fetch(`http://localhost:3001/toys/${event.target.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(
        { "likes": isLiked ? setLikeCount(likeCount + 1) : setLikeCount(likeCount - 1) }
      )
    })
  }

  function handleDonation(event) {
    event.preventDefault();
    fetch(`http://localhost:3001/toys/${event.target.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    filterData(event.target.id)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={imgURL}
        alt={name}
        className="toy-avatar"
      />
      <p>{likeCount} Likes</p>
      <button className="like-btn" id={id} onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" id={id} onClick={handleDonation}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
