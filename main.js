

let palette = ["#FFFFFF", "#556430", "#dbccb7", "#c6c6c5","#8e4e26"];
let MOUNTED = false;


 function changeBg(){
    document.body.style.background= palette[Math.floor(Math.random() * palette.length)];
 }

let canvas = document.getElementById('canvas');
let letterN = document.getElementById('letter-n');
let letterO = document.getElementById('letter-o');
let letterG = document.getElementById('letter-g');
let letterU = document.getElementById('letter-u');
let letterC = document.getElementById('letter-c');
let letterH = document.getElementById('letter-h');
let letterI = document.getElementById('letter-i');
let museum = document.getElementById('museum');

function generateLogo(mounted = false){

let letters = [letterO, letterG, letterU, letterC, letterH];

let data = [
    // o-0- possibility for the "o" branch
    [
        -.94,
        -.14,
        // o coordidnate
        // the children are below 
        [
            // 0-0
            [
                -.5,
                0,
                // g coordinates
                // u
                [   // 0-0-0
                    [
                        -.15,
                        .06,
                        // u coordinates
                        // c
                        [
                            // 0-0-0-0
                            [
                                .25,
                                .25,
                                // c coordinates
                                // h coordinates below (2x)
                                [
                                    //0-0-0-0-0
                                    [
                                        .6,
                                        0,
                                    ],
                                    //0-0-0-0-1
                                    [
                                        .3,
                                        -.1
                                    ]
                                ]
                            ]
                        ]
                    ],
                    //0-0-1
                    //u
                    [
                        0,
                        -.05,
                        // c
                        [
                            // 0-0-1-0
                            [
                                .1,
                                .15,
                                // h
                                [
                                    //0-0-1-0-0
                                    [
                                        .4,
                                        .25,
                                    ],
                                    //0-0-1-0-1
                                    [
                                        .4,
                                        0,
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]

            ],
            // 0-1
            //g
            [
                -.45,
                .15,
                [
                    // 0-1-0
                    //u
                    [
                        0,
                        .01,
                        [
                            // 0-1-0-0
                            //c
                            [
                                .35,
                                -.01,
                                [
                                    // 0-1-0-0-0
                                    //h
                                    [
                                        .55,
                                        .25,
                                    ],
                                    // 0-1-0-0-1
                                    [
                                        .65,
                                        .04,
            
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ],
    // 0
    // 1
    [
        -.55,
        .042,
        // g
        [
            // 1-0
            [
                -.3,
                -.1,
                // u
                [   
                    // 1-0-0
                    [
                        0,
                        .1,
                        // c
                        [
                            // 1-0-0-0
                            [
                                .35,
                                .3,
                                // h
                                [
                                    //1-0-0-0-0
                                    [
                                        .6,
                                        0,
                                    ],
                                    //1-0-0-0-1
                                    [
                                        .4,
                                        -.01,
                                    ]
                                ]
                            ]
                        ]
                    ],
                    // 1-0-1
                    [
                        0,
                        .1,
                        // c
                        [
                            // 1-0-1-0
                            [
                                .3,
                                -.02,
                                // h
                                [
                                    //1-0-1-0-0
                                    [
                                        .65,
                                        0,
                                    ],
                                    //1-0-1-0-1
                                    [
                                        .6,
                                        .24,
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ],
            // 1-1 
            //g
            [
                -.2,
                .2,
                [
                    // 1-1-0
                    //u
                    [
                        0,
                        -.12,
                        [
                            // 1-1-0-0
                            //c
                            [
                                .3,
                                .04,
                                [
                                    // 1-1-0-0-0
                                    //h
                                    [
                                        .6,
                                        .3,
                                    ],
                                      // 1-1-0-0-1
                                    [
                                        .6,
                                        -.05,
                                        
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ],
    // 2
    [
        -.1,
        .1,
        //g children
        [
            // 2-0
            [
                -.7,
                -.1,
                // u children 
                [
                    // 2-0-0
                    [
                        -.35,
                        0,
                        // c 
                        [
                            // 2-0-0-0
                            [
                               .2,
                                .3,
                                // h
                                [
                                    // 2-0-0-0-0
                                    [
                                        .6,
                                        .05,
                                    ],
                                       // 2-0-0-0-1
                                    [
                                        .4,
                                        -.1,
                                    ]
                                ]
                            ]
                        ]
                    ],
                    // 2-0-1
                    // u
                    [
                        -.3,
                        -.02,
                        [
                            //2-0-1-0
                            //c
                            [
                                .2,
                                0,
                                [
                                    //2-0-1-0-0
                                    //h
                                    [
                                        .55,
                                        .3,
                                    ],
                                    [
                                        //2-0-1-0-1
                                        .6,
                                        0,
                                    ]
                                ]
                            ]
                     
                        ]
                    ]
                    
                ]
        
            ]
    
        ]
    ],
    
];

function setupCanvas(canvasSize) {
    canvas.style.width = `${canvasSize}px`;
    canvas.style.height = `${canvasSize}px`;

    if(!mounted) {
        initialPositions(canvasSize);
    }

    generateLogo(canvasSize);
    // generateLogo(canvasSize, [2, 0, 1, 0, 1]);
};

function generateLogo(canvasSize, debug) {
    let source = data;

    for (let i = 0; i < letters.length; i++) {
        let choice = (debug == null) ? source[Math.floor(Math.random() * source.length)] : source[debug[i]];
        source = choice[2];
        
        let currentLetter = letters[i];
        let [widthOffsetToCenter, heightOffsetToCenter] = getLetterCenter(currentLetter);

        let leftRel = choice[0];
        let bottomRel = choice[1];

        let leftOffset = (leftRel * canvasSize/2) + (Math.sign(leftRel) * (widthOffsetToCenter/2));
        let bottomOffset = (bottomRel * canvasSize/2) - (Math.sign(bottomRel) * (heightOffsetToCenter/2));

        currentLetter.style.left = `${widthOffsetToCenter + leftOffset}px`;
        currentLetter.style.bottom = `${heightOffsetToCenter + bottomOffset}px`;
    }
}

function initialPositions(canvasSize) {
    // letter n
    let [widthOffsetToCenterN, heightOffsetToCenterN] = getLetterCenter(letterN);
    let leftOffset = (-.87 * canvasSize/2) + (widthOffsetToCenterN/2);
    let bottomOffset = (.2 * canvasSize/2) + (heightOffsetToCenterN/2);
    letterN.style.left = `${widthOffsetToCenterN + leftOffset}px`;
    letterN.style.bottom = `${heightOffsetToCenterN + bottomOffset}px`;

    // letter i
    let [widthOffsetToCenterI, heightOffsetToCenterI] = getLetterCenter(letterI);
    leftOffset = (.9 * canvasSize/2) - (widthOffsetToCenterI/2);
    bottomOffset = (-.15 * canvasSize/2) + (heightOffsetToCenterI/2);
    letterI.style.left = `${widthOffsetToCenterI + leftOffset}px`;
    letterI.style.bottom = `${heightOffsetToCenterI + bottomOffset}px`;

    // museum
    let [widthOffsetToCenterM, heightOffsetToCenterM] = getLetterCenter(museum);
    leftOffset = (.53 * canvasSize/2) + (widthOffsetToCenterM/2);
    bottomOffset = (-.6 * canvasSize/2) - (heightOffsetToCenterM/2);
    museum.style.left = `${widthOffsetToCenterM + leftOffset}px`;
    museum.style.bottom = `${heightOffsetToCenterM + bottomOffset}px`;
}

function getLetterCenter(letter) {
    return [(-letter.offsetWidth/2), (-letter.offsetHeight/2)];
}

setupCanvas(500);
 
}


generateLogo(false);
