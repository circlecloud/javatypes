declare namespace javax {
    namespace activation {
        /**
         * A Multipurpose Internet Mail Extension (MIME) type, as defined
         * in RFC 2045 and 2046.
         * @since 1.6
         */
        // @ts-ignore
        class MimeType extends java.lang.Object implements java.io.Externalizable {
            /**
             * Default constructor.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructor that builds a MimeType from a String.
             * @param rawdata   the MIME type string
             */
            // @ts-ignore
            constructor(rawdata: java.lang.String | string)
            /**
             * Constructor that builds a MimeType with the given primary and sub type
             * but has an empty parameter list.
             * @param primary   the primary MIME type
             * @param sub       the MIME sub-type
             * @exception MimeTypeParseException  if the primary type or subtype
             *                                           is not a valid token
             */
            // @ts-ignore
            constructor(primary: java.lang.String | string, sub: java.lang.String | string)
            /**
             * Retrieve the primary type of this object.
             * @return the primary MIME type
             */
            // @ts-ignore
            public getPrimaryType(): string
            /**
             * Set the primary type for this object to the given String.
             * @param primary   the primary MIME type
             * @exception MimeTypeParseException  if the primary type
             *                                           is not a valid token
             */
            // @ts-ignore
            public setPrimaryType(primary: java.lang.String | string): void
            /**
             * Retrieve the subtype of this object.
             * @return the MIME subtype
             */
            // @ts-ignore
            public getSubType(): string
            /**
             * Set the subtype for this object to the given String.
             * @param sub       the MIME subtype
             * @exception MimeTypeParseException  if the subtype
             *                                           is not a valid token
             */
            // @ts-ignore
            public setSubType(sub: java.lang.String | string): void
            /**
             * Retrieve this object's parameter list.
             * @return a MimeTypeParameterList object representing the parameters
             */
            // @ts-ignore
            public getParameters(): javax.activation.MimeTypeParameterList
            /**
             * Retrieve the value associated with the given name, or null if there
             * is no current association.
             * @param name      the parameter name
             * @return the paramter's value
             */
            // @ts-ignore
            public getParameter(name: java.lang.String | string): string
            /**
             * Set the value to be associated with the given name, replacing
             * any previous association.
             * @param name      the parameter name
             * @param value     the paramter's value
             */
            // @ts-ignore
            public setParameter(name: java.lang.String | string, value: java.lang.String | string): void
            /**
             * Remove any value associated with the given name.
             * @param name      the parameter name
             */
            // @ts-ignore
            public removeParameter(name: java.lang.String | string): void
            /**
             * Return the String representation of this object.
             */
            // @ts-ignore
            public toString(): string
            /**
             * Return a String representation of this object
             * without the parameter list.
             * @return the MIME type and sub-type
             */
            // @ts-ignore
            public getBaseType(): string
            /**
             * Determine if the primary and sub type of this object is
             * the same as what is in the given type.
             * @param type      the MimeType object to compare with
             * @return true if they match
             */
            // @ts-ignore
            public match(type: javax.activation.MimeType): boolean
            /**
             * Determine if the primary and sub type of this object is
             * the same as the content type described in rawdata.
             * @param rawdata   the MIME type string to compare with
             * @return true if they match
             */
            // @ts-ignore
            public match(rawdata: java.lang.String | string): boolean
            /**
             * The object implements the writeExternal method to save its contents
             * by calling the methods of DataOutput for its primitive values or
             * calling the writeObject method of ObjectOutput for objects, strings
             * and arrays.
             * @param out       the ObjectOutput object to write to
             * @exception IOException Includes any I/O exceptions that may occur
             */
            // @ts-ignore
            public writeExternal(out: java.io.ObjectOutput): void
            /**
             * The object implements the readExternal method to restore its
             * contents by calling the methods of DataInput for primitive
             * types and readObject for objects, strings and arrays.  The
             * readExternal method must read the values in the same sequence
             * and with the same types as were written by writeExternal.
             * @param in        the ObjectInput object to read from
             * @exception ClassNotFoundException If the class for an object being
             *               restored cannot be found.
             */
            // @ts-ignore
            public readExternal(input: java.io.ObjectInput): void
        }
    }
}
