'use client';

export default function ReviewForm({
  userId,
  productId,
  onReviewSubmitted,
}: {
  userId: string;
  productId: string;
  onReviewSubmitted: () => void;
}) {
  console.log(userId, productId, onReviewSubmitted);
  return (
    <div>ReviewForm</div>
  )
}