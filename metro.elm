port module HelloWorld exposing (elmToJS)

import Platform
import VegaLite exposing (..)


myVis : Spec
myVis =
    let
        path : String 
        path = "https://raw.githubusercontent.com/Lunastras/dataviz/main/datasets/worldmap.json"

        worldMap =
            dataFromUrl path [ topojsonFeature "polyMap" ]

        buildingsData =
            dataFromUrl (path ++ "buildings.json") [ topojsonFeature "polyMap" ]

        specBuildings =
            asSpec [ buildingsData, geoshape [ maColor "#eee" ] ]

        parksData =
            dataFromUrl (path ++ "parks.json") [ topojsonFeature "polyMap" ]

        specParks =
            asSpec [ parksData, geoshape [ maColor "rgb(239,244,225)" ] ]

        riversData =
            dataFromUrl (path ++ "rivers.json") [ topojsonFeature "lineMap" ]

        specRivers =
            asSpec
                [ riversData
                , geoshape [ maColor "rgb(226,237,246)", maStrokeWidth 22, maFilled False ]
                ]

        worldSpec =
            asSpec
                [ worldMap
                , geoshape [ maFill "rgb(100,100,100)", maColor "rgb(100,0,0)", maStrokeWidth 3  ]
                ]

        cfg =
            configure
                << configuration (coView [ vicoStroke Nothing ])
    in
    toVegaLite
        [ cfg [], width 2000, height 2000, layer [ worldSpec ] ]



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