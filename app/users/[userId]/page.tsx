import { getAuthSession } from "@/lib/auth"

export default async function UserPage({
    params,
}: {
    params: { userId: string }
}) {
    const session = await getAuthSession();
    return (
        <div>UserPage: {params.userId}</div>
    )
}

