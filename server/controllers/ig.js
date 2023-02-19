const { IgApiClient } = require('instagram-private-api');

const ig = new IgApiClient();

async function login() {
  ig.state.generateDevice(process.env.IG_USERNAME);
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  console.log('Logged in successfully!');
}

async function igSavedPosts(req, res) {
  try {
    await login();

    const savedFeed = ig.feed.saved();
    const savedItems = await savedFeed.items();

    res.status(200).json(savedItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { igSavedPosts };