import { Octokit } from "octokit";
import { config } from 'dotenv';

config();

// authenticate a user
const octokit = new Octokit({
  auth: process.env.PAT
});

// get the users that the logged user is following
try {
  var iFollow = await octokit.request('GET /user/following', {
    per_page: 50
  });
  iFollow = iFollow.data.map(u => u.login);

} catch (iFollowError) {
  // ...
}

// it unfollows the users that are not following the logged user
following.forEach(async user => {
  try {
    var followsMe = await octokit.request('GET /users/{username}/following/{target_user}', {
      username: user,
      target_user: 'knopmickael'
    });

    if (followsMe.status === 204) {
      console.log('----------------------------------------------------');
      console.log('> ' + user + ' follows you!');
    }

  } catch (followsMeError) {
    console.log('----------------------------------------------------');
    console.log('> ' + user + ' does not follow you!');
    
    try {
      var unfollow = await octokit.request('DELETE /user/following/{username}', {
        username: user
      });

      if (unfollow.status === 204)
        console.log(' Unfollowed...');

    } catch (unfollowError) {
      // ...
    }
  }
});