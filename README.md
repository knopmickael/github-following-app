<br>

# github-following-app

Functional scripts for following users with the GitHub API

<br>
<br>

In order to use this scripts, you need to have `Node.JS runtime` and some `JavaScript package manager` installed on your system

<br>

Once you have them, clone this repository to your preferred location by running the following commands:

`cd c:/projects`

`git clone https://github.com/knopmickael/github-following-app.git`

`cd github-following-app`

<br>

To make it work, you'll need to install the dependencies and also set envinroment variables:

`npm install`

<br>

Then, create a `.env` file and write on it your GitHub PERSONAL-ACCESS-TOKEN:

`echo PAT=here-goes-your-token > .env`

<br>

To make sure the file has been created:

`cat .env`

If everything goes well, it will output your token

<br>

## Docs
<br>

### - followFollowers
This script fetches all the followers of a specific GitHub user and starts following them one by one. It can take a GitHub username as an argument, or it will use the authenticated user if none is provided

### - unfollowWhoDoesNotFollowsMe
This script unfollows every GitHub user who is not following you (the authenticated user)

### - purgeFollowing
This script unfollows every GitHub user who the authenticated user is actually following

<br>
<br>

To use any of the scripts, simply run the following command in your terminal:

`node scriptName.mjs`
