// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const folder = './node_modules/'
  const fs = require('fs')

  const node_modules_contents = fs.readdirSync(folder)

  console.log(node_modules_contents)

  res.status(200).json({ node_modules_contents })
}
