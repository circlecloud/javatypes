declare namespace javax {
    namespace management {
        /**
         * Represents an MBean attribute by associating its name with its value.
         * The MBean server and other objects use this class to get and set attributes values.
         * @since 1.5
         */
        // @ts-ignore
        class Attribute extends java.lang.Object implements java.io.Serializable {
            /**
             * Constructs an Attribute object which associates the given attribute name with the given value.
             * @param name A String containing the name of the attribute to be created. Cannot be null.
             * @param value The Object which is assigned to the attribute. This object must be of the same type as the attribute.
             */
            // @ts-ignore
            constructor(name: java.lang.String | string, value: java.lang.Object | any)
            /**
             * Returns a String containing the  name of the attribute.
             * @return the name of the attribute.
             */
            // @ts-ignore
            public getName(): string
            /**
             * Returns an Object that is the value of this attribute.
             * @return the value of the attribute.
             */
            // @ts-ignore
            public getValue(): any
            /**
             * Compares the current Attribute Object with another Attribute Object.
             * @param object  The Attribute that the current Attribute is to be compared with.
             * @return True if the two Attribute objects are equal, otherwise false.
             */
            // @ts-ignore
            public equals(object: java.lang.Object | any): boolean
            /**
             * Returns a hash code value for this attribute.
             * @return a hash code value for this attribute.
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Returns a String object representing this Attribute's value. The format of this
             * string is not specified, but users can expect that two Attributes return the
             * same string if and only if they are equal.
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
