# Propylon Oireachtas UI Assessment

The Propylon Oireachtas UI Assessment is a simple React application that pulls and displays data from the following API:

[Houses of the Oireachtas Open Data APIs](https://api.oireachtas.ie/)

This Open API contains information about, among other things, members of the Oireachtas Ireland's national parliament. 

The application currently pulls and displays some select member informataion based on a hardcoded API query.

In order to complete the assessment the developer will need to implement three requirements by updating the application.  For each of these requirements the UI/UX and component choices for surfacing new information is entirely up to the developer.

## Mandatory Requirements
1. When a user clicks a members name, they are presented with information about the number of debates that have been recorded for that member.
2. When a user clicks a member name they are presented with a clickable hyperlink to the relevant PDF formated debate report, if available.  A report example can be found [here](https://data.oireachtas.ie/ie/oireachtas/debateRecord/dail/2019-12-17/debate/mul@/main.pdf).
3. When a user clicks a member's name, they are presented with the `outcome` of the most recent (sorted by `contextDate`) `division` entry.

## Optional/Stretch Requirements
1. Use select componets of the [MUI](https://mui.com/) component framework to organize and present the above requirements.
2. Demonstrate the usage of a simple [reducer](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#writing-reducers) this may require updating the application to facilitate interaction from the user to select or highlight some information displayed.


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
