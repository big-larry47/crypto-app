import { ref, onMounted } from "vue";
import reviewsData from "@/data/reviews.json";

export function useReviews() {
  const reviews = ref([]);

  onMounted(() => {
    // Load reviews from JSON file
    reviews.value = reviewsData;
  });

  return { reviews };
}
