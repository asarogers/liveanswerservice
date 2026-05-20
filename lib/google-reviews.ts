import reviewsData from "@/content/_generated/google-reviews.json";

export type GoogleReview = {
  author: string;
  authorUri: string | null;
  authorPhoto: string | null;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime: string | null;
};

export type GoogleReviewsManifest = {
  reviews: GoogleReview[];
  rating: number | null;
  userRatingCount: number;
  googleMapsUri: string | null;
  fetchedAt: string | null;
  skipped?: string;
};

export function getGoogleReviews(): GoogleReviewsManifest {
  return reviewsData as GoogleReviewsManifest;
}
