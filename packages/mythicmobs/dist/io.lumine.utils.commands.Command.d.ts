declare namespace io {
    namespace lumine {
        namespace utils {
            namespace commands {
                // @ts-ignore
                abstract class Command<T extends Plugin> extends java.lang.Object {
                    // @ts-ignore
                    constructor(parent: io.lumine.utils.commands.Command<T>)
                    // @ts-ignore
                    constructor(plugin: T)
                    // @ts-ignore
                    readonly plugin: T
                    // @ts-ignore
                    public addSubCommands(...commands: io.lumine.utils.commands.Command<T>[]): void
                    // @ts-ignore
                    public onCommand(sender: CommandSender, cmd: org.bukkit.command.Command, label: java.lang.String | string, args: java.lang.String[] | string[]): boolean
                    // @ts-ignore
                    public onTabComplete(sender: CommandSender, cmd: org.bukkit.command.Command, label: java.lang.String | string, args: java.lang.String[] | string[]): Array<java.lang.String | string>
                    // @ts-ignore
                    public abstract onCommand(p0: CommandSender, p1: java.lang.String[] | string[]): boolean
                    // @ts-ignore
                    public abstract onTabComplete(p0: CommandSender, p1: java.lang.String[] | string[]): Array<java.lang.String | string>
                    // @ts-ignore
                    public abstract getPermissionNode(): string
                    // @ts-ignore
                    public abstract isConsoleFriendly(): boolean
                    // @ts-ignore
                    public getAliases(): string[]
                    // @ts-ignore
                    public abstract getName(): string
                    // @ts-ignore
                    getPlugin(): T
                }
            }
        }
    }
}
