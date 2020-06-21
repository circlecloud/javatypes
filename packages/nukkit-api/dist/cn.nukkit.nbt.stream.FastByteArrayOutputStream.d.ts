declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace stream {
                /**
                 * Simple, fast byte-array output stream that exposes the backing array.
                 * <P>{@link java.io.ByteArrayOutputStream} is nice, but to get its content you
                 * must generate each time a new object. This doesn't happen here.
                 * <P>This class will automatically enlarge the backing array, doubling its
                 * size whenever new space is needed. The {@link #reset()} method will
                 * mark the content as empty, but will not decrease the capacity
                 * @author Sebastiano Vigna
                 */
                // @ts-ignore
                class FastByteArrayOutputStream extends java.io.OutputStream {
                    /**
                     * Creates a new array output stream with an initial capacity of {@link #DEFAULT_INITIAL_CAPACITY} bytes.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a new array output stream with a given initial capacity.
                     * @param initialCapacity the initial length of the backing array.
                     */
                    // @ts-ignore
                    constructor(initialCapacity: number /*int*/)
                    /**
                     * Creates a new array output stream wrapping a given byte array.
                     * @param a the byte array to wrap.
                     */
                    // @ts-ignore
                    constructor(a: number /*byte*/[])
                    // @ts-ignore
                    public static readonly ONEOVERPHI: number /*long*/
                    /**
                     * The array backing the output stream.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_INITIAL_CAPACITY: number /*int*/
                    /**
                     * The array backing the output stream.
                     */
                    // @ts-ignore
                    public array: number /*byte*/[]
                    /**
                     * Marks this array output stream as empty.
                     */
                    // @ts-ignore
                    public reset(): cn.nukkit.nbt.stream.FastByteArrayOutputStream
                    // @ts-ignore
                    public write(b: number /*int*/): void
                    // @ts-ignore
                    public static ensureOffsetLength(arrayLength: number /*int*/, offset: number /*int*/, length: number /*int*/): void
                    // @ts-ignore
                    public static grow(array: number /*byte*/[], length: number /*int*/): number /*byte*/[]
                    // @ts-ignore
                    public static grow(array: number /*byte*/[], length: number /*int*/, preserve: number /*int*/): number /*byte*/[]
                    // @ts-ignore
                    public write(b: number /*byte*/[], off: number /*int*/, len: number /*int*/): void
                    // @ts-ignore
                    public position(newPosition: number /*long*/): void
                    // @ts-ignore
                    public position(): number /*long*/
                    // @ts-ignore
                    public length(): number /*long*/
                    // @ts-ignore
                    public toByteArray(): number /*byte*/[]
                }
            }
        }
    }
}
