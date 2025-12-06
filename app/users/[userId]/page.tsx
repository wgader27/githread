import { getAuthSession } from "@/lib/auth"

export default async function UserPage({
    params:{
        userId: string
    }
}) {
    const session = await getAuthSession();
    const user = await getUserProfile(params.userId)
    return (
        <div>UserPage</div>
  )
}
