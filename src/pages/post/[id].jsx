import Layout from "@/components/Layout";
import { getAllPostIds, getPostData } from "../../../lib/posts";

export async function generateMetadata({params}) {
    const thisPost = await getPostData(params.id);

    if(!thisPost) {
        return {
            title: "Title not found"
        };
    }

    return {
        title: thisPost.title,
        description: thisPost.description,
    }
}

export default function Post({postData}) {

    return (
        <Layout>
            <h1>{postData.title}</h1>
            <h2>{postData.id}</h2>
            <h3>{postData.date}</h3>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    )
}

export function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback:false,
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