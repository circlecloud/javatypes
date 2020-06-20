declare namespace javax {
    namespace accessibility {
        /**
         * This class collects together key details of a span of text.  It
         * is used by implementors of the class <code>AccessibleExtendedText</code> in
         * order to return the requested triplet of a <code>String</code>, and the
         * start and end indicies/offsets into a larger body of text that the
         * <code>String</code> comes from.
         * @see javax.accessibility.AccessibleExtendedText
         */
        // @ts-ignore
        class AccessibleTextSequence extends java.lang.Object {
            /**
             * Constructs an <code>AccessibleTextSequence</code> with the given
             * parameters.
             * @param start the beginning index of the span of text
             * @param end the ending index of the span of text
             * @param txt the <code>String</code> shared by this text span
             * @since 1.6
             */
            // @ts-ignore
            constructor(start: number /*int*/, end: number /*int*/, txt: string)
            /**
             * The start index of the text sequence
             */
            // @ts-ignore
            startIndex: number /*int*/
            /**
             * The end index of the text sequence
             */
            // @ts-ignore
            endIndex: number /*int*/
            /**
             * The text
             */
            // @ts-ignore
            text: string
        }
    }
}
