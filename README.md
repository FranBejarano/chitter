Chitter Challenge
=================

* Feel free to use Google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or trainee, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit your work by 9:30am Monday morning

Challenge
-------

As usual please start by forking this repo.

We are going to write a small twitter clone that will allow users to post messages to a public wall.

Good luck and let the chitter begin!

Features
-------

### Standard Acceptance Criteria

```
As a trainee software engineer
So that I can let people know what I am doing  
I want to post a message (peep) to chitter

As a trainee
So that I can see what others are saying  
I want to see all peeps in reverse chronological order

As a trainee
So that I can better appreciate the context of a peep
I want to see the time at which it was made

As a trainee
So that I can post messages on Chitter as me
I want to sign up for Chitter

As a trainee
So that only I can post messages on Chitter as me
I want to log in to Chitter

As a trainee
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter
```

Additional requirements
------

* You don't have to be logged in to see the peeps.
* Trainee software engineers sign up to chitter with their email, password, name and a username (e.g. ewright@digitalfutures.com, password123, Ed Wright, edwright6975).
* The username and email are unique.
* Peeps (posts to chitter) have the name of the trainee and their user handle.
* Your README should indicate the technologies used, and give instructions on how to install and run the tests.

### Extended Acceptance Criteria

```
As a trainee
So that I can stay constantly tapped in to the shouty box of Chitter
I want to receive an email if I am tagged in a Peep

As a trainee
In order to start a conversation as a DFA trainee Software Engineer
I want to reply to a peep from another trainee.
```

# Approach

Being a full-stack project, it is unquestionable that the project has to be divided into Front-End and Back-End. For the development of each part, React and Node.js + Express will be used respectively, plus MongoDB to manage the database.

The database is the next key point of the project, since it is the space in which both parties meet. For this, the model (scheme) of the same must be designed.

The next point of the project will be to study and analyze the 'user cases' provided. But they will be done following the football philosophy of going "game by game", in which each 'user case' is a 'game' and in which the first half will be dedicated to the Front-End and the second to the Back-End. And with an extra-time to merge both.

To finish the project, aesthetic resources will be applied to the Front-End.

Regarding the development of the project, the Test Driven Development model will be followed, whereby the testing of the app is prioritized even before coding it.

### Database Configuration

For the development of the database, the two essential components of Chitter have been taken: users and peeps (posts). The fields proposed in the instructions are 'name', 'username', 'email' and 'password'. This will form part of the database called 'Users'. For the other component, which we will call 'Peeps', the fields 'username', 'date' and 'text body' will be added.

As can be seen, 'username' appears in both databases, so it will be the key that will unify the databases.

Taking into account the above, the databases would be as follows:

Users:
    - name: {type: String, required: true },
    - username: {type: String, required: true, unique: true},
    - email: {type: String, required: true, unique: true},
    - password: {type: String, require: true}

Peeps:
    - username: {type: String, required: true},
    - datePosted: {type: Date, default: Date.now, required: true},
    - textBody: {type: String, required: true}

## User Case 1

```
As a trainee software engineer
So that I can let people know what I am doing  
I want to post a message (peep) to chitter
```

We are going to start with the most necessary element of the app: the form to add a peep to Chitter. For now we are going to introduce a text field to include the peep.

### Tests

1. should render a form (AddPeep.test.js)
2. should render a username label and date label (PeepFrom.test.js)
3. should render a DatePosted component a date (PeepFrom.test.js)
4. should render `Chitter it` button (PeepFrom.test.js)
5. should enable the `Chitter it` button when the peepText is populated (PeepFrom.test.js)
6. should call submitPeep prop function when `Chitter it` button is clicked (PeepFrom.test.js)
7. should call mockPeep when the form is submitted (AddPeep.test.js)

### Acknowledgements

There are only a few hours left for the deadline of this challenge and I write this section in this space more as my own relief than an excuse for the quality of this App. The previous sections show the state in which this project began but not in which it ended .
After a hopeful and motivated start, I began to fall into a fatal cycle. The frontend of the first component (the text box to send `peeps`) worked, but it was not able to send the data to the database. Little by little I was demotivated as I felt that it was an elementary step and that asking someone how to do it at this point in the academy would leave me in a terrible place, and that, obviously, software engineering is not for me. Hours and days without finding the solution until in an impulsive act I decided to delete all the little I had and start from scratch when there were barely 3 or 4 days left for the deadline. In Spain there is a saying that says: "hurries are bad companions".
(This is where I save Ed a bit of work) I stopped following the TDD approach, I left Git out because it would leave traces of my uselessness and it wasn't until I've verified that the App basically works that I've started doing tests and upload more regularly to GitHub. I also include that authentication can be improved a lot.

#### Final reflection

I feel like something I personally need to work on more, much more, is to stop setting the bar too high regardless of where I am. So when the bumps hit, the bar gets further and further away. I cannot feel satisfied with this project because it has many things to improve, but I am left with the peace of mind that I have given the best I could given my circumstances.

### Frontend Tests

1. Navbar should matches snapshot
2. TimelinePeep should render component

### Dependencies

* Redux: It's a predictable wrapper for the state of JavaScript applications.
         Redux is an excellent tool for managing the state of an application. Its main benefits are:
            - Global and immutable state
            - Greater control of application state and data flow
            - Scalable data architecture
          At just 2kb, Redux is a scalable and powerful tool for managing the state of any Javascript application.
* date-fns: date-fns provides the most comprehensive, yet simple and consistent toolset for manipulating         JavaScript dates in a browser & Node.js.
