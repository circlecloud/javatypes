declare namespace java {
    namespace io {
        /**
         * A description of a Serializable field from a Serializable class.  An array
         * of ObjectStreamFields is used to declare the Serializable fields of a class.
         * @author Mike Warres
         * @author Roger Riggs
         * @see ObjectStreamClass
         * @since 1.2
         */
        // @ts-ignore
        class ObjectStreamField extends java.lang.Object implements java.lang.Comparable<java.lang.Object | any> {
            /**
             * Create a Serializable field with the specified type.  This field should
             * be documented with a <code>serialField</code> tag.
             * @param name the name of the serializable field
             * @param type the <code>Class</code> object of the serializable field
             */
            // @ts-ignore
            constructor(name: java.lang.String | string, type: java.lang.Class<any>)
            /**
             * Creates an ObjectStreamField representing a serializable field with the
             * given name and type.  If unshared is false, values of the represented
             * field are serialized and deserialized in the default manner--if the
             * field is non-primitive, object values are serialized and deserialized as
             * if they had been written and read by calls to writeObject and
             * readObject.  If unshared is true, values of the represented field are
             * serialized and deserialized as if they had been written and read by
             * calls to writeUnshared and readUnshared.
             * @param name field name
             * @param type field type
             * @param unshared if false, write/read field values in the same manner
             *           as writeObject/readObject; if true, write/read in the same
             *           manner as writeUnshared/readUnshared
             * @since 1.4
             */
            // @ts-ignore
            constructor(name: java.lang.String | string, type: java.lang.Class<any>, unshared: boolean)
            /**
             * Get the name of this field.
             * @return a <code>String</code> representing the name of the serializable
             *           field
             */
            // @ts-ignore
            public getName(): string
            /**
             * Get the type of the field.  If the type is non-primitive and this
             * <code>ObjectStreamField</code> was obtained from a deserialized {@link
             * ObjectStreamClass} instance, then <code>Object.class</code> is returned.
             * Otherwise, the <code>Class</code> object for the type of the field is
             * returned.
             * @return a <code>Class</code> object representing the type of the
             *           serializable field
             */
            // @ts-ignore
            public getType(): java.lang.Class<any>
            /**
             * Returns character encoding of field type.  The encoding is as follows:
             * <blockquote><pre>
             * B            byte
             * C            char
             * D            double
             * F            float
             * I            int
             * J            long
             * L            class or interface
             * S            short
             * Z            boolean
             * [            array
             * </pre></blockquote>
             * @return the typecode of the serializable field
             */
            // @ts-ignore
            public getTypeCode(): string
            /**
             * Return the JVM type signature.
             * @return null if this field has a primitive type.
             */
            // @ts-ignore
            public getTypeString(): string
            /**
             * Offset of field within instance data.
             * @return the offset of this field
             * @see #setOffset
             */
            // @ts-ignore
            public getOffset(): number /*int*/
            /**
             * Offset within instance data.
             * @param offset the offset of the field
             * @see #getOffset
             */
            // @ts-ignore
            setOffset(offset: number /*int*/): void
            /**
             * Return true if this field has a primitive type.
             * @return true if and only if this field corresponds to a primitive type
             */
            // @ts-ignore
            public isPrimitive(): boolean
            /**
             * Returns boolean value indicating whether or not the serializable field
             * represented by this ObjectStreamField instance is unshared.
             * @return {#code true} if this field is unshared
             * @since 1.4
             */
            // @ts-ignore
            public isUnshared(): boolean
            /**
             * Compare this field with another <code>ObjectStreamField</code>.  Return
             * -1 if this is smaller, 0 if equal, 1 if greater.  Types that are
             * primitives are "smaller" than object types.  If equal, the field names
             * are compared.
             */
            // @ts-ignore
            public compareTo(obj: java.lang.Object | any): number /*int*/
            /**
             * Return a string that describes this field.
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
