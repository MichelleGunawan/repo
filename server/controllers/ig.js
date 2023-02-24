const { IgApiClient } = require('instagram-private-api');

const ig = new IgApiClient();

async function login(ig_username, ig_password) {
  ig.state.generateDevice(ig_username);
  await ig.account.login(ig_username, ig_password);
  console.log('Logged in successfully!');
}

async function igSavedPosts(req, res) {
  try {
    console.log(req.body);
    const { ig_username, ig_password } = req.body;
    await login(ig_username, ig_password);

    const savedFeed = ig.feed.saved();
    const savedItems = await savedFeed.items();
    
    const codes = (savedItems).map(obj => obj.code);
    console.log(codes);

    res.status(200).json(codes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { igSavedPosts };