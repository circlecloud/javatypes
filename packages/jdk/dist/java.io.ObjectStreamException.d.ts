declare namespace java {
    namespace io {
        /**
         * Superclass of all exceptions specific to Object Stream classes.
         * @author unascribed
         * @since JDK1.1
         */
        // @ts-ignore
        class ObjectStreamException extends java.io.IOException {
            /**
             * Create an ObjectStreamException with the specified argument.
             * @param classname the detailed message for the exception
             */
            // @ts-ignore
            constructor(classname: string)
            /**
             * Create an ObjectStreamException.
             */
            // @ts-ignore
            constructor()
        }
    }
}
