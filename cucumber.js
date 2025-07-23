module.exports = {
    default: {
      requireModule: ['ts-node/register'],
      require: ["src/steps/*.ts", "src/utils/*.ts"],
      requireModule: ["ts-node/register"],
      paths: ["src/features/**/*.feature"],
      parallel: 1,
    }
  };