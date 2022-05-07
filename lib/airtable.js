const Airtable = require('airtable');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY });
const base = airtable.base(process.env.AIRTABLE_BASE_ID);

const minifyRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

const getMinifiedRecords = (records) => {
  return records.map((record) => minifyRecord(record));
};

async function getTable(table, select = {}) {
  const records = await base(table).select(select).all();
  return getMinifiedRecords(records);
}

async function getAllPosts() {
  const records = await base('All').select({}).all();
  const getMinifiedRecords = await getMinifiedRecords(records);

  return getMinifiedRecords;
}

async function getAllPostsPaths() {
  const posts = await getAllPosts();

  return posts.map((post) => {
    return {
      params: {
        id: post.id,
        slug: post.fields.slug,
      },
    };
  });
}

async function getPostData(slug) {
  const records = await base('Posts')
    .select({
      maxRecords: 1,
      filterByFormula: `slug = "${slug}"`,
    })
    .all();

  const getMinifiedRecords = await getMinifiedRecords(records);

  const post = await getMinifiedRecords(records);
  return {
    post,
  };
}

export { getTable, getAllPosts, getAllPostsPaths, getPostData };
