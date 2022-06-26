import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Carousel = (props) => {
    const { images } = props;
    const totalSlide = images?.length - 1;
    const carouselRef = useRef();
    const [curSlide, setCurSlide] = useState(0);

    const carouselLeft = () => {
        if (curSlide === 0) setCurSlide(totalSlide);
        else setCurSlide(curSlide - 1);
    };

    const carouselRight = () => {
        if (curSlide >= totalSlide) setCurSlide(0);
        else setCurSlide(curSlide + 1);
    };

    //현재 slide가 변경될 때
    useEffect(() => {
        carouselRef.current.style.transition = "all 0.5s ease-in-out";
        carouselRef.current.style.transform = `translateX(${
            -700 * curSlide
        }px)`;
    }, [curSlide]);

    return (
        <Wrap>
            <Container ref={carouselRef}>
                {images?.map((data, idx) => (
                    <ImageContainer key={idx}>
                        <Image src={data} />
                    </ImageContainer>
                ))}
            </Container>
            <CarouselLeftMoveBtn
                id="leftBtn"
                onClick={carouselLeft}
                curSlide={curSlide}>
                &lt;
            </CarouselLeftMoveBtn>
            <CarouselRightMoveBtn
                id="rightBtn"
                onClick={carouselRight}
                curSlide={curSlide}
                totalSlide={totalSlide}>
                &gt;
            </CarouselRightMoveBtn>
        </Wrap>
    );
};

const Wrap = styled.div`
    margin-top: 20px;
    overflow: hidden;
    position: relative;
`;
const Container = styled.div`
    display: flex;
    width: 100%;
`;
const CarouselLeftMoveBtn = styled.button`
    border: none;
    background-color: transparent;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 225px;
    left: 25px;
    color: white;
    font-size: 32px;
    opacity: 0.5;
    &:hover {
        cursor: pointer;
    }
`;
const CarouselRightMoveBtn = styled.button`
    border: none;
    background-color: transparent;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 225px;
    right: 25px;
    color: white;
    font-size: 32px;
    opacity: 0.5;
    &:hover {
        cursor: pointer;
    }
`;
const ImageContainer = styled.div`
    width: 700px;
    height: 512px;
`;
const Image = styled.img`
    width: 700px;
    height: 100%;
`;
export default Carousel;
