import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CardsContext,
  RestaurantData,
  ReviewData,
  calculateAverageRating,
} from "../../context/CardsContext";

interface CommentProps {
  id: number;
  author: string;
  comment: string;
  stars: number;
}

function RestaurantDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const context = useContext(CardsContext);
  const [restaurant, setRestaurant] = useState<RestaurantData | undefined>(
    undefined
  );
  
  const [formData, setFormData] = useState<CommentProps>({
    id: 0,
    author: "",
    comment: "",
    stars: 0,
  });

  useEffect(() => {
    if (!context) return;

    const { getRestaurantBySlug } = context;

    if (slug) {
      const fetchedRestaurant = getRestaurantBySlug(slug);
      if (fetchedRestaurant) {
        setRestaurant(fetchedRestaurant);
      }
    }
  }, [context, slug]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.author ||
      !formData.comment ||
      formData.stars === 0 ||
      !restaurant
    ) {
      return;
    }

    if (!context) return;

    const { restaurants, updateRestaurant } = context;

    const targetRestaurantIndex = restaurants.findIndex((r) => r.slug === slug);

    if (targetRestaurantIndex !== -1) {
      const targetRestaurant = restaurants[targetRestaurantIndex];

      const newReview: ReviewData = {
        id: targetRestaurant.reviewsList.length,
        author: formData.author,
        comment: formData.comment,
        stars: formData.stars,
      };

      const updatedReviewsList = [...targetRestaurant.reviewsList, newReview];

      const updatedRestaurant: RestaurantData = {
        ...targetRestaurant,
        reviewsList: updatedReviewsList,
        reviews: updatedReviewsList.length,
      };
      try {
        const response = await fetch(
          `http://localhost:5001/restaurants/${targetRestaurant.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedRestaurant),
          }
        );

        if (response.ok) {
          const updatedRestaurants = [...restaurants];
          updatedRestaurants[targetRestaurantIndex] = updatedRestaurant;
          updateRestaurant(updatedRestaurant);
        } else {
        }
      } catch (error) {
      } finally {
        setFormData({
          id: 0,
          author: "",
          comment: "",
          stars: 0,
        });
      }
    }
  };

  if (!context) {
    return <div>Error: Context not available</div>;
  }

  if (!restaurant) {
    return <div className="text-center">Not Found</div>;
  }
  let averageRating = "0";

  if (restaurant.reviewsList && restaurant.reviewsList.length > 0) {
    averageRating = calculateAverageRating(restaurant.reviewsList);
  }

  return (
    <div className="container">
      <h2 className="text-center text-uppercase mb-3 fw-bolder">
        {restaurant.businessname}
      </h2>
      <div className="custom-bg-color-01 rounded-2">
        <div className="picture">
          {" "}
          <img src={restaurant.image} alt="" className="w-100" />
        </div>

        {restaurant.reviews !== 0 ? (
          <>
            <p className="mt-1 mb-0 ms-3">rating- {averageRating},</p>
            <small className="ms-3">
              based on <span>{restaurant.reviews}</span> reviews
            </small>
          </>
        ) : (
          ""
        )}
        <p className="ms-3 mt-3 mb-2">{restaurant.phone}</p>
        <p className="ms-3 mb-2">{restaurant.email}</p>
        <p className="ms-3 pb-2 mb-0">{restaurant.address}</p>
        {restaurant.parkinglot && (
          <p className="ms-3 pb-2">We have a parking lot waiting for you</p>
        )}
      </div>
      {restaurant.reviewsList && restaurant.reviewsList.length !== 0 ? (
        <>
          <h2 className="text-center text-uppercase my-4 fw-bolder">Reviews</h2>
          {restaurant.reviewsList.map((el: ReviewData, index: number) => (
            <div
              key={index}
              className="custom-bg-color-01 rounded-2 px-3 py-1 mb-3"
            >
              <p className="mb-1">
                <strong>Author: </strong> {el.author}
              </p>
              <p className="mb-1">
                <strong>Message: </strong> {el.comment}
              </p>
              <p className="mb-1">
                <strong>Stars: </strong> {el.stars}
              </p>
            </div>
          ))}
        </>
      ) : (
        ""
      )}
      <form className="d-flex flex-column mt-3" onSubmit={handleSubmit}>
        <h2 className="text-center text-uppercase mb-3 fw-bolder">
          Review Form
        </h2>
        <label htmlFor="name">Name</label>
        <textarea
          className="rounded-1 mb-2"
          id="name"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        />
        <label htmlFor="comment">Comment</label>
        <textarea
          className="rounded-1 mb-2"
          id="comment"
          value={formData.comment}
          onChange={(e) =>
            setFormData({ ...formData, comment: e.target.value })
          }
        />
        <label htmlFor="stars">Stars</label>
        <input
          className="mb-3"
          type="range"
          id="stars"
          name="stars"
          min="0"
          max="5"
          value={formData.stars}
          onChange={(e) => setFormData({ ...formData, stars: +e.target.value })}
        />

        <div className="d-grid">
          <button
            className="custom-bg-color-03 text-white border-0 rounded-1 p-2"
            type="submit"
          >
            Leave a review
          </button>
        </div>
      </form>
    </div>
  );
}

export default RestaurantDetailPage;
