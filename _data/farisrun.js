const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  // https://developer.github.com/v3/repos/#get
  let json = await EleventyFetch("https://faris.run/json/", {
    duration: "1d", // 1 day
    type: "json" // also supports "text" or "buffer"
  });

  console.log(json, "faris.run");
  return {
    stargazers: json
  };
};
