declare namespace java {
    namespace io {
        /**
         * Serialization's descriptor for classes.  It contains the name and
         * serialVersionUID of the class.  The ObjectStreamClass for a specific class
         * loaded in this Java VM can be found/created using the lookup method.
         * <p>The algorithm to compute the SerialVersionUID is described in
         * <a href="../../../platform/serialization/spec/class.html#4100">Object
         * Serialization Specification, Section 4.6, Stream Unique Identifiers</a>.
         * @author Mike Warres
         * @author Roger Riggs
         * @see ObjectStreamField
         * @see <a href="../../../platform/serialization/spec/class.html">Object Serialization Specification, Section 4, Class Descriptors</a>
         * @since JDK1.1
         */
        // @ts-ignore
        class ObjectStreamClass extends java.lang.Object implements java.io.Serializable {
            /**
             * serialPersistentFields value indicating no serializable fields
             */
            // @ts-ignore
            readonly NO_FIELDS: java.io.ObjectStreamField[]
            /**
             * Find the descriptor for a class that can be serialized.  Creates an
             * ObjectStreamClass instance if one does not exist yet for class. Null is
             * returned if the specified class does not implement java.io.Serializable
             * or java.io.Externalizable.
             * @param cl class for which to get the descriptor
             * @return the class descriptor for the specified class
             */
            // @ts-ignore
            lookup(cl: java.lang.Class<any>): java.io.ObjectStreamClass
            /**
             * Returns the descriptor for any class, regardless of whether it
             * implements {@link Serializable}.
             * @param cl class for which to get the descriptor
             * @return the class descriptor for the specified class
             * @since 1.6
             */
            // @ts-ignore
            lookupAny(cl: java.lang.Class<any>): java.io.ObjectStreamClass
            /**
             * Returns the name of the class described by this descriptor.
             * This method returns the name of the class in the format that
             * is used by the {@link Class#getName} method.
             * @return a string representing the name of the class
             */
            // @ts-ignore
            getName(): java.lang.String
            /**
             * Return the serialVersionUID for this class.  The serialVersionUID
             * defines a set of classes all with the same name that have evolved from a
             * common root class and agree to be serialized and deserialized using a
             * common format.  NonSerializable classes have a serialVersionUID of 0L.
             * @return the SUID of the class described by this descriptor
             */
            // @ts-ignore
            getSerialVersionUID(): long
            /**
             * Return the class in the local VM that this version is mapped to.  Null
             * is returned if there is no corresponding local class.
             * @return the <code>Class</code> instance that this descriptor represents
             */
            // @ts-ignore
            forClass(): java.lang.Class<?>
            /**
             * Return an array of the fields of this serializable class.
             * @return an array containing an element for each persistent field of
             *           this class. Returns an array of length zero if there are no
             *           fields.
             * @since 1.2
             */
            // @ts-ignore
            getFields(): java.io.ObjectStreamField[]
            /**
             * Get the field of this class by name.
             * @param name the name of the data field to look for
             * @return The ObjectStreamField object of the named field or null if
             *           there is no such named field.
             */
            // @ts-ignore
            getField(name: string): java.io.ObjectStreamField
            /**
             * Return a string describing this ObjectStreamClass.
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
