module.exports = function(config) {
  config.setBrowserSyncConfig({
    codeSync: false,
    ghostMode: false
  });

  return {
    dir: {
      input: "./",
      output: "./_site"
    }
  };
};
