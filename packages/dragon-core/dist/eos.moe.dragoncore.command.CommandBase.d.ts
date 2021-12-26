declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace command {
                // @ts-ignore
                abstract class CommandBase extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public abstract onConsoleCommand(p0: CommandSender, p1: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public abstract onPlayerCommand(p0: Player, p1: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public abstract getPermission(): string
                    // @ts-ignore
                    public abstract getCommandDesc(): string
                    // @ts-ignore
                    public onTabComplete(sender: CommandSender, command: Command, s: java.lang.String | string, args: java.lang.String[] | string[]): Array<java.lang.String | string>
                    // @ts-ignore
                    public getLength(): number /*int*/
                    // @ts-ignore
                    public getCommand(): string
                }
            }
        }
    }
}
