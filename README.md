Debounce Search Component
Description
This is a simple React component that demonstrates the concept of debouncing user input in a search bar. Instead of filtering the list on every keystroke, it waits for the user to stop typing for a short period (500ms) before performing the search. This improves performance and avoids unnecessary computations.

Features
React functional component using useState and useEffect.

Debounced filtering logic using setTimeout and clearTimeout.

Case-insensitive search.

Clean and minimal UI for demonstration.

How It Works
User types into the input field.

The searchInput state is updated.

A setTimeout of 500ms is set to wait before applying the filter.

If the user types again within 500ms, the previous timeout is cleared (clearTimeout), restarting the debounce timer.

Once the timer completes and no new input is detected, the component filters userList based on the input.

Matching results are displayed as a list.

Use Cases
Typeahead search bars

Live filtering of lists or tables

Optimizing API calls based on user input

Future Enhancements
Add API call instead of static list

Highlight matching text in results

Add loading indicator during debounce delay

Use a custom debounce hook for reusabilit
