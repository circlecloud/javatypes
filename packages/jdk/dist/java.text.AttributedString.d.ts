declare namespace java {
    namespace text {
        /**
         * An AttributedString holds text and related attribute information. It
         * may be used as the actual data storage in some cases where a text
         * reader wants to access attributed text through the AttributedCharacterIterator
         * interface.
         * <p>
         * An attribute is a key/value pair, identified by the key.  No two
         * attributes on a given character can have the same key.
         * <p>The values for an attribute are immutable, or must not be mutated
         * by clients or storage.  They are always passed by reference, and not
         * cloned.
         * @see AttributedCharacterIterator
         * @see Annotation
         * @since 1.2
         */
        // @ts-ignore
        class AttributedString extends java.lang.Object {
            /**
             * Constructs an AttributedString instance with the given text.
             * @param text The text for this attributed string.
             * @exception NullPointerException if <code>text</code> is null.
             */
            // @ts-ignore
            constructor(text: java.lang.String | string)
            /**
             * Constructs an AttributedString instance with the given text and attributes.
             * @param text The text for this attributed string.
             * @param attributes The attributes that apply to the entire string.
             * @exception NullPointerException if <code>text</code> or
             *             <code>attributes</code> is null.
             * @exception IllegalArgumentException if the text has length 0
             *  and the attributes parameter is not an empty Map (attributes
             *  cannot be applied to a 0-length range).
             */
            // @ts-ignore
            constructor(text: java.lang.String | string, attributes: java.util.Map<any, any>)
            /**
             * Constructs an AttributedString instance with the given attributed
             * text represented by AttributedCharacterIterator.
             * @param text The text for this attributed string.
             * @exception NullPointerException if <code>text</code> is null.
             */
            // @ts-ignore
            constructor(text: java.text.AttributedCharacterIterator)
            /**
             * Constructs an AttributedString instance with the subrange of
             * the given attributed text represented by
             * AttributedCharacterIterator. If the given range produces an
             * empty text, all attributes will be discarded.  Note that any
             * attributes wrapped by an Annotation object are discarded for a
             * subrange of the original attribute range.
             * @param text The text for this attributed string.
             * @param beginIndex Index of the first character of the range.
             * @param endIndex Index of the character following the last character
             *  of the range.
             * @exception NullPointerException if <code>text</code> is null.
             * @exception IllegalArgumentException if the subrange given by
             *  beginIndex and endIndex is out of the text range.
             * @see java.text.Annotation
             */
            // @ts-ignore
            constructor(text: java.text.AttributedCharacterIterator, beginIndex: number /*int*/, endIndex: number /*int*/)
            /**
             * Constructs an AttributedString instance with the subrange of
             * the given attributed text represented by
             * AttributedCharacterIterator.  Only attributes that match the
             * given attributes will be incorporated into the instance. If the
             * given range produces an empty text, all attributes will be
             * discarded. Note that any attributes wrapped by an Annotation
             * object are discarded for a subrange of the original attribute
             * range.
             * @param text The text for this attributed string.
             * @param beginIndex Index of the first character of the range.
             * @param endIndex Index of the character following the last character
             *  of the range.
             * @param attributes Specifies attributes to be extracted
             *  from the text. If null is specified, all available attributes will
             *  be used.
             * @exception NullPointerException if <code>text</code> is null.
             * @exception IllegalArgumentException if the subrange given by
             *  beginIndex and endIndex is out of the text range.
             * @see java.text.Annotation
             */
            // @ts-ignore
            constructor(text: java.text.AttributedCharacterIterator, beginIndex: number /*int*/, endIndex: number /*int*/, attributes: java.text.AttributedCharacterIterator.Attribute[])
            /**
             * Adds an attribute to the entire string.
             * @param attribute the attribute key
             * @param value the value of the attribute; may be null
             * @exception NullPointerException if <code>attribute</code> is null.
             * @exception IllegalArgumentException if the AttributedString has length 0
             *  (attributes cannot be applied to a 0-length range).
             */
            // @ts-ignore
            public addAttribute(attribute: java.text.AttributedCharacterIterator.Attribute, value: java.lang.Object | any): void
            /**
             * Adds an attribute to a subrange of the string.
             * @param attribute the attribute key
             * @param value The value of the attribute. May be null.
             * @param beginIndex Index of the first character of the range.
             * @param endIndex Index of the character following the last character of the range.
             * @exception NullPointerException if <code>attribute</code> is null.
             * @exception IllegalArgumentException if beginIndex is less then 0, endIndex is
             *  greater than the length of the string, or beginIndex and endIndex together don't
             *  define a non-empty subrange of the string.
             */
            // @ts-ignore
            public addAttribute(attribute: java.text.AttributedCharacterIterator.Attribute, value: java.lang.Object | any, beginIndex: number /*int*/, endIndex: number /*int*/): void
            /**
             * Adds a set of attributes to a subrange of the string.
             * @param attributes The attributes to be added to the string.
             * @param beginIndex Index of the first character of the range.
             * @param endIndex Index of the character following the last
             *  character of the range.
             * @exception NullPointerException if <code>attributes</code> is null.
             * @exception IllegalArgumentException if beginIndex is less then
             *  0, endIndex is greater than the length of the string, or
             *  beginIndex and endIndex together don't define a non-empty
             *  subrange of the string and the attributes parameter is not an
             *  empty Map.
             */
            // @ts-ignore
            public addAttributes(attributes: java.util.Map<any, any>, beginIndex: number /*int*/, endIndex: number /*int*/): void
            /**
             * Creates an AttributedCharacterIterator instance that provides access to the entire contents of
             * this string.
             * @return An iterator providing access to the text and its attributes.
             */
            // @ts-ignore
            public getIterator(): java.text.AttributedCharacterIterator
            /**
             * Creates an AttributedCharacterIterator instance that provides access to
             * selected contents of this string.
             * Information about attributes not listed in attributes that the
             * implementor may have need not be made accessible through the iterator.
             * If the list is null, all available attribute information should be made
             * accessible.
             * @param attributes a list of attributes that the client is interested in
             * @return an iterator providing access to the entire text and its selected attributes
             */
            // @ts-ignore
            public getIterator(attributes: java.text.AttributedCharacterIterator.Attribute[]): java.text.AttributedCharacterIterator
            /**
             * Creates an AttributedCharacterIterator instance that provides access to
             * selected contents of this string.
             * Information about attributes not listed in attributes that the
             * implementor may have need not be made accessible through the iterator.
             * If the list is null, all available attribute information should be made
             * accessible.
             * @param attributes a list of attributes that the client is interested in
             * @param beginIndex the index of the first character
             * @param endIndex the index of the character following the last character
             * @return an iterator providing access to the text and its attributes
             * @exception IllegalArgumentException if beginIndex is less then 0,
             *  endIndex is greater than the length of the string, or beginIndex is
             *  greater than endIndex.
             */
            // @ts-ignore
            public getIterator(attributes: java.text.AttributedCharacterIterator.Attribute[], beginIndex: number /*int*/, endIndex: number /*int*/): java.text.AttributedCharacterIterator
        }
    }
}
