# EgzaminoDarbas

## install

1. Create Boiler Plate for my Work

2. Execute NPM i to install all dependencies

3. Adding utilities


## Creating BE

4. Creating working functions for Users (Model, Controller and Routes)

5. Creating working functions for Registers (Model, Controller and Routes)

7. Creating working functions for Bills (Model, Controller and Routes)

8. Adding middleware

## About functions of BE

9. User functions has registration, that stores person's input into the server, in other words creating a account for them to use. Before the storing proccess, their whole input goes trough middleware function of registration checking, to whether users input are good

10. User functions also has login, that basically does the same, but checks whether the account already exist and let's them login to see needed content

11. Registrations function has six working models. Two of them are update, to change the archive value of a table. One of them are a get function. that connects 3 table(accounts,user and registrations). The reason for that is to assign a registration element to a user. And a post function to create a registration element. This function also goes trought middleware's checking 

12. Bills function has three models. One is a get function that connects it to registration table, to show only that registrations elements bills. One is for delete the other is for post. 

## Some major changes

13. Everything that had a word group was changed to registrations, this is due to the fact that beekeper/digitalocean did not allow to store anything in a table called groups, maybe it is a reserved word, maybe that's why everytime it showed error. 

14. The code to storing registrations went trough a lot of changes, it's due to the fact that every SQL has a diferent engine and everywhere it acts diferently in the way it allows to store data

## Minor changes

14. A lot of commits at the end where just minor mistakes to fix. Also Delete function was added later into the development

## Working

15. The server is working on digitalocean online. The connections are added in the env file that is not present at github due to the security reasons
