'use server';


import { getUser } from "@/src/query/user.query";
import { WritePostFormValues } from "./WritePostForm";
import { prisma } from "@/lib/prisma";

export const createPost = async (values: WritePostFormValues) => {
    console.log("I'm on the server")
    const user = getUser();

    console.log()
    const post = await prisma.post.create({
        data:{
            content: values.content,
            userId: (await user).id,
        },
    })

    return post.id;
}