declare namespace java {
    namespace lang {
        /**
         * StringBuilder is not thread safe. For a synchronized implementation, use
         * StringBuffer.
         * StringBuilder is a variable size contiguous indexable array of characters.
         * The length of the StringBuilder is the number of characters it contains.
         * The capacity of the StringBuilder is the number of characters it can hold.
         * <p>
         * Characters may be inserted at any position up to the length of the
         * StringBuilder, increasing the length of the StringBuilder. Characters at any
         * position in the StringBuilder may be replaced, which does not affect the
         * StringBuilder length.
         * <p>
         * The capacity of a StringBuilder may be specified when the StringBuilder is
         * created. If the capacity of the StringBuilder is exceeded, the capacity
         * is increased.
         * @author OTI
         * @version initial
         * @see StringBuffer
         * @since 1.5
         */
        // @ts-ignore
        class StringBuilder extends java.lang.AbstractStringBuilder implements java.io.Serializable, java.lang.CharSequence, java.lang.Appendable {
            /**
             * Constructs a new StringBuffer using the default capacity.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new StringBuilder using the specified capacity.
             * @param capacity	the initial capacity
             */
            // @ts-ignore
            constructor(capacity: number /*int*/)
            /**
             * Constructs a new StringBuilder containing the characters in
             * the specified string and the default capacity.
             * @param string	the initial contents of this StringBuilder
             * @exception NullPointerException when string is null
             */
            // @ts-ignore
            constructor(string: java.lang.String | string)
            /**
             * Constructs a new StringBuilder containing the characters in
             * the specified CharSequence and the default capacity.
             * @param sequence	the initial contents of this StringBuilder
             * @exception NullPointerException when sequence is null
             */
            // @ts-ignore
            constructor(sequence: java.lang.CharSequence)
            /**
             * Adds the character array to the end of this StringBuilder.
             * @param chars	the character array
             * @return this StringBuilder
             * @exception NullPointerException when chars is null
             */
            // @ts-ignore
            public append(chars: string[]): java.lang.StringBuilder
            /**
             * Adds the specified sequence of characters to the end of
             * this StringBuilder.
             * @param chars	a character array
             * @param start	the starting offset
             * @param length	the number of characters
             * @return this StringBuilder
             * @exception IndexOutOfBoundsException when {#code length < 0, start < 0} or
             * 				{@code start + length > chars.length}
             * @exception NullPointerException when chars is null
             */
            // @ts-ignore
            public append(chars: string[], start: number /*int*/, length: number /*int*/): java.lang.StringBuilder
            /**
             * Adds the specified character to the end of
             * this StringBuilder.
             * @param ch	a character
             * @return this StringBuilder
             */
            // @ts-ignore
            public append(ch: string): java.lang.StringBuilder
            /**
             * Adds the string representation of the specified double to the
             * end of this StringBuilder.
             * @param value	the double
             * @return this StringBuilder
             */
            // @ts-ignore
            public append(value: number /*double*/): java.lang.StringBuilder
            /**
             * Adds the string representation of the specified float to the
             * end of this StringBuilder.
             * @param value	the float
             * @return this StringBuilder
             */
            // @ts-ignore
            public append(value: number /*float*/): java.lang.StringBuilder
            /**
             * Adds the string representation of the specified integer to the
             * end of this StringBuilder.
             * @param value	the integer
             * @return this StringBuilder
             */
            // @ts-ignore
            public append(value: number /*int*/): java.lang.StringBuilder
            /**
             * Adds the string representation of the specified long to the
             * end of this StringBuilder.
             * @param value	the long
             * @return this StringBuilder
             */
            // @ts-ignore
            public append(value: number /*long*/): java.lang.StringBuilder
            /**
             * Adds the string representation of the specified object to the
             * end of this StringBuilder.
             * @param value	the object
             * @return this StringBuilder
             */
            // @ts-ignore
            public append(value: java.lang.Object | any): java.lang.StringBuilder
            /**
             * Adds the specified string to the end of this StringBuilder.
             * @param string	the string
             * @return this StringBuilder
             */
            // @ts-ignore
            public append(string: java.lang.String | string): java.lang.StringBuilder
            /**
             * Adds the string representation of the specified boolean to the
             * end of this StringBuilder.
             * @param value	the boolean
             * @return this StringBuilder
             */
            // @ts-ignore
            public append(value: boolean): java.lang.StringBuilder
            /**
             * Answers the number of characters this StringBuilder can hold without
             * growing.
             * @return the capacity of this StringBuilder
             * @see #ensureCapacity
             * @see #length
             */
            // @ts-ignore
            public capacity(): number /*int*/
            /**
             * Answers the character at the specified offset in this StringBuilder.
             * @param index	the zero-based index in this StringBuilder
             * @return the character at the index
             * @exception IndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index >= length()}
             */
            // @ts-ignore
            public charAt(index: number /*int*/): string
            /**
             * Deletes a range of characters.
             * @param start	the offset of the first character
             * @param end	the offset one past the last character
             * @return this StringBuilder
             * @exception StringIndexOutOfBoundsException when {#code start < 0, start > end} or
             * 				{@code end > length()}
             */
            // @ts-ignore
            public delete(start: number /*int*/, end: number /*int*/): java.lang.StringBuilder
            /**
             * Deletes a single character
             * @param location	the offset of the character to delete
             * @return this StringBuilder
             * @exception StringIndexOutOfBoundsException when {#code location < 0} or
             * 				{@code location >= length()}
             */
            // @ts-ignore
            public deleteCharAt(location: number /*int*/): java.lang.StringBuilder
            /**
             * Ensures that this StringBuilder can hold the specified number of characters
             * without growing.
             * @param min	 the minimum number of elements that this
             * 				StringBuilder will hold before growing
             */
            // @ts-ignore
            public ensureCapacity(min: number /*int*/): void
            /**
             * Copies the specified characters in this StringBuilder to the character array
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
             * Inserts the character array at the specified offset in this StringBuilder.
             * @param index	the index at which to insert
             * @param chars	the character array to insert
             * @return this StringBuilder
             * @exception StringIndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             * @exception NullPointerException when chars is null
             */
            // @ts-ignore
            public insert(index: number /*int*/, chars: string[]): java.lang.StringBuilder
            /**
             * Inserts the specified sequence of characters at the
             * specified offset in this StringBuilder.
             * @param index	the index at which to insert
             * @param chars	a character array
             * @param start	the starting offset
             * @param length	the number of characters
             * @return this StringBuilder
             * @exception StringIndexOutOfBoundsException when {#code length < 0, start < 0, 
             *               start + length > chars.length, index < 0} or
             * 				{@code index > length()}
             * @exception NullPointerException when chars is null
             */
            // @ts-ignore
            public insert(index: number /*int*/, chars: string[], start: number /*int*/, length: number /*int*/): java.lang.StringBuilder
            /**
             * Inserts the character at the specified offset in this StringBuilder.
             * @param index	the index at which to insert
             * @param ch	the character to insert
             * @return this StringBuilder
             * @exception IndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             */
            // @ts-ignore
            public insert(index: number /*int*/, ch: string): java.lang.StringBuilder
            /**
             * Inserts the string representation of the specified double at the specified
             * offset in this StringBuilder.
             * @param index	the index at which to insert
             * @param value	the double to insert
             * @return this StringBuilder
             * @exception StringIndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             */
            // @ts-ignore
            public insert(index: number /*int*/, value: number /*double*/): java.lang.StringBuilder
            /**
             * Inserts the string representation of the specified float at the specified
             * offset in this StringBuilder.
             * @param index	the index at which to insert
             * @param value	the float to insert
             * @return this StringBuilder
             * @exception StringIndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             */
            // @ts-ignore
            public insert(index: number /*int*/, value: number /*float*/): java.lang.StringBuilder
            /**
             * Inserts the string representation of the specified integer at the specified
             * offset in this StringBuilder.
             * @param index	the index at which to insert
             * @param value	the integer to insert
             * @return this StringBuilder
             * @exception StringIndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             */
            // @ts-ignore
            public insert(index: number /*int*/, value: number /*int*/): java.lang.StringBuilder
            /**
             * Inserts the string representation of the specified long at the specified
             * offset in this StringBuilder.
             * @param index	the index at which to insert
             * @param value	the long to insert
             * @return this StringBuilder
             * @exception StringIndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             */
            // @ts-ignore
            public insert(index: number /*int*/, value: number /*long*/): java.lang.StringBuilder
            /**
             * Inserts the string representation of the specified object at the specified
             * offset in this StringBuilder.
             * @param index	the index at which to insert
             * @param value	the object to insert
             * @return this StringBuilder
             * @exception StringIndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             */
            // @ts-ignore
            public insert(index: number /*int*/, value: java.lang.Object | any): java.lang.StringBuilder
            /**
             * Inserts the string at the specified offset in this StringBuilder.
             * @param index	the index at which to insert
             * @param string	the string to insert
             * @return this StringBuilder
             * @exception StringIndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             */
            // @ts-ignore
            public insert(index: number /*int*/, string: java.lang.String | string): java.lang.StringBuilder
            /**
             * Inserts the string representation of the specified boolean at the specified
             * offset in this StringBuilder.
             * @param index	the index at which to insert
             * @param value	the boolean to insert
             * @return this StringBuilder
             * @exception StringIndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             */
            // @ts-ignore
            public insert(index: number /*int*/, value: boolean): java.lang.StringBuilder
            /**
             * Answers the size of this StringBuilder.
             * @return the number of characters in this StringBuilder
             */
            // @ts-ignore
            public length(): number /*int*/
            /**
             * Replace a range of characters with the characters in the specified String.
             * @param start	the offset of the first character
             * @param end	the offset one past the last character
             * @param string	a String
             * @return this StringBuilder
             * @exception StringIndexOutOfBoundsException when {#code start < 0} or
             * 				{@code start > end}
             */
            // @ts-ignore
            public replace(start: number /*int*/, end: number /*int*/, string: java.lang.String | string): java.lang.StringBuilder
            /**
             * Reverses the order of characters in this StringBuilder.
             * @return this StringBuilder
             */
            // @ts-ignore
            public reverse(): java.lang.StringBuilder
            /**
             * Sets the character at the specified offset in this StringBuilder.
             * @param index	the zero-based index in this StringBuilder
             * @param ch	the character
             * @exception IndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index >= length()}
             */
            // @ts-ignore
            public setCharAt(index: number /*int*/, ch: string): void
            /**
             * Sets the length of this StringBuilder to the specified length. If there
             * are more than length characters in this StringBuilder, the characters
             * at end are lost. If there are less than length characters in the
             * StringBuilder, the additional characters are set to {@code \\u0000}.
             * @param length	the new length of this StringBuilder
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
             * Answers the contents of this StringBuilder.
             * @return a String containing the characters in this StringBuilder
             */
            // @ts-ignore
            public toString(): string
            /**
             * Adds the specified StringBuffer to the end of this StringBuilder.
             * @param buffer	the StringBuffer
             * @return this StringBuilder
             */
            // @ts-ignore
            public append(buffer: java.lang.StringBuffer): java.lang.StringBuilder
            /**
             * Copies a range of characters into a new String.
             * @param start	the offset of the first character
             * @param end	the offset one past the last character
             * @return a new String containing the characters from start to end - 1
             * @exception IndexOutOfBoundsException when {#code start < 0, start > end} or
             * 				{@code end > length()}
             */
            // @ts-ignore
            public subSequence(start: number /*int*/, end: number /*int*/): java.lang.CharSequence
            /**
             * Searches in this StringBuilder for the first index of the specified character. The
             * search for the character starts at the beginning and moves towards the
             * end.
             * @param string	the string to find
             * @return the index in this StringBuilder of the specified character, -1 if the
             * 				character isn't found
             * @see #lastIndexOf(String)
             */
            // @ts-ignore
            public indexOf(string: java.lang.String | string): number /*int*/
            /**
             * Searches in this StringBuilder for the index of the specified character. The
             * search for the character starts at the specified offset and moves towards
             * the end.
             * @param subString		the string to find
             * @param start	the starting offset
             * @return the index in this StringBuilder of the specified character, -1 if the
             * 				character isn't found
             * @see #lastIndexOf(String,int)
             */
            // @ts-ignore
            public indexOf(subString: java.lang.String | string, start: number /*int*/): number /*int*/
            /**
             * Searches in this StringBuilder for the last index of the specified character. The
             * search for the character starts at the end and moves towards the beginning.
             * @param string	the string to find
             * @return the index in this StringBuilder of the specified character, -1 if the
             * 				character isn't found
             * @see #indexOf(String)
             */
            // @ts-ignore
            public lastIndexOf(string: java.lang.String | string): number /*int*/
            /**
             * Searches in this StringBuilder for the index of the specified character. The
             * search for the character starts at the specified offset and moves towards
             * the beginning.
             * @param subString		the string to find
             * @param start	the starting offset
             * @return the index in this StringBuilder of the specified character, -1 if the
             * 				character isn't found
             * @see #indexOf(String,int)
             */
            // @ts-ignore
            public lastIndexOf(subString: java.lang.String | string, start: number /*int*/): number /*int*/
            /**
             * Adds the specified CharSequence to the end of this StringBuilder.
             * @param sequence	the CharSequence
             * @return this StringBuilder
             */
            // @ts-ignore
            public append(sequence: java.lang.CharSequence): java.lang.StringBuilder
            /**
             * Adds the specified CharSequence to the end of this StringBuilder.
             * @param sequence	the CharSequence
             * @param start	the offset of the first character
             * @param end	the offset one past the last character
             * @return this StringBuilder
             * @exception IndexOutOfBoundsException when {#code start < 0, start > end} or
             * 				{@code end > length()}
             */
            // @ts-ignore
            public append(sequence: java.lang.CharSequence, start: number /*int*/, end: number /*int*/): java.lang.StringBuilder
            /**
             * Inserts the CharSequence at the specified offset in this StringBuilder.
             * @param index	the index at which to insert
             * @param sequence	the CharSequence to insert
             * @return this StringBuilder
             * @exception IndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}
             */
            // @ts-ignore
            public insert(index: number /*int*/, sequence: java.lang.CharSequence): java.lang.StringBuilder
            /**
             * Inserts the CharSequence at the specified offset in this StringBuilder.
             * @param index	the index at which to insert
             * @param sequence	the CharSequence to insert
             * @param start	the offset of the first character
             * @param end	the offset one past the last character
             * @return this StringBuilder
             * @exception IndexOutOfBoundsException when {#code index < 0} or
             * 				{@code index > length()}, or when {@code start < 0, start > end} or
             * 				{@code end > length()}
             */
            // @ts-ignore
            public insert(index: number /*int*/, sequence: java.lang.CharSequence, start: number /*int*/, end: number /*int*/): java.lang.StringBuilder
            /**
             * Optionally modify the underlying char array to only
             * be large enough to hold the characters in this StringBuffer.
             */
            // @ts-ignore
            public trimToSize(): void
            /**
             * Returns the Unicode character at the given point.
             * @param index		the character index
             * @return the Unicode character value at the index
             */
            // @ts-ignore
            public codePointAt(index: number /*int*/): number /*int*/
            /**
             * Returns the Unicode character before the given point.
             * @param index		the character index
             * @return the Unicode character value before the index
             */
            // @ts-ignore
            public codePointBefore(index: number /*int*/): number /*int*/
            /**
             * Returns the total Unicode values in the specified range.
             * @param start		first index
             * @param end			last index
             * @return the total Unicode values
             */
            // @ts-ignore
            public codePointCount(start: number /*int*/, end: number /*int*/): number /*int*/
            /**
             * Returns the index of the code point that was offset by {@code codePointCount}.
             * @param start			the position to offset
             * @param codePointCount	the code point count
             * @return the offset index
             */
            // @ts-ignore
            public offsetByCodePoints(start: number /*int*/, codePointCount: number /*int*/): number /*int*/
            /**
             * Adds the specified code point to the end of this StringBuffer.
             * @param codePoint	the code point
             * @return this StringBuffer
             */
            // @ts-ignore
            public appendCodePoint(codePoint: number /*int*/): java.lang.StringBuilder
        }
    }
}
