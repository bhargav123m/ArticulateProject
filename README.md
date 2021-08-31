## Welcome to the Articulate Developer Challenge!

This code is a mock implementation of our [Review 360](https://articulate.com/360/review#play-video) feature. Your task is to implement a basic comment sidebar that appears to the right of a review item on the item page. 

Along with this code, you should have received a link to a real-life review item that demonstrates the functionality. Feel free to add your own comments and play around with it. We are not looking for a full implementation, only the beginning of a basic commenting system.

The feature requirements are:
  - Users can post new comments to a review item.
  - The post prompt should have placeholder text and a "submit" button.
  - Multiple comments can be posted to a review item.
  - Comments for a given review item are displayed in a sidebar on the right.
  - Once posted, a comment is displayed with the user's name, the comment text, and the time of day the comment was posted at.
  - Comments are stored per review item so when a user views an individual item they only see the comments that were made on that item.
  - Comments are persisted on the back-end (in memory, see out of scope section) so that if the page is reloaded, all the comments that have been made will still appear.

Out of scope:
  - Anything about comment creation not explicitly listed above (for example you don't need @mentions, file attachments or emoji like in our production implementation).
  - Direct replies to comments.
  - Persisting to a true database, comments need only to be stored in server memory. It's okay if restarting the server resets all the comments.
  - Exactly matching the style of our production implementation. Your solution should have a sensible visual layout and be legible, but it doesn't need to be perfect.

Goals:
  - Implement the required features
  - Maintain clean code style and use good architecture. Implement the feature with the idea that you will need to be able to expand on it in the future.

Feel free to make modifications to the existing code as you see fit to support the solution.

### Time

- Spend two hours working on the feature. Once the two hours is up, zip up everything in this folder and email it back to us.

### Getting Started

- Run `yarn install` to install the dependencies
- Run `yarn start` to launch the app

As-is the site has two users configured, each with their own review items. Clicking the user toggle in the upper right changes which user you are currently logged in as for the purposes of the exercise.

### Implementation notes:

- The React-based frontend lives in `/src` and is reachable at http://localhost:3000
- The beginning of a REST API lives in `/server` and is reachable at http://localhost:5000
  - the REST API currently loads static json files on start up and uses those as a makeshift in-memory database
