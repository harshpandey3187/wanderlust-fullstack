const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview,isLoggedIn,isreviewAuthor} = require("../middleware.js")

const reviewcontroller = require("../controllers/reviews.js")

//post review route
router.post(
  "/",
  isLoggedIn,
  
  wrapAsync(reviewcontroller.createReview),
);

//Delete review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isreviewAuthor,
  wrapAsync(reviewcontroller.destroyReview),
);

module.exports = router;
