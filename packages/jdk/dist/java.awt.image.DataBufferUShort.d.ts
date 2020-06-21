declare namespace java {
    namespace awt {
        namespace image {
            /**
             * This class extends <CODE>DataBuffer</CODE> and stores data internally as
             * shorts.  Values stored in the short array(s) of this <CODE>DataBuffer</CODE>
             * are treated as unsigned values.
             * <p>
             * <a name="optimizations">
             * Note that some implementations may function more efficiently
             * if they can maintain control over how the data for an image is
             * stored.
             * For example, optimizations such as caching an image in video
             * memory require that the implementation track all modifications
             * to that data.
             * Other implementations may operate better if they can store the
             * data in locations other than a Java array.
             * To maintain optimum compatibility with various optimizations
             * it is best to avoid constructors and methods which expose the
             * underlying storage as a Java array as noted below in the
             * documentation for those methods.
             * </a>
             */
            // @ts-ignore
            class DataBufferUShort extends java.awt.image.DataBuffer {
                /**
                 * Constructs an unsigned-short based <CODE>DataBuffer</CODE> with a single bank and the
                 * specified size.
                 * @param size The size of the <CODE>DataBuffer</CODE>.
                 */
                // @ts-ignore
                constructor(size: number /*int*/)
                /**
                 * Constructs an unsigned-short based <CODE>DataBuffer</CODE> with the specified number of
                 * banks, all of which are the specified size.
                 * @param size The size of the banks in the <CODE>DataBuffer</CODE>.
                 * @param numBanks The number of banks in the a<CODE>DataBuffer</CODE>.
                 */
                // @ts-ignore
                constructor(size: number /*int*/, numBanks: number /*int*/)
                /**
                 * Constructs an unsigned-short based <CODE>DataBuffer</CODE> with a single bank
                 * using the specified array.
                 * Only the first <CODE>size</CODE> elements should be used by accessors of
                 * this <CODE>DataBuffer</CODE>.  <CODE>dataArray</CODE> must be large enough to
                 * hold <CODE>size</CODE> elements.
                 * <p>
                 * Note that {@code DataBuffer} objects created by this constructor
                 * may be incompatible with <a href="#optimizations">performance
                 * optimizations</a> used by some implementations (such as caching
                 * an associated image in video memory).
                 * @param dataArray The unsigned-short array for the <CODE>DataBuffer</CODE>.
                 * @param size The size of the <CODE>DataBuffer</CODE> bank.
                 */
                // @ts-ignore
                constructor(dataArray: number /*short*/[], size: number /*int*/)
                /**
                 * Constructs an unsigned-short based <CODE>DataBuffer</CODE> with a single bank
                 * using the specified array, size, and offset.  <CODE>dataArray</CODE> must have at
                 * least <CODE>offset</CODE> + <CODE>size</CODE> elements.  Only elements
                 * <CODE>offset</CODE> through <CODE>offset</CODE> + <CODE>size</CODE> - 1 should
                 * be used by accessors of this <CODE>DataBuffer</CODE>.
                 * <p>
                 * Note that {@code DataBuffer} objects created by this constructor
                 * may be incompatible with <a href="#optimizations">performance
                 * optimizations</a> used by some implementations (such as caching
                 * an associated image in video memory).
                 * @param dataArray The unsigned-short array for the <CODE>DataBuffer</CODE>.
                 * @param size The size of the <CODE>DataBuffer</CODE> bank.
                 * @param offset The offset into the <CODE>dataArray</CODE>.
                 */
                // @ts-ignore
                constructor(dataArray: number /*short*/[], size: number /*int*/, offset: number /*int*/)
                /**
                 * Constructs an unsigned-short based <CODE>DataBuffer</CODE> with the specified arrays.
                 * The number of banks will be equal to <CODE>dataArray.length</CODE>.
                 * Only the first <CODE>size</CODE> elements of each array should be used by
                 * accessors of this <CODE>DataBuffer</CODE>.
                 * <p>
                 * Note that {@code DataBuffer} objects created by this constructor
                 * may be incompatible with <a href="#optimizations">performance
                 * optimizations</a> used by some implementations (such as caching
                 * an associated image in video memory).
                 * @param dataArray The unsigned-short arrays for the <CODE>DataBuffer</CODE>.
                 * @param size The size of the banks in the <CODE>DataBuffer</CODE>.
                 */
                // @ts-ignore
                constructor(dataArray: number /*short*/[][], size: number /*int*/)
                /**
                 * Constructs an unsigned-short based <CODE>DataBuffer</CODE> with specified arrays,
                 * size, and offsets.
                 * The number of banks is equal to <CODE>dataArray.length</CODE>.  Each array must
                 * be at least as large as <CODE>size</CODE> + the corresponding offset.   There must
                 * be an entry in the offset array for each <CODE>dataArray</CODE> entry.  For each
                 * bank, only elements <CODE>offset</CODE> through
                 * <CODE>offset</CODE> + <CODE>size</CODE> - 1 should be
                 * used by accessors of this <CODE>DataBuffer</CODE>.
                 * <p>
                 * Note that {@code DataBuffer} objects created by this constructor
                 * may be incompatible with <a href="#optimizations">performance
                 * optimizations</a> used by some implementations (such as caching
                 * an associated image in video memory).
                 * @param dataArray The unsigned-short arrays for the <CODE>DataBuffer</CODE>.
                 * @param size The size of the banks in the <CODE>DataBuffer</CODE>.
                 * @param offsets The offsets into each array.
                 */
                // @ts-ignore
                constructor(dataArray: number /*short*/[][], size: number /*int*/, offsets: number /*int*/[])
                /**
                 * Returns the default (first) unsigned-short data array.
                 * <p>
                 * Note that calling this method may cause this {@code DataBuffer}
                 * object to be incompatible with <a href="#optimizations">performance
                 * optimizations</a> used by some implementations (such as caching
                 * an associated image in video memory).
                 * @return The first unsigned-short data array.
                 */
                // @ts-ignore
                public getData(): number /*short*/[]
                /**
                 * Returns the data array for the specified bank.
                 * <p>
                 * Note that calling this method may cause this {@code DataBuffer}
                 * object to be incompatible with <a href="#optimizations">performance
                 * optimizations</a> used by some implementations (such as caching
                 * an associated image in video memory).
                 * @param bank The bank whose data array you want to get.
                 * @return The data array for the specified bank.
                 */
                // @ts-ignore
                public getData(bank: number /*int*/): number /*short*/[]
                /**
                 * Returns the data arrays for all banks.
                 * <p>
                 * Note that calling this method may cause this {@code DataBuffer}
                 * object to be incompatible with <a href="#optimizations">performance
                 * optimizations</a> used by some implementations (such as caching
                 * an associated image in video memory).
                 * @return All of the data arrays.
                 */
                // @ts-ignore
                public getBankData(): number /*short*/[][]
                /**
                 * Returns the requested data array element from the first (default) bank.
                 * @param i The data array element you want to get.
                 * @return The requested data array element as an integer.
                 * @see #setElem(int, int)
                 * @see #setElem(int, int, int)
                 */
                // @ts-ignore
                public getElem(i: number /*int*/): number /*int*/
                /**
                 * Returns the requested data array element from the specified bank.
                 * @param bank The bank from which you want to get a data array element.
                 * @param i The data array element you want to get.
                 * @return The requested data array element as an integer.
                 * @see #setElem(int, int)
                 * @see #setElem(int, int, int)
                 */
                // @ts-ignore
                public getElem(bank: number /*int*/, i: number /*int*/): number /*int*/
                /**
                 * Sets the requested data array element in the first (default) bank
                 * to the specified value.
                 * @param i The data array element you want to set.
                 * @param val The integer value to which you want to set the data array element.
                 * @see #getElem(int)
                 * @see #getElem(int, int)
                 */
                // @ts-ignore
                public setElem(i: number /*int*/, val: number /*int*/): void
                /**
                 * Sets the requested data array element in the specified bank
                 * from the given integer.
                 * @param bank The bank in which you want to set the data array element.
                 * @param i The data array element you want to set.
                 * @param val The integer value to which you want to set the specified data array element.
                 * @see #getElem(int)
                 * @see #getElem(int, int)
                 */
                // @ts-ignore
                public setElem(bank: number /*int*/, i: number /*int*/, val: number /*int*/): void
            }
        }
    }
}
