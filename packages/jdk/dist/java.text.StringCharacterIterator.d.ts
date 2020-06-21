declare namespace java {
    namespace text {
        /**
         * <code>StringCharacterIterator</code> implements the
         * <code>CharacterIterator</code> protocol for a <code>String</code>.
         * The <code>StringCharacterIterator</code> class iterates over the
         * entire <code>String</code>.
         * @see CharacterIterator
         */
        // @ts-ignore
        class StringCharacterIterator extends java.lang.Object implements java.text.CharacterIterator {
            /**
             * Constructs an iterator with an initial index of 0.
             * @param text the {#code String} to be iterated over
             */
            // @ts-ignore
            constructor(text: java.lang.String | string)
            /**
             * Constructs an iterator with the specified initial index.
             * @param text   The String to be iterated over
             * @param pos    Initial iterator position
             */
            // @ts-ignore
            constructor(text: java.lang.String | string, pos: number /*int*/)
            /**
             * Constructs an iterator over the given range of the given string, with the
             * index set at the specified position.
             * @param text   The String to be iterated over
             * @param begin  Index of the first character
             * @param end    Index of the character following the last character
             * @param pos    Initial iterator position
             */
            // @ts-ignore
            constructor(text: java.lang.String | string, begin: number /*int*/, end: number /*int*/, pos: number /*int*/)
            /**
             * Reset this iterator to point to a new string.  This package-visible
             * method is used by other java.text classes that want to avoid allocating
             * new StringCharacterIterator objects every time their setText method
             * is called.
             * @param text   The String to be iterated over
             * @since 1.2
             */
            // @ts-ignore
            public setText(text: java.lang.String | string): void
            /**
             * Implements CharacterIterator.first() for String.
             * @see CharacterIterator#first
             */
            // @ts-ignore
            public first(): string
            /**
             * Implements CharacterIterator.last() for String.
             * @see CharacterIterator#last
             */
            // @ts-ignore
            public last(): string
            /**
             * Implements CharacterIterator.setIndex() for String.
             * @see CharacterIterator#setIndex
             */
            // @ts-ignore
            public setIndex(p: number /*int*/): string
            /**
             * Implements CharacterIterator.current() for String.
             * @see CharacterIterator#current
             */
            // @ts-ignore
            public current(): string
            /**
             * Implements CharacterIterator.next() for String.
             * @see CharacterIterator#next
             */
            // @ts-ignore
            public next(): string
            /**
             * Implements CharacterIterator.previous() for String.
             * @see CharacterIterator#previous
             */
            // @ts-ignore
            public previous(): string
            /**
             * Implements CharacterIterator.getBeginIndex() for String.
             * @see CharacterIterator#getBeginIndex
             */
            // @ts-ignore
            public getBeginIndex(): number /*int*/
            /**
             * Implements CharacterIterator.getEndIndex() for String.
             * @see CharacterIterator#getEndIndex
             */
            // @ts-ignore
            public getEndIndex(): number /*int*/
            /**
             * Implements CharacterIterator.getIndex() for String.
             * @see CharacterIterator#getIndex
             */
            // @ts-ignore
            public getIndex(): number /*int*/
            /**
             * Compares the equality of two StringCharacterIterator objects.
             * @param obj the StringCharacterIterator object to be compared with.
             * @return true if the given obj is the same as this
             *  StringCharacterIterator object; false otherwise.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Computes a hashcode for this iterator.
             * @return A hash code
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Creates a copy of this iterator.
             * @return A copy of this
             */
            // @ts-ignore
            public clone(): any
        }
    }
}
