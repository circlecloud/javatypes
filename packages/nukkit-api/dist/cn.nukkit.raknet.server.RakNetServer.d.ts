declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace server {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class RakNetServer extends java.lang.Thread {
                    // @ts-ignore
                    constructor(logger: cn.nukkit.utils.ThreadedLogger, port: number /*int*/)
                    // @ts-ignore
                    constructor(logger: cn.nukkit.utils.ThreadedLogger, port: number /*int*/, interfaz: java.lang.String | string)
                    // @ts-ignore
                    readonly port: number /*int*/
                    // @ts-ignore
                    interfaz: java.lang.String | string
                    // @ts-ignore
                    logger: cn.nukkit.utils.ThreadedLogger
                    // @ts-ignore
                    externalQueue: java.util.concurrent.ConcurrentLinkedQueue<number /*byte*/[]>
                    // @ts-ignore
                    internalQueue: java.util.concurrent.ConcurrentLinkedQueue<number /*byte*/[]>
                    // @ts-ignore
                    public isShutdown(): boolean
                    // @ts-ignore
                    public shutdown(): void
                    // @ts-ignore
                    public getPort(): number /*int*/
                    // @ts-ignore
                    public getInterface(): string
                    // @ts-ignore
                    public getLogger(): cn.nukkit.utils.ThreadedLogger
                    // @ts-ignore
                    public getExternalQueue(): java.util.concurrent.ConcurrentLinkedQueue<number /*byte*/[]>
                    // @ts-ignore
                    public getInternalQueue(): java.util.concurrent.ConcurrentLinkedQueue<number /*byte*/[]>
                    // @ts-ignore
                    public pushMainToThreadPacket(data: number /*byte*/[]): void
                    // @ts-ignore
                    public readMainToThreadPacket(): number /*byte*/[]
                    // @ts-ignore
                    public pushThreadToMainPacket(data: number /*byte*/[]): void
                    // @ts-ignore
                    public readThreadToMainPacket(): number /*byte*/[]
                    // @ts-ignore
                    public run(): void
                }
            }
        }
    }
}
