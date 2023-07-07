export interface propType {
    toggle: boolean
}

export type myProp = {
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
    toggle: boolean,
    isHidden: boolean,
    setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export type toggleProp = {
    toggle: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface Props {
    toggle: boolean,
    isHidden: boolean,
    // setToggle: React.Dispatch<React.SetStateAction<boolean>>;
    setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}