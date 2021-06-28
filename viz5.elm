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
                    << filter (fiExpr "datum.reprLong > 100")
                    << filter (fiExpr "datum.reprLat > 100")  
 

        enc = encoding
                << position X [ pName "reprLong", pQuant ]
                << position Y [ pName "reprLat", pQuant ]
                      
                             
 
    in
    toVegaLite 
    [ 
      data []
    , width 400
    , height 400
    , enc []
    , point []
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