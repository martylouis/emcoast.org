const Airtable = require('airtable')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
const base = airtable.base(process.env.AIRTABLE_BASE_ID)

const minifyRecord = (record: { id: any; fields: any }) => {
  return {
    id: record.id,
    fields: record.fields,
  }
}

interface Record {
  id: string
  fields: any[]
}

interface getMinifiedRecordsProps {
  map: any
  records: Record[]
}

const getMinifiedRecords = (records: getMinifiedRecordsProps) => {
  return records.map((record: { id: any; fields: any }) => minifyRecord(record))
}

async function getTable(table: string, select = {}) {
  const records = await base(table).select(select).all()
  return getMinifiedRecords(records)
}

async function getAllPosts() {
  const records = await base('All').select({}).all()
  const getMinifiedRecordsResults = await getMinifiedRecords(records)

  return getMinifiedRecordsResults
}

async function getAllPostsPaths() {
  const posts = await getAllPosts()

  return posts.map((post: { id: any; fields: { slug: any } }) => {
    return {
      params: {
        id: post.id,
        slug: post.fields.slug,
      },
    }
  })
}

async function getPostData(slug: any) {
  const records = await base('Posts')
    .select({
      maxRecords: 1,
      filterByFormula: `slug = "${slug}"`,
    })
    .all()

  // const getMinifiedRecords = await getMinifiedRecords(records)

  const post = await getMinifiedRecords(records)
  return {
    post,
  }
}

export { getTable, getAllPosts, getAllPostsPaths, getPostData }
