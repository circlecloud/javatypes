declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace player {
                // @ts-ignore
                class PlayerChatEvent extends cn.nukkit.event.player.PlayerMessageEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, message: java.lang.String | string)
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, message: java.lang.String | string, format: java.lang.String | string, recipients: java.util.Set<cn.nukkit.command.CommandSender> | Array<cn.nukkit.command.CommandSender>)
                    // @ts-ignore
                    format: java.lang.String | string
                    // @ts-ignore
                    recipients: java.util.Set<cn.nukkit.command.CommandSender> | Array<cn.nukkit.command.CommandSender>
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    /**
                     * Changes the player that is sending the message
                     * @param player messenger
                     */
                    // @ts-ignore
                    public setPlayer(player: cn.nukkit.Player): void
                    // @ts-ignore
                    public getFormat(): string
                    // @ts-ignore
                    public setFormat(format: java.lang.String | string): void
                    // @ts-ignore
                    public getRecipients(): Array<cn.nukkit.command.CommandSender>
                    // @ts-ignore
                    public setRecipients(recipients: java.util.Set<cn.nukkit.command.CommandSender> | Array<cn.nukkit.command.CommandSender>): void
                }
            }
        }
    }
}
