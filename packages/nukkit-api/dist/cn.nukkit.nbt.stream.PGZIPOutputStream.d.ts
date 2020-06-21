declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace stream {
                /**
                 * A multi-threaded version of {@link java.util.zip.GZIPOutputStream}.
                 * @author shevek
                 */
                // @ts-ignore
                class PGZIPOutputStream extends java.io.FilterOutputStream {
                    // @ts-ignore
                    constructor(out: java.io.OutputStream, executor: java.util.concurrent.ExecutorService, nthreads: number /*int*/)
                    /**
                     * Creates a PGZIPOutputStream
                     * using {@link PGZIPOutputStream#getSharedThreadPool()}.
                     * @param out the eventual output stream for the compressed data.
                     * @throws java.io.IOException if it all goes wrong.
                     */
                    // @ts-ignore
                    constructor(out: java.io.OutputStream, nthreads: number /*int*/)
                    /**
                     * Creates a PGZIPOutputStream
                     * using {@link PGZIPOutputStream#getSharedThreadPool()}
                     * and {@link Runtime#availableProcessors()}.
                     * @param out the eventual output stream for the compressed data.
                     * @throws java.io.IOException if it all goes wrong.
                     */
                    // @ts-ignore
                    constructor(out: java.io.OutputStream)
                    // @ts-ignore
                    public static getSharedThreadPool(): java.util.concurrent.ExecutorService
                    // @ts-ignore
                    newDeflater(): java.util.zip.Deflater
                    // @ts-ignore
                    public setStrategy(strategy: number /*int*/): void
                    // @ts-ignore
                    public setLevel(level: number /*int*/): void
                    // @ts-ignore
                    static newDeflaterOutputStream(out: java.io.OutputStream, deflater: java.util.zip.Deflater): java.util.zip.DeflaterOutputStream
                    // @ts-ignore
                    public write(b: number /*int*/): void
                    // @ts-ignore
                    public write(b: number /*byte*/[]): void
                    // @ts-ignore
                    public write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                    // @ts-ignore
                    public flush(): void
                    // @ts-ignore
                    public close(): void
                }
            }
        }
    }
}
