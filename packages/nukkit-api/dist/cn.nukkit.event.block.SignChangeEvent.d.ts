declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace block {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class SignChangeEvent extends cn.nukkit.event.block.BlockEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: cn.nukkit.block.Block, player: cn.nukkit.Player, lines: java.lang.String[] | string[])
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList
                    // @ts-ignore
                    public getPlayer(): cn.nukkit.Player
                    // @ts-ignore
                    public getLines(): string[]
                    // @ts-ignore
                    public getLine(index: number /*int*/): string
                    // @ts-ignore
                    public setLine(index: number /*int*/, line: java.lang.String | string): void
                }
            }
        }
    }
}
