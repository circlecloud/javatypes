declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace messaging {
                /**
                 * Thrown if a Plugin Message is sent that is too large to be sent.
                 */
                // @ts-ignore
                class MessageTooLargeException extends java.lang.RuntimeException {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(message: number /*byte*/[])
                    // @ts-ignore
                    constructor(length: number /*int*/)
                    // @ts-ignore
                    constructor(msg: java.lang.String | string)
                }
            }
        }
    }
}
