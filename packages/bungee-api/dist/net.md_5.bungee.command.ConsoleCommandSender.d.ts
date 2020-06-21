declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace command {
                /**
                 * Command sender representing the proxy console.
                 */
                // @ts-ignore
                class ConsoleCommandSender extends java.lang.Object {
                    // @ts-ignore
                    public sendMessage(message: java.lang.String | string): void
                    // @ts-ignore
                    public sendMessages(...messages: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public sendMessage(...message: BaseComponent[]): void
                    // @ts-ignore
                    public sendMessage(message: BaseComponent): void
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getGroups(): Array<java.lang.String | string>
                    // @ts-ignore
                    public addGroups(...groups: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public removeGroups(...groups: java.lang.String[] | string[]): void
                    // @ts-ignore
                    public hasPermission(permission: java.lang.String | string): boolean
                    // @ts-ignore
                    public setPermission(permission: java.lang.String | string, value: boolean): void
                    // @ts-ignore
                    public getPermissions(): Array<java.lang.String | string>
                    // @ts-ignore
                    public static getInstance(): net.md_5.bungee.command.ConsoleCommandSender
                }
            }
        }
    }
}
