declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Infers information about the execution environment, e.g.
                 * security permissions.
                 * Package-protected API.
                 */
                // @ts-ignore
                class Environment extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static isAllowedToModifyThreads(): boolean
                    // @ts-ignore
                    public static newThread(factory: java.util.concurrent.ThreadFactory, runnable: java.lang.Runnable, name: java.lang.String | string): java.lang.Thread
                    // @ts-ignore
                    public static newThread(factory: java.util.concurrent.ThreadFactory, runnable: java.lang.Runnable, name: java.lang.String | string, isDaemon: boolean): java.lang.Thread
                }
            }
        }
    }
}
