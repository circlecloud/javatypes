declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace messaging {
                /**
                 * Thrown if a plugin attempts to register for a reserved channel (such as
                 * "REGISTER")
                 */
                // @ts-ignore
                class ReservedChannelException extends java.lang.RuntimeException {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                }
            }
        }
    }
}
