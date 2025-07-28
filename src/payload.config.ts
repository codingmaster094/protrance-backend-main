// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Header } from './globals/Header/config'
import { Footer } from './globals/Footer/config'
import { menus } from './menus/config'
import { Reviews } from './Reviews/config'
import { HomePage } from './globals/home/config'
import { AbnehmenPage } from './globals/abnehmen/config'
import { Entspannung_StressabbauPage } from './globals/Entspannung_Stressabbau/config'
import { Lampenfieber_PrufungsangstPage } from './globals/Lampenfieber_Prufungsangst/config'
import { RaucherentwohnungPage } from './globals/Raucherentwohnung/config'
import { SelbstfursorgePage } from './globals/Selbstfursorge/config'
import { KontaktPage } from './globals/Kontakt/config'
import { Uber_michPage } from './globals/Uber_mich/config'
import { BlogPage } from './globals/Blog/config'
import { Posts } from './collections/posts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: 'https://protrance-backend.vercel.app',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
   cors: [
  'https://protrance-frontend.vercel.app', // Allow your frontend domain
],
  collections: [Users, Media, Posts],
  globals: [
    Header,
    Footer,
    menus,
    Reviews,
    HomePage,
    AbnehmenPage,
    Entspannung_StressabbauPage,
    Lampenfieber_PrufungsangstPage,
    RaucherentwohnungPage,
    SelbstfursorgePage,
    KontaktPage,
    Uber_michPage,
    BlogPage,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
