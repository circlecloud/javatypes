declare namespace java {
    namespace awt {
        namespace image {
            /**
             * This class defines a lookup table object.  The output of a
             * lookup operation using an object of this class is interpreted
             * as an unsigned short quantity.  The lookup table contains short
             * data arrays for one or more bands (or components) of an image,
             * and it contains an offset which will be subtracted from the
             * input values before indexing the arrays.  This allows an array
             * smaller than the native data size to be provided for a
             * constrained input.  If there is only one array in the lookup
             * table, it will be applied to all bands.
             * @see ByteLookupTable
             * @see LookupOp
             */
            // @ts-ignore
            class ShortLookupTable extends java.awt.image.LookupTable {
                /**
                 * Constructs a ShortLookupTable object from an array of short
                 * arrays representing a lookup table for each
                 * band.  The offset will be subtracted from the input
                 * values before indexing into the arrays.  The number of
                 * bands is the length of the data argument.  The
                 * data array for each band is stored as a reference.
                 * @param offset the value subtracted from the input values
                 *         before indexing into the arrays
                 * @param data an array of short arrays representing a lookup
                 *         table for each band
                 */
                // @ts-ignore
                constructor(offset: number /*int*/, data: number /*short*/[][])
                /**
                 * Constructs a ShortLookupTable object from an array
                 * of shorts representing a lookup table for each
                 * band.  The offset will be subtracted from the input
                 * values before indexing into the array.  The
                 * data array is stored as a reference.
                 * @param offset the value subtracted from the input values
                 *         before indexing into the arrays
                 * @param data an array of shorts
                 */
                // @ts-ignore
                constructor(offset: number /*int*/, data: number /*short*/[])
                /**
                 * Returns the lookup table data by reference.  If this ShortLookupTable
                 * was constructed using a single short array, the length of the returned
                 * array is one.
                 * @return ShortLookupTable data array.
                 */
                // @ts-ignore
                getTable(): short[][]
                /**
                 * Returns an array of samples of a pixel, translated with the lookup
                 * table. The source and destination array can be the same array.
                 * Array <code>dst</code> is returned.
                 * @param src the source array.
                 * @param dst the destination array. This array must be at least as
                 *          long as <code>src</code>.  If <code>dst</code> is
                 *          <code>null</code>, a new array will be allocated having the
                 *          same length as <code>src</code>.
                 * @return the array <code>dst</code>, an <code>int</code> array of
                 *          samples.
                 * @exception ArrayIndexOutOfBoundsException if <code>src</code> is
                 *             longer than <code>dst</code> or if for any element
                 *             <code>i</code> of <code>src</code>,
                 *             {#code (src[i]&0xffff)-offset} is either less than
                 *             zero or greater than or equal to the length of the
                 *             lookup table for any band.
                 */
                // @ts-ignore
                lookupPixel(src: number /*int*/[], dst: number /*int*/[]): int[]
                /**
                 * Returns an array of samples of a pixel, translated with the lookup
                 * table. The source and destination array can be the same array.
                 * Array <code>dst</code> is returned.
                 * @param src the source array.
                 * @param dst the destination array. This array must be at least as
                 *          long as <code>src</code>.  If <code>dst</code> is
                 *          <code>null</code>, a new array will be allocated having the
                 *          same length as <code>src</code>.
                 * @return the array <code>dst</code>, an <code>int</code> array of
                 *          samples.
                 * @exception ArrayIndexOutOfBoundsException if <code>src</code> is
                 *             longer than <code>dst</code> or if for any element
                 *             <code>i</code> of <code>src</code>,
                 *             {#code (src[i]&0xffff)-offset} is either less than
                 *             zero or greater than or equal to the length of the
                 *             lookup table for any band.
                 */
                // @ts-ignore
                lookupPixel(src: number /*short*/[], dst: number /*short*/[]): short[]
            }
        }
    }
}
