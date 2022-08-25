const deepMerge = require('deepmerge')

const windmillConfig = {
  darkMode: 'class',
  content: [
    'node_modules/@cast-corp/windmill-react-ui/lib/defaultTheme.js',
    'node_modules/@cast-corp/windmill-react-ui/dist/index.js',
  ],
  plugins: [require('@tailwindcss/forms')],
}

function arrayMergeFn(destinationArray, sourceArray) {
  return destinationArray.concat(sourceArray).reduce((acc, cur) => {
    if (acc.includes(cur)) return acc
    return [...acc, cur]
  }, [])
}

/**
 * Merge Windmill and Tailwind CSS configurations
 * @param {object} tailwindConfig - Tailwind config object
 * @return {object} new config object
 */
function wrapper(tailwindConfig) {
  return deepMerge(tailwindConfig, windmillConfig, { arrayMerge: arrayMergeFn })
}

module.exports = wrapper
