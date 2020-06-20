declare namespace java {
    namespace nio {
        /**
         * A float buffer.
         * <p> This class defines four categories of operations upon
         * float buffers:
         * <ul>
         * <li><p> Absolute and relative {@link #get() <i>get</i>} and
         * {@link #put(float) <i>put</i>} methods that read and write
         * single floats; </p></li>
         * <li><p> Relative {@link #get(float[]) <i>bulk get</i>}
         * methods that transfer contiguous sequences of floats from this buffer
         * into an array; and</p></li>
         * <li><p> Relative {@link #put(float[]) <i>bulk put</i>}
         * methods that transfer contiguous sequences of floats from a
         * float array or some other float
         * buffer into this buffer;&#32;and </p></li>
         * <li><p> Methods for {@link #compact compacting}, {@link
         * #duplicate duplicating}, and {@link #slice slicing}
         * a float buffer.  </p></li>
         * </ul>
         * <p> Float buffers can be created either by {@link #allocate
         * <i>allocation</i>}, which allocates space for the buffer's
         * content, by {@link #wrap(float[]) <i>wrapping</i>} an existing
         * float array  into a buffer, or by creating a
         * <a href="ByteBuffer.html#views"><i>view</i></a> of an existing byte buffer.
         * <p> Like a byte buffer, a float buffer is either <a
         * href="ByteBuffer.html#direct"><i>direct</i> or <i>non-direct</i></a>.  A
         * float buffer created via the <tt>wrap</tt> methods of this class will
         * be non-direct.  A float buffer created as a view of a byte buffer will
         * be direct if, and only if, the byte buffer itself is direct.  Whether or not
         * a float buffer is direct may be determined by invoking the {@link
         * #isDirect isDirect} method.  </p>
         * <p> Methods in this class that do not otherwise have a value to return are
         * specified to return the buffer upon which they are invoked.  This allows
         * method invocations to be chained.
         * @author Mark Reinhold
         * @author JSR-51 Expert Group
         * @since 1.4
         */
        // @ts-ignore
        class FloatBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.FloatBuffer> {
            /**
             * Allocates a new float buffer.
             * <p> The new buffer's position will be zero, its limit will be its
             * capacity, its mark will be undefined, and each of its elements will be
             * initialized to zero.  It will have a {@link #array backing array},
             * and its {@link #arrayOffset array offset} will be zero.
             * @param capacity
             *          The new buffer's capacity, in floats
             * @return The new float buffer
             * @throws IllegalArgumentException
             *           If the <tt>capacity</tt> is a negative integer
             */
            // @ts-ignore
            allocate(capacity: number /*int*/): java.nio.FloatBuffer
            /**
             * Wraps a float array into a buffer.
             * <p> The new buffer will be backed by the given float array;
             * that is, modifications to the buffer will cause the array to be modified
             * and vice versa.  The new buffer's capacity will be
             * <tt>array.length</tt>, its position will be <tt>offset</tt>, its limit
             * will be <tt>offset + length</tt>, and its mark will be undefined.  Its
             * {@link #array backing array} will be the given array, and
             * its {@link #arrayOffset array offset} will be zero.  </p>
             * @param array
             *          The array that will back the new buffer
             * @param offset
             *          The offset of the subarray to be used; must be non-negative and
             *          no larger than <tt>array.length</tt>.  The new buffer's position
             *          will be set to this value.
             * @param length
             *          The length of the subarray to be used;
             *          must be non-negative and no larger than
             *          <tt>array.length - offset</tt>.
             *          The new buffer's limit will be set to <tt>offset + length</tt>.
             * @return The new float buffer
             * @throws IndexOutOfBoundsException
             *           If the preconditions on the <tt>offset</tt> and <tt>length</tt>
             *           parameters do not hold
             */
            // @ts-ignore
            wrap(array: number /*float*/[], offset: number /*int*/, length: number /*int*/): java.nio.FloatBuffer
            /**
             * Wraps a float array into a buffer.
             * <p> The new buffer will be backed by the given float array;
             * that is, modifications to the buffer will cause the array to be modified
             * and vice versa.  The new buffer's capacity and limit will be
             * <tt>array.length</tt>, its position will be zero, and its mark will be
             * undefined.  Its {@link #array backing array} will be the
             * given array, and its {@link #arrayOffset array offset>} will
             * be zero.  </p>
             * @param array
             *          The array that will back this buffer
             * @return The new float buffer
             */
            // @ts-ignore
            wrap(array: number /*float*/[]): java.nio.FloatBuffer
            /**
             * Creates a new float buffer whose content is a shared subsequence of
             * this buffer's content.
             * <p> The content of the new buffer will start at this buffer's current
             * position.  Changes to this buffer's content will be visible in the new
             * buffer, and vice versa; the two buffers' position, limit, and mark
             * values will be independent.
             * <p> The new buffer's position will be zero, its capacity and its limit
             * will be the number of floats remaining in this buffer, and its mark
             * will be undefined.  The new buffer will be direct if, and only if, this
             * buffer is direct, and it will be read-only if, and only if, this buffer
             * is read-only.  </p>
             * @return The new float buffer
             */
            // @ts-ignore
            abstract slice(): java.nio.FloatBuffer
            /**
             * Creates a new float buffer that shares this buffer's content.
             * <p> The content of the new buffer will be that of this buffer.  Changes
             * to this buffer's content will be visible in the new buffer, and vice
             * versa; the two buffers' position, limit, and mark values will be
             * independent.
             * <p> The new buffer's capacity, limit, position, and mark values will be
             * identical to those of this buffer.  The new buffer will be direct if,
             * and only if, this buffer is direct, and it will be read-only if, and
             * only if, this buffer is read-only.  </p>
             * @return The new float buffer
             */
            // @ts-ignore
            abstract duplicate(): java.nio.FloatBuffer
            /**
             * Creates a new, read-only float buffer that shares this buffer's
             * content.
             * <p> The content of the new buffer will be that of this buffer.  Changes
             * to this buffer's content will be visible in the new buffer; the new
             * buffer itself, however, will be read-only and will not allow the shared
             * content to be modified.  The two buffers' position, limit, and mark
             * values will be independent.
             * <p> The new buffer's capacity, limit, position, and mark values will be
             * identical to those of this buffer.
             * <p> If this buffer is itself read-only then this method behaves in
             * exactly the same way as the {@link #duplicate duplicate} method.  </p>
             * @return The new, read-only float buffer
             */
            // @ts-ignore
            abstract asReadOnlyBuffer(): java.nio.FloatBuffer
            /**
             * Relative <i>get</i> method.  Reads the float at this buffer's
             * current position, and then increments the position.
             * @return The float at the buffer's current position
             * @throws BufferUnderflowException
             *           If the buffer's current position is not smaller than its limit
             */
            // @ts-ignore
            abstract get(): float
            /**
             * Relative <i>put</i> method&nbsp;&nbsp;<i>(optional operation)</i>.
             * <p> Writes the given float into this buffer at the current
             * position, and then increments the position. </p>
             * @param f
             *          The float to be written
             * @return This buffer
             * @throws BufferOverflowException
             *           If this buffer's current position is not smaller than its limit
             * @throws ReadOnlyBufferException
             *           If this buffer is read-only
             */
            // @ts-ignore
            abstract put(f: number /*float*/): java.nio.FloatBuffer
            /**
             * Absolute <i>get</i> method.  Reads the float at the given
             * index.
             * @param index
             *          The index from which the float will be read
             * @return The float at the given index
             * @throws IndexOutOfBoundsException
             *           If <tt>index</tt> is negative
             *           or not smaller than the buffer's limit
             */
            // @ts-ignore
            abstract get(index: number /*int*/): float
            /**
             * Absolute <i>put</i> method&nbsp;&nbsp;<i>(optional operation)</i>.
             * <p> Writes the given float into this buffer at the given
             * index. </p>
             * @param index
             *          The index at which the float will be written
             * @param f
             *          The float value to be written
             * @return This buffer
             * @throws IndexOutOfBoundsException
             *           If <tt>index</tt> is negative
             *           or not smaller than the buffer's limit
             * @throws ReadOnlyBufferException
             *           If this buffer is read-only
             */
            // @ts-ignore
            abstract put(index: number /*int*/, f: number /*float*/): java.nio.FloatBuffer
            /**
             * Relative bulk <i>get</i> method.
             * <p> This method transfers floats from this buffer into the given
             * destination array.  If there are fewer floats remaining in the
             * buffer than are required to satisfy the request, that is, if
             * <tt>length</tt>&nbsp;<tt>&gt;</tt>&nbsp;<tt>remaining()</tt>, then no
             * floats are transferred and a {@link BufferUnderflowException} is
             * thrown.
             * <p> Otherwise, this method copies <tt>length</tt> floats from this
             * buffer into the given array, starting at the current position of this
             * buffer and at the given offset in the array.  The position of this
             * buffer is then incremented by <tt>length</tt>.
             * <p> In other words, an invocation of this method of the form
             * <tt>src.get(dst,&nbsp;off,&nbsp;len)</tt> has exactly the same effect as
             * the loop
             * <pre>{@code
             * for (int i = off; i < off + len; i++)
             * dst[i] = src.get():
             * }</pre>
             * except that it first checks that there are sufficient floats in
             * this buffer and it is potentially much more efficient.
             * @param dst
             *          The array into which floats are to be written
             * @param offset
             *          The offset within the array of the first float to be
             *          written; must be non-negative and no larger than
             *          <tt>dst.length</tt>
             * @param length
             *          The maximum number of floats to be written to the given
             *          array; must be non-negative and no larger than
             *          <tt>dst.length - offset</tt>
             * @return This buffer
             * @throws BufferUnderflowException
             *           If there are fewer than <tt>length</tt> floats
             *           remaining in this buffer
             * @throws IndexOutOfBoundsException
             *           If the preconditions on the <tt>offset</tt> and <tt>length</tt>
             *           parameters do not hold
             */
            // @ts-ignore
            get(dst: number /*float*/[], offset: number /*int*/, length: number /*int*/): java.nio.FloatBuffer
            /**
             * Relative bulk <i>get</i> method.
             * <p> This method transfers floats from this buffer into the given
             * destination array.  An invocation of this method of the form
             * <tt>src.get(a)</tt> behaves in exactly the same way as the invocation
             * <pre>
             * src.get(a, 0, a.length) </pre>
             * @param dst
             *           The destination array
             * @return This buffer
             * @throws BufferUnderflowException
             *           If there are fewer than <tt>length</tt> floats
             *           remaining in this buffer
             */
            // @ts-ignore
            get(dst: number /*float*/[]): java.nio.FloatBuffer
            /**
             * Relative bulk <i>put</i> method&nbsp;&nbsp;<i>(optional operation)</i>.
             * <p> This method transfers the floats remaining in the given source
             * buffer into this buffer.  If there are more floats remaining in the
             * source buffer than in this buffer, that is, if
             * <tt>src.remaining()</tt>&nbsp;<tt>&gt;</tt>&nbsp;<tt>remaining()</tt>,
             * then no floats are transferred and a {@link
             * BufferOverflowException} is thrown.
             * <p> Otherwise, this method copies
             * <i>n</i>&nbsp;=&nbsp;<tt>src.remaining()</tt> floats from the given
             * buffer into this buffer, starting at each buffer's current position.
             * The positions of both buffers are then incremented by <i>n</i>.
             * <p> In other words, an invocation of this method of the form
             * <tt>dst.put(src)</tt> has exactly the same effect as the loop
             * <pre>
             * while (src.hasRemaining())
             * dst.put(src.get()); </pre>
             * except that it first checks that there is sufficient space in this
             * buffer and it is potentially much more efficient.
             * @param src
             *          The source buffer from which floats are to be read;
             *          must not be this buffer
             * @return This buffer
             * @throws BufferOverflowException
             *           If there is insufficient space in this buffer
             *           for the remaining floats in the source buffer
             * @throws IllegalArgumentException
             *           If the source buffer is this buffer
             * @throws ReadOnlyBufferException
             *           If this buffer is read-only
             */
            // @ts-ignore
            put(src: java.nio.FloatBuffer): java.nio.FloatBuffer
            /**
             * Relative bulk <i>put</i> method&nbsp;&nbsp;<i>(optional operation)</i>.
             * <p> This method transfers floats into this buffer from the given
             * source array.  If there are more floats to be copied from the array
             * than remain in this buffer, that is, if
             * <tt>length</tt>&nbsp;<tt>&gt;</tt>&nbsp;<tt>remaining()</tt>, then no
             * floats are transferred and a {@link BufferOverflowException} is
             * thrown.
             * <p> Otherwise, this method copies <tt>length</tt> floats from the
             * given array into this buffer, starting at the given offset in the array
             * and at the current position of this buffer.  The position of this buffer
             * is then incremented by <tt>length</tt>.
             * <p> In other words, an invocation of this method of the form
             * <tt>dst.put(src,&nbsp;off,&nbsp;len)</tt> has exactly the same effect as
             * the loop
             * <pre>{@code
             * for (int i = off; i < off + len; i++)
             * dst.put(a[i]);
             * }</pre>
             * except that it first checks that there is sufficient space in this
             * buffer and it is potentially much more efficient.
             * @param src
             *          The array from which floats are to be read
             * @param offset
             *          The offset within the array of the first float to be read;
             *          must be non-negative and no larger than <tt>array.length</tt>
             * @param length
             *          The number of floats to be read from the given array;
             *          must be non-negative and no larger than
             *          <tt>array.length - offset</tt>
             * @return This buffer
             * @throws BufferOverflowException
             *           If there is insufficient space in this buffer
             * @throws IndexOutOfBoundsException
             *           If the preconditions on the <tt>offset</tt> and <tt>length</tt>
             *           parameters do not hold
             * @throws ReadOnlyBufferException
             *           If this buffer is read-only
             */
            // @ts-ignore
            put(src: number /*float*/[], offset: number /*int*/, length: number /*int*/): java.nio.FloatBuffer
            /**
             * Relative bulk <i>put</i> method&nbsp;&nbsp;<i>(optional operation)</i>.
             * <p> This method transfers the entire content of the given source
             * float array into this buffer.  An invocation of this method of the
             * form <tt>dst.put(a)</tt> behaves in exactly the same way as the
             * invocation
             * <pre>
             * dst.put(a, 0, a.length) </pre>
             * @param src
             *           The source array
             * @return This buffer
             * @throws BufferOverflowException
             *           If there is insufficient space in this buffer
             * @throws ReadOnlyBufferException
             *           If this buffer is read-only
             */
            // @ts-ignore
            put(src: number /*float*/[]): java.nio.FloatBuffer
            /**
             * Tells whether or not this buffer is backed by an accessible float
             * array.
             * <p> If this method returns <tt>true</tt> then the {@link #array() array}
             * and {@link #arrayOffset() arrayOffset} methods may safely be invoked.
             * </p>
             * @return <tt>true</tt> if, and only if, this buffer
             *           is backed by an array and is not read-only
             */
            // @ts-ignore
            hasArray(): boolean
            /**
             * Returns the float array that backs this
             * buffer&nbsp;&nbsp;<i>(optional operation)</i>.
             * <p> Modifications to this buffer's content will cause the returned
             * array's content to be modified, and vice versa.
             * <p> Invoke the {@link #hasArray hasArray} method before invoking this
             * method in order to ensure that this buffer has an accessible backing
             * array.  </p>
             * @return The array that backs this buffer
             * @throws ReadOnlyBufferException
             *           If this buffer is backed by an array but is read-only
             * @throws UnsupportedOperationException
             *           If this buffer is not backed by an accessible array
             */
            // @ts-ignore
            array(): float[]
            /**
             * Returns the offset within this buffer's backing array of the first
             * element of the buffer&nbsp;&nbsp;<i>(optional operation)</i>.
             * <p> If this buffer is backed by an array then buffer position <i>p</i>
             * corresponds to array index <i>p</i>&nbsp;+&nbsp;<tt>arrayOffset()</tt>.
             * <p> Invoke the {@link #hasArray hasArray} method before invoking this
             * method in order to ensure that this buffer has an accessible backing
             * array.  </p>
             * @return The offset within this buffer's array
             *           of the first element of the buffer
             * @throws ReadOnlyBufferException
             *           If this buffer is backed by an array but is read-only
             * @throws UnsupportedOperationException
             *           If this buffer is not backed by an accessible array
             */
            // @ts-ignore
            arrayOffset(): int
            /**
             * Compacts this buffer&nbsp;&nbsp;<i>(optional operation)</i>.
             * <p> The floats between the buffer's current position and its limit,
             * if any, are copied to the beginning of the buffer.  That is, the
             * float at index <i>p</i>&nbsp;=&nbsp;<tt>position()</tt> is copied
             * to index zero, the float at index <i>p</i>&nbsp;+&nbsp;1 is copied
             * to index one, and so forth until the float at index
             * <tt>limit()</tt>&nbsp;-&nbsp;1 is copied to index
             * <i>n</i>&nbsp;=&nbsp;<tt>limit()</tt>&nbsp;-&nbsp;<tt>1</tt>&nbsp;-&nbsp;<i>p</i>.
             * The buffer's position is then set to <i>n+1</i> and its limit is set to
             * its capacity.  The mark, if defined, is discarded.
             * <p> The buffer's position is set to the number of floats copied,
             * rather than to zero, so that an invocation of this method can be
             * followed immediately by an invocation of another relative <i>put</i>
             * method. </p>
             * @return This buffer
             * @throws ReadOnlyBufferException
             *           If this buffer is read-only
             */
            // @ts-ignore
            abstract compact(): java.nio.FloatBuffer
            /**
             * Tells whether or not this float buffer is direct.
             * @return <tt>true</tt> if, and only if, this buffer is direct
             */
            // @ts-ignore
            abstract isDirect(): boolean
            /**
             * Returns a string summarizing the state of this buffer.
             * @return A summary string
             */
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Returns the current hash code of this buffer.
             * <p> The hash code of a float buffer depends only upon its remaining
             * elements; that is, upon the elements from <tt>position()</tt> up to, and
             * including, the element at <tt>limit()</tt>&nbsp;-&nbsp;<tt>1</tt>.
             * <p> Because buffer hash codes are content-dependent, it is inadvisable
             * to use buffers as keys in hash maps or similar data structures unless it
             * is known that their contents will not change.  </p>
             * @return The current hash code of this buffer
             */
            // @ts-ignore
            hashCode(): int
            /**
             * Tells whether or not this buffer is equal to another object.
             * <p> Two float buffers are equal if, and only if,
             * <ol>
             * <li><p> They have the same element type,  </p></li>
             * <li><p> They have the same number of remaining elements, and
             * </p></li>
             * <li><p> The two sequences of remaining elements, considered
             * independently of their starting positions, are pointwise equal.
             * This method considers two float elements {@code a} and {@code b}
             * to be equal if
             * {@code (a == b) || (Float.isNaN(a) && Float.isNaN(b))}.
             * The values {@code -0.0} and {@code +0.0} are considered to be
             * equal, unlike {@link Float#equals(Object)}.
             * </p></li>
             * </ol>
             * <p> A float buffer is not equal to any other type of object.  </p>
             * @param ob  The object to which this buffer is to be compared
             * @return <tt>true</tt> if, and only if, this buffer is equal to the
             *            given object
             */
            // @ts-ignore
            equals(ob: any): boolean
            /**
             * Compares this buffer to another.
             * <p> Two float buffers are compared by comparing their sequences of
             * remaining elements lexicographically, without regard to the starting
             * position of each sequence within its corresponding buffer.
             * Pairs of {@code float} elements are compared as if by invoking
             * {@link Float#compare(float,float)}, except that
             * {@code -0.0} and {@code 0.0} are considered to be equal.
             * {@code Float.NaN} is considered by this method to be equal
             * to itself and greater than all other {@code float} values
             * (including {@code Float.POSITIVE_INFINITY}).
             * <p> A float buffer is not comparable to any other type of object.
             * @return A negative integer, zero, or a positive integer as this buffer
             *           is less than, equal to, or greater than the given buffer
             */
            // @ts-ignore
            compareTo(that: java.nio.FloatBuffer): int
            /**
             * Retrieves this buffer's byte order.
             * <p> The byte order of a float buffer created by allocation or by
             * wrapping an existing <tt>float</tt> array is the {@link
             * ByteOrder#nativeOrder native order} of the underlying
             * hardware.  The byte order of a float buffer created as a <a
             * href="ByteBuffer.html#views">view</a> of a byte buffer is that of the
             * byte buffer at the moment that the view is created.  </p>
             * @return This buffer's byte order
             */
            // @ts-ignore
            abstract order(): java.nio.ByteOrder
        }
    }
}
