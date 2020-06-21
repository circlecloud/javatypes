declare namespace javax {
    namespace imageio {
        namespace stream {
            /**
             * A class representing a mutable reference to an array of bytes and
             * an offset and length within that array.  <code>IIOByteBuffer</code>
             * is used by <code>ImageInputStream</code> to supply a sequence of bytes
             * to the caller, possibly with fewer copies than using the conventional
             * <code>read</code> methods that take a user-supplied byte array.
             * <p> The byte array referenced by an <code>IIOByteBuffer</code> will
             * generally be part of an internal data structure belonging to an
             * <code>ImageReader</code> implementation; its contents should be
             * considered read-only and must not be modified.
             */
            // @ts-ignore
            class IIOByteBuffer extends java.lang.Object {
                /**
                 * Constructs an <code>IIOByteBuffer</code> that references a
                 * given byte array, offset, and length.
                 * @param data a byte array.
                 * @param offset an int offset within the array.
                 * @param length an int specifying the length of the data of
                 *  interest within byte array, in bytes.
                 */
                // @ts-ignore
                constructor(data: number /*byte*/[], offset: number /*int*/, length: number /*int*/)
                /**
                 * Returns a reference to the byte array.  The returned value should
                 * be treated as read-only, and only the portion specified by the
                 * values of <code>getOffset</code> and <code>getLength</code> should
                 * be used.
                 * @return a byte array reference.
                 * @see #getOffset
                 * @see #getLength
                 * @see #setData
                 */
                // @ts-ignore
                public getData(): number /*byte*/[]
                /**
                 * Updates the array reference that will be returned by subsequent calls
                 * to the <code>getData</code> method.
                 * @param data a byte array reference containing the new data value.
                 * @see #getData
                 */
                // @ts-ignore
                public setData(data: number /*byte*/[]): void
                /**
                 * Returns the offset within the byte array returned by
                 * <code>getData</code> at which the data of interest start.
                 * @return an int offset.
                 * @see #getData
                 * @see #getLength
                 * @see #setOffset
                 */
                // @ts-ignore
                public getOffset(): number /*int*/
                /**
                 * Updates the value that will be returned by subsequent calls
                 * to the <code>getOffset</code> method.
                 * @param offset an int containing the new offset value.
                 * @see #getOffset
                 */
                // @ts-ignore
                public setOffset(offset: number /*int*/): void
                /**
                 * Returns the length of the data of interest within the byte
                 * array returned by <code>getData</code>.
                 * @return an int length.
                 * @see #getData
                 * @see #getOffset
                 * @see #setLength
                 */
                // @ts-ignore
                public getLength(): number /*int*/
                /**
                 * Updates the value that will be returned by subsequent calls
                 * to the <code>getLength</code> method.
                 * @param length an int containing the new length value.
                 * @see #getLength
                 */
                // @ts-ignore
                public setLength(length: number /*int*/): void
            }
        }
    }
}
