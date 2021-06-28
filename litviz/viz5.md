---
elm:
  dependencies:
    gicentre/elm-vegalite: latest
---

```elm {l=hidden}
import VegaLite exposing (..)
```
#Analysing the outliers in the data
###Scatterplot

This is a simple unfiltered scatterplot of the data that uses the latitude as the Y axis, and the longitude as the X axis. However, it does not really look like it, given that we can only see two points on the map. This is because of two peculiar outliers in the data, more specifically two tower-walls at the coordinates of (3846187.763, 658013.3315) and (3846486.449, 658137.5669).Naturally, these values are invalid, so we can assume that the decimal points are in the wrong places, and instead, the values are (38.46187763, 65.80133315) and (3846486.449, 658137.5669), which yields two location in Uzbekistan.

Modifications:
    None

```elm {v interactive}
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


```

#Limitations
The scatterplot shows us little to no information about the respective features, such as their periods or feature types.