import defaultStypeModule from "./sci.module.css"


interface SimplyCustomizedImageProps
{
    src: string,
    alt: string | undefined,
    width: string | undefined,
    height: string | undefined,
    // justify: string | undefined,
    // align: string | undefined,
    caption: string | undefined,
    captionDecoration: string | undefined,
}

const SimplyCustomizedImage = (props: SimplyCustomizedImageProps) =>
{
    // const selectedJustifyContent = props.justify != undefined ? props.justify : "center"
    // const selectedAlignItem = props.align != undefined ? props.align : "center"

    // const generalDivStyle = {
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: `${selectedJustifyContent}`,
    //     alignItems: `${selectedAlignItem}`,
    //     width: "100%",
    // }

    const imageStype = {
        width: `${props.width}`,
        height: `${props.height}`
    }

    return(
        <div
            className={defaultStypeModule.generalDivStype}
            // style={generalDivStyle}
        >
            <img
                className={defaultStypeModule.imageStype}
                src={props.src}
                alt={`${props.alt ? props.alt : "a-simply-customized-image"}`}
                style={imageStype}
            />
            <div className={defaultStypeModule.captionStyle}>
                <p>{props.caption}</p>
            </div>
        </div>
    )
}

export default SimplyCustomizedImage