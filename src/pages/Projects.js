import { useState } from 'react';
import {Link} from 'react-router-dom'
import { imageList } from '../data.js';


export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < imageList.length - 1;
    const hasLast = index < imageList.length - 1;
    const max  = imageList.length;


    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    function handleLastClick() {
        if (index === 0) {
            setIndex(max - 1);
        } else {
            setIndex(index - 1);
        }
    }

    function ButtonLink ({to,children}) {
        return <Link to={to}><button>{children}</button></Link>
    }

    let images = imageList[index];
    return (
        <>
            <h2>
                <i>{images.name} </i>
            </h2>
            <button onClick={handleLastClick}>
                Last
            </button>
            <button onClick={handleNextClick}>
                Next
            </button>

            <h3>
                ({index + 1} of {imageList.length})
            </h3>
            <ButtonLink to={images.github}>GitHub</ButtonLink>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <iframe width="1200" height="600" title="WebsitePreview"
                        src={images.url}
                        alt={images.alt}
                />
            </div>


        </>
    );
}

