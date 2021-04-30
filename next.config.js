const pathPrefix = process.env.NODE_ENV === "production" ? "/smasher" : "";
const withImages = require("next-images");

module.exports = withImages({
    assetPrefix: pathPrefix,
    env: {
        pathPrefix,
    },
    images: {
        path: "/",
        loader: "imgix",
    },
});
