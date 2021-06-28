---
elm:
  dependencies:
    gicentre/elm-vegalite: latest
---

```elm {l=hidden}
import VegaLite exposing (..)
```
#Distribution of features around the world
###Single view bar chart histogram

This visualization illustrates the predominent feature types found in a given time period.

Modifications and filters:
    Unknown and empty strings feature types are not displayed
    Removed the commas from the features in the dataset

```elm {v interactive}
myVis : Spec
myVis =
    let

        path : String
        path = "https://raw.githubusercontent.com/Lunastras/dataviz/main/datasets/"

        data = dataFromUrl (path ++ "pleiades-locations.csv") 

        trans = transform 
                  << filter (fiSelection "mySelection")
                  << filter (fiExpr "datum.featureType != 'unknown'")
                  << filter (fiExpr "datum.featureType != ''")
                  << filter (fiExpr "datum.timePeriodsKeys != ''")
 
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
                    , seClear "click[event.shiftKey]"
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

```

###Observations
Off the start, without any filters, we can see that the most prominent features in the dataset are settlements, with over 2200 entries in the data, followed by almost 600 rivers and forts and other features.
The more we go to the right, we can find very niche structures with around a single entry in the data, such as 'villabath' or 'sanctuarysetlement'. These are combinations of prominent features found in the data that happened to be built together.

If we search for the 'roman' time period, we can see that they have quite the diverse set of structures, with the most prominent feature being the 'fort', which only makes sense given their supremacy during the respective period, a strong empire needed the best defense possible to protect itself. On top of this, they have plenty of amphitheatres and threatres. It is known that the world has culturally developed a lot during these times, but it is definitely interesting to observe just how popular these forms of entertainment were.

##Limitations 
Much like the first visualization, this one is limited by the fact that it requires knowledge from the user about the different time periods. This can be fixed by adding a list of all of the time periods on the selection. On top of this, this visualization shows no geographical information about the features. 
