port module HelloWorld exposing (elmToJS)

import Platform
import VegaLite exposing (..)


myVis : Spec
myVis =
    let
{-
        path : String
        path = "../datasets/"
    -}
        weatherColors = categoricalDomainMap
            [ ( "sun", "#e7ba52" )
            , ( "fog", "#c7c7c7" )
            , ( "drizzle", "#aec7ea" )
            , ( "rain", "#1f77b4" )
            , ( "snow", "#9467bd" ) ]

        path : String
        path = "datasets/"
        
        bar1Enc = encoding
                    << position X [ pName "date", pOrdinal, pTimeUnit month ]
                    << position Y [ pName "precipitation", pAggregate opMean ]

        bar2Enc = encoding
                    << position X [ pName "date", pOrdinal, pTimeUnit month ]
                    << position Y [ pName "temp_max", pAggregate opMean ]

        encRep = encoding
                    << position X [ pName "date", pOrdinal, pTimeUnit month ]
                    << position Y [ pRepeat arRow, pAggregate opMean ]

        spec = asSpec
                    [ dataFromColumns (path ++ "seattle-weather.csv") []
                    , encRep [] 
                    , bar [] 
                    ]

        encScatter = encoding 
                        << position X [ pRepeat arColumn, pQuant ]
                        << position Y [ pRepeat arRow, pQuant ]

        specScatter = asSpec [ dataFromColumns (path ++ "seattle-weather.csv") []
                             , encScatter []
                             , point [] 
                             ]


        enc = encoding
                    << position X [ pName "maxDate", pOrdinal ]
                    << position Y [ pAggregate opCount ]

            
    in
    toVegaLite
         [ title "aaa!" []
        , repeat [ rowFields [ "temp_max", "precipitation", "wind" ] 
                 , columnFields [ "wind", "precipitation", "temp_max" ]
                 ]
        , specification specScatter
        ]

        

    {- 
        [ dataFromUrl (path ++ "pleiades-locations.csv") []
        , circle []
        , enc []
        ]
        -}



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