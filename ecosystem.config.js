// 用于pm2部署，需要在服务器全局安装pm2
module.exports = {
    apps: [
        {
            name: 'baipiaogpt-webui',
            script: './.output/server/index.mjs',
            instances: 1,
            env: {
                NODE_ENV: "development",
                NITRO_PORT: 9007,
                NITRO_HOST: '0.0.0.0'
            },
            env_production: {
                NODE_ENV: "production",
                NITRO_PORT: 9007,
                NITRO_HOST: '0.0.0.0'
            }
        }
    ]
}