declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace conf {
                // @ts-ignore
                class YamlConfig extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public load(): void
                    // @ts-ignore
                    public getInt(path: java.lang.String | string, def: number /*int*/): number /*int*/
                    // @ts-ignore
                    public getString(path: java.lang.String | string, def: java.lang.String | string): string
                    // @ts-ignore
                    public getBoolean(path: java.lang.String | string, def: boolean): boolean
                    // @ts-ignore
                    public getServers(): java.util.Map<java.lang.String | string, ServerInfo>
                    // @ts-ignore
                    public getListeners(): Array<ListenerInfo>
                    // @ts-ignore
                    public getGroups(player: java.lang.String | string): Array<java.lang.String | string>
                    // @ts-ignore
                    public getList(path: java.lang.String | string, def: java.util.Collection<any> | Array<any>): Array<any>
                    // @ts-ignore
                    public getPermissions(group: java.lang.String | string): Array<java.lang.String | string>
                }
            }
        }
    }
}
