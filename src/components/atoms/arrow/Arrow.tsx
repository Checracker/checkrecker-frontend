import React, { useEffect, useRef, useState } from 'react';

const Arrow: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [imageSizes, setImageSizes] = useState<
        { width: number; height: number }[]
    >([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const imgHorizonArrow = new Image();
        const imgVerticalArrow = new Image();
        imgHorizonArrow.src = './image/arrow_horizon.svg';
        imgVerticalArrow.src = './image/arrow_vertical.svg';

        const updateCanvasSize = () => {
            const viewportWidth = document.documentElement.clientWidth;
            const viewportHeight = window.innerHeight - 120;
            // Canvas의 크기를 Viewport의 크기로 동적으로 설정
            canvas.width = viewportWidth;
            canvas.height = viewportHeight;

            // 이미지 크기 계산 함수 수정
            const calculateImageSize = (
                originalWidth: number,
                originalHeight: number,
            ) => {
                const maxImageWidth = viewportWidth * 0.8; // 예시: Viewport 크기의 80%로 설정
                const maxImageHeight = viewportHeight * 0.8;

                const widthRatio = maxImageWidth / originalWidth;
                const heightRatio = maxImageHeight / originalHeight;

                // 두 비율 중에서 작은 비율을 선택하여 이미지 크기 조절
                const scaleFactor = Math.min(widthRatio, heightRatio);

                return {
                    width: originalWidth * scaleFactor,
                    height: originalHeight * scaleFactor,
                };
            };

            // 각 이미지의 크기 계산 및 저장
            const imageSizeHorizon = calculateImageSize(
                imgHorizonArrow.width,
                imgHorizonArrow.height,
            );
            const imageSizeVertical = calculateImageSize(
                imgVerticalArrow.width,
                imgVerticalArrow.height,
            );
            setImageSizes([imageSizeHorizon, imageSizeVertical]);

            // Canvas 초기화
            context.clearRect(0, 0, viewportWidth, viewportHeight);

            // 이미지 그리기
            const imageX1 = (viewportWidth - imageSizeHorizon.width) / 2;
            const imageY1 = (viewportHeight - imageSizeHorizon.height) / 2;
            context.drawImage(
                imgHorizonArrow,
                imageX1,
                imageY1,
                imageSizeHorizon.width,
                imageSizeHorizon.height,
            );

            const imageX2 = (viewportWidth - imageSizeVertical.width) / 2;
            const imageY2 = (viewportHeight - imageSizeVertical.height) / 2;
            context.drawImage(
                imgVerticalArrow,
                imageX2,
                imageY2,
                imageSizeVertical.width,
                imageSizeVertical.height,
            );
        };

        // 이미지 로딩이 끝날 때까지 대기
        Promise.all([
            new Promise(resolve =>
                imgHorizonArrow.addEventListener('load', resolve),
            ),
            new Promise(resolve =>
                imgVerticalArrow.addEventListener('load', resolve),
            ),
        ]).then(() => {
            // 최초 로딩 시 Canvas 크기 및 이미지 업데이트
            updateCanvasSize();
        });

        // 윈도우 리사이즈 이벤트에 대한 이벤트 핸들러 등록
        window.addEventListener('resize', updateCanvasSize);

        // 컴포넌트 언마운트 시 이벤트 핸들러 제거
        return () => {
            window.removeEventListener('resize', updateCanvasSize);
        };
    });

    return (
        <div
            style={{
                position: 'absolute',
                top: 'calc(50% + 50px)',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex:-10,
                margin: 0,
            }}
        >
            <canvas ref={canvasRef}></canvas>
        </div>
    );
};

export default Arrow;
