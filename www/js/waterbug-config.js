// widths and padding
var canvasWidth = 1000; // this will be the exported width of the image
var elementPadding = 40; // padding around the logo and credit text

// logo configuration
// the name of the logo object should match the value of the corresponding radio button in the HTML.
var logos = {
  lunchbox: {
    whitePath: "../img/logo-pri-white.png", // path to white logo
    blackPath: "../img/logo-pri.png", // path to black logo
    w: 200, // width of logo
    h: 43, // height of logo
    display: "PRI"
  },
  socializr: {
    whitePath: "../img/logo-world.png",
    blackPath: "../img/logo-world-dark.png",
    w: 257,
    h: 48,
    display: "The World"
  },
  studio: {
    whitePath: "../img/logo-s360.png",
    blackPath: "../img/logo-s360.png",
    w: 120,
    h: 120,
    display: "Studio 360"
  },
  gn: {
    whitePath: "../img/logo-gn.png",
    blackPath: "../img/logo-gn.png",
    w: 120,
    h: 120,
    display: "Global Nation"
  }
};

// logo opacity for colors
var whiteLogoAlpha = "0.8";
var blackLogoAlpha = "0.8";

// type
var fontWeight = "normal"; // font weight for credit
var fontSize = "20pt"; // font size for credit
var fontFace = "Helvetica"; // font family for credit
var fontShadow = "rgba(0,0,0,0.7)"; // font shadow for credit
var fontShadowOffsetX = 0; // font shadow offset x
var fontShadowOffsetY = 0; // font shadow offset y
var fontShadowBlur = 10; // font shadow blur

// copyright options
var orgName = "The World";
var freelanceString = "for " + orgName;

var copyrightOptions = {
  internal: {
    showPhotographer: true, // show the photographer input box
    showSource: false, // show the source input box
    photographerRequired: false, // require a photographer
    sourceRequired: false, // require a source
    source: orgName, // How the source should appear on the image, e.g. 'NPR'
    display: orgName // How the option will appear in the dropdown menu
  },
  freelance: {
    showPhotographer: true,
    showSource: false,
    photographerRequired: true,
    sourceRequired: false,
    source: freelanceString,
    display: "Freelance"
  },
  ap: {
    showPhotographer: true,
    showSource: false,
    photographerRequired: false,
    sourceRequired: false,
    source: "AP",
    display: "AP"
  },
  getty: {
    showPhotographer: true,
    showSource: false,
    photographerRequired: false,
    sourceRequired: false,
    source: "Getty Images",
    display: "Getty"
  },
  thirdParty: {
    showPhotographer: true,
    showSource: true,
    photographerRequired: false,
    sourceRequired: true,
    source: "",
    display: "Third Party/Courtesy"
  }
};

// app load defaults
var currentCrop = "twitter"; // default crop size
var currentLogo = "lunchbox"; // default logo slug
var currentLogoColor = "white"; // default logo color
var currentTextColor = "white"; // default text color
var defaultImage = "../img/test-kitten.jpg"; // path to image to load as test image
var defaultLogo = logos[currentLogo]["whitePath"]; // path to default logo
