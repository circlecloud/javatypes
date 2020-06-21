declare namespace javax {
    namespace activation {
        /**
         * A parameter list of a MimeType
         * as defined in RFC 2045 and 2046. The Primary type of the
         * object must already be stripped off.
         * @see javax.activation.MimeType
         * @since 1.6
         */
        // @ts-ignore
        class MimeTypeParameterList extends java.lang.Object {
            /**
             * Default constructor.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new MimeTypeParameterList with the passed in data.
             * @param parameterList an RFC 2045, 2046 compliant parameter list.
             */
            // @ts-ignore
            constructor(parameterList: java.lang.String | string)
            /**
             * A routine for parsing the parameter list out of a String.
             * @param parameterList an RFC 2045, 2046 compliant parameter list.
             */
            // @ts-ignore
            parse(parameterList: java.lang.String | string): void
            /**
             * Return the number of name-value pairs in this list.
             * @return the number of parameters
             */
            // @ts-ignore
            public size(): number /*int*/
            /**
             * Determine whether or not this list is empty.
             * @return true if there are no parameters
             */
            // @ts-ignore
            public isEmpty(): boolean
            /**
             * Retrieve the value associated with the given name, or null if there
             * is no current association.
             * @param name      the parameter name
             * @return the parameter's value
             */
            // @ts-ignore
            public get(name: java.lang.String | string): string
            /**
             * Set the value to be associated with the given name, replacing
             * any previous association.
             * @param name      the parameter name
             * @param value     the parameter's value
             */
            // @ts-ignore
            public set(name: java.lang.String | string, value: java.lang.String | string): void
            /**
             * Remove any value associated with the given name.
             * @param name      the parameter name
             */
            // @ts-ignore
            public remove(name: java.lang.String | string): void
            /**
             * Retrieve an enumeration of all the names in this list.
             * @return an enumeration of all parameter names
             */
            // @ts-ignore
            public getNames(): java.util.Enumeration<any>
            /**
             * Return a string representation of this object.
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
