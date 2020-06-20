declare namespace javax {
    namespace print {
        /**
         * Class PrintException encapsulates a printing-related error condition that
         * occurred while using a Print Service instance. This base class
         * furnishes only a string description of the error. Subclasses furnish more
         * detailed information if applicable.
         */
        // @ts-ignore
        class PrintException extends java.lang.Exception {
            /**
             * Construct a print exception with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Construct a print exception with the given detail message.
             * @param s  Detail message, or null if no detail message.
             */
            // @ts-ignore
            constructor(s: string)
            /**
             * Construct a print exception chaining the supplied exception.
             * @param e  Chained exception.
             */
            // @ts-ignore
            constructor(e: java.lang.Exception)
            /**
             * Construct a print exception with the given detail message
             * and chained exception.
             * @param s  Detail message, or null if no detail message.
             * @param e  Chained exception.
             */
            // @ts-ignore
            constructor(s: string, e: java.lang.Exception)
        }
    }
}
