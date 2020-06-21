declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace command {
                /**
                 * @deprecated internal use only
                 */
                // @ts-ignore
                abstract class PlayerCommand extends net.md_5.bungee.api.plugin.Command implements net.md_5.bungee.api.plugin.TabExecutor {
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    // @ts-ignore
                    constructor(name: java.lang.String | string, permission: java.lang.String | string, ...aliases: java.lang.String[] | string[])
                    // @ts-ignore
                    public onTabComplete(sender: net.md_5.bungee.api.CommandSender, args: java.lang.String[] | string[]): java.lang.Iterable<java.lang.String | string>
                }
            }
        }
    }
}
