declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class LevelProviderManager extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    static readonly providers: java.util.Map<java.lang.String | string, java.lang.Class<any>>
                    // @ts-ignore
                    public static addProvider(server: cn.nukkit.Server, clazz: java.lang.Class<any>): void
                    // @ts-ignore
                    public static getProvider(path: java.lang.String | string): java.lang.Class<any>
                    // @ts-ignore
                    public static getProviderByName(name: java.lang.String | string): java.lang.Class<any>
                }
            }
        }
    }
}
