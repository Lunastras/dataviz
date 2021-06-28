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
                  << filter (fiExpr "datum.reprLong < 1000")
                  << filter (fiExpr "datum.reprLat < 1000")
 
        encLong = encoding
                        << position X [ pName "featureType", pOrdinal ]
                        << position Y [ pName "reprLong", pQuant  ]

        encLat = encoding
                        << position X [ pName "featureType", pOrdinal ]
                        << position Y [ pName "reprLat", pQuant  ]    
       
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
          vConcat 
          [ asSpec
              [
                data []
              , height 400
              , boxplot [ maTicks [ maColor "black", maSize 8 ], maBox [ maFill "grey" ], maOutliers [ maColor "firebrick" ] ]
              , trans []
              , sel []
              , encLong []
              ] 
            ,asSpec
              [
                data []
              , height 400
              , boxplot [ maTicks [ maColor "black", maSize 8 ], maBox [ maFill "grey" ], maOutliers [ maColor "firebrick" ] ]
              , trans []
              , sel []
              , encLat []
              ] 
          ]
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