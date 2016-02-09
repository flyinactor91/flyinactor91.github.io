# Visualizing Orbits
##### Michael duPont
##### [http://mdupont.com/Programming/Orbit-Vis](http://mdupont.com/Programming/Orbit-Vis)

## Summary

Orbital mechanics is a complicated area of physics, but many of its underlying concepts are fairly simple. This visualization attempts to demonstrate how the initial launch conditions determine a satelite's basic orbit.

## Story

I wanted to help other people understand this small sliver of orbital mechanics. I came up with three questions that I thought could be answered by playing with the graphic I had in mind, so, in this case, the purpose came before the graphic itself (no shoehorning like the last two failed ones). The questions are bold above the graphic with an invitation to figure them out using the graphic.

The graphic itself animates on a loop so the reader instantly sees how it works and lets them see the effect of their settings multiple times. The initial parameters in the code are such that the extent of the orbit is very clear in both projections in the graphic. I experimented with other settings, but these two gave the most visual context at first glance.

The reader has access to two sliders to change the initial conditions. They can see how adjusting each of these independantly affects the resulting orbit with respect to the above questions. Additionally, the settings also are fed into an equation that gives complementary feedback below the sliders in the form of velocity saved in meters per second. (A note was added later to provide the reader context as to the importance of this number.)

Once the reader thinks they have some answers (or their eyes wandered down the page), answers are provided for each of the proposed questions. In addition to merely answering the questions, I also made sure to include extra information to provide further context, explaination, or cool facts.

## Design

The original idea was just to show the flat equirectangular chart with the curved orbit path overlayed on it. However, in researching a way to do great circle projections, I found the D3 page showing animations that moved between different projections. I instantly grabbed the basic one I wanted, tweaked the display settings, and figured out how to add the paths that I wanted. The hardest part was finding and implementing the LatLon midpoint function since the orbit is mapped as a series of four great circle paths determined by five coordinate pairs. In order to give the visualization additional context, I added the equator line and launch plane line so the reader can better see how the visualization transitions between its two projections.

Before I found my base visualization, I began designing how the reader could update the initial conditions. I decided on two sliders since the options are both fixed numeric ranges. I also made their widths the same number of pixels as the respective ranges. This provides both a visual range reference for the reader as well as allowing access to the full range of values (smaller would skip values and larger could confuse the reader). Each slider has two hadler functions: 'input' changes the value next to the slider for visual feedback, 'change' updates the graphic with the new value when the reader lets go of the slider.

## Feedback

#### V1

"Could you give some initial explaination what that equation is doing? I see that savings are a good thing, but you don't explain it until you answer the questions."
- Added a short description about why a higher number is a good thing in the context of the visualization

"Why can't I see the round orbit without changing the sliders?"
- Animation now loops

## Resources

In addition to MDN, w3s, and D3 documentation, the following sites were used:

* http://www.impressivewebs.com/onchange-vs-oninput-for-range-sliders/
* http://bl.ocks.org/mbostock/5731632
* http://www.movable-type.co.uk/scripts/latlong-vectors.html