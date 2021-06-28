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
                  << filter (fiExpr "datum.minDate > -1000")
                  << filter (fiExpr "datum.maxDate < 2000")
                  << filter (fiExpr "datum.featureType != 'unknown'")

 
        enc = encoding
                    << position X [ pRepeat arColumn, pQuant ]
                    << position Y [ pRepeat arRow, pQuant ]
   

        spec = asSpec [ data [], enc [], point [ maOpacity 0.1], trans[] ]
                                
    in
    toVegaLite 
        [ repeat 
            [ rowFields [ "reprLat", "reprLong", "maxDate", "minDate" ]
            , columnFields [ "minDate", "maxDate", "reprLong", "reprLat" ]
            ]
        , specification spec
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