module.exports = {
  content: ['frontend/javascript/*.js','./output/**/*.html'],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  output: "./output/_bridgetown/static/css"
}