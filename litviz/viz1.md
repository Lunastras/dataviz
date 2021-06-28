---
elm:
  dependencies:
    gicentre/elm-vegalite: latest
---

```elm {l=hidden}
import VegaLite exposing (..)
```
#Distribution of features around the world
###Map scatterplot / bar chart

The aim of this visualization is to better understand the distribution of selected features throughout the world and their frequency in different time periods, as shown in the bar chart next to the map.

Note: The time periods in the bar chart are ordered by the 'mean' values of the minDates from the respective time periods.

Modifications and filters:
    Unknown feature types are not displayed
    Removed the commas from the features in the dataset

```elm {v interactive}
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
                        << position X [ pName "timePeriodsKeys", pOrdinal, pSort [ soByField "minDate" opMean, soAscending ] ]
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

```

###Observations
This visualization does not show many details unless you are looking for a specific feature type, so let's do that!

If we search for 'fort' we can see that we seem to have a line pattern in the middle of Europe between the Roman and the late-antique Roman periods. It would seem as if the Roman Empire had built even more forts between these time frames. Moreso, the positions of the forts start to make more sense when juxtaposed with the map of the late-antique period, as the line made by the forts marks the border between the Roman Empire and Germania Antiqua.

An interesting finding when searching for 'settlement' is how much the settlements have gradually spread out throughout the Roman, Late-Antique and Helenistic periods. We first see many settlements in the Roman Empire (in Italy), and then gradually spreading out with even greater numbers as the years go. The number of settlements does not just spread in Europe, it also spreads in Tunisia and the Middle-East during the late-antique period.

And, if we search for 'well', we will find a single sad well in Sardinia. While it would appear to be quite inconspicuous and lonely, it's actually one of the most famous tourist attractions in Sardinia, called 'Pozzo sacro di Santa Cristina'. If you ever find yourself going to Sardinia, give it a visit!

##Limitations 
Unfortunately, this visualization is not perfect. There is no way of zooming in on the map, so certain patterns are not obvious. Moreover, if there are many features scattered throughout the world, the visualization will fail to give much insight.
The biggest limitation of this visualization is how the selection require knowledge of the features in the dataset. As such, it is impossible to explore without the original data at hand. 
This visualization can be improved by adding a whole list of all of the different features and a zoom feature.

