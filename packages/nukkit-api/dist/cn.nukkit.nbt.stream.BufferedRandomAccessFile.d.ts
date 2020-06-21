declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace stream {
                /**
                 * A <code>BufferedRandomAccessFile</code> is like a
                 * <code>RandomAccessFile</code>, but it uses a private buffer so that most
                 * operations do not require a disk access.
                 * <P>
                 * Note: The operations on this class are unmonitored. Also, the correct
                 * functioning of the <code>RandomAccessFile</code> methods that are not
                 * overridden here relies on the implementation of those methods in the
                 * superclass.
                 * Author : Avinash Lakshman ( alakshman@facebook.com) &amp; Prashant Malik ( pmalik@facebook.com )
                 */
                // @ts-ignore
                class BufferedRandomAccessFile extends java.io.RandomAccessFile {
                    /**
                     * Open a new <code>BufferedRandomAccessFile</code> on <code>file</code>
                     * in mode <code>mode</code>, which should be "r" for reading only, or
                     * "rw" for reading and writing.
                     */
                    // @ts-ignore
                    constructor(file: java.io.File, mode: java.lang.String | string)
                    // @ts-ignore
                    constructor(file: java.io.File, mode: java.lang.String | string, size: number /*int*/)
                    /**
                     * Open a new <code>BufferedRandomAccessFile</code> on the file named
                     * <code>name</code> in mode <code>mode</code>, which should be "r" for
                     * reading only, or "rw" for reading and writing.
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string, mode: java.lang.String | string)
                    // @ts-ignore
                    constructor(name: java.lang.String | string, mode: java.lang.String | string, size: number /*int*/)
                    // @ts-ignore
                    public static readonly BuffSz_: number /*int*/
                    // @ts-ignore
                    public close(): void
                    /**
                     * Flush any bytes in the file's buffer that have not yet been written to
                     * disk. If the file was created read-only, this method is a no-op.
                     */
                    // @ts-ignore
                    public flush(): void
                    // @ts-ignore
                    public seek(pos: number /*long*/): void
                    // @ts-ignore
                    public seekUnsafe(pos: number /*long*/): void
                    // @ts-ignore
                    public getFilePointer(): number /*long*/
                    // @ts-ignore
                    public length(): number /*long*/
                    // @ts-ignore
                    public read(): number /*int*/
                    // @ts-ignore
                    public read1(): number /*byte*/
                    // @ts-ignore
                    public read(b: number /*byte*/[]): number /*int*/
                    // @ts-ignore
                    public read(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): number /*int*/
                    // @ts-ignore
                    public readCurrent(): number /*byte*/
                    // @ts-ignore
                    public writeCurrent(b: number /*byte*/): void
                    // @ts-ignore
                    public write(b: number /*int*/): void
                    // @ts-ignore
                    public write(b: number /*byte*/[]): void
                    // @ts-ignore
                    public write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                }
            }
        }
    }
}
