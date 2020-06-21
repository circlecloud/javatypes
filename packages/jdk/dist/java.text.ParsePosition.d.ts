declare namespace java {
    namespace text {
        /**
         * <code>ParsePosition</code> is a simple class used by <code>Format</code>
         * and its subclasses to keep track of the current position during parsing.
         * The <code>parseObject</code> method in the various <code>Format</code>
         * classes requires a <code>ParsePosition</code> object as an argument.
         * <p>
         * By design, as you parse through a string with different formats,
         * you can use the same <code>ParsePosition</code>, since the index parameter
         * records the current position.
         * @author Mark Davis
         * @see java.text.Format
         */
        // @ts-ignore
        class ParsePosition extends java.lang.Object {
            /**
             * Create a new ParsePosition with the given initial index.
             * @param index initial index
             */
            // @ts-ignore
            constructor(index: number /*int*/)
            /**
             * Retrieve the current parse position.  On input to a parse method, this
             * is the index of the character at which parsing will begin; on output, it
             * is the index of the character following the last character parsed.
             * @return the current parse position
             */
            // @ts-ignore
            public getIndex(): number /*int*/
            /**
             * Set the current parse position.
             * @param index the current parse position
             */
            // @ts-ignore
            public setIndex(index: number /*int*/): void
            /**
             * Set the index at which a parse error occurred.  Formatters
             * should set this before returning an error code from their
             * parseObject method.  The default value is -1 if this is not set.
             * @param ei the index at which an error occurred
             * @since 1.2
             */
            // @ts-ignore
            public setErrorIndex(ei: number /*int*/): void
            /**
             * Retrieve the index at which an error occurred, or -1 if the
             * error index has not been set.
             * @return the index at which an error occurred
             * @since 1.2
             */
            // @ts-ignore
            public getErrorIndex(): number /*int*/
            /**
             * Overrides equals
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Returns a hash code for this ParsePosition.
             * @return a hash code value for this object
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Return a string representation of this ParsePosition.
             * @return a string representation of this object
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
