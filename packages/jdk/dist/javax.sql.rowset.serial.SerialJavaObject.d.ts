declare namespace javax {
    namespace sql {
        namespace rowset {
            namespace serial {
                /**
                 * A serializable mapping in the Java programming language of an SQL
                 * <code>JAVA_OBJECT</code> value. Assuming the Java object
                 * implements the <code>Serializable</code> interface, this class simply wraps the
                 * serialization process.
                 * <P>
                 * If however, the serialization is not possible because
                 * the Java object is not immediately serializable, this class will
                 * attempt to serialize all non-static members to permit the object
                 * state to be serialized.
                 * Static or transient fields cannot be serialized; an attempt to serialize
                 * them will result in a <code>SerialException</code> object being thrown.
                 * <h3> Thread safety </h3>
                 * A SerialJavaObject is not safe for use by multiple concurrent threads.  If a
                 * SerialJavaObject is to be used by more than one thread then access to the
                 * SerialJavaObject should be controlled by appropriate synchronization.
                 * @author Jonathan Bruce
                 */
                // @ts-ignore
                class SerialJavaObject extends java.lang.Object implements java.io.Serializable, java.lang.Cloneable {
                    /**
                     * Constructor for <code>SerialJavaObject</code> helper class.
                     * <p>
                     * @param obj the Java <code>Object</code> to be serialized
                     * @throws SerialException if the object is found not to be serializable
                     */
                    // @ts-ignore
                    constructor(obj: any)
                    /**
                     * Returns an <code>Object</code> that is a copy of this <code>SerialJavaObject</code>
                     * object.
                     * @return a copy of this <code>SerialJavaObject</code> object as an
                     *          <code>Object</code> in the Java programming language
                     * @throws SerialException if the instance is corrupt
                     */
                    // @ts-ignore
                    getObject(): java.lang.Object
                    /**
                     * Returns an array of <code>Field</code> objects that contains each
                     * field of the object that this helper class is serializing.
                     * @return an array of <code>Field</code> objects
                     * @throws SerialException if an error is encountered accessing
                     *  the serialized object
                     * @throws SecurityException  If a security manager, <i>s</i>, is present
                     *  and the caller's class loader is not the same as or an
                     *  ancestor of the class loader for the class of the
                     *  {#linkplain #getObject object} being serialized
                     *  and invocation of {@link SecurityManager#checkPackageAccess
                     *  s.checkPackageAccess()} denies access to the package
                     *  of that class.
                     * @see Class#getFields
                     */
                    // @ts-ignore
                    getFields(): java.lang.reflect.Field[]
                    /**
                     * Compares this SerialJavaObject to the specified object.
                     * The result is {@code true} if and only if the argument
                     * is not {@code null} and is a {@code SerialJavaObject}
                     * object that is identical to this object
                     * @param o The object to compare this {#code SerialJavaObject} against
                     * @return {#code true} if the given object represents a {@code SerialJavaObject}
                     *           equivalent to this SerialJavaObject, {@code false} otherwise
                     */
                    // @ts-ignore
                    equals(o: any): boolean
                    /**
                     * Returns a hash code for this SerialJavaObject. The hash code for a
                     * {@code SerialJavaObject} object is taken as the hash code of
                     * the {@code Object} it stores
                     * @return a hash code value for this object.
                     */
                    // @ts-ignore
                    hashCode(): int
                    /**
                     * Returns a clone of this {@code SerialJavaObject}.
                     * @return a clone of this SerialJavaObject
                     */
                    // @ts-ignore
                    clone(): java.lang.Object
                }
            }
        }
    }
}
