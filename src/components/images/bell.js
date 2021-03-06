import * as React from "react"

function SVGBell(props) {
    return (
        <svg viewBox="0 0 513.54 502.34" {...props}>
            <g data-name="Layer 2">
                <circle cx={372.45} cy={131.06} r={131.06} />
                <text
                    transform="translate(268.06 198.4)"
                    fontSize={200}
                    fill="#fff"
                    fontFamily="Roboto-Regular,Roboto"
                >
                    {"21"}
                </text>
                <g data-name="Bell">
                    <path d="M213.33 502.34a80.1 80.1 0 01-80-80 16 16 0 0132 0 48 48 0 1096 0 16 16 0 0132 0 80.09 80.09 0 01-80 80z" />
                    <path d="M389.33 438.34h-352a37.35 37.35 0 01-24.28-65.71 15.23 15.23 0 011.71-1.28A143.36 143.36 0 0064 263.19v-59.52A148.39 148.39 0 01178.5 58.6a16 16 0 017.38 31.15A116.49 116.49 0 0096 203.67v59.52A175.45 175.45 0 0134.07 397c-.32.26-.6.49-.94.73A5.22 5.22 0 0032 401a5.39 5.39 0 005.33 5.33h352a5.4 5.4 0 005.34-5.33 5.12 5.12 0 00-1.15-3.31c-.32-.24-.63-.47-.92-.73a173.88 173.88 0 01-44.82-58.47 16 16 0 1128.9-13.68A142.64 142.64 0 00412 371.42a20.07 20.07 0 011.62 1.21 37.32 37.32 0 01-24.24 65.71z" />
                </g>
            </g>
        </svg>
    )
}

export default SVGBell