import { FC } from "react";

import ImageBlock from "../../Product/images/image/Image";

const ImagesBlock: FC = () => {
  const images = new Array("", "", "", "");

  return (
    <div style={{ padding: "20px 40px" }}>
      {images.map((image, i) => (
        <ImageBlock
          key={i}
          type="create"
          index={i}
          image={image}
          placeholder="Ссылка на изображение"
        />
      ))}
    </div>
  );
};

export default ImagesBlock;
