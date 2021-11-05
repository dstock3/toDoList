OnTask Version 1.0 10/23/2021

OnTask is a project management application I created to familiarize myself with object-oriented programming. Notable features include a "productivity tips" section, as well as a theme chooser.  Users also have the ability to choose between a card view and a compact display.

The application uses localStorage to store metadata associated with projects, as well as their respective tasks. Data related to the user's chosen theme is stored as well. Admittedly, LocalStorage is not ideal for anything more beyond the scope of a project like this, since it only stores data on the machine from which a given user is accessing the data. So, in this case, one major limitation is that a user cannot switch from their computer to their mobile device using this application.

OnTask also makes use of date-fns, a JavaScript date utility library, in order to display reminders based on a given task’s deadline. 
