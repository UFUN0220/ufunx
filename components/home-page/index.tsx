import type { Blog, Snippet } from '~/.contentlayer/generated'
import { ProfileCard } from '~/components/cards/profile'
import { Container } from '~/components/ui/container'
import { Twemoji } from '~/components/ui/twemoji'
import type { CoreContent } from '~/types/data'
import { LatestPosts } from './latest-posts'
import { BlogLinks } from './links'
import { TypedBios } from './typed-bios'
import { Yvon } from './yvon'
import { Social } from './social'
import Bentotest from './bentotest'
import Ufunintro from './bridge'
import Tobecontinue from './tobecontinue'

import { useEffect, useState } from 'react'
import '~/css/home.css'
import '~/css/homefont.css'
import Bridge from './bridge'

export function Home({ posts }: { posts: CoreContent<Blog>[] }) {
  return (
    //pt等着改回来
    <Container as="div" className="pt-12 lg:pt-12">
      <Yvon />
      {/* <Bridge /> */}
      <Bentotest />
      <div className="py-6 md:pb-8 xl:grid xl:grid-cols-3">
        <div className="space-y-4 md:space-y-6 md:pr-8 xl:col-span-2">
          <div className="text-base leading-7 text-gray-600 md:text-lg md:leading-8 dark:text-gray-400">
            {/* 
              <TypedBios /> */}
            {/* <div className="mb-6 mt-4 md:mb-8">
                <p>Jiangsu University.</p>
                <p>WashU.</p>
              </div> */}
            {/* <BlogLinks />
              {/* <p className="my-6 flex md:my-8">
                <span className="mr-2">Happy reading</span>
                
              </p> */}
          </div>
        </div>
        {/* <div className="hidden pl-4 pt-8 xl:block">
            <ProfileCard />
          </div> */}
      </div>
      {/* <Tobecontinue /> */}
      {/* <LatestPosts posts={posts} /> */}
    </Container>
  )
}
