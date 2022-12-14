# Development

### Link to Deployed Website
Link to Deployed Website is here:

### Goal and Value of the Application

Hello! This portal was developed to help professors process applications for their research lab. On the page, you can see various student applicants, their names, ages, etc., and the professor can pick whether they want to accept their application to the lab by hitting the "accept" button. The user can also sort the applicants by age and GPA and filter by state of origin or the department that the student belongs to.

### Usability Principles Considered
To generate this website, I considered various usability principles when generating my hierarchy and layout. I made sure that the mot relevant information (such as the student's name and department) was sisplayed in larger, more bold font. I also used bold colors and borders to make sure that the item cards were differentiable from each other. I kept the controls for filtering and the aggregator on the left side to ensure they were easily finable. I also used different dimensions for the sidebar to make it more visible and differentiable from other items.

### Organization of Components
Components are organized in the following way:
- The student profile component, which stores all of the data for each of items/student profiles and displays each of them in their boxes.
- The sidebar component, which holds all of the radios and buttons used to control the filtering and sorting, in addition to the aggregator.
- A plethora of useState components, which each store the current states of various sorting, filtering, and aggregating features. These are cartItems for the "cart" of accepted students, type for type of state, major for department picked, and sort for what order the options are displayed. 

### How Data is Passed Down Through Components
Data is passed through components in the following way. When the page is loaded, all tiles are empty and so is the list of accepted students. When the "add to list of accepted students" is pushed, that itemis added to the "accepted students" list through the function addToCart, passing in the item as a prop. A similar process is used for filtering or sorting an item, as when the corresponding radio or button is pushed, a functino is called that changes the corresponding state to the newly chosen option. Data on the items themselves is drawn from the json file, which reacds the data and stores it as a hashmap. From the hashmap within the studentprofile function, certain characteristics of each profile are read and displayed. These profiles are displayed through a mapping function (working on all of the items that have been filtered and sorted through the previously described functions) found within the app.js file.
### How the User Triggers State Changes

The user triggers state changes by clicking the grey buttons within the app. When they hit the accept button, the student is added to the accepted applicants list (cartItems) and also their gpa is added into the average.When items are filtered via a radio, a useState variable corresponding to the filter type (e.g. department) is changed from the "All" state or the state it was already set to. Then, the react module filters all of the studentProfile components to see if the filtered type is the same as the output desired by the user (e.g. if the item card has math if the user clicked the math radio). The website then displays the cards that were filtered. A similar process is used for sort, as when a sorting button is pressed, a statevariable changes to the type of sorting desired and a ranking of the cards is generated by a function that calculates the ranking of each card. The cards, now ordered, are then displayed.
