const calcRating = (
  likes: number = 0,
  dislikes: number = 0,
  rating: number = 5
) => {
  const result = rating - dislikes / (likes / rating);

  return result.toFixed(1);
};

export default calcRating;
