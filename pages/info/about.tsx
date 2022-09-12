import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import Footer from "../../components/Footer";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  console.log(posts);
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Chillax Coffee</title>
        <link
          rel="icon"
          href="https://scontent.ftpe7-3.fna.fbcdn.net/v/t31.18172-8/1073774_363750393752115_1254075240_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AKhzmQPL2PYAX8-A_zb&tn=3xhmME0mxLW-eLFb&_nc_ht=scontent.ftpe7-3.fna&oh=00_AT-1Qkj3HzdZX5nlpdQX-J5m2CpkXR1qLm9MuKdfbqmpIQ&oe=62E93292"
        />
      </Head>
      <Header />

      <div className="flex justify-between items-center bg-amber-800 border-y border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl font-serif">
            <span className="underline decoration-black decoration-4">
              Chillax Coffee
            </span>{" "}
            is a place to chill, read, and connect
          </h1>
          <h2>
            Its easy and free to share your thinking on any topic and connect
            with world through coffee.
          </h2>
        </div>
        <img
          className="hidden md:inline-flex h-44 lg:h-full"
          src="https://i.ibb.co/Qf1H7yM/uncle.jpg"
          alt=""
        />
      </div>
      {/* Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group border rounded-lg cursor-pointer overflow-hidden ">
              <img
                className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                src={urlFor(post.mainImage).url()!}
                alt=""
              />
              <div className="flex justify-between p-5 bg-white">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <img
                  className="h-12 w-12 rounded-full"
                  src={urlFor(post.author.image).url()!}
                  alt=""
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}
export const getServerSideProps = async () => {
  const query = `*[_type =='post']{
    _id,
    title,
    description,
    mainImage,
    author ->{
    name,
    image
  },
    mainImage,
    slug,
  }`;
  const posts = await sanityClient.fetch(query);
  return {
    props: { posts },
  };
};
