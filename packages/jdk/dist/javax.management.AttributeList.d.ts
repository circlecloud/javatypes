declare namespace javax {
    namespace management {
        /**
         * <p>Represents a list of values for attributes of an MBean.  See the
         * {@link MBeanServerConnection#getAttributes getAttributes} and
         * {@link MBeanServerConnection#setAttributes setAttributes} methods of
         * {@link MBeanServer} and {@link MBeanServerConnection}.</p>
         * <p id="type-safe">For compatibility reasons, it is possible, though
         * highly discouraged, to add objects to an {@code AttributeList} that are
         * not instances of {@code Attribute}.  However, an {@code AttributeList}
         * can be made <em>type-safe</em>, which means that an attempt to add
         * an object that is not an {@code Attribute} will produce an {@code
         * IllegalArgumentException}.  An {@code AttributeList} becomes type-safe
         * when the method {@link #asList()} is called on it.</p>
         * @since 1.5
         */
        // @ts-ignore
        class AttributeList extends java.util.ArrayList<java.lang.Object | any> {
            /**
             * Constructs an empty <CODE>AttributeList</CODE>.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an empty <CODE>AttributeList</CODE> with
             * the initial capacity specified.
             * @param initialCapacity the initial capacity of the
             *  <code>AttributeList</code>, as specified by {#link
             *  ArrayList#ArrayList(int)}.
             */
            // @ts-ignore
            constructor(initialCapacity: number /*int*/)
            /**
             * Constructs an <CODE>AttributeList</CODE> containing the
             * elements of the <CODE>AttributeList</CODE> specified, in the
             * order in which they are returned by the
             * <CODE>AttributeList</CODE>'s iterator.  The
             * <CODE>AttributeList</CODE> instance has an initial capacity of
             * 110% of the size of the <CODE>AttributeList</CODE> specified.
             * @param list the <code>AttributeList</code> that defines the initial
             *  contents of the new <code>AttributeList</code>.
             * @see ArrayList#ArrayList(java.util.Collection)
             */
            // @ts-ignore
            constructor(list: javax.management.AttributeList)
            /**
             * Constructs an {@code AttributeList} containing the elements of the
             * {@code List} specified, in the order in which they are returned by
             * the {@code List}'s iterator.
             * @param list the {#code List} that defines the initial contents of
             *  the new {@code AttributeList}.
             * @exception IllegalArgumentException if the {#code list} parameter
             *  is {@code null} or if the {@code list} parameter contains any
             *  non-Attribute objects.
             * @see ArrayList#ArrayList(java.util.Collection)
             * @since 1.6
             */
            // @ts-ignore
            constructor(list: java.util.List<javax.management.Attribute> | Array<javax.management.Attribute>)
            /**
             * Return a view of this list as a {@code List<Attribute>}.
             * Changes to the returned value are reflected by changes
             * to the original {@code AttributeList} and vice versa.
             * @return a {#code List<Attribute>} whose contents
             *  reflect the contents of this {@code AttributeList}.
             * 
             *  <p>If this method has ever been called on a given
             *  {@code AttributeList} instance, a subsequent attempt to add
             *  an object to that instance which is not an {@code Attribute}
             *  will fail with a {@code IllegalArgumentException}. For compatibility
             *  reasons, an {@code AttributeList} on which this method has never
             *  been called does allow objects other than {@code Attribute}s to
             *  be added.</p>
             * @throws IllegalArgumentException if this {#code AttributeList} contains
             *  an element that is not an {@code Attribute}.
             * @since 1.6
             */
            // @ts-ignore
            public asList(): Array<javax.management.Attribute>
            /**
             * Adds the {@code Attribute} specified as the last element of the list.
             * @param object  The attribute to be added.
             */
            // @ts-ignore
            public add(object: javax.management.Attribute): void
            /**
             * Inserts the attribute specified as an element at the position specified.
             * Elements with an index greater than or equal to the current position are
             * shifted up. If the index is out of range {@literal (index < 0 || index >
             * size())} a RuntimeOperationsException should be raised, wrapping the
             * java.lang.IndexOutOfBoundsException thrown.
             * @param object  The <CODE>Attribute</CODE> object to be inserted.
             * @param index The position in the list where the new {#code Attribute}
             *  object is to be inserted.
             */
            // @ts-ignore
            public add(index: number /*int*/, object: javax.management.Attribute): void
            /**
             * Sets the element at the position specified to be the attribute specified.
             * The previous element at that position is discarded. If the index is
             * out of range {@literal (index < 0 || index > size())} a RuntimeOperationsException
             * should be raised, wrapping the java.lang.IndexOutOfBoundsException thrown.
             * @param object  The value to which the attribute element should be set.
             * @param index  The position specified.
             */
            // @ts-ignore
            public set(index: number /*int*/, object: javax.management.Attribute): void
            /**
             * Appends all the elements in the <CODE>AttributeList</CODE> specified to
             * the end of the list, in the order in which they are returned by the
             * Iterator of the <CODE>AttributeList</CODE> specified.
             * @param list  Elements to be inserted into the list.
             * @return true if this list changed as a result of the call.
             * @see ArrayList#addAll(java.util.Collection)
             */
            // @ts-ignore
            public addAll(list: javax.management.AttributeList): boolean
            /**
             * Inserts all of the elements in the <CODE>AttributeList</CODE> specified
             * into this list, starting at the specified position, in the order in which
             * they are returned by the Iterator of the {@code AttributeList} specified.
             * If the index is out of range {@literal (index < 0 || index > size())} a
             * RuntimeOperationsException should be raised, wrapping the
             * java.lang.IndexOutOfBoundsException thrown.
             * @param list  Elements to be inserted into the list.
             * @param index  Position at which to insert the first element from the
             *  <CODE>AttributeList</CODE> specified.
             * @return true if this list changed as a result of the call.
             * @see ArrayList#addAll(int, java.util.Collection)
             */
            // @ts-ignore
            public addAll(index: number /*int*/, list: javax.management.AttributeList): boolean
            /**
             * {@inheritDoc}
             * @throws IllegalArgumentException if this {#code AttributeList} is
             *  <a href="#type-safe">type-safe</a> and {@code element} is not an
             *  {@code Attribute}.
             */
            // @ts-ignore
            public add(element: java.lang.Object | any): boolean
            /**
             * {@inheritDoc}
             * @throws IllegalArgumentException if this {#code AttributeList} is
             *  <a href="#type-safe">type-safe</a> and {@code element} is not an
             *  {@code Attribute}.
             */
            // @ts-ignore
            public add(index: number /*int*/, element: java.lang.Object | any): void
            /**
             * {@inheritDoc}
             * @throws IllegalArgumentException if this {#code AttributeList} is
             *  <a href="#type-safe">type-safe</a> and {@code c} contains an
             *  element that is not an {@code Attribute}.
             */
            // @ts-ignore
            public addAll(c: java.util.Collection<any> | Array<any>): boolean
            /**
             * {@inheritDoc}
             * @throws IllegalArgumentException if this {#code AttributeList} is
             *  <a href="#type-safe">type-safe</a> and {@code c} contains an
             *  element that is not an {@code Attribute}.
             */
            // @ts-ignore
            public addAll(index: number /*int*/, c: java.util.Collection<any> | Array<any>): boolean
            /**
             * {@inheritDoc}
             * @throws IllegalArgumentException if this {#code AttributeList} is
             *  <a href="#type-safe">type-safe</a> and {@code element} is not an
             *  {@code Attribute}.
             */
            // @ts-ignore
            public set(index: number /*int*/, element: java.lang.Object | any): any
        }
    }
}
