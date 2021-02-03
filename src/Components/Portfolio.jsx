import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { Center } from "@chakra-ui/react";
import { Image } from "antd";
import Typography from "@material-ui/core/Typography";

const photos = [
  {
    src: "https://picsum.photos/200",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1,
  },
  {
    src: "https://picsum.photos/100",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://picsum.photos/300",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3,
  },
];

const imgWithClick = { cursor: "grab" };
const cursor = { cursor: "grab" };
const Photo = ({ index, onClick, photo, margin, direction, top, left }) => {
  const imgStyle = { margin: margin };
  if (direction === "column") {
    imgStyle.position = "absolute";
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = (event) => {
    onClick(event, { photo, index });
  };

  return (
    <img
      style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
      {...photo}
      onClick={onClick ? handleClick : null}
      alt="img"
      className={cursor}
    />
  );
};

/* popout the browser and maximize to see more rows! -> */
const SortablePhoto = SortableElement((item) => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery
    photos={items}
    renderImage={(props) => <SortablePhoto {...props} />}
  />
));

export default function Portfolio() {
  const [items, setItems] = useState(photos);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <div id="portfolio">
      <br />
      <br />
      <hr />
      <Typography variant="h2" align="center">
        Portfolio
      </Typography>
      <Center>
        <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
      </Center>
    </div>
  );
}
