declare namespace javax {
    namespace swing {
        /**
         * A <code>SizeSequence</code> object
         * efficiently maintains an ordered list
         * of sizes and corresponding positions.
         * One situation for which <code>SizeSequence</code>
         * might be appropriate is in a component
         * that displays multiple rows of unequal size.
         * In this case, a single <code>SizeSequence</code>
         * object could be used to track the heights
         * and Y positions of all rows.
         * <p>
         * Another example would be a multi-column component,
         * such as a <code>JTable</code>,
         * in which the column sizes are not all equal.
         * The <code>JTable</code> might use a single
         * <code>SizeSequence</code> object
         * to store the widths and X positions of all the columns.
         * The <code>JTable</code> could then use the
         * <code>SizeSequence</code> object
         * to find the column corresponding to a certain position.
         * The <code>JTable</code> could update the
         * <code>SizeSequence</code> object
         * whenever one or more column sizes changed.
         * <p>
         * The following figure shows the relationship between size and position data
         * for a multi-column component.
         * <center>
         * <img src="doc-files/SizeSequence-1.gif" width=384 height = 100
         * alt="The first item begins at position 0, the second at the position equal
         * to the size of the previous item, and so on.">
         * </center>
         * <p>
         * In the figure, the first index (0) corresponds to the first column,
         * the second index (1) to the second column, and so on.
         * The first column's position starts at 0,
         * and the column occupies <em>size<sub>0</sub></em> pixels,
         * where <em>size<sub>0</sub></em> is the value returned by
         * <code>getSize(0)</code>.
         * Thus, the first column ends at <em>size<sub>0</sub></em> - 1.
         * The second column then begins at
         * the position <em>size<sub>0</sub></em>
         * and occupies <em>size<sub>1</sub></em> (<code>getSize(1)</code>) pixels.
         * <p>
         * Note that a <code>SizeSequence</code> object simply represents intervals
         * along an axis.
         * In our examples, the intervals represent height or width in pixels.
         * However, any other unit of measure (for example, time in days)
         * could be just as valid.
         * <h3>Implementation Notes</h3>
         * Normally when storing the size and position of entries,
         * one would choose between
         * storing the sizes or storing their positions
         * instead. The two common operations that are needed during
         * rendering are: <code>getIndex(position)</code>
         * and <code>setSize(index, size)</code>.
         * Whichever choice of internal format is made one of these
         * operations is costly when the number of entries becomes large.
         * If sizes are stored, finding the index of the entry
         * that encloses a particular position is linear in the
         * number of entries. If positions are stored instead, setting
         * the size of an entry at a particular index requires updating
         * the positions of the affected entries, which is also a linear
         * calculation.
         * <p>
         * Like the above techniques this class holds an array of N integers
         * internally but uses a hybrid encoding, which is halfway
         * between the size-based and positional-based approaches.
         * The result is a data structure that takes the same space to store
         * the information but can perform most operations in Log(N) time
         * instead of O(N), where N is the number of entries in the list.
         * <p>
         * Two operations that remain O(N) in the number of entries are
         * the <code>insertEntries</code>
         * and <code>removeEntries</code> methods, both
         * of which are implemented by converting the internal array to
         * a set of integer sizes, copying it into the new array, and then
         * reforming the hybrid representation in place.
         * @author Philip Milne
         * @since 1.3
         */
        // @ts-ignore
        class SizeSequence extends java.lang.Object {
            /**
             * Creates a new <code>SizeSequence</code> object
             * that contains no entries.  To add entries, you
             * can use <code>insertEntries</code> or <code>setSizes</code>.
             * @see #insertEntries
             * @see #setSizes(int[])
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new <code>SizeSequence</code> object
             * that contains the specified number of entries,
             * all initialized to have size 0.
             * @param numEntries  the number of sizes to track
             * @exception NegativeArraySizeException if
             *     <code>numEntries &lt; 0</code>
             */
            // @ts-ignore
            constructor(numEntries: number /*int*/)
            /**
             * Creates a new <code>SizeSequence</code> object
             * that contains the specified number of entries,
             * all initialized to have size <code>value</code>.
             * @param numEntries  the number of sizes to track
             * @param value       the initial value of each size
             */
            // @ts-ignore
            constructor(numEntries: number /*int*/, value: number /*int*/)
            /**
             * Creates a new <code>SizeSequence</code> object
             * that contains the specified sizes.
             * @param sizes  the array of sizes to be contained in
             *                the <code>SizeSequence</code>
             */
            // @ts-ignore
            constructor(sizes: number /*int*/[])
            /**
             * Resets this <code>SizeSequence</code> object,
             * using the data in the <code>sizes</code> argument.
             * This method reinitializes this object so that it
             * contains as many entries as the <code>sizes</code> array.
             * Each entry's size is initialized to the value of the
             * corresponding item in <code>sizes</code>.
             * @param sizes  the array of sizes to be contained in
             *                this <code>SizeSequence</code>
             */
            // @ts-ignore
            public setSizes(sizes: number /*int*/[]): void
            /**
             * Returns the size of all entries.
             * @return a new array containing the sizes in this object
             */
            // @ts-ignore
            public getSizes(): number /*int*/[]
            /**
             * Returns the start position for the specified entry.
             * For example, <code>getPosition(0)</code> returns 0,
             * <code>getPosition(1)</code> is equal to
             * <code>getSize(0)</code>,
             * <code>getPosition(2)</code> is equal to
             * <code>getSize(0)</code> + <code>getSize(1)</code>,
             * and so on.
             * <p>Note that if <code>index</code> is greater than
             * <code>length</code> the value returned may
             * be meaningless.
             * @param index  the index of the entry whose position is desired
             * @return the starting position of the specified entry
             */
            // @ts-ignore
            public getPosition(index: number /*int*/): number /*int*/
            /**
             * Returns the index of the entry
             * that corresponds to the specified position.
             * For example, <code>getIndex(0)</code> is 0,
             * since the first entry always starts at position 0.
             * @param position  the position of the entry
             * @return the index of the entry that occupies the specified position
             */
            // @ts-ignore
            public getIndex(position: number /*int*/): number /*int*/
            /**
             * Returns the size of the specified entry.
             * If <code>index</code> is out of the range
             * <code>(0 &lt;= index &lt; getSizes().length)</code>
             * the behavior is unspecified.
             * @param index  the index corresponding to the entry
             * @return the size of the entry
             */
            // @ts-ignore
            public getSize(index: number /*int*/): number /*int*/
            /**
             * Sets the size of the specified entry.
             * Note that if the value of <code>index</code>
             * does not fall in the range:
             * <code>(0 &lt;= index &lt; getSizes().length)</code>
             * the behavior is unspecified.
             * @param index  the index corresponding to the entry
             * @param size   the size of the entry
             */
            // @ts-ignore
            public setSize(index: number /*int*/, size: number /*int*/): void
            /**
             * Adds a contiguous group of entries to this <code>SizeSequence</code>.
             * Note that the values of <code>start</code> and
             * <code>length</code> must satisfy the following
             * conditions:  <code>(0 &lt;= start &lt; getSizes().length)
             * AND (length &gt;= 0)</code>.  If these conditions are
             * not met, the behavior is unspecified and an exception
             * may be thrown.
             * @param start   the index to be assigned to the first entry
             *                 in the group
             * @param length  the number of entries in the group
             * @param value   the size to be assigned to each new entry
             * @exception ArrayIndexOutOfBoundsException if the parameters
             *    are outside of the range:
             *    (<code>0 &lt;= start &lt; (getSizes().length)) AND (length &gt;= 0)</code>
             */
            // @ts-ignore
            public insertEntries(start: number /*int*/, length: number /*int*/, value: number /*int*/): void
            /**
             * Removes a contiguous group of entries
             * from this <code>SizeSequence</code>.
             * Note that the values of <code>start</code> and
             * <code>length</code> must satisfy the following
             * conditions:  <code>(0 &lt;= start &lt; getSizes().length)
             * AND (length &gt;= 0)</code>.  If these conditions are
             * not met, the behavior is unspecified and an exception
             * may be thrown.
             * @param start   the index of the first entry to be removed
             * @param length  the number of entries to be removed
             */
            // @ts-ignore
            public removeEntries(start: number /*int*/, length: number /*int*/): void
        }
    }
}
