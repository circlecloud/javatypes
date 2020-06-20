declare namespace java {
    namespace util {
        /**
         * Unchecked exception thrown when the format width is a negative value other
         * than <tt>-1</tt> or is otherwise unsupported.
         * @since 1.5
         */
        // @ts-ignore
        class IllegalFormatWidthException extends java.util.IllegalFormatException {
            /**
             * Constructs an instance of this class with the specified width.
             * @param w
             *          The width
             */
            // @ts-ignore
            constructor(w: number /*int*/)
            /**
             * Returns the width
             * @return The width
             */
            // @ts-ignore
            getWidth(): int
            // @ts-ignore
            getMessage(): java.lang.String
        }
    }
}
