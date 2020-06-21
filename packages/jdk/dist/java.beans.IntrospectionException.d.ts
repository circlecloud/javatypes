declare namespace java {
    namespace beans {
        /**
         * Thrown when an exception happens during Introspection.
         * <p>
         * Typical causes include not being able to map a string class name
         * to a Class object, not being able to resolve a string method name,
         * or specifying a method name that has the wrong type signature for
         * its intended use.
         */
        // @ts-ignore
        class IntrospectionException extends java.lang.Exception {
            /**
             * Constructs an <code>IntrospectionException</code> with a
             * detailed message.
             * @param mess Descriptive message
             */
            // @ts-ignore
            constructor(mess: java.lang.String | string)
        }
    }
}
