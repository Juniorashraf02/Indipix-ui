// NextJS & React imports

import ImageCard from "./ImageCard";

// Domestic Imports



// Props interface
interface GalleryProps {
  id: number,
  image: string,
  alternative: string,
  author: string,
  authorImage: string,
  address: string,

}

const Gallery = () => {
  const galleryImages: GalleryProps[] = [
    {
      "id": 0,
      "image": "https://source.unsplash.com/featured/?person",
      "author": "Brooke Wolf",
      "authorImage": "https://pbs.twimg.com/profile_images/1502427884224643073/vYxvceZz_400x400.jpg",
      "address": "502 Metrotech Courtr",
      "alternative": "Nostrud tempor officia duis"
    },
    {
      "id": 1,
      "image": "https://source.unsplash.com/featured/?watch",
      "author": "Branch Charles",
      "authorImage": "https://pbs.twimg.com/profile_images/1502427884224643073/vYxvceZz_400x400.jpg",
      "address": "914 Stillwell Avenue",
      "alternative": "Aute sunt amet labore"
    },
    {
      "id": 2,
      "image": "https://source.unsplash.com/featured/?mobile",
      "author": "Golden Nolan",
      "authorImage": "https://pbs.twimg.com/profile_images/1502427884224643073/vYxvceZz_400x400.jpg",
      "address": "752 Dahill Road",
      "alternative": "Do excepteur aliqua deserunt"
    },
    {
      "id": 3,
      "image": "https://source.unsplash.com/featured/?team",
      "author": "Rasmussen Benson",
      "authorImage": "https://pbs.twimg.com/profile_images/1502427884224643073/vYxvceZz_400x400.jpg",
      "address": "838 Bills Place",
      "alternative": "Irure labore consequat commodo"
    },
    {
      "id": 4,
      "image": "https://source.unsplash.com/featured/?animal",
      "author": "Luisa Harvey",
      "authorImage": "https://pbs.twimg.com/profile_images/1502427884224643073/vYxvceZz_400x400.jpg",
      "address": "161 Lincoln Terrace",
      "alternative": "Nisi enim non irure"
    },
    {
      "id": 5,
      "image": "https://source.unsplash.com/featured/?cars",
      "authorImage": "https://pbs.twimg.com/profile_images/1502427884224643073/vYxvceZz_400x400.jpg",
      "author": "Angie Potts",
      "address": "630 Berry Street",
      "alternative": "Labore reprehenderit minim"
    },
    {
      "id": 6,
      "image": "https://source.unsplash.com/featured/?nature",
      "author": "Mccray Daniels",
      "authorImage": "https://pbs.twimg.com/profile_images/1502427884224643073/vYxvceZz_400x400.jpg",
      "address": "498 Beaumont Street",
      "alternative": "Voluptate enim qui voluptate"
    },
    {
      "id": 7,
      "image": "https://source.unsplash.com/featured/?birds",
      "author": "Imogene Shaw",
      "authorImage": "https://pbs.twimg.com/profile_images/1502427884224643073/vYxvceZz_400x400.jpg",
      "address": "391 Bradford Street",
      "alternative": "Laborum do laborum enim"
    },
    {
      "id": 8,
      "image": "https://source.unsplash.com/featured/?macbook",
      "author": "Diana Woodward",
      "authorImage": "https://pbs.twimg.com/profile_images/1502427884224643073/vYxvceZz_400x400.jpg",
      "address": "216 Kingston Avenue",
      "alternative": "Non minim cillum ullamco"
    },
  ]

  return (

    <>
      <div className="container max-w-screen-xl px-5 lg:px-10 xl:px-20 mx-auto py-5">
        <div className="columns-3 gap-5">
          {galleryImages.map(image =>
            <ImageCard key={image.id} data={image} />
          )}
        </div>
      </div>
    </>

  );
};

export default Gallery;
