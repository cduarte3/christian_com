import React, { useState, useEffect } from "react";
import MainNav from "@/components/MainNav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Feedback() {
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [responseDirections, setResponseDirections] = useState("");
  const [rating, setRating] = useState(5);

  const ratingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const submitReview = async () => {
    try {
      const response = await fetch("/api/submitToDb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reviewText, rating }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Review submitted successfully:", data);
        setResponseMessage("Review submitted successfully!");
        setResponseDirections("Refresh the page to see your review.");
      } else {
        console.error("Failed to submit review:", data.error);
        setResponseMessage("Failed to submit review!");
        setResponseDirections("Possible missing fields.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  /*
  useEffect(() => {
    console.log(rating);
  }, [rating]); 
  */

  useEffect(() => {
    fetch("/api/dbSchema")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <MainNav />
      <div className="feedbackMain">
        <h1>Feedback</h1>
        <div className="reviewField">
          <textarea
            type="text"
            id="reviewInput"
            placeholder="Leave a review or suggestion of a future project. (max 200 chars)"
            maxLength="200"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
          <br />
          <div className="stars">
            <input
              type="radio"
              name="star"
              id="1star"
              value="1"
              onChange={ratingChange}
            ></input>
            <label htmlFor="1star" className="fa fa-star"></label>
            <input
              type="radio"
              name="star"
              id="2star"
              value="2"
              onChange={ratingChange}
            ></input>
            <label htmlFor="2star" className="fa fa-star"></label>
            <input
              type="radio"
              name="star"
              id="3star"
              value="3"
              onChange={ratingChange}
            ></input>
            <label htmlFor="3star" className="fa fa-star"></label>
            <input
              type="radio"
              name="star"
              id="4star"
              value="4"
              onChange={ratingChange}
            ></input>
            <label htmlFor="4star" className="fa fa-star"></label>
            <input
              type="radio"
              name="star"
              id="5star"
              value="5"
              onChange={ratingChange}
            ></input>
            <label htmlFor="5star" className="fa fa-star"></label>
          </div>
          <button onClick={submitReview} className="submitReview">
            Submit Review
          </button>
          <div className="responseMessage">{responseMessage}</div>
          <div className="responseMessage">{responseDirections}</div>
        </div>
        <div className="reviewMap">
          <Row className="gy-4">
            {reviews.length > 0 ? (
              reviews.map((reviewData, index) => (
                <Col lg={6} key={index}>
                  <Card className="reviewCard">
                    <h3>{reviewData.review}</h3>
                    <div className="ratingStars">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <span
                          key={j}
                          className={`fa ${
                            j < reviewData.rating
                              ? "fa-star checked"
                              : "fa-star"
                          }`}
                        >
                        </span>
                      ))}
                    </div>
                    <h3>{reviewData.date.split("T")[0]}</h3>
                  </Card>
                </Col>
              ))
            ) : (
              <Card className="reviewCard">
                <br />
                <h3>No reviews yet.</h3>
              </Card>
            )}
          </Row>
        </div>
      </div>
    </>
  );
}
