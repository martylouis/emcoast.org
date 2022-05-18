import Image from 'next/image'
import { getTable } from '@/lib/airtable'
import DocumentCard from '@/components/DocumentCard'

const Home = ({ posts }) => (
  <div>
    <h2>Download Schedules</h2>
    <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
      {posts
        .filter((post) => post.fields.category === 'schedule')
        .map((post) => (
          <DocumentCard key={post.id} post={post} />
        ))}
    </div>

    <h2>Meeting Arrangements on Zoom</h2>
    <p>
      As of April 3, 2022, all in-person meetings at the Kingdom Hall have been
      resumed. Congregation meetings will also be available to view on Zoom.
    </p>

    <div className="prose">
      <details className="my-4">
        <summary>
          <strong>How to Join Zoom</strong>
        </summary>

        <div className="pl-4">
          <p>
            It is best to download the appropriate mobile app or desktop
            application to your device or computer before joining a Zoom meeting
            for the first time.{' '}
            <em>
              It is not necessary for you to create an account with Zoom to join
              a meeting.
            </em>
          </p>
          <p>
            There are multiple ways to join a meeting, here are the following
            options:
          </p>
          <ol>
            <li>
              <strong>Join with a computer:</strong> Once you receive your
              invitation, click on the <em>Zoom</em> link, and you will be
              directed to open the application or download the application to
              your computer. You can also download here:
              <a
                href="https://zoom.us/download"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="/img/zoom-logo-transparent.png"
                  width="140"
                  height="75"
                  alt="download zoom"
                  loading="lazy"
                />
              </a>
            </li>
            <li>
              <strong>
                Join with a mobile device on the <em>Zoom</em> app:
              </strong>{' '}
              Download the <em>Zoom</em>
              app to your mobile phone or tablet here:
              <span className="flex my-2 space-x-2">
                <a
                  href="https://apps.apple.com/us/app/zoom-cloud-meetings/id546505307?mt=8"
                  className="block"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    overflow: 'hidden',
                    background:
                      'url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2012-08-15&kind=iossoftware&bubble=apple_music) no-repeat',
                    width: '135px',
                    height: '40px',
                  }}
                >
                  <span className="sr-only">
                    Download Zoom on the Apple Store
                  </span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=en_US"
                  className="block"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: '135px' }}
                >
                  <Image
                    src="/img/download_google.png"
                    alt="download google"
                    width="564"
                    height="168"
                  />
                </a>
              </span>
            </li>
            <li>
              <p>
                <strong>Join by Phone:</strong> Call in with the phone number
                and Meeting ID.
              </p>
              <ul>
                <li>
                  Press <code>*6</code> to mute/unmute
                </li>
                <li>
                  Press <code>*9</code> if you&rsquo;d like to comment
                </li>
              </ul>
            </li>
          </ol>
          <div className="px-4 pt-4 pb-6 my-8 bg-gray-100 border border-gray-300 rounded-lg">
            <div>
              <h4 className="mb-1 font-bold ">Having Technical Issues?</h4>
              <p>
                Zoom has an excellent online support website with video
                tutorials that can help you get setup:{' '}
                <a href="https://support.zoom.us/hc/en-us/articles/201362193-Joining-a-Meeting">
                  Zoom Help Center: Joining a Meeting
                </a>
              </p>
            </div>
          </div>
        </div>
      </details>
      <h2>Field Service Arrangements</h2>
      <p>
        Features of our public ministry, including the door-to-door work and
        public witnessing, are discontinued until further instruction is given.
        Other forms of witnessing that do not require being in close contact
        with groups of people, such as letter writing, is encouraged.
      </p>
      <div className="grid mt-4 gap-x-6 gap-y-4 sm:grid-cols-2">
        {posts
          .filter((post) => post.fields.category === 'group')
          .map((post) => (
            <DocumentCard key={post.id} post={post} />
          ))}
      </div>
    </div>
  </div>
)

export default Home

export async function getStaticProps() {
  const posts = await getTable('Uploads', {
    maxRecords: 5,
  })
  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}
