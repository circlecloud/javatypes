declare namespace java {
    namespace lang {
        /**
         * Strings are objects which represent immutable arrays of characters.
         * @author OTI
         * @version initial
         * @see StringBuffer
         */
        // @ts-ignore
        class String extends java.lang.Object implements java.io.Serializable, java.lang.Comparable<java.lang.String | string>, java.lang.CharSequence {
            /**
             * Answers an empty string.
             */
            // @ts-ignore
            constructor()
            /**
             * Converts the byte array to a String using the default encoding as specified by the file.encoding system property. If the system property is not
             * defined, the default encoding is ISO8859_1 (ISO-Latin-1). If 8859-1 is not available, an ASCII encoding is used.
             * @param data
             * 			  the byte array to convert to a String
             * @throws NullPointerException
             * 				when data is null
             * @see #getBytes()
             * @see #getBytes(int, int, byte[], int)
             * @see #getBytes(String)
             * @see #valueOf(boolean)
             * @see #valueOf(char)
             * @see #valueOf(char[])
             * @see #valueOf(char[], int, int)
             * @see #valueOf(double)
             * @see #valueOf(float)
             * @see #valueOf(int)
             * @see #valueOf(long)
             * @see #valueOf(Object)
             */
            // @ts-ignore
            constructor(data: number /*byte*/[])
            /**
             * Converts the byte array to a String, setting the high byte of every character to the specified value.
             * @param data
             * 			  the byte array to convert to a String
             * @param high
             * 			  the high byte to use
             * @throws NullPointerException
             * 				when data is null
             * @deprecated Use String(byte[]) or String(byte[], String) instead
             */
            // @ts-ignore
            constructor(data: number /*byte*/[], high: number /*int*/)
            /**
             * Converts the byte array to a String using the default encoding as specified by the file.encoding system property. If the system property is not
             * defined, the default encoding is ISO8859_1 (ISO-Latin-1). If 8859-1 is not available, an ASCII encoding is used.
             * @param data
             * 			  the byte array to convert to a String
             * @param start
             * 			  the starting offset in the byte array
             * @param length
             * 			  the number of bytes to convert
             * @throws IndexOutOfBoundsException
             * 				when {#code length < 0, start < 0} or {@code start + length > data.length}
             * @throws NullPointerException
             * 				when data is null
             * @see #getBytes()
             * @see #getBytes(int, int, byte[], int)
             * @see #getBytes(String)
             * @see #valueOf(boolean)
             * @see #valueOf(char)
             * @see #valueOf(char[])
             * @see #valueOf(char[], int, int)
             * @see #valueOf(double)
             * @see #valueOf(float)
             * @see #valueOf(int)
             * @see #valueOf(long)
             * @see #valueOf(Object)
             */
            // @ts-ignore
            constructor(data: number /*byte*/[], start: number /*int*/, length: number /*int*/)
            /**
             * Converts the byte array to a String, setting the high byte of every character to the specified value.
             * @param data
             * 			  the byte array to convert to a String
             * @param high
             * 			  the high byte to use
             * @param start
             * 			  the starting offset in the byte array
             * @param length
             * 			  the number of bytes to convert
             * @throws IndexOutOfBoundsException
             * 				when {#code length < 0, start < 0} or {@code start + length > data.length}
             * @throws NullPointerException
             * 				when data is null
             * @deprecated Use String(byte[], int, int) instead
             */
            // @ts-ignore
            constructor(data: number /*byte*/[], high: number /*int*/, start: number /*int*/, length: number /*int*/)
            /**
             * Converts the byte array to a String using the specified encoding.
             * @param data
             * 			  the byte array to convert to a String
             * @param start
             * 			  the starting offset in the byte array
             * @param length
             * 			  the number of bytes to convert
             * @param encoding
             * 			  the encoding
             * @throws IndexOutOfBoundsException
             * 				when {#code length < 0, start < 0} or {@code start + length > data.length}
             * @throws UnsupportedEncodingException
             * 				when encoding is not supported
             * @throws NullPointerException
             * 				when data is null
             * @see #getBytes()
             * @see #getBytes(int, int, byte[], int)
             * @see #getBytes(String)
             * @see #valueOf(boolean)
             * @see #valueOf(char)
             * @see #valueOf(char[])
             * @see #valueOf(char[], int, int)
             * @see #valueOf(double)
             * @see #valueOf(float)
             * @see #valueOf(int)
             * @see #valueOf(long)
             * @see #valueOf(Object)
             * @see UnsupportedEncodingException
             */
            // @ts-ignore
            constructor(data: number /*byte*/[], start: number /*int*/, length: number /*int*/, encoding: java.lang.String | string)
            /**
             * Converts the byte array to a String using the specified encoding.
             * @param data
             * 			  the byte array to convert to a String
             * @param encoding
             * 			  the encoding
             * @throws UnsupportedEncodingException
             * 				when encoding is not supported
             * @throws NullPointerException
             * 				when data is null
             * @see #getBytes()
             * @see #getBytes(int, int, byte[], int)
             * @see #getBytes(String)
             * @see #valueOf(boolean)
             * @see #valueOf(char)
             * @see #valueOf(char[])
             * @see #valueOf(char[], int, int)
             * @see #valueOf(double)
             * @see #valueOf(float)
             * @see #valueOf(int)
             * @see #valueOf(long)
             * @see #valueOf(Object)
             * @see UnsupportedEncodingException
             */
            // @ts-ignore
            constructor(data: number /*byte*/[], encoding: java.lang.String | string)
            /**
             * Initializes this String to contain the characters in the specified character array. Modifying the character array after creating the String has
             * no effect on the String.
             * @param data
             * 			  the array of characters
             * @throws NullPointerException
             * 				when data is null
             */
            // @ts-ignore
            constructor(data: string[])
            /**
             * Initializes this String to contain the specified characters in the character array. Modifying the character array after creating the String has
             * no effect on the String.
             * @param data
             * 			  the array of characters
             * @param start
             * 			  the starting offset in the character array
             * @param length
             * 			  the number of characters to use
             * @throws IndexOutOfBoundsException
             * 				when {#code length < 0, start < 0} or {@code start + length > data.length}
             * @throws NullPointerException
             * 				when data is null
             */
            // @ts-ignore
            constructor(data: string[], start: number /*int*/, length: number /*int*/)
            /**
             * Creates a string that is a copy of another string
             * @param string
             * 			  the String to copy
             */
            // @ts-ignore
            constructor(string: java.lang.String | string)
            /**
             * Creates a string from the contents of a StringBuffer.
             * @param buffer
             * 			  the StringBuffer
             */
            // @ts-ignore
            constructor(buffer: java.lang.StringBuffer)
            /**
             * @param data
             * 			  the byte array to convert to a String
             * @param start
             * 			  the starting offset in the byte array
             * @param length
             * 			  the number of bytes to convert
             * @since 1.5
             */
            // @ts-ignore
            constructor(data: number /*int*/[], start: number /*int*/, length: number /*int*/)
            /**
             * Creates a string from the contents of a StringBuilder.
             * @param builder
             * 			  the StringBuilder
             * @since 1.5
             */
            // @ts-ignore
            constructor(builder: java.lang.StringBuilder)
            /**
             * Converts the byte array to a String using the specified Charset.
             * @param data
             * 			  the byte array to convert to a String
             * @param charset
             * 			  the Charset to use
             * @throws NullPointerException
             * 				when data is null
             * @since 1.6
             * @see #String(byte[], int, int, Charset)
             * @see #getBytes(Charset)
             */
            // @ts-ignore
            constructor(data: number /*byte*/[], charset: java.nio.charset.Charset)
            /**
             * Converts the byte array to a String using the specified Charset.
             * @param data
             * 			  the byte array to convert to a String
             * @param start
             * 			  the starting offset in the byte array
             * @param length
             * 			  the number of bytes to convert
             * @param charset
             * 			  the Charset to use
             * @throws IndexOutOfBoundsException
             * 				when {#code length < 0, start < 0} or {@code start + length > data.length}
             * @throws NullPointerException
             * 				when data is null
             * @since 1.6
             * @see #String(byte[], Charset)
             * @see #getBytes(Charset)
             */
            // @ts-ignore
            constructor(data: number /*byte*/[], start: number /*int*/, length: number /*int*/, charset: java.nio.charset.Charset)
            /**
             * A Comparator which compares Strings ignoring the case of the characters.
             */
            // @ts-ignore
            public static readonly CASE_INSENSITIVE_ORDER: java.util.Comparator<java.lang.String | string>
            /**
             * Answers the character at the specified offset in this String.
             * @param index
             * 			  the zero-based index in this string
             * @return the character at the index
             * @throws IndexOutOfBoundsException
             * 				when {#code index < 0} or {@code index >= length()}
             */
            // @ts-ignore
            public charAt(index: number /*int*/): string
            /**
             * Compares the specified String to this String using the Unicode values of the characters. Answer 0 if the strings contain the same characters in
             * the same order. Answer a negative integer if the first non-equal character in this String has a Unicode value which is less than the Unicode
             * value of the character at the same position in the specified string, or if this String is a prefix of the specified string. Answer a positive
             * integer if the first non-equal character in this String has a Unicode value which is greater than the Unicode value of the character at the same
             * position in the specified string, or if the specified String is a prefix of the this String.
             * @param string
             * 			  the string to compare
             * @return 0 if the strings are equal, a negative integer if this String is before the specified String, or a positive integer if this String is
             * 			after the specified String
             * @throws NullPointerException
             * 				when string is null
             */
            // @ts-ignore
            public compareTo(string: java.lang.String | string): number /*int*/
            /**
             * Compare the receiver to the specified String to determine the relative ordering when the case of the characters is ignored.
             * @param string
             * 			  a String
             * @return an {#code int < 0} if this String is less than the specified String, 0 if they are equal, and {@code > 0} if this String is greater
             */
            // @ts-ignore
            public compareToIgnoreCase(string: java.lang.String | string): number /*int*/
            /**
             * Concatenates this String and the specified string.
             * @param string
             * 			  the string to concatenate
             * @return a String which is the concatenation of this String and the specified String
             * @throws NullPointerException
             * 				if string is null
             */
            // @ts-ignore
            public concat(string: java.lang.String | string): string
            /**
             * Creates a new String containing the characters in the specified character array. Modifying the character array after creating the String has no
             * effect on the String.
             * @param data
             * 			  the array of characters
             * @return the new String
             * @throws NullPointerException
             * 				if data is null
             */
            // @ts-ignore
            public static copyValueOf(data: string[]): string
            /**
             * Creates a new String containing the specified characters in the character array. Modifying the character array after creating the String has no
             * effect on the String.
             * @param data
             * 			  the array of characters
             * @param start
             * 			  the starting offset in the character array
             * @param length
             * 			  the number of characters to use
             * @return the new String
             * @throws IndexOutOfBoundsException
             * 				when {#code length < 0, start < 0} or {@code start + length > data.length}
             * @throws NullPointerException
             * 				if data is null
             */
            // @ts-ignore
            public static copyValueOf(data: string[], start: number /*int*/, length: number /*int*/): string
            /**
             * Compares the specified string to this String to determine if the specified string is a suffix.
             * @param suffix
             * 			  the string to look for
             * @return true when the specified string is a suffix of this String, false otherwise
             * @throws NullPointerException
             * 				if suffix is null
             */
            // @ts-ignore
            public endsWith(suffix: java.lang.String | string): boolean
            /**
             * Compares the specified object to this String and answer if they are equal. The object must be an instance of String with the same characters in
             * the same order.
             * @param object
             * 			  the object to compare
             * @return true if the specified object is equal to this String, false otherwise
             * @see #hashCode()
             */
            // @ts-ignore
            public equals(object: java.lang.Object | any): boolean
            /**
             * Compares the specified String to this String ignoring the case of the characters and answer if they are equal.
             * @param string
             * 			  the string to compare
             * @return true if the specified string is equal to this String, false otherwise
             */
            // @ts-ignore
            public equalsIgnoreCase(string: java.lang.String | string): boolean
            /**
             * Converts this String to a byte encoding using the default encoding as specified by the file.encoding system property. If the system property is
             * not defined, the default encoding is ISO8859_1 (ISO-Latin-1). If 8859-1 is not available, an ASCII encoding is used.
             * @return the byte array encoding of this String
             * @see String
             */
            // @ts-ignore
            public getBytes(): number /*byte*/[]
            /**
             * Converts this String to a byte array, ignoring the high order bits of each character.
             * @param start
             * 			  the starting offset of characters to copy
             * @param end
             * 			  the ending offset of characters to copy
             * @param data
             * 			  the destination byte array
             * @param index
             * 			  the starting offset in the byte array
             * @throws NullPointerException
             * 				when data is null
             * @throws IndexOutOfBoundsException
             * 				when {#code start < 0, end > length(), index < 0, end - start > data.length - index}
             * @deprecated Use getBytes() or getBytes(String)
             */
            // @ts-ignore
            public getBytes(start: number /*int*/, end: number /*int*/, data: number /*byte*/[], index: number /*int*/): void
            /**
             * Converts this String to a byte encoding using the specified encoding.
             * @param encoding
             * 			  the encoding
             * @return the byte array encoding of this String
             * @throws UnsupportedEncodingException
             * 				when the encoding is not supported
             * @see String
             * @see UnsupportedEncodingException
             */
            // @ts-ignore
            public getBytes(encoding: java.lang.String | string): number /*byte*/[]
            /**
             * Copies the specified characters in this String to the character array starting at the specified offset in the character array.
             * @param start
             * 			  the starting offset of characters to copy
             * @param end
             * 			  the ending offset of characters to copy
             * @param data
             * 			  the destination character array
             * @param index
             * 			  the starting offset in the character array
             * @throws IndexOutOfBoundsException
             * 				when {#code start < 0, end > length(), start > end, index < 0, end - start > buffer.length - index}
             * @throws NullPointerException
             * 				when buffer is null
             */
            // @ts-ignore
            public getChars(start: number /*int*/, end: number /*int*/, data: string[], index: number /*int*/): void
            /**
             * Answers an integer hash code for the receiver. Objects which are equal answer the same value for this method.
             * @return the receiver's hash
             * @see #equals
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Searches in this String for the first index of the specified character. The search for the character starts at the beginning and moves towards
             * the end of this String.
             * @param c
             * 			  the character to find
             * @return the index in this String of the specified character, -1 if the character isn't found
             * @see #lastIndexOf(int)
             * @see #lastIndexOf(int, int)
             * @see #lastIndexOf(String)
             * @see #lastIndexOf(String, int)
             */
            // @ts-ignore
            public indexOf(c: number /*int*/): number /*int*/
            /**
             * Searches in this String for the index of the specified character. The search for the character starts at the specified offset and moves towards
             * the end of this String.
             * @param c
             * 			  the character to find
             * @param start
             * 			  the starting offset
             * @return the index in this String of the specified character, -1 if the character isn't found
             * @see #lastIndexOf(int)
             * @see #lastIndexOf(int, int)
             * @see #lastIndexOf(String)
             * @see #lastIndexOf(String, int)
             */
            // @ts-ignore
            public indexOf(c: number /*int*/, start: number /*int*/): number /*int*/
            /**
             * Searches in this String for the first index of the specified string. The search for the string starts at the beginning and moves towards the end
             * of this String.
             * @param string
             * 			  the string to find
             * @return the index in this String of the specified string, -1 if the string isn't found
             * @throws NullPointerException
             * 				when string is null
             * @see #lastIndexOf(int)
             * @see #lastIndexOf(int, int)
             * @see #lastIndexOf(String)
             * @see #lastIndexOf(String, int)
             */
            // @ts-ignore
            public indexOf(string: java.lang.String | string): number /*int*/
            /**
             * Searches in this String for the index of the specified string. The search for the string starts at the specified offset and moves towards the
             * end of this String.
             * @param subString
             * 			  the string to find
             * @param start
             * 			  the starting offset
             * @return the index in this String of the specified string, -1 if the string isn't found
             * @throws NullPointerException
             * 				when string is null
             * @see #lastIndexOf(int)
             * @see #lastIndexOf(int, int)
             * @see #lastIndexOf(String)
             * @see #lastIndexOf(String, int)
             */
            // @ts-ignore
            public indexOf(subString: java.lang.String | string, start: number /*int*/): number /*int*/
            /**
             * Searches an internal table of strings for a string equal to this String. If the string is not in the table, it is added. Answers the string
             * contained in the table which is equal to this String. The same string object is always answered for strings which are equal.
             * @return the interned string equal to this String
             */
            // @ts-ignore
            public intern(): string
            /**
             * Searches in this String for the last index of the specified character. The search for the character starts at the end and moves towards the
             * beginning of this String.
             * @param c
             * 			  the character to find
             * @return the index in this String of the specified character, -1 if the character isn't found
             * @see #lastIndexOf(int)
             * @see #lastIndexOf(int, int)
             * @see #lastIndexOf(String)
             * @see #lastIndexOf(String, int)
             */
            // @ts-ignore
            public lastIndexOf(c: number /*int*/): number /*int*/
            /**
             * Searches in this String for the index of the specified character. The search for the character starts at the specified offset and moves towards
             * the beginning of this String.
             * @param c
             * 			  the character to find
             * @param start
             * 			  the starting offset
             * @return the index in this String of the specified character, -1 if the character isn't found
             * @see #lastIndexOf(int)
             * @see #lastIndexOf(int, int)
             * @see #lastIndexOf(String)
             * @see #lastIndexOf(String, int)
             */
            // @ts-ignore
            public lastIndexOf(c: number /*int*/, start: number /*int*/): number /*int*/
            /**
             * Searches in this String for the last index of the specified string. The search for the string starts at the end and moves towards the beginning
             * of this String.
             * @param string
             * 			  the string to find
             * @return the index in this String of the specified string, -1 if the string isn't found
             * @throws NullPointerException
             * 				when string is null
             * @see #lastIndexOf(int)
             * @see #lastIndexOf(int, int)
             * @see #lastIndexOf(String)
             * @see #lastIndexOf(String, int)
             */
            // @ts-ignore
            public lastIndexOf(string: java.lang.String | string): number /*int*/
            /**
             * Searches in this String for the index of the specified string. The search for the string starts at the specified offset and moves towards the
             * beginning of this String.
             * @param subString
             * 			  the string to find
             * @param start
             * 			  the starting offset
             * @return the index in this String of the specified string, -1 if the string isn't found
             * @throws NullPointerException
             * 				when string is null
             * @see #lastIndexOf(int)
             * @see #lastIndexOf(int, int)
             * @see #lastIndexOf(String)
             * @see #lastIndexOf(String, int)
             */
            // @ts-ignore
            public lastIndexOf(subString: java.lang.String | string, start: number /*int*/): number /*int*/
            /**
             * Answers the size of this String.
             * @return the number of characters in this String
             */
            // @ts-ignore
            public length(): number /*int*/
            /**
             * Compares the specified string to this String and compares the specified range of characters to determine if they are the same.
             * @param thisStart
             * 			  the starting offset in this String
             * @param string
             * 			  the string to compare
             * @param start
             * 			  the starting offset in string
             * @param length
             * 			  the number of characters to compare
             * @return true if the ranges of characters is equal, false otherwise
             * @throws NullPointerException
             * 				when string is null
             */
            // @ts-ignore
            public regionMatches(thisStart: number /*int*/, string: java.lang.String | string, start: number /*int*/, length: number /*int*/): boolean
            /**
             * Compares the specified string to this String and compares the specified range of characters to determine if they are the same. When ignoreCase
             * is true, the case of the characters is ignored during the comparison.
             * @param ignoreCase
             * 			  specifies if case should be ignored
             * @param thisStart
             * 			  the starting offset in this String
             * @param string
             * 			  the string to compare
             * @param start
             * 			  the starting offset in string
             * @param length
             * 			  the number of characters to compare
             * @return true if the ranges of characters is equal, false otherwise
             * @throws NullPointerException
             * 				when string is null
             */
            // @ts-ignore
            public regionMatches(ignoreCase: boolean, thisStart: number /*int*/, string: java.lang.String | string, start: number /*int*/, length: number /*int*/): boolean
            /**
             * Replaces occurrences of the specified character with another character.
             * @param oldChar
             * 			  the character to replace
             * @param newChar
             * 			  the replacement character
             * @return a String with occurrences of oldChar replaced by newChar
             */
            // @ts-ignore
            public replace(oldChar: string, newChar: string): string
            /**
             * Compares the specified string to this String to determine if the specified string is a prefix.
             * @param prefix
             * 			  the string to look for
             * @return true when the specified string is a prefix of this String, false otherwise
             * @throws NullPointerException
             * 				when prefix is null
             */
            // @ts-ignore
            public startsWith(prefix: java.lang.String | string): boolean
            /**
             * Compares the specified string to this String, starting at the specified offset, to determine if the specified string is a prefix.
             * @param prefix
             * 			  the string to look for
             * @param start
             * 			  the starting offset
             * @return true when the specified string occurs in this String at the specified offset, false otherwise
             * @throws NullPointerException
             * 				when prefix is null
             */
            // @ts-ignore
            public startsWith(prefix: java.lang.String | string, start: number /*int*/): boolean
            /**
             * Copies a range of characters into a new String.
             * @param start
             * 			  the offset of the first character
             * @return a new String containing the characters from start to the end of the string
             * @throws IndexOutOfBoundsException
             * 				when {#code start < 0} or {@code start > length()}
             */
            // @ts-ignore
            public substring(start: number /*int*/): string
            /**
             * Copies a range of characters.
             * @param start
             * 			  the offset of the first character
             * @param end
             * 			  the offset one past the last character
             * @return a String containing the characters from start to end - 1
             * @throws IndexOutOfBoundsException
             * 				when {#code start < 0, start > end} or {@code end > length()}
             */
            // @ts-ignore
            public substring(start: number /*int*/, end: number /*int*/): string
            /**
             * Copies the characters in this String to a character array.
             * @return a character array containing the characters of this String
             */
            // @ts-ignore
            public toCharArray(): string[]
            /**
             * Converts the characters in this String to lowercase, using the default Locale. To convert to lower case independent of any locale, use
             * toLowerCase(Locale.ROOT).
             * @return a new String containing the lowercase characters equivalent to the characters in this String
             */
            // @ts-ignore
            public toLowerCase(): string
            /**
             * Converts the characters in this String to lowercase, using the specified Locale.
             * @param locale
             * 			  the Locale
             * @return a String containing the lowercase characters equivalent to the characters in this String
             */
            // @ts-ignore
            public toLowerCase(locale: java.util.Locale): string
            /**
             * Answers a string containing a concise, human-readable description of the receiver.
             * @return this String
             */
            // @ts-ignore
            public toString(): string
            /**
             * Converts the characters in this String to uppercase, using the default Locale. To convert to upper case independent of any locale, use
             * toUpperCase(Locale.ROOT).
             * @return a String containing the uppercase characters equivalent to the characters in this String
             */
            // @ts-ignore
            public toUpperCase(): string
            /**
             * Converts the characters in this String to uppercase, using the specified Locale.
             * @param locale
             * 			  the Locale
             * @return a String containing the uppercase characters equivalent to the characters in this String
             */
            // @ts-ignore
            public toUpperCase(locale: java.util.Locale): string
            /**
             * Removes white space characters from the beginning and end of the string.
             * @return a String with characters {#code <= \\u0020} removed from the beginning and the end
             */
            // @ts-ignore
            public trim(): string
            /**
             * Returns a String containing the characters in the specified character array. Modifying the character array after creating the String has no
             * effect on the String.
             * @param data
             * 			  the array of characters
             * @return the String
             * @throws NullPointerException
             * 				when data is null
             */
            // @ts-ignore
            public static valueOf(data: string[]): string
            /**
             * Returns a String containing the specified characters in the character array. Modifying the character array after creating the String has no
             * effect on the String.
             * @param data
             * 			  the array of characters
             * @param start
             * 			  the starting offset in the character array
             * @param length
             * 			  the number of characters to use
             * @return the String
             * @throws IndexOutOfBoundsException
             * 				when {#code length < 0, start < 0} or {@code start + length > data.length}
             * @throws NullPointerException
             * 				when data is null
             */
            // @ts-ignore
            public static valueOf(data: string[], start: number /*int*/, length: number /*int*/): string
            /**
             * Converts the specified character to its string representation.
             * @param value
             * 			  the character
             * @return the character converted to a string
             */
            // @ts-ignore
            public static valueOf(value: string): string
            /**
             * Converts the specified double to its string representation.
             * @param value
             * 			  the double
             * @return the double converted to a string
             */
            // @ts-ignore
            public static valueOf(value: number /*double*/): string
            /**
             * Converts the specified float to its string representation.
             * @param value
             * 			  the float
             * @return the float converted to a string
             */
            // @ts-ignore
            public static valueOf(value: number /*float*/): string
            /**
             * Converts the specified integer to its string representation.
             * @param value
             * 			  the integer
             * @return the integer converted to a string
             */
            // @ts-ignore
            public static valueOf(value: number /*int*/): string
            /**
             * Converts the specified long to its string representation.
             * @param value
             * 			  the long
             * @return the long converted to a string
             */
            // @ts-ignore
            public static valueOf(value: number /*long*/): string
            /**
             * Converts the specified object to its string representation. If the object is null answer the string {@code "null"}, otherwise use
             * {@code toString()} to get the string representation.
             * @param value
             * 			  the object
             * @return the object converted to a string
             */
            // @ts-ignore
            public static valueOf(value: java.lang.Object | any): string
            /**
             * Converts the specified boolean to its string representation. When the boolean is true answer {@code "true"}, otherwise answer
             * {@code "false"}.
             * @param value
             * 			  the boolean
             * @return the boolean converted to a string
             */
            // @ts-ignore
            public static valueOf(value: boolean): string
            /**
             * Answers whether the characters in the StringBuffer buffer are the same as those in this String.
             * @param buffer
             * 			  the StringBuffer to compare this String to
             * @return true when the characters in buffer are identical to those in this String. If they are not, false will be returned.
             * @throws NullPointerException
             * 				when buffer is null
             * @since 1.4
             */
            // @ts-ignore
            public contentEquals(buffer: java.lang.StringBuffer): boolean
            /**
             * Determines whether a this String matches a given regular expression.
             * @param expr
             * 			  the regular expression to be matched
             * @return true if the expression matches, otherwise false
             * @throws PatternSyntaxException
             * 				if the syntax of the supplied regular expression is not valid
             * @throws NullPointerException
             * 				if expr is null
             * @since 1.4
             */
            // @ts-ignore
            public matches(expr: java.lang.String | string): boolean
            /**
             * Replace any substrings within this String that match the supplied regular expression expr, with the String substitute.
             * @param regex
             * 			  the regular expression to match
             * @param substitute
             * 			  the string to replace the matching substring with
             * @return the new string
             * @throws NullPointerException
             * 				if expr is null
             * @since 1.4
             */
            // @ts-ignore
            public replaceAll(regex: java.lang.String | string, substitute: java.lang.String | string): string
            /**
             * Replace any substrings within this String that match the supplied regular expression expr, with the String substitute.
             * @param expr
             * 			  the regular expression to match
             * @param substitute
             * 			  the string to replace the matching substring with
             * @return the new string
             * @throws NullPointerException
             * 				if expr is null
             * @since 1.4
             */
            // @ts-ignore
            public replaceFirst(expr: java.lang.String | string, substitute: java.lang.String | string): string
            /**
             * Splits this string around matches of the given regular expression. Calling this method is same as calling split(regex,0). Therefore, empty
             * string(s) at the end of the returned array will be discarded.
             * @param regex
             * 			  Regular expression that is used as a delimiter
             * @return The array of strings which are splitted around the regex
             * @throws PatternSyntaxException
             * 				if the syntax of regex is invalid
             * @since 1.4
             */
            // @ts-ignore
            public split(regex: java.lang.String | string): string[]
            /**
             * Splits this String using the given regular expression.
             * max controls the number of times the regex is applied to this string.
             * If max is positive, then regex can be applied to this String max-1 times.
             * The returned array size can not be bigger than max, and the last element of
             * the returned array contains all input after the last match of the regex.
             * If max is negative or zero, then regex can be applied to this string as many times as
             * possible and there is no size limit in the returned array.
             * If max is 0, all the empty string(s) at the end of the returned array will be discarded.
             * @param regex Regular expression that is used as a delimiter
             * @param max The threshold of the returned array
             * @return The array of strings which are splitted around the regex
             * @throws PatternSyntaxException if the syntax of regex is invalid
             * @since 1.4
             */
            // @ts-ignore
            public split(regex: java.lang.String | string, max: number /*int*/): string[]
            /**
             * Has the same result as the substring function, but is present so that String may implement the CharSequence interface.
             * @param start
             * 			  the offset the first character
             * @param end
             * 			  the offset of one past the last character to include
             * @return the subsequence requested
             * @throws IndexOutOfBoundsException
             * 				when start or end is less than zero, start is greater than end, or end is greater than the length of the String.
             * @see java.lang.CharSequence#subSequence(int, int)
             * @since 1.4
             */
            // @ts-ignore
            public subSequence(start: number /*int*/, end: number /*int*/): java.lang.CharSequence
            /**
             * Returns the Unicode character at the given point.
             * @param index
             * 			  the character index
             * @return the Unicode character value at the index
             * @since 1.5
             */
            // @ts-ignore
            public codePointAt(index: number /*int*/): number /*int*/
            /**
             * Returns the Unicode character before the given point.
             * @param index
             * 			  the character index
             * @return the Unicode character value before the index
             * @since 1.5
             */
            // @ts-ignore
            public codePointBefore(index: number /*int*/): number /*int*/
            /**
             * Returns the total Unicode values in the specified range.
             * @param start
             * 			  first index
             * @param end
             * 			  last index
             * @return the total Unicode values
             * @since 1.5
             */
            // @ts-ignore
            public codePointCount(start: number /*int*/, end: number /*int*/): number /*int*/
            /**
             * Returns the index of the code point that was offset by codePointCount.
             * @param start
             * 			  the position to offset
             * @param codePointCount
             * 			  the code point count
             * @return the offset index
             * @since 1.5
             */
            // @ts-ignore
            public offsetByCodePoints(start: number /*int*/, codePointCount: number /*int*/): number /*int*/
            /**
             * Compares the content of the character sequence to this String
             * @param sequence
             * 			  the character sequence
             * @return {#code true} if the content of this String is equal to the character sequence, {@code false} otherwise.
             * @since 1.5
             */
            // @ts-ignore
            public contentEquals(sequence: java.lang.CharSequence): boolean
            /**
             * @param sequence
             * 			  the sequence to compare to
             * @return {#code true} if this String contains the sequence, {@code false} otherwise.
             * @since 1.5
             */
            // @ts-ignore
            public contains(sequence: java.lang.CharSequence): boolean
            /**
             * @param sequence1
             * 			  the old character sequence
             * @param sequence2
             * 			  the new character sequence
             * @return the new String
             * @since 1.5
             */
            // @ts-ignore
            public replace(sequence1: java.lang.CharSequence, sequence2: java.lang.CharSequence): string
            /**
             * Format the receiver using the specified format and args.
             * @param format
             * 			  the format to use
             * @param args
             * 			  the format arguments to use
             * @return the formatted result
             * @see java.util.Formatter#format(String, Object...)
             */
            // @ts-ignore
            public static format(format: java.lang.String | string, ...args: java.lang.Object[] | any[]): string
            /**
             * Format the receiver using the specified local, format and args.
             * @param locale
             * 			  the locale used to create the Formatter, may be null
             * @param format
             * 			  the format to use
             * @param args
             * 			  the format arguments to use
             * @return the formatted result
             * @see java.util.Formatter#format(String, Object...)
             */
            // @ts-ignore
            public static format(locale: java.util.Locale, format: java.lang.String | string, ...args: java.lang.Object[] | any[]): string
            /**
             * Answers if this String has no characters, a length of zero.
             * @return true if this String has no characters, false otherwise
             * @since 1.6
             * @see #length
             */
            // @ts-ignore
            public isEmpty(): boolean
            /**
             * Converts this String to a byte encoding using the specified Charset.
             * @param charset
             * 			  the Charset to use
             * @return the byte array encoding of this String
             * @since 1.6
             */
            // @ts-ignore
            public getBytes(charset: java.nio.charset.Charset): number /*byte*/[]
            /**
             * Creates a new String by putting each element together joined by the delimiter. If an element is null, then "null" is used as string to join.
             * @param delimiter
             * 			  Used as joiner to put elements together
             * @param elements
             * 			  Elements to be joined
             * @return string of joined elements by delimiter
             * @throws NullPointerException
             * 				if one of the arguments is null
             */
            // @ts-ignore
            public static join(delimiter: java.lang.CharSequence, ...elements: java.lang.CharSequence[]): string
            /**
             * Creates a new String by putting each element together joined by the delimiter. If an element is null, then "null" is used as string to join.
             * @param delimiter
             * 			  Used as joiner to put elements together
             * @param elements
             * 			  Elements to be joined
             * @return string of joined elements by delimiter
             * @throws NullPointerException
             * 				if one of the arguments is null
             */
            // @ts-ignore
            public static join(delimiter: java.lang.CharSequence, elements: java.lang.Iterable<any>): string
        }
    }
}
