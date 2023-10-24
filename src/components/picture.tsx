
type PictureProps = {
  previewImgWebp: string;
  previewImgWebp2x: string;
  previewImg: string;
  previewImg2x: string;
  width: number;
  height: number;
  alt: string;
}

export function Picture ({
  previewImgWebp,
  previewImgWebp2x,
  previewImg,
  previewImg2x,
  width,
  height,
  alt
}: PictureProps):JSX.Element { // здесь не обосновано использование JSX.Element, везде где есть пропсы необходимо использовать React.FC
  return (
    <picture>
      <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x} 2x`} />
      <img src={`/${previewImg}`} srcSet={`/${previewImg2x} 2x`} width={width} height={height} alt={alt} />
    </picture>
  );
}

