import pattern from "../assets/images/pattern.png";
import React from "react";

type filteredCardProp = {
    hand: string;
    children: React.ReactNode
}
export const FilteredCard = ({hand, children}: filteredCardProp) => {
    return (
        <div className={'filteredCard'}>
            <img
                src={hand}
                alt={'image'}
                className={'filteredImage'}
            />
            <img
                src={pattern}
                alt={'image'}
                className={'opacity-30'}
            />
            { children }
        </div>
    )
}