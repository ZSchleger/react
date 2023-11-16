import { useState } from 'react';
import { imageList } from './data.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < imageList.length - 1;

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }


    let images = imageList[index];
    return (
        <>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
                <i>{images.name} </i>
            </h2>
            <h3>
                ({index + 1} of {imageList.length})
            </h3>
            <img
                src={images.src}
                alt={images.alt}
            />
        </>
    );
}
