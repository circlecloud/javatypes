declare namespace java {
    namespace lang {
        /**
         * StringBuffer is a variable size contiguous indexable array of characters.
         * The length of the StringBuffer is the number of characters it contains.
         * The capacity of the StringBuffer is the number of characters it can hold.
         * <p>
         * Characters may be inserted at any position up to the length of the
         * StringBuffer, increasing the length of the StringBuffer. Characters at any
         * position in the StringBuffer may be replaced, which does not affect the
         * StringBuffer length.
         * <p>
         * The capacity of a StringBuffer may be specified when the StringBuffer is
         * created. If the capacity of the StringBuffer is exceeded, the capacity
         * is increased.
         * @author OTI
         * @version initial
         * @see String
         */
        // @ts-ignore
        class StringBuffer extends java.lang.AbstractStringBuilder implements java.io.Serializable, java.lang.CharSequence, java.lang.Appendable {
            /**
             * Constructs a new StringBuffer using the default capacity.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new StringBuffer using the specified capacity.
             * @param capacity	the initial capacity
             */
            // @ts-ignore
            constructor(capacity: number /*int*/)
            /**
             * Constructs a new StringBuffer containing the characters in
             * the specified string and the default capacity.
             * @param string	the initial contents of this StringBuffer
             * @exception NullPointerException when string is null
             */
            // @ts-ignore
            constructor(string: java.lang.String | string)
            /**
             * Constructs a new StringBuffer containing the characters in
             * the specified CharSequence and the default capacity.
             * @param sequence	the initial contents of this StringBuffer
             * @exception NullPointerException when sequence is null
             * @since 1.5
             */
            // @ts-ignore
            constructor(sequence: java.lang.CharSequence)
            /**
             * Adds the character array to the end of this StringBuffer.
             * @param chars	the character array
             * @return this StringBuffer
             * @exception NullPointerException when chars is null
             */
            // @ts-ignore
            public append(chars: string[]): java.lang.StringBuffer
            /**
             * Adds the specified sequence of characters to the end of
             * this StringBuffer.
             * @param chars	a character array
             * @param start	the starting offset
             * @param length	the number of characters
             * @return this StringBuffer
             * @exception IndexOutOfBoundsException when {#code length < 0, start < 0} or
             * 				{@code start + length > chars.length}
             * @exception NullPointerException when chars is null
             */
            // @ts-ignore
            public append(chars: string[], start: number /*int*/, length: number /*int*/): java.lang.StringBuffer
            /**
             * Adds the specified character to the end of
             * this StringBuffer.
             * @param ch	a character
             * @return this StringBuffer
             */
            // @ts-ignore
            public append(ch: string): java.lang.StringBuffer
            /**
             * Adds the string representation of the specified double to the
             * end of this StringBuffer.
             * @param value	the double
             * @return this StringBuffer
             */
            // @ts-ignore
            public append(value: number /*double*/): java.lang.StringBuffer
            /**
             * Adds the string representation of the specified float to the
             * end of this StringBuffer.
             * @param value	the float
             * @return this StringBuffer
             */
            // @ts-ignore
            public append(value: number /*float*/): java.lang.StringBuffer
            /**
             * Adds the string representation of the specified integer to the
             * end of this StringBuffer.
             * @param value	the integer
             * @return this StringBuffer
             */
            // @ts-ignore
            public append(value: number /*int*/): java.lang.StringBuffer
            /**
             * Adds the string representation of the specified long to the
             * end of this StringBuffer.
             * @param value	the long
             * @return this StringBuffer
             */
            // @ts-ignore
            public append(value: number /*long*/): java.lang.StringBuffer
            /**
             * Adds the string representation of the specified object to the
             * end of this StringBuffer.
             * @param value	the object
             * @return this StringBuffer
             */
            // @ts-ignore
            public append(value: java.lang.Object | any): java.lang.StringBuffer
            /**
             * Adds the specified string to the end of this StringBuffer.
             * @param string	the string
             * @return this StringBuffer
             */
            // @ts-ignore
            public append(string: java.lang.String | string): java.lang.StringBuffer
            /**
             * Adds the string representation of the specified boolean to the
             * end of this StringBuffer.
             * @param value	the boolean
             * @return this StringBuffer
             */
            // @ts-ignore
            public append(value: boolean): java.lang.StringBuffer
            /**
             * Answers the number of characters this StringBuffer can hold without
             * growing.
             * @return the capacity of this StringBuffer
             * @see #ensureCapacity
             * @see #length
             */
            // @ts-ignore
            public capacity(): number /*int*/
            /**
             * Answers the character at the specified offset in this StringBuffer.
             * @param index	the zero-based index in this StringBuffer
             * @return the character at the index
             * @exception IndexOutOfBoundsException
             *               If {#code index < 0} or {@code index >= length()}
             */
            // @ts-ignore
            public charAt(index: number /*int*/): string
            /**
             * Deletes a range of characters.
             * @param start	the offset of the first character
             * @param end	the offset one past the last character
             * @return this StringBuffer
             * @exception StringIndexOutOfBoundsException when {#code start < 0, start > end} or
             * 				{@code end > length()}
             */
            // @ts-ignore
            public delete(start: number /*int*/, end: number /*int*/): java.lang.StringBuffer
            /**
             * Deletes a single character
             * @param location	the offset of the character to delete
             * @return this StringBuffer
             * @exception StringIndexOutOfBoundsException when {#code location < 0} or
             * 				{@code location >= length()}
             */
            // @ts-ignore
            public deleteCharAt(location: number /*int*/): java.lang.StringBuffer
            /**
             * Ensures that this StringBuffer can hold the specified number of characters
             * without growing.
             * @param min	 the minimum number of elements that this
             * 				StringBuffer will hold before growing
             */
            // @ts-ignore
            public ensureCapacity(min: number /*int*/): void
            /**
             * Copies the specified characters in this StringBuffer to the character array
             * starting at the specified offset in the character array.
             * @param start	the starting offset of characters to copy
             * @param end	the ending offset of characters to copy
             * @param buffer	the destination character array
             * @param index	the starting offset in the character array
             * @exception IndexOutOfBoundsException when {#code start < 0, end > length(),
             * 				start > end, index < 0, end - start > buffer.length - index}
             * @exception NullPointerException when buffer is null
             */
            // @ts-ignore
            public getChars(start: number /*int*/, end: number /*int*/, buffer: string[], index: number /*int*/): void
            /**
             * Inserts the character array at the specified offset in this StringBuffer.
             * @param index	the index at which to insert
             * @param chars	the character array to insert
             * @return this StringBuffer
             * @exception StringIndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             * @exception NullPointerException when chars is null
             */
            // @ts-ignore
            public insert(index: number /*int*/, chars: string[]): java.lang.StringBuffer
            /**
             * Inserts the specified sequence of characters at the
             * specified offset in this StringBuffer.
             * @param index	the index at which to insert
             * @param chars	a character array
             * @param start	the starting offset
             * @param length	the number of characters
             * @return this StringBuffer
             * @exception StringIndexOutOfBoundsException when {#code length < 0, start < 0,
             * 				start + length > chars.length, index < 0} or
             * 				{@code index > length()}
             * @exception NullPointerException when chars is null
             */
            // @ts-ignore
            public insert(index: number /*int*/, chars: string[], start: number /*int*/, length: number /*int*/): java.lang.StringBuffer
            /**
             * Inserts the character at the specified offset in this StringBuffer.
             * @param index	the index at which to insert
             * @param ch	the character to insert
             * @return this StringBuffer
             * @exception IndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             */
            // @ts-ignore
            public insert(index: number /*int*/, ch: string): java.lang.StringBuffer
            /**
             * Inserts the string representation of the specified double at the specified
             * offset in this StringBuffer.
             * @param index	the index at which to insert
             * @param value	the double to insert
             * @return this StringBuffer
             * @exception StringIndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             */
            // @ts-ignore
            public insert(index: number /*int*/, value: number /*double*/): java.lang.StringBuffer
            /**
             * Inserts the string representation of the specified float at the specified
             * offset in this StringBuffer.
             * @param index	the index at which to insert
             * @param value	the float to insert
             * @return this StringBuffer
             * @exception StringIndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             */
            // @ts-ignore
            public insert(index: number /*int*/, value: number /*float*/): java.lang.StringBuffer
            /**
             * Inserts the string representation of the specified integer at the specified
             * offset in this StringBuffer.
             * @param index	the index at which to insert
             * @param value	the integer to insert
             * @return this StringBuffer
             * @exception StringIndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             */
            // @ts-ignore
            public insert(index: number /*int*/, value: number /*int*/): java.lang.StringBuffer
            /**
             * Inserts the string representation of the specified long at the specified
             * offset in this StringBuffer.
             * @param index	the index at which to insert
             * @param value	the long to insert
             * @return this StringBuffer
             * @exception StringIndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             */
            // @ts-ignore
            public insert(index: number /*int*/, value: number /*long*/): java.lang.StringBuffer
            /**
             * Inserts the string representation of the specified object at the specified
             * offset in this StringBuffer.
             * @param index	the index at which to insert
             * @param value	the object to insert
             * @return this StringBuffer
             * @exception StringIndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             */
            // @ts-ignore
            public insert(index: number /*int*/, value: java.lang.Object | any): java.lang.StringBuffer
            /**
             * Inserts the string at the specified offset in this StringBuffer.
             * @param index	the index at which to insert
             * @param string	the string to insert
             * @return this StringBuffer
             * @exception StringIndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             */
            // @ts-ignore
            public insert(index: number /*int*/, string: java.lang.String | string): java.lang.StringBuffer
            /**
             * Inserts the string representation of the specified boolean at the specified
             * offset in this StringBuffer.
             * @param index	the index at which to insert
             * @param value	the boolean to insert
             * @return this StringBuffer
             * @exception StringIndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             */
            // @ts-ignore
            public insert(index: number /*int*/, value: boolean): java.lang.StringBuffer
            /**
             * Answers the size of this StringBuffer.
             * @return the number of characters in this StringBuffer
             */
            // @ts-ignore
            public length(): number /*int*/
            /**
             * Replace a range of characters with the characters in the specified String.
             * @param start	the offset of the first character
             * @param end	the offset one past the last character
             * @param string	a String
             * @return this StringBuffer
             * @exception StringIndexOutOfBoundsException when {#code start < 0} or
             * 				{@code start > end}
             */
            // @ts-ignore
            public replace(start: number /*int*/, end: number /*int*/, string: java.lang.String | string): java.lang.StringBuffer
            /**
             * Reverses the order of characters in this StringBuffer.
             * @return this StringBuffer
             */
            // @ts-ignore
            public reverse(): java.lang.StringBuffer
            /**
             * Sets the character at the specified offset in this StringBuffer.
             * @param index	the zero-based index in this StringBuffer
             * @param ch	the character
             * @exception IndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index >= length()}
             */
            // @ts-ignore
            public setCharAt(index: number /*int*/, ch: string): void
            /**
             * Sets the length of this StringBuffer to the specified length. If there
             * are more than length characters in this StringBuffer, the characters
             * at end are lost. If there are less than length characters in the
             * StringBuffer, the additional characters are set to {@code \\u0000}.
             * @param length	the new length of this StringBuffer
             * @exception IndexOutOfBoundsException when {#code length < 0}
             * @see #length
             */
            // @ts-ignore
            public setLength(length: number /*int*/): void
            /**
             * Copies a range of characters into a new String.
             * @param start	the offset of the first character
             * @return a new String containing the characters from start to the end
             * 				of the string
             * @exception StringIndexOutOfBoundsException when {#code start < 0} or
             * 				{@code start > length()}
             */
            // @ts-ignore
            public substring(start: number /*int*/): string
            /**
             * Copies a range of characters into a new String.
             * @param start	the offset of the first character
             * @param end	the offset one past the last character
             * @return a new String containing the characters from start to end - 1
             * @exception StringIndexOutOfBoundsException when {#code start < 0, start > end} or
             * 				{@code end > length()}
             */
            // @ts-ignore
            public substring(start: number /*int*/, end: number /*int*/): string
            /**
             * Answers the contents of this StringBuffer.
             * @return a String containing the characters in this StringBuffer
             */
            // @ts-ignore
            public toString(): string
            /**
             * Adds the specified StringBuffer to the end of this StringBuffer.
             * @param buffer	the StringBuffer
             * @return this StringBuffer
             * @since 1.4
             */
            // @ts-ignore
            public append(buffer: java.lang.StringBuffer): java.lang.StringBuffer
            /**
             * Copies a range of characters into a new String.
             * @param start	the offset of the first character
             * @param end	the offset one past the last character
             * @return a new String containing the characters from start to end - 1
             * @exception IndexOutOfBoundsException when {#code start < 0, start > end} or
             * 				{@code end > length()}
             * @since 1.4
             */
            // @ts-ignore
            public subSequence(start: number /*int*/, end: number /*int*/): java.lang.CharSequence
            /**
             * Searches in this StringBuffer for the first index of the specified character. The
             * search for the character starts at the beginning and moves towards the
             * end.
             * @param string	the string to find
             * @return the index in this StringBuffer of the specified character, -1 if the
             * 				character isn't found
             * @see #lastIndexOf(String)
             * @since 1.4
             */
            // @ts-ignore
            public indexOf(string: java.lang.String | string): number /*int*/
            /**
             * Searches in this StringBuffer for the index of the specified character. The
             * search for the character starts at the specified offset and moves towards
             * the end.
             * @param subString		the string to find
             * @param start	the starting offset
             * @return the index in this StringBuffer of the specified character, -1 if the
             * 				character isn't found
             * @see #lastIndexOf(String,int)
             * @since 1.4
             */
            // @ts-ignore
            public indexOf(subString: java.lang.String | string, start: number /*int*/): number /*int*/
            /**
             * Searches in this StringBuffer for the last index of the specified character. The
             * search for the character starts at the end and moves towards the beginning.
             * @param string	the string to find
             * @return the index in this StringBuffer of the specified character, -1 if the
             * 				character isn't found
             * @see #indexOf(String)
             * @since 1.4
             */
            // @ts-ignore
            public lastIndexOf(string: java.lang.String | string): number /*int*/
            /**
             * Searches in this StringBuffer for the index of the specified character. The
             * search for the character starts at the specified offset and moves towards
             * the beginning.
             * @param subString		the string to find
             * @param start	the starting offset
             * @return the index in this StringBuffer of the specified character, -1 if the
             * 				character isn't found
             * @see #indexOf(String,int)
             * @since 1.4
             */
            // @ts-ignore
            public lastIndexOf(subString: java.lang.String | string, start: number /*int*/): number /*int*/
            /**
             * Adds the specified CharSequence to the end of this StringBuffer.
             * @param sequence	the CharSequence
             * @return this StringBuffer
             * @since 1.5
             */
            // @ts-ignore
            public append(sequence: java.lang.CharSequence): java.lang.StringBuffer
            /**
             * Adds the specified CharSequence to the end of this StringBuffer.
             * @param sequence	the CharSequence
             * @param start	the offset of the first character
             * @param end	the offset one past the last character
             * @return this StringBuffer
             * @exception IndexOutOfBoundsException when {#code start < 0, start > end} or
             * 				{@code end > length()}
             * @since 1.5
             */
            // @ts-ignore
            public append(sequence: java.lang.CharSequence, start: number /*int*/, end: number /*int*/): java.lang.StringBuffer
            /**
             * Inserts the CharSequence at the specified offset in this StringBuffer.
             * @param index	the index at which to insert
             * @param sequence	the CharSequence to insert
             * @return this StringBuffer
             * @exception IndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             * @since 1.5
             */
            // @ts-ignore
            public insert(index: number /*int*/, sequence: java.lang.CharSequence): java.lang.StringBuffer
            /**
             * Inserts the CharSequence at the specified offset in this StringBuffer.
             * @param index	the index at which to insert
             * @param sequence	the CharSequence to insert
             * @param start	the offset of the first character
             * @param end	the offset one past the last character
             * @return this StringBuffer
             * @exception IndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}, or when {@code start < 0, start > end} or
             * 				{@code end > length()}
             * @since 1.5
             */
            // @ts-ignore
            public insert(index: number /*int*/, sequence: java.lang.CharSequence, start: number /*int*/, end: number /*int*/): java.lang.StringBuffer
            /**
             * Optionally modify the underlying char array to only
             * be large enough to hold the characters in this StringBuffer.
             * @since 1.5
             */
            // @ts-ignore
            public trimToSize(): void
            /**
             * Returns the Unicode character at the given point.
             * @param index		the character index
             * @return the Unicode character value at the index
             * @since 1.5
             */
            // @ts-ignore
            public codePointAt(index: number /*int*/): number /*int*/
            /**
             * Returns the Unicode character before the given point.
             * @param index		the character index
             * @return the Unicode character value before the index
             * @since 1.5
             */
            // @ts-ignore
            public codePointBefore(index: number /*int*/): number /*int*/
            /**
             * Returns the total Unicode values in the specified range.
             * @param start		first index
             * @param end			last index
             * @return the total Unicode values
             * @since 1.5
             */
            // @ts-ignore
            public codePointCount(start: number /*int*/, end: number /*int*/): number /*int*/
            /**
             * Returns the index of the code point that was offset by {@code codePointCount}.
             * @param start			the position to offset
             * @param codePointCount	the code point count
             * @return the offset index
             * @since 1.5
             */
            // @ts-ignore
            public offsetByCodePoints(start: number /*int*/, codePointCount: number /*int*/): number /*int*/
            /**
             * Adds the specified code point to the end of this StringBuffer.
             * @param codePoint	the code point
             * @return this StringBuffer
             * @since 1.5
             */
            // @ts-ignore
            public appendCodePoint(codePoint: number /*int*/): java.lang.StringBuffer
        }
    }
}
