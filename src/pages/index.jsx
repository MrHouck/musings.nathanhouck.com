import Head from 'next/head';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../../lib/posts';
import { PostPanel } from '../components/PostPanel';


export default function Home({ allPostsData }) {
    return (

        <Layout>
            <div className="pt-10 justify-center flex max-w-[1200px]">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="pb-10 self-start">
                        <h1 className="text-3xl">Nathan's Musings</h1>
                        <h2 className="text-md text-[var(--secondary)]">Welcome to the inside of my brain</h2>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {allPostsData.map((post) => {
                            return (
                            <PostPanel 
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                description={post.description}
                                date={post.date}
                            />);
                        })}
                        
                    </div>
                </div>

            </div>
            {/* 
        {allPostsData.map((post) =>
            <div>
            <h1>{post.title}</h1>
            <h2>{post.id}</h2>
            </div>
        )} */}
        </Layout>
    );
}


export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}