import { STARS_NUMBER } from '../consts/global';

type ProductRateProps = {
  rating: number;
}
export function Rating ({rating}: ProductRateProps):JSX.Element {

  const stars = Array.from({length: STARS_NUMBER}, (_, index) => index + 1);

  return (
    <>
      {stars.map((star) =>
        (
          <svg key={star} width={17} height={16} aria-hidden="true">
            <use xlinkHref={rating >= star ? '#icon-full-star' : '#icon-star'} />
          </svg>
        ))}
    </>
  );
}


