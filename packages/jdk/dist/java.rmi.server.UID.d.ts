declare namespace java {
    namespace rmi {
        namespace server {
            /**
             * A <code>UID</code> represents an identifier that is unique over time
             * with respect to the host it is generated on, or one of 2<sup>16</sup>
             * "well-known" identifiers.
             * <p>The {@link #UID()} constructor can be used to generate an
             * identifier that is unique over time with respect to the host it is
             * generated on.  The {@link #UID(short)} constructor can be used to
             * create one of 2<sup>16</sup> well-known identifiers.
             * <p>A <code>UID</code> instance contains three primitive values:
             * <ul>
             * <li><code>unique</code>, an <code>int</code> that uniquely identifies
             * the VM that this <code>UID</code> was generated in, with respect to its
             * host and at the time represented by the <code>time</code> value (an
             * example implementation of the <code>unique</code> value would be a
             * process identifier),
             * or zero for a well-known <code>UID</code>
             * <li><code>time</code>, a <code>long</code> equal to a time (as returned
             * by {@link System#currentTimeMillis()}) at which the VM that this
             * <code>UID</code> was generated in was alive,
             * or zero for a well-known <code>UID</code>
             * <li><code>count</code>, a <code>short</code> to distinguish
             * <code>UID</code>s generated in the same VM with the same
             * <code>time</code> value
             * </ul>
             * <p>An independently generated <code>UID</code> instance is unique
             * over time with respect to the host it is generated on as long as
             * the host requires more than one millisecond to reboot and its system
             * clock is never set backward.  A globally unique identifier can be
             * constructed by pairing a <code>UID</code> instance with a unique host
             * identifier, such as an IP address.
             * @author Ann Wollrath
             * @author Peter Jones
             * @since JDK1.1
             */
            // @ts-ignore
            class UID extends java.lang.Object implements java.io.Serializable {
                /**
                 * Generates a <code>UID</code> that is unique over time with
                 * respect to the host that it was generated on.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a "well-known" <code>UID</code>.
                 * There are 2<sup>16</sup> possible such well-known ids.
                 * <p>A <code>UID</code> created via this constructor will not
                 * clash with any <code>UID</code>s generated via the no-arg
                 * constructor.
                 * @param num number for well-known <code>UID</code>
                 */
                // @ts-ignore
                constructor(num: number /*short*/)
                /**
                 * Returns the hash code value for this <code>UID</code>.
                 * @return the hash code value for this <code>UID</code>
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Compares the specified object with this <code>UID</code> for
                 * equality.
                 * This method returns <code>true</code> if and only if the
                 * specified object is a <code>UID</code> instance with the same
                 * <code>unique</code>, <code>time</code>, and <code>count</code>
                 * values as this one.
                 * @param obj the object to compare this <code>UID</code> to
                 * @return <code>true</code> if the given object is equivalent to
                 *  this one, and <code>false</code> otherwise
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Returns a string representation of this <code>UID</code>.
                 * @return a string representation of this <code>UID</code>
                 */
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Marshals a binary representation of this <code>UID</code> to
                 * a <code>DataOutput</code> instance.
                 * <p>Specifically, this method first invokes the given stream's
                 * {@link DataOutput#writeInt(int)} method with this <code>UID</code>'s
                 * <code>unique</code> value, then it invokes the stream's
                 * {@link DataOutput#writeLong(long)} method with this <code>UID</code>'s
                 * <code>time</code> value, and then it invokes the stream's
                 * {@link DataOutput#writeShort(int)} method with this <code>UID</code>'s
                 * <code>count</code> value.
                 * @param out the <code>DataOutput</code> instance to write
                 *  this <code>UID</code> to
                 * @throws IOException if an I/O error occurs while performing
                 *  this operation
                 */
                // @ts-ignore
                write(out: java.io.DataOutput): void
                /**
                 * Constructs and returns a new <code>UID</code> instance by
                 * unmarshalling a binary representation from an
                 * <code>DataInput</code> instance.
                 * <p>Specifically, this method first invokes the given stream's
                 * {@link DataInput#readInt()} method to read a <code>unique</code> value,
                 * then it invoke's the stream's
                 * {@link DataInput#readLong()} method to read a <code>time</code> value,
                 * then it invoke's the stream's
                 * {@link DataInput#readShort()} method to read a <code>count</code> value,
                 * and then it creates and returns a new <code>UID</code> instance
                 * that contains the <code>unique</code>, <code>time</code>, and
                 * <code>count</code> values that were read from the stream.
                 * @param in the <code>DataInput</code> instance to read
                 *  <code>UID</code> from
                 * @return unmarshalled <code>UID</code> instance
                 * @throws IOException if an I/O error occurs while performing
                 *  this operation
                 */
                // @ts-ignore
                read(input: java.io.DataInput): java.rmi.server.UID
            }
        }
    }
}
