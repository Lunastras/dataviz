---
elm:
  dependencies:
    gicentre/elm-vegalite: latest
---

```elm {l=hidden}
import VegaLite exposing (..)
```
#Longitude and latitude variances of feature types
###Box plot

The aim of this visualization is to analyse the spread of feature types on the map and observing the outliers in each category.

Modifications and filters:
    Removed the commas from the features in the dataset
    Only displaying data with longitude and latitude smaller than 1000

```elm {v interactive}
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

```

###Observations
Looking at the graphs in general, we can see that most of the structures in the data tend to be around the latitude of 40 and a longitude of 20, which makes sense, given that the data primarily covers Europe and buildings from the Roman Empire.

However, we can identify some interesting outliers in the data. Most of these can be seen in the range 60-100 of the outliers, with these features mainly being from Asia. These features are primarily settlements or geographical features, such as rivers and islands.

##Limitations 
The primary limitation of this visualization is how features are not clearly linked with each other. So while we know we have outliers in the latitude graph, we have no way of telling what connection they have with the elements in the logitude graph.

