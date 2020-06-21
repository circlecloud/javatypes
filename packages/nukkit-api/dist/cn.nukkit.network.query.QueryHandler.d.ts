declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace query {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class QueryHandler extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly HANDSHAKE: number /*byte*/
                    // @ts-ignore
                    public static readonly STATISTICS: number /*byte*/
                    // @ts-ignore
                    public regenerateInfo(): void
                    // @ts-ignore
                    public regenerateToken(): void
                    // @ts-ignore
                    public static getTokenString(token: number /*byte*/[], salt: java.lang.String | string): string
                    // @ts-ignore
                    public static getTokenString(token: java.lang.String | string, salt: java.lang.String | string): string
                    // @ts-ignore
                    public handle(address: java.lang.String | string, port: number /*int*/, packet: number /*byte*/[]): void
                }
            }
        }
    }
}
