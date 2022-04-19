# Single-Page-App
Alex Menis 19737151
README

QUESTION 1: Identify what aspects of the work have been correctly implemented and what have not.

- Due to me only having one JavaScript to switch between themes, I would of liked to implement 
a font increaser and a button to return the font to a previous state but i was unable to get
my whole code wrapped inside a <div class>, only parts of my HTML would go big and small. 
Although extending from that, i feel like having unnecessary themes like background colours etc
would of been redundant and taken away from the assignment. 
My font increaser would of went something like this:
HTML: At the top of my HTML would be options to increase or decrease the font size depending on 
the users preference;
<select onchange="fontChanger(this);" size="10">
  <option>x-small</option>
  <option>small</option>
  <option>medium</option>
  <option>large</option>
  <option>x-large</option>  
</select>

<p id="increaser">Faculty of Business and Law</p>
etc. 

The JavaScript would look something like this;
function fontChanger(selectTag) {
  var listValue = selectTag.options[selectTag.selectedIndex].text;
  document.getElementById("increaser").style.fontSize = listValue;
}
This is an adaption from W3 Schools: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_fontsize2
All my HTML and CSS has worked perfectly and was able to be responsive to the best of my 
ability. I wasnt able to put in the first two tables into a responsive page as they kept
overlapping with the text below it and i wasn't able to figure out what was going wrong. I have
left the code inside the CSS to be able to demonstrate what i was doing, with the added 
display: none; to not show these table for the time being. 
All my CSS and HTML has been validated with no errors, and complies with the BWT Style Guide.

QUESTION 2: Identify anyone with whom you have collaborated or discussed the assignment

- I have not collaborated with anyone throughout the duration of this assignment, although 
i have moderated the use of some websites in which i have referenced below.

QUESTION 3: Include how many hours you have spent completing the assignment

- Although i haven't tracked my time perfectly throughout the asssignment, i would assume that 
i have spent around 20-25 hours to finish this assignment. Most of my time was spent on the
HTML and CSS, perfecting the text to how i wanted it to look. 


I have placed my references here due to it being to cluttered inside my code:
HTML <hr> tags used from: https://www.w3schools.com/tags/tag_hr.asp 
Tables used from https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table6

Styles and themes in css:
This site was used for my links in the HTML document;
https://www.w3schools.com/html/tryit.asp?filename=tryhtml_links_target 
This site was used for research on how to differenciate tables in CSS;
https://stackoverflow.com/questions/7992198/html-how-to-make-2-tables-with-different-css 

I have researched/analysed both of the following sites to come up with a dark theme.
My Dark theme is an adaption of these sites in which i used elements from both and customised it;
https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
https://techinscribed.com/multiple-themes-using-css-variables/