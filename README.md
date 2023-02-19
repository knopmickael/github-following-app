<br>

# github-following-app

Functional scripts for following users with the GitHub API

<br>
<br>

In order to use this scripts, you need to have `Node.JS runtime` and some `JavaScript package manager` installed on your environment

<br>

Once you got it, clone this repo on your preferred location, e.g.:

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

If everything went right, it will throw out your variable

<br>

## Docs
<br>

### - followUsers
This script will catch all the followers of a specific GitHub user and will start following them, one by one<br>It can receives a user nickname as argument, otherwise it will look for the authenticated user

### - unfollowWhoDoesNotFollowsMe
This script will unfollow every GitHub user that is not following you (the authenticated user)

### - purgeFollowing
This script will unfollow every GitHub user that the authenticated user is current following

<br>
<br>

To use any of the scripts, simply use the Node CLI along with the name of the script:

`node scriptName.mjs`
