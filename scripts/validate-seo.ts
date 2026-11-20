/**
 * SEO Route Validator Script
 * Run with: npx tsx scripts/validate-seo.ts
 */
import { GRADES, CURRICULA, FORMULA_SHEETS, BLOG_POSTS } from "../src/data/academics";

console.log(`Grades configured: ${GRADES.length}`);
console.log(`Curricula configured: ${CURRICULA.length}`);
console.log(`Verified formula sheets: ${FORMULA_SHEETS.length}`);
console.log(`Published blog articles: ${BLOG_POSTS.length}`);
