declare namespace java {
    namespace rmi {
        namespace server {
            /**
             * An <code>ObjID</code> is used to identify a remote object exported
             * to an RMI runtime.  When a remote object is exported, it is assigned
             * an object identifier either implicitly or explicitly, depending on
             * the API used to export.
             * <p>The {@link #ObjID()} constructor can be used to generate a unique
             * object identifier.  Such an <code>ObjID</code> is unique over time
             * with respect to the host it is generated on.
             * The {@link #ObjID(int)} constructor can be used to create a
             * "well-known" object identifier.  The scope of a well-known
             * <code>ObjID</code> depends on the RMI runtime it is exported to.
             * <p>An <code>ObjID</code> instance contains an object number (of type
             * <code>long</code>) and an address space identifier (of type
             * {@link UID}).  In a unique <code>ObjID</code>, the address space
             * identifier is unique with respect to a given host over time.  In a
             * well-known <code>ObjID</code>, the address space identifier is
             * equivalent to one returned by invoking the {@link UID#UID(short)}
             * constructor with the value zero.
             * <p>If the system property <code>java.rmi.server.randomIDs</code>
             * is defined to equal the string <code>"true"</code> (case insensitive),
             * then the {@link #ObjID()} constructor will use a cryptographically
             * strong random number generator to choose the object number of the
             * returned <code>ObjID</code>.
             * @author Ann Wollrath
             * @author Peter Jones
             * @since JDK1.1
             */
            // @ts-ignore
            class ObjID extends java.lang.Object implements java.io.Serializable {
                /**
                 * Generates a unique object identifier.
                 * <p>If the system property <code>java.rmi.server.randomIDs</code>
                 * is defined to equal the string <code>"true"</code> (case insensitive),
                 * then this constructor will use a cryptographically
                 * strong random number generator to choose the object number of the
                 * returned <code>ObjID</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a "well-known" object identifier.
                 * <p>An <code>ObjID</code> created via this constructor will not
                 * clash with any <code>ObjID</code>s generated via the no-arg
                 * constructor.
                 * @param objNum object number for well-known object identifier
                 */
                // @ts-ignore
                constructor(objNum: number /*int*/)
                /**
                 * Object number for well-known <code>ObjID</code> of the registry.
                 */
                // @ts-ignore
                readonly REGISTRY_ID: number /*int*/
                /**
                 * Object number for well-known <code>ObjID</code> of the activator.
                 */
                // @ts-ignore
                readonly ACTIVATOR_ID: number /*int*/
                /**
                 * Object number for well-known <code>ObjID</code> of
                 * the distributed garbage collector.
                 */
                // @ts-ignore
                readonly DGC_ID: number /*int*/
                /**
                 * Marshals a binary representation of this <code>ObjID</code> to
                 * an <code>ObjectOutput</code> instance.
                 * <p>Specifically, this method first invokes the given stream's
                 * {@link ObjectOutput#writeLong(long)} method with this object
                 * identifier's object number, and then it writes its address
                 * space identifier by invoking its {@link UID#write(DataOutput)}
                 * method with the stream.
                 * @param out the <code>ObjectOutput</code> instance to write
                 *  this <code>ObjID</code> to
                 * @throws IOException if an I/O error occurs while performing
                 *  this operation
                 */
                // @ts-ignore
                write(out: java.io.ObjectOutput): void
                /**
                 * Constructs and returns a new <code>ObjID</code> instance by
                 * unmarshalling a binary representation from an
                 * <code>ObjectInput</code> instance.
                 * <p>Specifically, this method first invokes the given stream's
                 * {@link ObjectInput#readLong()} method to read an object number,
                 * then it invokes {@link UID#read(DataInput)} with the
                 * stream to read an address space identifier, and then it
                 * creates and returns a new <code>ObjID</code> instance that
                 * contains the object number and address space identifier that
                 * were read from the stream.
                 * @param in the <code>ObjectInput</code> instance to read
                 *  <code>ObjID</code> from
                 * @return unmarshalled <code>ObjID</code> instance
                 * @throws IOException if an I/O error occurs while performing
                 *  this operation
                 */
                // @ts-ignore
                read(input: java.io.ObjectInput): java.rmi.server.ObjID
                /**
                 * Returns the hash code value for this object identifier, the
                 * object number.
                 * @return the hash code value for this object identifier
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * Compares the specified object with this <code>ObjID</code> for
                 * equality.
                 * This method returns <code>true</code> if and only if the
                 * specified object is an <code>ObjID</code> instance with the same
                 * object number and address space identifier as this one.
                 * @param obj the object to compare this <code>ObjID</code> to
                 * @return <code>true</code> if the given object is equivalent to
                 *  this one, and <code>false</code> otherwise
                 */
                // @ts-ignore
                equals(obj: any): boolean
                /**
                 * Returns a string representation of this object identifier.
                 * @return a string representation of this object identifier
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
