import '@coreui/coreui/dist/css/coreui.min.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

const CarouseSection = () => {
    return (
        <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
            <CCarousel controls indicators interval={1000} style={{ width: '100%', height: '100%' }}>
                <CCarouselItem>
                    <CImage className="d-block w-100" src="../../../assets/slideoneimage.svg" style={{ height: '100%', width: '100%', objectFit: 'cover' }} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src="../../../assets/slidetwoimage.svg" style={{ height: '100%', width: '100%', objectFit: 'cover' }} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src="../../../assets/slidethirsimage.svg" style={{ height: '100%', width: '100%', objectFit: 'cover' }} alt="slide 3" />
                </CCarouselItem>
            </CCarousel>
        </div>
    );
};

export default CarouseSection;
