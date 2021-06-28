---
elm:
  dependencies:
    gicentre/elm-vegalite: latest
---

```elm {l=hidden}
import VegaLite exposing (..)
```
#Distribution of features around the world
###Scatter plot matrix

The aim of this visualization is to analyse the movement of structures throughout the years.

Modifications and filters:
    Only displaying items from minDate 1000 BC onwards
    Latitude and longitude values bigger than 999.99 are filtered
    'Unknown' features are not displayed (efficiency purposes)

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
                  << filter (fiExpr "datum.minDate > -1000")
                  << filter (fiExpr "datum.featureType != 'unknown'")

 
        enc = encoding
                    << position X [ pRepeat arColumn, pQuant ]
                    << position Y [ pRepeat arRow, pQuant ]
   

        spec = asSpec [ data [], enc [], point [ maOpacity 0.008], trans[] ]
                                
    in
    toVegaLite 
        [ repeat 
            [ rowFields [ "reprLat", "reprLong", "minDate" ]
            , columnFields [ "minDate", "reprLong", "reprLat" ]
            ]
        , specification spec
        ] 

```

###Observations
If we look at the reprLong/minDate  and reprLat/minDate graphs, we can observe how the majority of structures were built around the (41, 30) coordinates, while slowly the latitude starts to greatly spread in the range between 55-30 around the year 0 AD. In other words, if we were to visualize this on a mercator projection map, we would observe how structures started to spread vertically, from Northern Europe all the way to North Africa. 

On the other hand the longitude seems to have decreased throughout the years, with the mean of the older structures from around 1000 BC being at a longitude of around 20, and with a mean latitude of 40 in that time, we can deduct these structures are mainly from the Roman Empire. However, the median longitude decreases to around 10, and the range is evenly spread between 40 and -10. This is most likely because of the spread of civilization throughout europe and the middle east.

##Limitations 
The biggest limitation of this visualization is the fact that it requires a map to properly visualize the movement and spread of society in a geographical context.

