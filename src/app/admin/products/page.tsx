import { requireAdmin } from "@/lib/auth-guard";

export default async function page() {
  await requireAdmin();
  
  return (
    <div>Products page</div>
  )
}