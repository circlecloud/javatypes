declare namespace java {
    namespace io {
        /**
         * Base class for character conversion exceptions.
         * @author Asmus Freytag
         * @since JDK1.1
         */
        // @ts-ignore
        class CharConversionException extends java.io.IOException {
            /**
             * This provides no detailed message.
             */
            // @ts-ignore
            constructor()
            /**
             * This provides a detailed message.
             * @param s the detailed message associated with the exception.
             */
            // @ts-ignore
            constructor(s: string)
        }
    }
}
