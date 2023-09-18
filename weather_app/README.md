API
We are going to fetch all necessary information about the weather from a REST API specifically designed for this project. Check out the Weather API. You find all the information you need in the docs.

Template
There is no template or starter code, so you can start completely fresh! Please use vite to create a new project.

The sequence of the tasks described below is a good example for how to start writing an app.

💡 Because we need data to work with, we usually want to start with the C in CRUD. In this instance, adding a form that handles creating the data for our activities.

Tasks
Add Activity Form
Being able to create new data is a good starting point for an app, so the first step is to create a form component to add a new activity.

Clean the app from everything which you don't need for a fresh start.

Write a Form component which

contains a heading
has two input fields (name of activity, checkbox whether it is a good- or bad-weather activity) with appropriate labels and
a submit button;
it receives a prop called onAddActivity.
Handle the submit event:

Extract the submitted data as an object with the keys name and isForGoodWeather and their respective values.

Hint: To get the boolean value of a checkbox, use .checked.
Call onAddActivity and pass it the data object as argument.

After submitting, reset the form and focus the first input field.

Switch to the App.js and

create a state for activities,
write a function handleAddActivity which accepts a new activity object as parameter and adds this object to the activities state
please add a unique id to every new activity object; you can use uid to do so.
Pass handleAddActivity to the Form component; make sure to use the correct prop name.

Use this wireframe as a reference:

form component wireframe

🎉 Congratulations, you can now add new activities, including whether they can be done in good or bad weather!

List Component
By now, you can add new activities, but they are not yet displayed. Let's fix this.

Write a List component which renders a list with list items for each activity in the activities state.
Make the state persistent in local storage.
Use this wireframe as a reference:

list and form component wireframe

Filtering the List
Currently, the list displays all activities, regardless of whether they are good or bad weather activities. The main purpose of the app, however, is to show activities depending on the current (good / bad) weather fetched from an API, so the list needs to be filtered.

In the App.js, add a variable const isGoodWeather = true.
Note: For reasons of simplicity (i.e. it will be replaced in the next task anyway), we will use a hard coded variable to imitate good or bad weather for now.
Filter the activities for those whose key isForGoodWeather is equal to the global isGoodWeather variable.
Instead of all activities, pass the filtered activities to the List component.
In the List component, add a headline depending on the global isGoodWeather variable.
Use this wireframe as reference:

filtered list wireframe

Fetch API
Refactor the code so that the "random" weather does not depend on a variable you set yourself, but on the answer from our weather API.

Replace the global isGoodWeather variable from the previous task with a new state for weather.
Fetch the weather API on initial render only.
The weather state should equal the response you receive from the API.
Advanced note: The API has some more specific endpoints to test your application.
In the App.js, add a heading to display the condition emoji and the temperature.
Use this wireframe as reference:

fetch api wireframe

Delete an Item
In the List component, add a delete button for each list item.
The List component needs to receive a new prop called onDeleteActivity;
pass it to the delete button as onClick prop;
pass the activity's id to onDeleteActivity as argument.
In the App.js, write a function handleDeleteActivity, which accepts an id as parameter. The function should filter the activities state and keep all objects except the one with the given id.
Pass handleDeleteActivity to the List component as onDeleteActivity prop.
Use this wireframe as reference:

delete button wireframe

Bonus: Fetch on Intervall
Fetching weather only on initial render is not really useful to stay up-to-date. Refactor your code so that the fetch is done every 5 seconds. Make sure to clear the timer when the component unmounts.
