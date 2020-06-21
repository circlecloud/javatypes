declare namespace cn {
    namespace nukkit {
        namespace command {
            namespace data {
                // @ts-ignore
                class CommandData extends java.lang.Object implements java.lang.Cloneable {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public aliases: cn.nukkit.command.data.CommandEnum
                    // @ts-ignore
                    public description: java.lang.String | string
                    // @ts-ignore
                    public overloads: java.util.Map<java.lang.String | string, cn.nukkit.command.data.CommandOverload>
                    // @ts-ignore
                    public flags: number /*int*/
                    // @ts-ignore
                    public permission: number /*int*/
                    // @ts-ignore
                    public clone(): cn.nukkit.command.data.CommandData
                }
            }
        }
    }
}
