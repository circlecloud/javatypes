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
            constructor(text: string)
            /**
             * Constructs an iterator with the specified initial index.
             * @param text   The String to be iterated over
             * @param pos    Initial iterator position
             */
            // @ts-ignore
            constructor(text: string, pos: number /*int*/)
            /**
             * Constructs an iterator over the given range of the given string, with the
             * index set at the specified position.
             * @param text   The String to be iterated over
             * @param begin  Index of the first character
             * @param end    Index of the character following the last character
             * @param pos    Initial iterator position
             */
            // @ts-ignore
            constructor(text: string, begin: number /*int*/, end: number /*int*/, pos: number /*int*/)
            /**
             * Reset this iterator to point to a new string.  This package-visible
             * method is used by other java.text classes that want to avoid allocating
             * new StringCharacterIterator objects every time their setText method
             * is called.
             * @param text   The String to be iterated over
             * @since 1.2
             */
            // @ts-ignore
            setText(text: string): void
            /**
             * Implements CharacterIterator.first() for String.
             * @see CharacterIterator#first
             */
            // @ts-ignore
            first(): char
            /**
             * Implements CharacterIterator.last() for String.
             * @see CharacterIterator#last
             */
            // @ts-ignore
            last(): char
            /**
             * Implements CharacterIterator.setIndex() for String.
             * @see CharacterIterator#setIndex
             */
            // @ts-ignore
            setIndex(p: number /*int*/): char
            /**
             * Implements CharacterIterator.current() for String.
             * @see CharacterIterator#current
             */
            // @ts-ignore
            current(): char
            /**
             * Implements CharacterIterator.next() for String.
             * @see CharacterIterator#next
             */
            // @ts-ignore
            next(): char
            /**
             * Implements CharacterIterator.previous() for String.
             * @see CharacterIterator#previous
             */
            // @ts-ignore
            previous(): char
            /**
             * Implements CharacterIterator.getBeginIndex() for String.
             * @see CharacterIterator#getBeginIndex
             */
            // @ts-ignore
            getBeginIndex(): int
            /**
             * Implements CharacterIterator.getEndIndex() for String.
             * @see CharacterIterator#getEndIndex
             */
            // @ts-ignore
            getEndIndex(): int
            /**
             * Implements CharacterIterator.getIndex() for String.
             * @see CharacterIterator#getIndex
             */
            // @ts-ignore
            getIndex(): int
            /**
             * Compares the equality of two StringCharacterIterator objects.
             * @param obj the StringCharacterIterator object to be compared with.
             * @return true if the given obj is the same as this
             *  StringCharacterIterator object; false otherwise.
             */
            // @ts-ignore
            equals(obj: any): boolean
            /**
             * Computes a hashcode for this iterator.
             * @return A hash code
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Creates a copy of this iterator.
             * @return A copy of this
             */
            // @ts-ignore
            clone(): java.lang.Object
        }
    }
}
