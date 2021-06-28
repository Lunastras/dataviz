port module HelloWorld exposing (elmToJS)

import Platform
import VegaLite exposing (..)


myVis : Spec
myVis =
    let

        path : String
        path = "https://raw.githubusercontent.com/Lunastras/dataviz/main/datasets/"

        worldMap = dataFromUrl (path ++ "eurasiaMed.json") [ topojsonFeature "polyMap" ]

        data = dataFromUrl (path ++ "pleiades-locations.csv") 

        trans = transform 
                      << filter (fiSelection "mySelection")
                      << filter (fiExpr "datum.featureType != 'unknown'")
                      
               
            
 

        encLatLong = encoding
                    << position Longitude [ pName "reprLong", pQuant ]
                    << position Latitude [ pName "reprLat", pQuant ]
                    << color [ mName "timePeriodsKeys"]
                
        encFrequency = encoding
                        << position X [ pName "timePeriodsKeys", pOrdinal, pSort [ soByChannel chY, soDescending ] ]
                        << position Y [ pAggregate opCount  ]
                        << color [ mName "timePeriodsKeys" ]
                    

        sel = selection                          
                << select "mySelection"
                    seSingle
                    [ seFields [ "featureType"]
                    , seBind
                        [ iText "featureType"  [] ]
                    ]                  
           
        scatterSpec = asSpec
                       [ circle [ maOpacity 0.4]
                       , sel []
                       , trans []
                       , encLatLong []
                       ]   

        proj = projection [ prType mercator, prCenter -15 64, prScale 500 ]

        worldSpec = asSpec
                    [ worldMap
                    , geoshape [ maFill "#F3EED1", maStrokeWidth 0.1, maStroke "black"  ]
                    ] 

        mapSpec = asSpec       
                    [ width 800
                    , height 650
                    , proj
                    , layer [ worldSpec, scatterSpec ]
                    ]     

        pieSpec = asSpec       
                    [ height 400
                    , encFrequency []
                    , trans []
                    , bar []
                    ]               
                             
 
    in
    toVegaLite 
    [ data []
    ,  hConcat [ mapSpec, pieSpec ]
    ] 


{- The code below is boilerplate for creating a headless Elm module that opens
   an outgoing port to JavaScript and sends the Vega-Lite spec (myVis) to it.
-}


main : Program () Spec msg
main =
    Platform.worker
        { init = always ( myVis, elmToJS myVis )
        , update = \_ model -> ( model, Cmd.none )
        , subscriptions = always Sub.none
        }


port elmToJS : Spec -> Cmd msg