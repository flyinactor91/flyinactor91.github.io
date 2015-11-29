# Orlando Police Dispatches Data Visualization
##### Michael duPont
##### [http://mdupont.com/Programming/OPD-Data-Vis](http://mdupont.com/Programming/OPD-Data-Vis)

## Summary

This visualization is a continuation of my OPD-EDA report. It allows readers to explore the entire dataset within a series of summary charts for an overview of the data and an interactive Google Map to explore its individual values.

## Story

The first part of the visualization shows the number of dispatches by category by hour. It first shows the categories stacked, then individually, then stacked again. The reader is shown that there is anomalous data at 5PM and 6PM and that it affects most of the categories. I offer a possible explanation for this on the page in a block-quote from my EDA.

The visualiztions then continues to the interactive portion where the reader can graphically view the number of dispatches by year, month, and day. This allows the reader to get an open-ended, high-level overview of the data. Clicking on a particular day sends the reader to an interactive map displaying the dispatches for that day adding yet another dimension to the reader's exploration.

## Design

I knew I wanted to make a map visualization; I wanted to expand the capabilities of the heatmaps I made durring the EDA. I also wanted to make it work on mobile/small screens. One piece of feedback I recieved recommended adding popovers with event details. However, I decided against it because popovers require more space on mobile without including another library like Bootstrap. This also lead the choice to toggle elements in the header to increase the map size while the user is interacting with it.

I originally tested with one month of data. I knew I couldn't ask readers to download all 190MB. Instead, I divided the data by each month, and only the month asked to be shown would be downloaded at that time. Now the reader only has to download about 2-4MB at a time.

I decided to use solid-fill, colored points on the map that were just large enough so they could easily be touched on a phone screen but small enough that they didn't obscure the map behind it. The map provides the perceptual strength of an xy coordinate system within the 1:1 context of places in the real world. Using color as the categorization encoding allows the map to feel more organized than using something else like shape. I made the deliberate choice to use red for violent crimes, which meant not using green in the color scheme.

After additional feedback, I decided to add a new visualization that acts as a funnel so that readers can make an informed choice as to which day they want to display on the map. I decided to use the categorization bar charts I made during the EDA. However, these are interactive. I made a new datafile that contained bin counts for every date in the dataset. This allowed me to start with a stacked bar chart of bin counts by year. Clicking on a bar redraws the chart of bin counts by months in that year, which then goes by day in that month. Once a reader clicks a particular day, the map gets loaded displaying the dispatches for the selected day.

I decided to use a stacked bar chart (rather than side-by-side) because it would allow the reader to compare the time-period's total dispatches. The tooltip still allows the reader to see the bin count for a specific category. I also made sure to use the same color scheme as the map.

## Feedback

#### V1

"Maybe something more manageable, mention if a day is a net or by type increase or decrease in crimes based on the previous day"
- While not necessarily implemented, the charts were added later to help make the overall visualization more managable

"I have population density information by like tenth of a kilometer. I think that's an important dividing factor for showing call density. This block gets double the number of calls as others. But this block has three times the number of people. Etc."
- Future idea

#### V2

“Looks real nice so far. Some things to consider: when rolling over have a pop up with the case info or a URL link to the online file for more interactivity, possibly using a more differentiated color scheme, and creating a summary box with the number of the different types of crime in it (could give a better 'at a glance' summary). The colors is a very minor point, but something to consider. Greater the contrast, the easier it is to see :)”
- Added the detail section in the header
- Fixed color scheme

"It looks nice. The colors are too neonish on the map."
- Fixed color scheme

#### V3

"The visualization lets me put in a date outside of the range of the data set"
- Added verification to the date range so that the page won't crash trying to load a non-existant data file

"The reader would have to click through 6 years of daily data and try to figure out a trend. An explanatory chart would pre-analyze the 6 years of data, find something interesting contained in the data set, and then show that interesting finding to the reader with clear encodings"
- Added the overview charts as a better means of date navigation and trend spotting

"t would be nice if the visualization talked briefly about what "on call" and "other" represent. At least I'm not familiar with what "on call" means, and if there is some information about what goes into "other", I think that would be helpful."
- A legend with full descriptions is shown above the initial charts

#### V4

"The map view doesn't appear to have a back button like the other views"
- Map now displays a (browser) back button when coming from the graphs

"Any way to change the month numbers 01-12 to "Jan" - "Dec"?    I find words, (or abbreviations) are easier to process than numbers."
- Now uses %B to display Month name instead of number on axis labels

"Ideally if you can offset the vertical bars so that the first position doesn't overlap the y-axis, that would be easier on the eyes."
- Axis min and max dates dynamically change to provide some bar padding

"Make it easier to read by reducing the gap between years - having them so far apart makes it difficult to compare."
- Bar width now adjusts to window width

## Future Plans

- I'm working with my local Code for America brigade so that the data on which this visualization is made gets automatically updated and so can be used in near real time.
- Adding a map toggle to add an overlay layer showing population density

## Resources

In addition to MDN, w3s, D3, and Dimple documentation, the following sites were used:

* http://bl.ocks.org/mbostock/899711
* http://stackoverflow.com/questions/1544739/google-maps-api-v3-how-to-remove-all-markers
* http://jsfiddle.net/farrukhsubhani/S6FLv/7/
* http://jsfiddle.net/mkzTk/2/