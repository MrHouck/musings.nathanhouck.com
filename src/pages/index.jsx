import Head from 'next/head';
import Layout from '../components/Layout';
import { getSortedPostsData } from '../../lib/posts';
import { PostPanel } from '../components/PostPanel';


export default function Home({ allPostsData }) {
    return (

        <Layout>
            <div className="pt-10 justify-center flex max-w-[1200px]">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-full flex flex-row justify-between">
                        <div className="flex-col px-10 pb-10 self-start">
                            <h1 className="text-3xl">Nathan's Musings</h1>
                            <h2 className="text-md text-[var(--secondary)]">Welcome to the inside of my brain</h2>

                        </div>
                        <div className="self-stretch pb-10 flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4">
                            <a href="https://nathanhouck.com" className="text-sm h-38px px-11 py-2 bg-[var(--secondary-button)] rounded-lg text-[var(--secondary-text)] hover:underline mr-10">Back to Reality</a>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center">
                        {allPostsData.map((post) => {
                            return (
                                <PostPanel
                                    key={post.id}
                                    id={post.id}
                                    title={post.title}
                                    description={post.description}
                                    date={post['date-stylized'] ? post['date-stylized'] : post.date}
                                />);
                        })}

                    </div>
                </div>

            </div>

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