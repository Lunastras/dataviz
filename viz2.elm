port module HelloWorld exposing (elmToJS)

import Platform
import VegaLite exposing (..)


myVis : Spec
myVis =
    let

        path : String
        path = "https://raw.githubusercontent.com/Lunastras/dataviz/main/datasets/"

        data = dataFromUrl (path ++ "pleiades-locations.csv") 

        trans = transform 
                  << filter (fiSelection "mySelection")
                  << filter (fiExpr "datum.featureType != 'unknown'")
 
        encFrequency = encoding
                        << position X [ pName "featureType", pOrdinal, pSort [ soByChannel chY, soDescending ] ]
                        << position Y [ pAggregate opCount  ]
                        << color [ mName "featureType", mLegend [ ] ]
       
        sel = selection                          
                << select "mySelection"
                    seSingle
                    [ seFields [ "timePeriodsKeys"]
                    , seBind
                        [ iText "timePeriodsKeys"  []  

                        ]
                    ]   
                                       
    in
    toVegaLite 
        [
          data []
        , height 600
        , bar []
        , sel []
        , trans []
        , encFrequency []
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