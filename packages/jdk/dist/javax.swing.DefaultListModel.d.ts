declare namespace javax {
    namespace swing {
        /**
         * This class loosely implements the <code>java.util.Vector</code>
         * API, in that it implements the 1.1.x version of
         * <code>java.util.Vector</code>, has no collection class support,
         * and notifies the <code>ListDataListener</code>s when changes occur.
         * Presently it delegates to a <code>Vector</code>,
         * in a future release it will be a real Collection implementation.
         * <p>
         * <strong>Warning:</strong>
         * Serialized objects of this class will not be compatible with
         * future Swing releases. The current serialization support is
         * appropriate for short term storage or RMI between applications running
         * the same version of Swing.  As of 1.4, support for long term storage
         * of all JavaBeans&trade;
         * has been added to the <code>java.beans</code> package.
         * Please see {@link java.beans.XMLEncoder}.
         * @param <E> the type of the elements of this model
         * @author Hans Muller
         */
        // @ts-ignore
        class DefaultListModel<E> extends javax.swing.AbstractListModel<E> {
            // @ts-ignore
            constructor()
            /**
             * Returns the number of components in this list.
             * <p>
             * This method is identical to <code>size</code>, which implements the
             * <code>List</code> interface defined in the 1.2 Collections framework.
             * This method exists in conjunction with <code>setSize</code> so that
             * <code>size</code> is identifiable as a JavaBean property.
             * @return the number of components in this list
             * @see #size()
             */
            // @ts-ignore
            public getSize(): number /*int*/
            /**
             * Returns the component at the specified index.
             * <blockquote>
             * <b>Note:</b> Although this method is not deprecated, the preferred
             * method to use is <code>get(int)</code>, which implements the
             * <code>List</code> interface defined in the 1.2 Collections framework.
             * </blockquote>
             * @param index   an index into this list
             * @return the component at the specified index
             * @exception ArrayIndexOutOfBoundsException  if the <code>index</code>
             *              is negative or greater than the current size of this
             *              list
             * @see #get(int)
             */
            // @ts-ignore
            public getElementAt(index: number /*int*/): E
            /**
             * Copies the components of this list into the specified array.
             * The array must be big enough to hold all the objects in this list,
             * else an <code>IndexOutOfBoundsException</code> is thrown.
             * @param anArray   the array into which the components get copied
             * @see Vector#copyInto(Object[])
             */
            // @ts-ignore
            public copyInto(anArray: java.lang.Object[] | any[]): void
            /**
             * Trims the capacity of this list to be the list's current size.
             * @see Vector#trimToSize()
             */
            // @ts-ignore
            public trimToSize(): void
            /**
             * Increases the capacity of this list, if necessary, to ensure
             * that it can hold at least the number of components specified by
             * the minimum capacity argument.
             * @param minCapacity   the desired minimum capacity
             * @see Vector#ensureCapacity(int)
             */
            // @ts-ignore
            public ensureCapacity(minCapacity: number /*int*/): void
            /**
             * Sets the size of this list.
             * @param newSize   the new size of this list
             * @see Vector#setSize(int)
             */
            // @ts-ignore
            public setSize(newSize: number /*int*/): void
            /**
             * Returns the current capacity of this list.
             * @return the current capacity
             * @see Vector#capacity()
             */
            // @ts-ignore
            public capacity(): number /*int*/
            /**
             * Returns the number of components in this list.
             * @return the number of components in this list
             * @see Vector#size()
             */
            // @ts-ignore
            public size(): number /*int*/
            /**
             * Tests whether this list has any components.
             * @return <code>true</code> if and only if this list has
             *           no components, that is, its size is zero;
             *           <code>false</code> otherwise
             * @see Vector#isEmpty()
             */
            // @ts-ignore
            public isEmpty(): boolean
            /**
             * Returns an enumeration of the components of this list.
             * @return an enumeration of the components of this list
             * @see Vector#elements()
             */
            // @ts-ignore
            public elements(): java.util.Enumeration<E>
            /**
             * Tests whether the specified object is a component in this list.
             * @param elem   an object
             * @return <code>true</code> if the specified object
             *           is the same as a component in this list
             * @see Vector#contains(Object)
             */
            // @ts-ignore
            public contains(elem: java.lang.Object | any): boolean
            /**
             * Searches for the first occurrence of <code>elem</code>.
             * @param elem   an object
             * @return the index of the first occurrence of the argument in this
             *           list; returns <code>-1</code> if the object is not found
             * @see Vector#indexOf(Object)
             */
            // @ts-ignore
            public indexOf(elem: java.lang.Object | any): number /*int*/
            /**
             * Searches for the first occurrence of <code>elem</code>, beginning
             * the search at <code>index</code>.
             * @param elem    an desired component
             * @param index   the index from which to begin searching
             * @return the index where the first occurrence of <code>elem</code>
             *           is found after <code>index</code>; returns <code>-1</code>
             *           if the <code>elem</code> is not found in the list
             * @see Vector#indexOf(Object,int)
             */
            // @ts-ignore
            public indexOf(elem: java.lang.Object | any, index: number /*int*/): number /*int*/
            /**
             * Returns the index of the last occurrence of <code>elem</code>.
             * @param elem   the desired component
             * @return the index of the last occurrence of <code>elem</code>
             *           in the list; returns <code>-1</code> if the object is not found
             * @see Vector#lastIndexOf(Object)
             */
            // @ts-ignore
            public lastIndexOf(elem: java.lang.Object | any): number /*int*/
            /**
             * Searches backwards for <code>elem</code>, starting from the
             * specified index, and returns an index to it.
             * @param elem    the desired component
             * @param index   the index to start searching from
             * @return the index of the last occurrence of the <code>elem</code>
             *           in this list at position less than <code>index</code>;
             *           returns <code>-1</code> if the object is not found
             * @see Vector#lastIndexOf(Object,int)
             */
            // @ts-ignore
            public lastIndexOf(elem: java.lang.Object | any, index: number /*int*/): number /*int*/
            /**
             * Returns the component at the specified index.
             * Throws an <code>ArrayIndexOutOfBoundsException</code> if the index
             * is negative or not less than the size of the list.
             * <blockquote>
             * <b>Note:</b> Although this method is not deprecated, the preferred
             * method to use is <code>get(int)</code>, which implements the
             * <code>List</code> interface defined in the 1.2 Collections framework.
             * </blockquote>
             * @param index   an index into this list
             * @return the component at the specified index
             * @see #get(int)
             * @see Vector#elementAt(int)
             */
            // @ts-ignore
            public elementAt(index: number /*int*/): E
            /**
             * Returns the first component of this list.
             * Throws a <code>NoSuchElementException</code> if this
             * vector has no components.
             * @return the first component of this list
             * @see Vector#firstElement()
             */
            // @ts-ignore
            public firstElement(): E
            /**
             * Returns the last component of the list.
             * Throws a <code>NoSuchElementException</code> if this vector
             * has no components.
             * @return the last component of the list
             * @see Vector#lastElement()
             */
            // @ts-ignore
            public lastElement(): E
            /**
             * Sets the component at the specified <code>index</code> of this
             * list to be the specified element. The previous component at that
             * position is discarded.
             * <p>
             * Throws an <code>ArrayIndexOutOfBoundsException</code> if the index
             * is invalid.
             * <blockquote>
             * <b>Note:</b> Although this method is not deprecated, the preferred
             * method to use is <code>set(int,Object)</code>, which implements the
             * <code>List</code> interface defined in the 1.2 Collections framework.
             * </blockquote>
             * @param element what the component is to be set to
             * @param index   the specified index
             * @see #set(int,Object)
             * @see Vector#setElementAt(Object,int)
             */
            // @ts-ignore
            public setElementAt(element: E, index: number /*int*/): void
            /**
             * Deletes the component at the specified index.
             * <p>
             * Throws an <code>ArrayIndexOutOfBoundsException</code> if the index
             * is invalid.
             * <blockquote>
             * <b>Note:</b> Although this method is not deprecated, the preferred
             * method to use is <code>remove(int)</code>, which implements the
             * <code>List</code> interface defined in the 1.2 Collections framework.
             * </blockquote>
             * @param index   the index of the object to remove
             * @see #remove(int)
             * @see Vector#removeElementAt(int)
             */
            // @ts-ignore
            public removeElementAt(index: number /*int*/): void
            /**
             * Inserts the specified element as a component in this list at the
             * specified <code>index</code>.
             * <p>
             * Throws an <code>ArrayIndexOutOfBoundsException</code> if the index
             * is invalid.
             * <blockquote>
             * <b>Note:</b> Although this method is not deprecated, the preferred
             * method to use is <code>add(int,Object)</code>, which implements the
             * <code>List</code> interface defined in the 1.2 Collections framework.
             * </blockquote>
             * @param element the component to insert
             * @param index   where to insert the new component
             * @exception ArrayIndexOutOfBoundsException  if the index was invalid
             * @see #add(int,Object)
             * @see Vector#insertElementAt(Object,int)
             */
            // @ts-ignore
            public insertElementAt(element: E, index: number /*int*/): void
            /**
             * Adds the specified component to the end of this list.
             * @param element   the component to be added
             * @see Vector#addElement(Object)
             */
            // @ts-ignore
            public addElement(element: E): void
            /**
             * Removes the first (lowest-indexed) occurrence of the argument
             * from this list.
             * @param obj   the component to be removed
             * @return <code>true</code> if the argument was a component of this
             *           list; <code>false</code> otherwise
             * @see Vector#removeElement(Object)
             */
            // @ts-ignore
            public removeElement(obj: java.lang.Object | any): boolean
            /**
             * Removes all components from this list and sets its size to zero.
             * <blockquote>
             * <b>Note:</b> Although this method is not deprecated, the preferred
             * method to use is <code>clear</code>, which implements the
             * <code>List</code> interface defined in the 1.2 Collections framework.
             * </blockquote>
             * @see #clear()
             * @see Vector#removeAllElements()
             */
            // @ts-ignore
            public removeAllElements(): void
            /**
             * Returns a string that displays and identifies this
             * object's properties.
             * @return a String representation of this object
             */
            // @ts-ignore
            public toString(): string
            /**
             * Returns an array containing all of the elements in this list in the
             * correct order.
             * @return an array containing the elements of the list
             * @see Vector#toArray()
             */
            // @ts-ignore
            public toArray(): any[]
            /**
             * Returns the element at the specified position in this list.
             * <p>
             * Throws an <code>ArrayIndexOutOfBoundsException</code>
             * if the index is out of range
             * (<code>index &lt; 0 || index &gt;= size()</code>).
             * @param index index of element to return
             */
            // @ts-ignore
            public get(index: number /*int*/): E
            /**
             * Replaces the element at the specified position in this list with the
             * specified element.
             * <p>
             * Throws an <code>ArrayIndexOutOfBoundsException</code>
             * if the index is out of range
             * (<code>index &lt; 0 || index &gt;= size()</code>).
             * @param index index of element to replace
             * @param element element to be stored at the specified position
             * @return the element previously at the specified position
             */
            // @ts-ignore
            public set(index: number /*int*/, element: E): E
            /**
             * Inserts the specified element at the specified position in this list.
             * <p>
             * Throws an <code>ArrayIndexOutOfBoundsException</code> if the
             * index is out of range
             * (<code>index &lt; 0 || index &gt; size()</code>).
             * @param index index at which the specified element is to be inserted
             * @param element element to be inserted
             */
            // @ts-ignore
            public add(index: number /*int*/, element: E): void
            /**
             * Removes the element at the specified position in this list.
             * Returns the element that was removed from the list.
             * <p>
             * Throws an <code>ArrayIndexOutOfBoundsException</code>
             * if the index is out of range
             * (<code>index &lt; 0 || index &gt;= size()</code>).
             * @param index the index of the element to removed
             * @return the element previously at the specified position
             */
            // @ts-ignore
            public remove(index: number /*int*/): E
            /**
             * Removes all of the elements from this list.  The list will
             * be empty after this call returns (unless it throws an exception).
             */
            // @ts-ignore
            public clear(): void
            /**
             * Deletes the components at the specified range of indexes.
             * The removal is inclusive, so specifying a range of (1,5)
             * removes the component at index 1 and the component at index 5,
             * as well as all components in between.
             * <p>
             * Throws an <code>ArrayIndexOutOfBoundsException</code>
             * if the index was invalid.
             * Throws an <code>IllegalArgumentException</code> if
             * <code>fromIndex &gt; toIndex</code>.
             * @param fromIndex the index of the lower end of the range
             * @param toIndex   the index of the upper end of the range
             * @see #remove(int)
             */
            // @ts-ignore
            public removeRange(fromIndex: number /*int*/, toIndex: number /*int*/): void
        }
    }
}
