import icons from '@/assets/icons';
import images from '@/assets/images';

export default function Card({
  image,
  name,
  price,
  favoriteCount,
  handleError,
}) {
  const imageSrc = image || images.ProductEmptyImage;

  return (
    <div className="flex w-full flex-col">
      <img
        className="aspect-square w-full rounded-2xl object-cover"
        src={imageSrc}
        alt="상품 사진"
        onError={handleError}
      />
      <p className="text-md-medium mt-4">{name}</p>
      <span className="text-md-bold my-1.5 inline-block">{price}</span>
      <div className="flex items-center gap-1">
        <button className="h-4" type="button" aria-label="상품 좋아요">
          <icons.HeartIcon />
        </button>
        <span className="text-md-medium text-gray-600">{favoriteCount}</span>
      </div>
    </div>
  );
}
