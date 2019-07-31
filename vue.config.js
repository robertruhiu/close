module.exports = {
    configureWebpack: {
        performance: {
            hints: false
        },
        optimization: {
            splitChunks: {
                minSize: 200,
                maxSize: 400,
            }
        },


    }


}

