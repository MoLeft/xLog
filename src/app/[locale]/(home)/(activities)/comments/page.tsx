import { Metadata } from "next"

import { HomeFeed } from "~/components/home/HomeFeed"
import { APP_NAME } from "~/lib/env"

export const metadata: Metadata = {
  title: `Comments Activities - ${APP_NAME}`,
}

export default async function FollowingActivities() {
  return <HomeFeed type="comments" />
}
