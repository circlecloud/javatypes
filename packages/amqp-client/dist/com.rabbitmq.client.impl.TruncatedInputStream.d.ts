declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Utility stream: proxies another stream, making it appear to be no
                 * longer than a preset limit.
                 */
                // @ts-ignore
                class TruncatedInputStream extends java.io.FilterInputStream {
                    // @ts-ignore
                    constructor(input: java.io.InputStream, limit: number /*long*/)
                    // @ts-ignore
                    public available(): number /*int*/
                    // @ts-ignore
                    public mark(readlimit: number /*int*/): void
                    // @ts-ignore
                    public read(): number /*int*/
                    // @ts-ignore
                    public read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                    // @ts-ignore
                    public reset(): void
                    // @ts-ignore
                    public skip(n: number /*long*/): number /*long*/
                }
            }
        }
    }
}
