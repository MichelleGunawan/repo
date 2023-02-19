const { IgApiClient } = require('instagram-private-api');

const ig = new IgApiClient();

async function login(ig_username, ig_password) {
  ig.state.generateDevice(ig_username);
  await ig.account.login(ig_username, ig_password);
  console.log('Logged in successfully!');
}

async function igSavedPosts(req, res) {
  try {
    await login(req.body.ig_username, req.body.ig_password);

    const savedFeed = ig.feed.saved();
    const savedItems = await savedFeed.items();

    res.status(200).json(savedItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { igSavedPosts };