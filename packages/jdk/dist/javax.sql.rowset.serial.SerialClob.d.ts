declare namespace javax {
    namespace sql {
        namespace rowset {
            namespace serial {
                /**
                 * A serialized mapping in the Java programming language of an SQL
                 * <code>CLOB</code> value.
                 * <P>
                 * The <code>SerialClob</code> class provides a constructor for creating
                 * an instance from a <code>Clob</code> object.  Note that the <code>Clob</code>
                 * object should have brought the SQL <code>CLOB</code> value's data over
                 * to the client before a <code>SerialClob</code> object
                 * is constructed from it.  The data of an SQL <code>CLOB</code> value can
                 * be materialized on the client as a stream of Unicode characters.
                 * <P>
                 * <code>SerialClob</code> methods make it possible to get a substring
                 * from a <code>SerialClob</code> object or to locate the start of
                 * a pattern of characters.
                 * <h3> Thread safety </h3>
                 * <p> A SerialClob is not safe for use by multiple concurrent threads.  If a
                 * SerialClob is to be used by more than one thread then access to the SerialClob
                 * should be controlled by appropriate synchronization.
                 * @author Jonathan Bruce
                 */
                // @ts-ignore
                class SerialClob extends java.lang.Object implements java.sql.Clob, java.io.Serializable, java.lang.Cloneable {
                    /**
                     * Constructs a <code>SerialClob</code> object that is a serialized version of
                     * the given <code>char</code> array.
                     * <p>
                     * The new <code>SerialClob</code> object is initialized with the data from the
                     * <code>char</code> array, thus allowing disconnected <code>RowSet</code>
                     * objects to establish a serialized <code>Clob</code> object without touching
                     * the data source.
                     * @param ch the char array representing the <code>Clob</code> object to be
                     *          serialized
                     * @throws SerialException if an error occurs during serialization
                     * @throws SQLException if a SQL error occurs
                     */
                    // @ts-ignore
                    constructor(ch: string[])
                    /**
                     * Constructs a <code>SerialClob</code> object that is a serialized
                     * version of the given <code>Clob</code> object.
                     * <P>
                     * The new <code>SerialClob</code> object is initialized with the
                     * data from the <code>Clob</code> object; therefore, the
                     * <code>Clob</code> object should have previously brought the
                     * SQL <code>CLOB</code> value's data over to the client from
                     * the database. Otherwise, the new <code>SerialClob</code> object
                     * object will contain no data.
                     * <p>
                     * Note: The <code>Clob</code> object supplied to this constructor must
                     * return non-null for both the <code>Clob.getCharacterStream()</code>
                     * and <code>Clob.getAsciiStream</code> methods. This <code>SerialClob</code>
                     * constructor cannot serialize a <code>Clob</code> object in this instance
                     * and will throw an <code>SQLException</code> object.
                     * @param clob the <code>Clob</code> object from which this
                     *      <code>SerialClob</code> object is to be constructed; cannot be null
                     * @throws SerialException if an error occurs during serialization
                     * @throws SQLException if a SQL error occurs in capturing the CLOB;
                     *      if the <code>Clob</code> object is a null; or if either of the
                     *      <code>Clob.getCharacterStream()</code> and <code>Clob.getAsciiStream()</code>
                     *      methods on the <code>Clob</code> returns a null
                     * @see java.sql.Clob
                     */
                    // @ts-ignore
                    constructor(clob: java.sql.Clob)
                    /**
                     * Retrieves the number of characters in this <code>SerialClob</code>
                     * object's array of characters.
                     * @return a <code>long</code> indicating the length in characters of this
                     *          <code>SerialClob</code> object's array of character
                     * @throws SerialException if an error occurs;
                     *  if {#code free} had previously been called on this object
                     */
                    // @ts-ignore
                    public length(): number /*long*/
                    /**
                     * Returns this <code>SerialClob</code> object's data as a stream
                     * of Unicode characters. Unlike the related method, <code>getAsciiStream</code>,
                     * a stream is produced regardless of whether the <code>SerialClob</code> object
                     * was created with a <code>Clob</code> object or a <code>char</code> array.
                     * @return a <code>java.io.Reader</code> object containing this
                     *          <code>SerialClob</code> object's data
                     * @throws SerialException if an error occurs;
                     *  if {#code free} had previously been called on this object
                     */
                    // @ts-ignore
                    public getCharacterStream(): java.io.Reader
                    /**
                     * Retrieves the <code>CLOB</code> value designated by this <code>SerialClob</code>
                     * object as an ascii stream. This method forwards the <code>getAsciiStream</code>
                     * call to the underlying <code>Clob</code> object in the event that this
                     * <code>SerialClob</code> object is instantiated with a <code>Clob</code>
                     * object. If this <code>SerialClob</code> object is instantiated with
                     * a <code>char</code> array, a <code>SerialException</code> object is thrown.
                     * @return a <code>java.io.InputStream</code> object containing
                     *      this <code>SerialClob</code> object's data
                     * @throws SerialException if this {#code SerialClob} object was not
                     *  instantiated with a <code>Clob</code> object;
                     *  if {@code free} had previously been called on this object
                     * @throws SQLException if there is an error accessing the
                     *      <code>CLOB</code> value represented by the <code>Clob</code> object
                     *  that was used to create this <code>SerialClob</code> object
                     */
                    // @ts-ignore
                    public getAsciiStream(): java.io.InputStream
                    /**
                     * Returns a copy of the substring contained in this
                     * <code>SerialClob</code> object, starting at the given position
                     * and continuing for the specified number or characters.
                     * @param pos the position of the first character in the substring
                     *             to be copied; the first character of the
                     *             <code>SerialClob</code> object is at position
                     *             <code>1</code>; must not be less than <code>1</code>,
                     *             and the sum of the starting position and the length
                     *             of the substring must be less than the length of this
                     *             <code>SerialClob</code> object
                     * @param length the number of characters in the substring to be
                     *                returned; must not be greater than the length of
                     *                this <code>SerialClob</code> object, and the
                     *                sum of the starting position and the length
                     *                of the substring must be less than the length of this
                     *                <code>SerialClob</code> object
                     * @return a <code>String</code> object containing a substring of
                     *          this <code>SerialClob</code> object beginning at the
                     *          given position and containing the specified number of
                     *          consecutive characters
                     * @throws SerialException if either of the arguments is out of bounds;
                     *  if {#code free} had previously been called on this object
                     */
                    // @ts-ignore
                    public getSubString(pos: number /*long*/, length: number /*int*/): string
                    /**
                     * Returns the position in this <code>SerialClob</code> object
                     * where the given <code>String</code> object begins, starting
                     * the search at the specified position. This method returns
                     * <code>-1</code> if the pattern is not found.
                     * @param searchStr the <code>String</code> object for which to
                     *                   search
                     * @param start the position in this <code>SerialClob</code> object
                     *          at which to start the search; the first position is
                     *          <code>1</code>; must not be less than <code>1</code> nor
                     *          greater than the length of this <code>SerialClob</code> object
                     * @return the position at which the given <code>String</code> object
                     *          begins, starting the search at the specified position;
                     *          <code>-1</code> if the given <code>String</code> object is
                     *          not found or the starting position is out of bounds; position
                     *          numbering for the return value starts at <code>1</code>
                     * @throws SerialException  if the {#code free} method had been
                     *  previously called on this object
                     * @throws SQLException if there is an error accessing the Clob value
                     *          from the database.
                     */
                    // @ts-ignore
                    public position(searchStr: java.lang.String | string, start: number /*long*/): number /*long*/
                    /**
                     * Returns the position in this <code>SerialClob</code> object
                     * where the given <code>Clob</code> signature begins, starting
                     * the search at the specified position. This method returns
                     * <code>-1</code> if the pattern is not found.
                     * @param searchStr the <code>Clob</code> object for which to search
                     * @param start the position in this <code>SerialClob</code> object
                     *         at which to begin the search; the first position is
                     *          <code>1</code>; must not be less than <code>1</code> nor
                     *          greater than the length of this <code>SerialClob</code> object
                     * @return the position at which the given <code>Clob</code>
                     *          object begins in this <code>SerialClob</code> object,
                     *          at or after the specified starting position
                     * @throws SerialException if an error occurs locating the Clob signature;
                     *  if the {#code free} method had been previously called on this object
                     * @throws SQLException if there is an error accessing the Clob value
                     *          from the database
                     */
                    // @ts-ignore
                    public position(searchStr: java.sql.Clob, start: number /*long*/): number /*long*/
                    /**
                     * Writes the given Java <code>String</code> to the <code>CLOB</code>
                     * value that this <code>SerialClob</code> object represents, at the position
                     * <code>pos</code>.
                     * @param pos the position at which to start writing to the <code>CLOB</code>
                     *          value that this <code>SerialClob</code> object represents; the first
                     *          position is <code>1</code>; must not be less than <code>1</code> nor
                     *          greater than the length of this <code>SerialClob</code> object
                     * @param str the string to be written to the <code>CLOB</code>
                     *         value that this <code>SerialClob</code> object represents
                     * @return the number of characters written
                     * @throws SerialException if there is an error accessing the
                     *      <code>CLOB</code> value; if an invalid position is set; if an
                     *      invalid offset value is set; if number of bytes to be written
                     *      is greater than the <code>SerialClob</code> length; or the combined
                     *      values of the length and offset is greater than the Clob buffer;
                     *  if the {#code free} method had been previously called on this object
                     */
                    // @ts-ignore
                    public setString(pos: number /*long*/, str: java.lang.String | string): number /*int*/
                    /**
                     * Writes <code>len</code> characters of <code>str</code>, starting
                     * at character <code>offset</code>, to the <code>CLOB</code> value
                     * that this <code>Clob</code> represents.
                     * @param pos the position at which to start writing to the <code>CLOB</code>
                     *          value that this <code>SerialClob</code> object represents; the first
                     *          position is <code>1</code>; must not be less than <code>1</code> nor
                     *          greater than the length of this <code>SerialClob</code> object
                     * @param str the string to be written to the <code>CLOB</code>
                     *         value that this <code>Clob</code> object represents
                     * @param offset the offset into <code>str</code> to start reading
                     *         the characters to be written
                     * @param length the number of characters to be written
                     * @return the number of characters written
                     * @throws SerialException if there is an error accessing the
                     *      <code>CLOB</code> value; if an invalid position is set; if an
                     *      invalid offset value is set; if number of bytes to be written
                     *      is greater than the <code>SerialClob</code> length; or the combined
                     *      values of the length and offset is greater than the Clob buffer;
                     *  if the {#code free} method had been previously called on this object
                     */
                    // @ts-ignore
                    public setString(pos: number /*long*/, str: java.lang.String | string, offset: number /*int*/, length: number /*int*/): number /*int*/
                    /**
                     * Retrieves a stream to be used to write Ascii characters to the
                     * <code>CLOB</code> value that this <code>SerialClob</code> object represents,
                     * starting at position <code>pos</code>. This method forwards the
                     * <code>setAsciiStream()</code> call to the underlying <code>Clob</code> object in
                     * the event that this <code>SerialClob</code> object is instantiated with a
                     * <code>Clob</code> object. If this <code>SerialClob</code> object is instantiated
                     * with a <code>char</code> array, a <code>SerialException</code> object is thrown.
                     * @param pos the position at which to start writing to the
                     *         <code>CLOB</code> object
                     * @return the stream to which ASCII encoded characters can be written
                     * @throws SerialException if SerialClob is not instantiated with a
                     *      Clob object;
                     *  if the {#code free} method had been previously called on this object
                     * @throws SQLException if there is an error accessing the
                     *      <code>CLOB</code> value
                     * @see #getAsciiStream
                     */
                    // @ts-ignore
                    public setAsciiStream(pos: number /*long*/): java.io.OutputStream
                    /**
                     * Retrieves a stream to be used to write a stream of Unicode characters
                     * to the <code>CLOB</code> value that this <code>SerialClob</code> object
                     * represents, at position <code>pos</code>. This method forwards the
                     * <code>setCharacterStream()</code> call to the underlying <code>Clob</code>
                     * object in the event that this <code>SerialClob</code> object is instantiated with a
                     * <code>Clob</code> object. If this <code>SerialClob</code> object is instantiated with
                     * a <code>char</code> array, a <code>SerialException</code> is thrown.
                     * @param pos the position at which to start writing to the
                     *         <code>CLOB</code> value
                     * @return a stream to which Unicode encoded characters can be written
                     * @throws SerialException if the SerialClob is not instantiated with
                     *      a Clob object;
                     *  if the {#code free} method had been previously called on this object
                     * @throws SQLException if there is an error accessing the
                     *             <code>CLOB</code> value
                     * @see #getCharacterStream
                     */
                    // @ts-ignore
                    public setCharacterStream(pos: number /*long*/): java.io.Writer
                    /**
                     * Truncates the <code>CLOB</code> value that this <code>SerialClob</code>
                     * object represents so that it has a length of <code>len</code>
                     * characters.
                     * <p>
                     * Truncating a <code>SerialClob</code> object to length 0 has the effect of
                     * clearing its contents.
                     * @param length the length, in bytes, to which the <code>CLOB</code>
                     *         value should be truncated
                     * @throws SerialException if there is an error accessing the
                     *         <code>CLOB</code> value;
                     *  if the {#code free} method had been previously called on this object
                     */
                    // @ts-ignore
                    public truncate(length: number /*long*/): void
                    /**
                     * Returns a {@code Reader} object that contains a partial
                     * {@code SerialClob} value, starting
                     * with the character specified by pos, which is length characters in length.
                     * @param pos the offset to the first character of the partial value to
                     *  be retrieved.  The first character in the {#code SerialClob} is at position 1.
                     * @param length the length in characters of the partial value to be retrieved.
                     * @return {#code Reader} through which the partial {@code SerialClob}
                     *  value can be read.
                     * @throws SQLException if pos is less than 1 or if pos is greater than the
                     *  number of characters in the {#code SerialClob} or if pos + length
                     *  is greater than the number of characters in the {@code SerialClob};
                     * @throws SerialException if the {#code free} method had been previously
                     *  called on this object
                     * @since 1.6
                     */
                    // @ts-ignore
                    public getCharacterStream(pos: number /*long*/, length: number /*long*/): java.io.Reader
                    /**
                     * This method frees the {@code SeriableClob} object and releases the
                     * resources that it holds.
                     * The object is invalid once the {@code free} method is called.
                     * <p>
                     * If {@code free} is called multiple times, the subsequent
                     * calls to {@code free} are treated as a no-op.
                     * </P>
                     * @throws SQLException if an error occurs releasing
                     *  the Clob's resources
                     * @since 1.6
                     */
                    // @ts-ignore
                    public free(): void
                    /**
                     * Compares this SerialClob to the specified object.  The result is {@code
                     * true} if and only if the argument is not {@code null} and is a {@code
                     * SerialClob} object that represents the same sequence of characters as this
                     * object.
                     * @param obj The object to compare this {#code SerialClob} against
                     * @return {#code true} if the given object represents a {@code SerialClob}
                     *           equivalent to this SerialClob, {@code false} otherwise
                     */
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    /**
                     * Returns a hash code for this {@code SerialClob}.
                     * @return a hash code value for this object.
                     */
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    /**
                     * Returns a clone of this {@code SerialClob}. The copy will contain a
                     * reference to a clone of the internal character array, not a reference
                     * to the original internal character array of this {@code SerialClob} object.
                     * The underlying {@code Clob} object will be set to null.
                     * @return a clone of this SerialClob
                     */
                    // @ts-ignore
                    public clone(): any
                }
            }
        }
    }
}
