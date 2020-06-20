declare namespace java {
    namespace awt {
        namespace image {
            /**
             * This class exists to wrap one or more data arrays.  Each data array in
             * the DataBuffer is referred to as a bank.  Accessor methods for getting
             * and setting elements of the DataBuffer's banks exist with and without
             * a bank specifier.  The methods without a bank specifier use the default 0th
             * bank.  The DataBuffer can optionally take an offset per bank, so that
             * data in an existing array can be used even if the interesting data
             * doesn't start at array location zero.  Getting or setting the 0th
             * element of a bank, uses the (0+offset)th element of the array.  The
             * size field specifies how much of the data array is available for
             * use.  Size + offset for a given bank should never be greater
             * than the length of the associated data array.  The data type of
             * a data buffer indicates the type of the data array(s) and may also
             * indicate additional semantics, e.g. storing unsigned 8-bit data
             * in elements of a byte array.  The data type may be TYPE_UNDEFINED
             * or one of the types defined below.  Other types may be added in
             * the future.  Generally, an object of class DataBuffer will be cast down
             * to one of its data type specific subclasses to access data type specific
             * methods for improved performance.  Currently, the Java 2D(tm) API
             * image classes use TYPE_BYTE, TYPE_USHORT, TYPE_INT, TYPE_SHORT,
             * TYPE_FLOAT, and TYPE_DOUBLE DataBuffers to store image data.
             * @see java.awt.image.Raster
             * @see java.awt.image.SampleModel
             */
            // @ts-ignore
            class DataBuffer extends java.lang.Object {
                /**
                 * Constructs a DataBuffer containing one bank of the specified
                 * data type and size.
                 * @param dataType the data type of this <code>DataBuffer</code>
                 * @param size the size of the banks
                 */
                // @ts-ignore
                constructor(dataType: number /*int*/, size: number /*int*/)
                /**
                 * Constructs a DataBuffer containing the specified number of
                 * banks.  Each bank has the specified size and an offset of 0.
                 * @param dataType the data type of this <code>DataBuffer</code>
                 * @param size the size of the banks
                 * @param numBanks the number of banks in this
                 *          <code>DataBuffer</code>
                 */
                // @ts-ignore
                constructor(dataType: number /*int*/, size: number /*int*/, numBanks: number /*int*/)
                /**
                 * Constructs a DataBuffer that contains the specified number
                 * of banks.  Each bank has the specified datatype, size and offset.
                 * @param dataType the data type of this <code>DataBuffer</code>
                 * @param size the size of the banks
                 * @param numBanks the number of banks in this
                 *          <code>DataBuffer</code>
                 * @param offset the offset for each bank
                 */
                // @ts-ignore
                constructor(dataType: number /*int*/, size: number /*int*/, numBanks: number /*int*/, offset: number /*int*/)
                /**
                 * Constructs a DataBuffer which contains the specified number
                 * of banks.  Each bank has the specified datatype and size.  The
                 * offset for each bank is specified by its respective entry in
                 * the offsets array.
                 * @param dataType the data type of this <code>DataBuffer</code>
                 * @param size the size of the banks
                 * @param numBanks the number of banks in this
                 *          <code>DataBuffer</code>
                 * @param offsets an array containing an offset for each bank.
                 * @throws ArrayIndexOutOfBoundsException if <code>numBanks</code>
                 *           does not equal the length of <code>offsets</code>
                 */
                // @ts-ignore
                constructor(dataType: number /*int*/, size: number /*int*/, numBanks: number /*int*/, offsets: number /*int*/[])
                /**
                 * Tag for unsigned byte data.
                 */
                // @ts-ignore
                readonly TYPE_BYTE: number /*int*/
                /**
                 * Tag for unsigned short data.
                 */
                // @ts-ignore
                readonly TYPE_USHORT: number /*int*/
                /**
                 * Tag for signed short data.  Placeholder for future use.
                 */
                // @ts-ignore
                readonly TYPE_SHORT: number /*int*/
                /**
                 * Tag for int data.
                 */
                // @ts-ignore
                readonly TYPE_INT: number /*int*/
                /**
                 * Tag for float data.  Placeholder for future use.
                 */
                // @ts-ignore
                readonly TYPE_FLOAT: number /*int*/
                /**
                 * Tag for double data.  Placeholder for future use.
                 */
                // @ts-ignore
                readonly TYPE_DOUBLE: number /*int*/
                /**
                 * Tag for undefined data.
                 */
                // @ts-ignore
                readonly TYPE_UNDEFINED: number /*int*/
                /**
                 * The data type of this DataBuffer.
                 */
                // @ts-ignore
                dataType: number /*int*/
                /**
                 * The number of banks in this DataBuffer.
                 */
                // @ts-ignore
                banks: number /*int*/
                /**
                 * Offset into default (first) bank from which to get the first element.
                 */
                // @ts-ignore
                offset: number /*int*/
                /**
                 * Usable size of all banks.
                 */
                // @ts-ignore
                size: number /*int*/
                /**
                 * Offsets into all banks.
                 */
                // @ts-ignore
                offsets: number /*int*/[]
                /**
                 * Returns the size (in bits) of the data type, given a datatype tag.
                 * @param type the value of one of the defined datatype tags
                 * @return the size of the data type
                 * @throws IllegalArgumentException if <code>type</code> is less than
                 *          zero or greater than {#link #TYPE_DOUBLE}
                 */
                // @ts-ignore
                getDataTypeSize(type: number /*int*/): int
                /**
                 * Returns the data type of this DataBuffer.
                 * @return the data type of this <code>DataBuffer</code>.
                 */
                // @ts-ignore
                getDataType(): int
                /**
                 * Returns the size (in array elements) of all banks.
                 * @return the size of all banks.
                 */
                // @ts-ignore
                getSize(): int
                /**
                 * Returns the offset of the default bank in array elements.
                 * @return the offset of the default bank.
                 */
                // @ts-ignore
                getOffset(): int
                /**
                 * Returns the offsets (in array elements) of all the banks.
                 * @return the offsets of all banks.
                 */
                // @ts-ignore
                getOffsets(): int[]
                /**
                 * Returns the number of banks in this DataBuffer.
                 * @return the number of banks.
                 */
                // @ts-ignore
                getNumBanks(): int
                /**
                 * Returns the requested data array element from the first (default) bank
                 * as an integer.
                 * @param i the index of the requested data array element
                 * @return the data array element at the specified index.
                 * @see #setElem(int, int)
                 * @see #setElem(int, int, int)
                 */
                // @ts-ignore
                getElem(i: number /*int*/): int
                /**
                 * Returns the requested data array element from the specified bank
                 * as an integer.
                 * @param bank the specified bank
                 * @param i the index of the requested data array element
                 * @return the data array element at the specified index from the
                 *          specified bank at the specified index.
                 * @see #setElem(int, int)
                 * @see #setElem(int, int, int)
                 */
                // @ts-ignore
                abstract getElem(bank: number /*int*/, i: number /*int*/): int
                /**
                 * Sets the requested data array element in the first (default) bank
                 * from the given integer.
                 * @param i the specified index into the data array
                 * @param val the data to set the element at the specified index in
                 *  the data array
                 * @see #getElem(int)
                 * @see #getElem(int, int)
                 */
                // @ts-ignore
                setElem(i: number /*int*/, val: number /*int*/): void
                /**
                 * Sets the requested data array element in the specified bank
                 * from the given integer.
                 * @param bank the specified bank
                 * @param i the specified index into the data array
                 * @param val  the data to set the element in the specified bank
                 *  at the specified index in the data array
                 * @see #getElem(int)
                 * @see #getElem(int, int)
                 */
                // @ts-ignore
                abstract setElem(bank: number /*int*/, i: number /*int*/, val: number /*int*/): void
                /**
                 * Returns the requested data array element from the first (default) bank
                 * as a float.  The implementation in this class is to cast getElem(i)
                 * to a float.  Subclasses may override this method if another
                 * implementation is needed.
                 * @param i the index of the requested data array element
                 * @return a float value representing the data array element at the
                 *   specified index.
                 * @see #setElemFloat(int, float)
                 * @see #setElemFloat(int, int, float)
                 */
                // @ts-ignore
                getElemFloat(i: number /*int*/): float
                /**
                 * Returns the requested data array element from the specified bank
                 * as a float.  The implementation in this class is to cast
                 * {@link #getElem(int, int)}
                 * to a float.  Subclasses can override this method if another
                 * implementation is needed.
                 * @param bank the specified bank
                 * @param i the index of the requested data array element
                 * @return a float value representing the data array element from the
                 *  specified bank at the specified index.
                 * @see #setElemFloat(int, float)
                 * @see #setElemFloat(int, int, float)
                 */
                // @ts-ignore
                getElemFloat(bank: number /*int*/, i: number /*int*/): float
                /**
                 * Sets the requested data array element in the first (default) bank
                 * from the given float.  The implementation in this class is to cast
                 * val to an int and call {@link #setElem(int, int)}.  Subclasses
                 * can override this method if another implementation is needed.
                 * @param i the specified index
                 * @param val the value to set the element at the specified index in
                 *  the data array
                 * @see #getElemFloat(int)
                 * @see #getElemFloat(int, int)
                 */
                // @ts-ignore
                setElemFloat(i: number /*int*/, val: number /*float*/): void
                /**
                 * Sets the requested data array element in the specified bank
                 * from the given float.  The implementation in this class is to cast
                 * val to an int and call {@link #setElem(int, int)}.  Subclasses can
                 * override this method if another implementation is needed.
                 * @param bank the specified bank
                 * @param i the specified index
                 * @param val the value to set the element in the specified bank at
                 *  the specified index in the data array
                 * @see #getElemFloat(int)
                 * @see #getElemFloat(int, int)
                 */
                // @ts-ignore
                setElemFloat(bank: number /*int*/, i: number /*int*/, val: number /*float*/): void
                /**
                 * Returns the requested data array element from the first (default) bank
                 * as a double.  The implementation in this class is to cast
                 * {@link #getElem(int)}
                 * to a double.  Subclasses can override this method if another
                 * implementation is needed.
                 * @param i the specified index
                 * @return a double value representing the element at the specified
                 *  index in the data array.
                 * @see #setElemDouble(int, double)
                 * @see #setElemDouble(int, int, double)
                 */
                // @ts-ignore
                getElemDouble(i: number /*int*/): double
                /**
                 * Returns the requested data array element from the specified bank as
                 * a double.  The implementation in this class is to cast getElem(bank, i)
                 * to a double.  Subclasses may override this method if another
                 * implementation is needed.
                 * @param bank the specified bank
                 * @param i the specified index
                 * @return a double value representing the element from the specified
                 *  bank at the specified index in the data array.
                 * @see #setElemDouble(int, double)
                 * @see #setElemDouble(int, int, double)
                 */
                // @ts-ignore
                getElemDouble(bank: number /*int*/, i: number /*int*/): double
                /**
                 * Sets the requested data array element in the first (default) bank
                 * from the given double.  The implementation in this class is to cast
                 * val to an int and call {@link #setElem(int, int)}.  Subclasses can
                 * override this method if another implementation is needed.
                 * @param i the specified index
                 * @param val the value to set the element at the specified index
                 *  in the data array
                 * @see #getElemDouble(int)
                 * @see #getElemDouble(int, int)
                 */
                // @ts-ignore
                setElemDouble(i: number /*int*/, val: number /*double*/): void
                /**
                 * Sets the requested data array element in the specified bank
                 * from the given double.  The implementation in this class is to cast
                 * val to an int and call {@link #setElem(int, int)}.  Subclasses can
                 * override this method if another implementation is needed.
                 * @param bank the specified bank
                 * @param i the specified index
                 * @param val the value to set the element in the specified bank
                 *  at the specified index of the data array
                 * @see #getElemDouble(int)
                 * @see #getElemDouble(int, int)
                 */
                // @ts-ignore
                setElemDouble(bank: number /*int*/, i: number /*int*/, val: number /*double*/): void
            }
        }
    }
}
