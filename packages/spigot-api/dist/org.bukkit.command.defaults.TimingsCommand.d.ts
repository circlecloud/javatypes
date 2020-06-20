declare namespace org {
    namespace bukkit {
        namespace command {
            namespace defaults {
                // @ts-ignore
                class TimingsCommand extends org.bukkit.command.defaults.BukkitCommand {
                    // @ts-ignore
                    constructor(name: string)
                    // @ts-ignore
                    timingStart: number /*long*/
                    // @ts-ignore
                    executeSpigotTimings(sender: org.bukkit.command.CommandSender, args: string[]): void
                    // @ts-ignore
                    execute(sender: org.bukkit.command.CommandSender, currentAlias: string, args: string[]): boolean
                    // @ts-ignore
                    tabComplete(sender: org.bukkit.command.CommandSender, alias: string, args: string[]): java.util.List<java.lang.String>
                }
            }
        }
    }
}
