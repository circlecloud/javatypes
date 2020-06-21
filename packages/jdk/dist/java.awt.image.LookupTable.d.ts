declare namespace java {
    namespace awt {
        namespace image {
            /**
             * This abstract class defines a lookup table object.  ByteLookupTable
             * and ShortLookupTable are subclasses, which
             * contain byte and short data, respectively.  A lookup table
             * contains data arrays for one or more bands (or components) of an image
             * (for example, separate arrays for R, G, and B),
             * and it contains an offset which will be subtracted from the
             * input values before indexing into the arrays.  This allows an array
             * smaller than the native data size to be provided for a
             * constrained input.  If there is only one array in the lookup
             * table, it will be applied to all bands.  All arrays must be the
             * same size.
             * @see ByteLookupTable
             * @see ShortLookupTable
             * @see LookupOp
             */
            // @ts-ignore
            abstract class LookupTable extends java.lang.Object {
                /**
                 * Constructs a new LookupTable from the number of components and an offset
                 * into the lookup table.
                 * @param offset the offset to subtract from input values before indexing
                 *         into the data arrays for this <code>LookupTable</code>
                 * @param numComponents the number of data arrays in this
                 *         <code>LookupTable</code>
                 * @throws IllegalArgumentException if <code>offset</code> is less than 0
                 *          or if <code>numComponents</code> is less than 1
                 */
                // @ts-ignore
                constructor(offset: number /*int*/, numComponents: number /*int*/)
                /**
                 * Returns the number of components in the lookup table.
                 * @return the number of components in this <code>LookupTable</code>.
                 */
                // @ts-ignore
                public getNumComponents(): number /*int*/
                /**
                 * Returns the offset.
                 * @return the offset of this <code>LookupTable</code>.
                 */
                // @ts-ignore
                public getOffset(): number /*int*/
                /**
                 * Returns an <code>int</code> array of components for
                 * one pixel.  The <code>dest</code> array contains the
                 * result of the lookup and is returned.  If dest is
                 * <code>null</code>, a new array is allocated.  The
                 * source and destination can be equal.
                 * @param src the source array of components of one pixel
                 * @param dest the destination array of components for one pixel,
                 *         translated with this <code>LookupTable</code>
                 * @return an <code>int</code> array of components for one
                 *          pixel.
                 */
                // @ts-ignore
                public abstract lookupPixel(src: number /*int*/[], dest: number /*int*/[]): number /*int*/[]
            }
        }
    }
}
