export default function StarRating  ({ rating })  {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
    return (
      <div className="star-rating text-lg" title={rating}>
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <i key={`full-${i}`} className="bx bxs-star text-[#FFD700]"></i>
          ))}
  
        {halfStar && <i className="bx bxs-star-half text-[#FFD700]"></i>}
  
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <i key={`empty-${i}`} className="bx bx-star text-gray-400"></i>
          ))}
      </div>
    );
  };
  