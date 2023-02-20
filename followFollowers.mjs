import { Octokit } from "octokit";
import { config } from 'dotenv';

config();

// authenticate a user
const octokit = new Octokit({
  auth: process.env.PAT
});

// get the logged user followers
let followers = [];
let page = 1;
let per_page = 100;
let keep = true;
let user = process.argv[2];

console.log();

if (user === undefined) {
  try {
    while (keep) {
      let res = await octokit.request('GET /user/followers', {
        per_page: per_page,
        page: page
      });
      keep = res.data.length === per_page ? true : false;
      console.log(`> Fetched ${res.data.length} from @knopmickael`);
      followers.push(...res.data.map(u => u.login));
      page++;
    }
  } catch (followersError) {
    // ...
  }

} else {
  try {
    while (keep) {
      let res = await octokit.request('GET /users/{username}/followers', {
        username: user,
        per_page: per_page,
        page: page
      });
      keep = res.data.length === per_page ? true : false;
      console.log(`> Fetched ${ page > 1 ? '+' + res.data.length : res.data.length } from @${user}`);
      followers.push(...res.data.map(u => u.login));
      page++;
    }
  } catch (followersError) {
    // ...
  }
}

console.log();
console.log('> TOTAL: ' + followers.length + ' users fetched!');
console.log();

// follow them
let counter = 1;
for (let follower of followers) {
  try {
    let follow = await octokit.request('PUT /user/following/{username}', {
      username: follower
    });

    if (follow.status === 204) {
      console.log(`> Followed ${follower}`);
      counter++;
    }

    if (counter % 30 === 0) {
      console.log();
      console.log('Stopping the counter at: ' + counter);
      console.log('It will take ' + seconds + 's to continue fetching');
      console.log();
      await new Promise(resolve => setTimeout(resolve, 60000));
    }

  } catch (followError) {
    console.log(followError);
  }
}