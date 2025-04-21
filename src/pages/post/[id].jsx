import Layout from "@/components/Layout";
import PostContainer from "@/components/PostContainer";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import Head from "next/head";
import { DM_MONO_FAMILY } from "@/utils/constants";
import { motion } from "motion/react";
// export async function generateMetadata({params}) {
//     const thisPost = await getPostData(params.id); /* NOTE <- Doesn't work since this isn't getStaticProps or getStaticPaths

//     if(!thisPost) {
//         return {
//             title: "Title not found"
//         };
//     }

//     return {
//         title: thisPost.title,
//         description: thisPost.description,
//     }
// }

export default function Post({ postData }) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
                <meta name="description" content={postData.description} />
                <meta name="keywords" content={postData.keywords} />
                <meta name="language" content="EN" />
                <meta name="subject" content="aerospace engineering" />
                <meta name="date" content={postData.date} />
                <meta name='HandheldFriendly' content='True' />

            </Head>
            <Layout>
                <div className={`${DM_MONO_FAMILY.className} pt-10 px-5 justify-center flex flex-col max-w-[610px] leading-relaxed`}>
                    <h1 className="text-[var(--primary)] text-2xl">{postData.title}</h1>
                    <h4 className="text-[var(--tertiary)] font-light leading-relaxed mb-5">{postData.date}</h4>
                    <PostContainer>
                        {postData.content}
                    </PostContainer>
                    <motion.a 
                    href="/" 
                    className="self-center p-3 mb-5 bg-[var(--highlight)] rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    whileHover={{ scale: 1.03 }}

                    >
                    
                        Return to home
                    </motion.a>
                    
                </div>
            </Layout>
        </>
    )
}

export function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
};

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        }
    }
}