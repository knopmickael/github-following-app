import { Octokit } from "octokit";
import { config } from 'dotenv';

config();

// authenticate a user
const octokit = new Octokit({
  auth: process.env.PAT
});

// get the users that the logged user is following
try {
  var following = await octokit.request('GET /user/following', {
    per_page: 50
  });
  following = following.data.map(u => u.login);

} catch (followingError) {
  // ...
}

// unfollow them
following.forEach(async user => {
  try {
    var unfollow = await octokit.request('DELETE /user/following/{username}', {
      username: user
    });

    if (unfollow.status === 204)
      console.log('> Unfollowed ' + user);

  } catch (unfollowError) {
    // ...
  }
});