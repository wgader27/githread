'use server';


import { getUser } from "@/src/query/user.query";
import { prisma } from "@/lib/prisma";
import { WritePostFormValues } from "@/app/write/WritePostForm";
import { revalidatePath } from "next/cache";

export const createReply = async (postId : string , values: WritePostFormValues) => {
    const user = getUser();

    const post = await prisma.post.create({
        data:{
            content: values.content,
            userId: (await user).id,
            parentId: postId,
        },
    })

    revalidatePath(`/posts/${postId}`)

    return postId;
}