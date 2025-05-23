import { useState } from "react";
const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"];

export default function ProductImage() {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div>
            <img src={selectedImage} id="main-image" className="max-w-[400px]" />

            <div className="flex gap-2">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        className={`w-20 aspect-square object-cover ${selectedImage === img ? "border-2" : ""
                            }`}
                        onClick={() => setSelectedImage(img)}
                    />
                ))}
            </div>
        </div>
    );
}
