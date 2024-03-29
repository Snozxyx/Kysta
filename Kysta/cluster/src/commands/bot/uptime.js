const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports = async (client, interaction, args) => {
    const duration = moment.duration(client.uptime).format("\`D\` [days], \`H\` [hrs], \`m\` [mins], \`s\` [secs]");
    const upvalue = (Date.now() / 1000 - client.uptime / 1000).toFixed(0);

    client.embed({
        title: `${client.emotes.normal.arrowUp}・Uptime`,
        desc: `<a:online:1086879452094537799> See the uptime of Bot`,
        fields: [
            {
                name: "<a:api_latency:1090516234635858042> Uptime",
                value: `${duration}`,
                inline: true
            },
            {
                name: "<a:online:1086879452094537799> Up Since",
                value: `<t:${upvalue}>`,
                inline: true
            }
        ],
        type: 'editreply'
    }, interaction)
}

 