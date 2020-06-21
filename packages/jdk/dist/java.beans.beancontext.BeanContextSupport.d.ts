declare namespace java {
    namespace beans {
        namespace beancontext {
            /**
             * This helper class provides a utility implementation of the
             * java.beans.beancontext.BeanContext interface.
             * <p>
             * Since this class directly implements the BeanContext interface, the class
             * can, and is intended to be used either by subclassing this implementation,
             * or via ad-hoc delegation of an instance of this class from another.
             * </p>
             * @author Laurence P. G. Cable
             * @since 1.2
             */
            // @ts-ignore
            class BeanContextSupport extends java.beans.beancontext.BeanContextChildSupport implements java.beans.beancontext.BeanContext, java.io.Serializable, java.beans.PropertyChangeListener, java.beans.VetoableChangeListener {
                /**
                 * Construct a BeanContextSupport instance
                 * @param peer      The peer <tt>BeanContext</tt> we are
                 *                   supplying an implementation for,
                 *                   or <tt>null</tt>
                 *                   if this object is its own peer
                 * @param lcle      The current Locale for this BeanContext. If
                 *                   <tt>lcle</tt> is <tt>null</tt>, the default locale
                 *                   is assigned to the <tt>BeanContext</tt> instance.
                 * @param dTime     The initial state,
                 *                   <tt>true</tt> if in design mode,
                 *                   <tt>false</tt> if runtime.
                 * @param visible   The initial visibility.
                 * @see java.util.Locale#getDefault()
                 * @see java.util.Locale#setDefault(java.util.Locale)
                 */
                // @ts-ignore
                constructor(peer: java.beans.beancontext.BeanContext, lcle: java.util.Locale, dTime: boolean, visible: boolean)
                /**
                 * Create an instance using the specified Locale and design mode.
                 * @param peer      The peer <tt>BeanContext</tt> we
                 *                   are supplying an implementation for,
                 *                   or <tt>null</tt> if this object is its own peer
                 * @param lcle      The current Locale for this <tt>BeanContext</tt>. If
                 *                   <tt>lcle</tt> is <tt>null</tt>, the default locale
                 *                   is assigned to the <tt>BeanContext</tt> instance.
                 * @param dtime     The initial state, <tt>true</tt>
                 *                   if in design mode,
                 *                   <tt>false</tt> if runtime.
                 * @see java.util.Locale#getDefault()
                 * @see java.util.Locale#setDefault(java.util.Locale)
                 */
                // @ts-ignore
                constructor(peer: java.beans.beancontext.BeanContext, lcle: java.util.Locale, dtime: boolean)
                /**
                 * Create an instance using the specified locale
                 * @param peer      The peer BeanContext we are
                 *                   supplying an implementation for,
                 *                   or <tt>null</tt> if this object
                 *                   is its own peer
                 * @param lcle      The current Locale for this
                 *                   <tt>BeanContext</tt>. If
                 *                   <tt>lcle</tt> is <tt>null</tt>,
                 *                   the default locale
                 *                   is assigned to the <tt>BeanContext</tt>
                 *                   instance.
                 * @see java.util.Locale#getDefault()
                 * @see java.util.Locale#setDefault(java.util.Locale)
                 */
                // @ts-ignore
                constructor(peer: java.beans.beancontext.BeanContext, lcle: java.util.Locale)
                /**
                 * Create an instance using with a default locale
                 * @param peer      The peer <tt>BeanContext</tt> we are
                 *                   supplying an implementation for,
                 *                   or <tt>null</tt> if this object
                 *                   is its own peer
                 */
                // @ts-ignore
                constructor(peer: java.beans.beancontext.BeanContext)
                /**
                 * Create an instance that is not a delegate of another object
                 */
                // @ts-ignore
                constructor()
                /**
                 * all accesses to the <code> protected HashMap children </code> field
                 * shall be synchronized on that object.
                 */
                // @ts-ignore
                children: java.util.HashMap<any>
                /**
                 * all accesses to the <code> protected ArrayList bcmListeners </code> field
                 * shall be synchronized on that object.
                 */
                // @ts-ignore
                bcmListeners: java.util.ArrayList<any>
                /**
                 * The current locale of this BeanContext.
                 */
                // @ts-ignore
                locale: java.util.Locale
                /**
                 * A <tt>boolean</tt> indicating whether or not
                 * this object is currently in design time mode.
                 */
                // @ts-ignore
                designTime: boolean
                /**
                 * Gets the instance of <tt>BeanContext</tt> that
                 * this object is providing the implementation for.
                 * @return the BeanContext instance
                 */
                // @ts-ignore
                public getBeanContextPeer(): java.beans.beancontext.BeanContext
                /**
                 * <p>
                 * The instantiateChild method is a convenience hook
                 * in BeanContext to simplify
                 * the task of instantiating a Bean, nested,
                 * into a <tt>BeanContext</tt>.
                 * </p>
                 * <p>
                 * The semantics of the beanName parameter are defined by java.beans.Beans.instantiate.
                 * </p>
                 * @param beanName the name of the Bean to instantiate within this BeanContext
                 * @throws IOException if there is an I/O error when the bean is being deserialized
                 * @throws ClassNotFoundException if the class
                 *  identified by the beanName parameter is not found
                 * @return the new object
                 */
                // @ts-ignore
                public instantiateChild(beanName: java.lang.String | string): any
                /**
                 * Gets the number of children currently nested in
                 * this BeanContext.
                 * @return number of children
                 */
                // @ts-ignore
                public size(): number /*int*/
                /**
                 * Reports whether or not this
                 * <tt>BeanContext</tt> is empty.
                 * A <tt>BeanContext</tt> is considered
                 * empty when it contains zero
                 * nested children.
                 * @return if there are not children
                 */
                // @ts-ignore
                public isEmpty(): boolean
                /**
                 * Determines whether or not the specified object
                 * is currently a child of this <tt>BeanContext</tt>.
                 * @param o the Object in question
                 * @return if this object is a child
                 */
                // @ts-ignore
                public contains(o: java.lang.Object | any): boolean
                /**
                 * Determines whether or not the specified object
                 * is currently a child of this <tt>BeanContext</tt>.
                 * @param o the Object in question
                 * @return if this object is a child
                 */
                // @ts-ignore
                public containsKey(o: java.lang.Object | any): boolean
                /**
                 * Gets all JavaBean or <tt>BeanContext</tt> instances
                 * currently nested in this <tt>BeanContext</tt>.
                 * @return an <tt>Iterator</tt> of the nested children
                 */
                // @ts-ignore
                public iterator(): java.util.Iterator<any>
                /**
                 * Gets all JavaBean or <tt>BeanContext</tt>
                 * instances currently nested in this BeanContext.
                 */
                // @ts-ignore
                public toArray(): any[]
                /**
                 * Gets an array containing all children of
                 * this <tt>BeanContext</tt> that match
                 * the types contained in arry.
                 * @param arry The array of object
                 *  types that are of interest.
                 * @return an array of children
                 */
                // @ts-ignore
                public toArray(arry: java.lang.Object[] | any[]): any[]
                /**
                 * <p>
                 * Subclasses can override this method to insert their own subclass
                 * of Child without having to override add() or the other Collection
                 * methods that add children to the set.
                 * </p>
                 * @param targetChild the child to create the Child on behalf of
                 * @param peer        the peer if the tragetChild and the peer are related by an implementation of BeanContextProxy     * #return Subtype-specific subclass of Child without overriding collection methods
                 */
                // @ts-ignore
                createBCSChild(targetChild: java.lang.Object | any, peer: java.lang.Object | any): java.beans.beancontext.BeanContextSupport.BCSChild
                /**
                 * Adds/nests a child within this <tt>BeanContext</tt>.
                 * <p>
                 * Invoked as a side effect of java.beans.Beans.instantiate().
                 * If the child object is not valid for adding then this method
                 * throws an IllegalStateException.
                 * </p>
                 * @param targetChild The child objects to nest
                 *  within this <tt>BeanContext</tt>
                 * @return true if the child was added successfully.
                 * @see #validatePendingAdd
                 */
                // @ts-ignore
                public add(targetChild: java.lang.Object | any): boolean
                /**
                 * Removes a child from this BeanContext.  If the child object is not
                 * for adding then this method throws an IllegalStateException.
                 * @param targetChild The child objects to remove
                 * @see #validatePendingRemove
                 */
                // @ts-ignore
                public remove(targetChild: java.lang.Object | any): boolean
                /**
                 * internal remove used when removal caused by
                 * unexpected <tt>setBeanContext</tt> or
                 * by <tt>remove()</tt> invocation.
                 * @param targetChild the JavaBean, BeanContext, or Object to be removed
                 * @param callChildSetBC used to indicate that
                 *  the child should be notified that it is no
                 *  longer nested in this <tt>BeanContext</tt>.
                 * @return whether or not was present before being removed
                 */
                // @ts-ignore
                remove(targetChild: java.lang.Object | any, callChildSetBC: boolean): boolean
                /**
                 * Tests to see if all objects in the
                 * specified <tt>Collection</tt> are children of
                 * this <tt>BeanContext</tt>.
                 * @param c the specified <tt>Collection</tt>
                 * @return <tt>true</tt> if all objects
                 *  in the collection are children of
                 *  this <tt>BeanContext</tt>, false if not.
                 */
                // @ts-ignore
                public containsAll(c: java.util.Collection<any> | Array<any>): boolean
                /**
                 * add Collection to set of Children (Unsupported)
                 * implementations must synchronized on the hierarchy lock and "children" protected field
                 * @throws UnsupportedOperationException thrown unconditionally by this implementation
                 * @return this implementation unconditionally throws {#code UnsupportedOperationException}
                 */
                // @ts-ignore
                public addAll(c: java.util.Collection<any> | Array<any>): boolean
                /**
                 * remove all specified children (Unsupported)
                 * implementations must synchronized on the hierarchy lock and "children" protected field
                 * @throws UnsupportedOperationException thrown unconditionally by this implementation
                 * @return this implementation unconditionally throws {#code UnsupportedOperationException}
                 */
                // @ts-ignore
                public removeAll(c: java.util.Collection<any> | Array<any>): boolean
                /**
                 * retain only specified children (Unsupported)
                 * implementations must synchronized on the hierarchy lock and "children" protected field
                 * @throws UnsupportedOperationException thrown unconditionally by this implementation
                 * @return this implementation unconditionally throws {#code UnsupportedOperationException}
                 */
                // @ts-ignore
                public retainAll(c: java.util.Collection<any> | Array<any>): boolean
                /**
                 * clear the children (Unsupported)
                 * implementations must synchronized on the hierarchy lock and "children" protected field
                 * @throws UnsupportedOperationException thrown unconditionally by this implementation
                 */
                // @ts-ignore
                public clear(): void
                /**
                 * Adds a BeanContextMembershipListener
                 * @param bcml the BeanContextMembershipListener to add
                 * @throws NullPointerException if the argument is null
                 */
                // @ts-ignore
                public addBeanContextMembershipListener(bcml: java.beans.beancontext.BeanContextMembershipListener): void
                /**
                 * Removes a BeanContextMembershipListener
                 * @param bcml the BeanContextMembershipListener to remove
                 * @throws NullPointerException if the argument is null
                 */
                // @ts-ignore
                public removeBeanContextMembershipListener(bcml: java.beans.beancontext.BeanContextMembershipListener): void
                /**
                 * @param name the name of the resource requested.
                 * @param bcc  the child object making the request.
                 * @return the requested resource as an InputStream
                 * @throws NullPointerException if the argument is null
                 */
                // @ts-ignore
                public getResourceAsStream(name: java.lang.String | string, bcc: java.beans.beancontext.BeanContextChild): java.io.InputStream
                /**
                 * @param name the name of the resource requested.
                 * @param bcc  the child object making the request.
                 * @return the requested resource as an InputStream
                 */
                // @ts-ignore
                public getResource(name: java.lang.String | string, bcc: java.beans.beancontext.BeanContextChild): java.net.URL
                /**
                 * Sets the new design time value for this <tt>BeanContext</tt>.
                 * @param dTime the new designTime value
                 */
                // @ts-ignore
                public setDesignTime(dTime: boolean): void
                /**
                 * Reports whether or not this object is in
                 * currently in design time mode.
                 * @return <tt>true</tt> if in design time mode,
                 *  <tt>false</tt> if not
                 */
                // @ts-ignore
                public isDesignTime(): boolean
                /**
                 * Sets the locale of this BeanContext.
                 * @param newLocale the new locale. This method call will have
                 *         no effect if newLocale is <CODE>null</CODE>.
                 * @throws PropertyVetoException if the new value is rejected
                 */
                // @ts-ignore
                public setLocale(newLocale: java.util.Locale): void
                /**
                 * Gets the locale for this <tt>BeanContext</tt>.
                 * @return the current Locale of the <tt>BeanContext</tt>
                 */
                // @ts-ignore
                public getLocale(): java.util.Locale
                /**
                 * <p>
                 * This method is typically called from the environment in order to determine
                 * if the implementor "needs" a GUI.
                 * </p>
                 * <p>
                 * The algorithm used herein tests the BeanContextPeer, and its current children
                 * to determine if they are either Containers, Components, or if they implement
                 * Visibility and return needsGui() == true.
                 * </p>
                 * @return <tt>true</tt> if the implementor needs a GUI
                 */
                // @ts-ignore
                public needsGui(): boolean
                /**
                 * notify this instance that it may no longer render a GUI.
                 */
                // @ts-ignore
                public dontUseGui(): void
                /**
                 * Notify this instance that it may now render a GUI
                 */
                // @ts-ignore
                public okToUseGui(): void
                /**
                 * Used to determine if the <tt>BeanContext</tt>
                 * child is avoiding using its GUI.
                 * @return is this instance avoiding using its GUI?
                 * @see Visibility
                 */
                // @ts-ignore
                public avoidingGui(): boolean
                /**
                 * Is this <tt>BeanContext</tt> in the
                 * process of being serialized?
                 * @return if this <tt>BeanContext</tt> is
                 *  currently being serialized
                 */
                // @ts-ignore
                public isSerializing(): boolean
                /**
                 * Returns an iterator of all children
                 * of this <tt>BeanContext</tt>.
                 * @return an iterator for all the current BCSChild values
                 */
                // @ts-ignore
                bcsChildren(): java.util.Iterator<any>
                /**
                 * called by writeObject after defaultWriteObject() but prior to
                 * serialization of currently serializable children.
                 * This method may be overridden by subclasses to perform custom
                 * serialization of their state prior to this superclass serializing
                 * the children.
                 * This method should not however be used by subclasses to replace their
                 * own implementation (if any) of writeObject().
                 * @param oos the {#code ObjectOutputStream} to use during serialization
                 * @throws IOException if serialization failed
                 */
                // @ts-ignore
                bcsPreSerializationHook(oos: java.io.ObjectOutputStream): void
                /**
                 * called by readObject after defaultReadObject() but prior to
                 * deserialization of any children.
                 * This method may be overridden by subclasses to perform custom
                 * deserialization of their state prior to this superclass deserializing
                 * the children.
                 * This method should not however be used by subclasses to replace their
                 * own implementation (if any) of readObject().
                 * @param ois the {#code ObjectInputStream} to use during deserialization
                 * @throws IOException if deserialization failed
                 * @throws ClassNotFoundException if needed classes are not found
                 */
                // @ts-ignore
                bcsPreDeserializationHook(ois: java.io.ObjectInputStream): void
                /**
                 * Called by readObject with the newly deserialized child and BCSChild.
                 * @param child the newly deserialized child
                 * @param bcsc the newly deserialized BCSChild
                 */
                // @ts-ignore
                childDeserializedHook(child: java.lang.Object | any, bcsc: java.beans.beancontext.BeanContextSupport.BCSChild): void
                /**
                 * Used by writeObject to serialize a Collection.
                 * @param oos the <tt>ObjectOutputStream</tt>
                 *  to use during serialization
                 * @param coll the <tt>Collection</tt> to serialize
                 * @throws IOException if serialization failed
                 */
                // @ts-ignore
                serialize(oos: java.io.ObjectOutputStream, coll: java.util.Collection<any> | Array<any>): void
                /**
                 * used by readObject to deserialize a collection.
                 * @param ois the ObjectInputStream to use
                 * @param coll the Collection
                 * @throws IOException if deserialization failed
                 * @throws ClassNotFoundException if needed classes are not found
                 */
                // @ts-ignore
                deserialize(ois: java.io.ObjectInputStream, coll: java.util.Collection<any> | Array<any>): void
                /**
                 * Used to serialize all children of
                 * this <tt>BeanContext</tt>.
                 * @param oos the <tt>ObjectOutputStream</tt>
                 *  to use during serialization
                 * @throws IOException if serialization failed
                 */
                // @ts-ignore
                public writeChildren(oos: java.io.ObjectOutputStream): void
                /**
                 * When an instance of this class is used as a delegate for the
                 * implementation of the BeanContext protocols (and its subprotocols)
                 * there exists a 'chicken and egg' problem during deserialization
                 * @param ois the ObjectInputStream to use
                 * @throws IOException if deserialization failed
                 * @throws ClassNotFoundException if needed classes are not found
                 */
                // @ts-ignore
                public readChildren(ois: java.io.ObjectInputStream): void
                /**
                 * subclasses may envelope to monitor veto child property changes.
                 */
                // @ts-ignore
                public vetoableChange(pce: java.beans.PropertyChangeEvent): void
                /**
                 * subclasses may envelope to monitor child property changes.
                 */
                // @ts-ignore
                public propertyChange(pce: java.beans.PropertyChangeEvent): void
                /**
                 * <p>
                 * Subclasses of this class may override, or envelope, this method to
                 * add validation behavior for the BeanContext to examine child objects
                 * immediately prior to their being added to the BeanContext.
                 * </p>
                 * @param targetChild the child to create the Child on behalf of
                 * @return true iff the child may be added to this BeanContext, otherwise false.
                 */
                // @ts-ignore
                validatePendingAdd(targetChild: java.lang.Object | any): boolean
                /**
                 * <p>
                 * Subclasses of this class may override, or envelope, this method to
                 * add validation behavior for the BeanContext to examine child objects
                 * immediately prior to their being removed from the BeanContext.
                 * </p>
                 * @param targetChild the child to create the Child on behalf of
                 * @return true iff the child may be removed from this BeanContext, otherwise false.
                 */
                // @ts-ignore
                validatePendingRemove(targetChild: java.lang.Object | any): boolean
                /**
                 * subclasses may override this method to simply extend add() semantics
                 * after the child has been added and before the event notification has
                 * occurred. The method is called with the child synchronized.
                 * @param child the child
                 * @param bcsc the BCSChild
                 */
                // @ts-ignore
                childJustAddedHook(child: java.lang.Object | any, bcsc: java.beans.beancontext.BeanContextSupport.BCSChild): void
                /**
                 * subclasses may override this method to simply extend remove() semantics
                 * after the child has been removed and before the event notification has
                 * occurred. The method is called with the child synchronized.
                 * @param child the child
                 * @param bcsc the BCSChild
                 */
                // @ts-ignore
                childJustRemovedHook(child: java.lang.Object | any, bcsc: java.beans.beancontext.BeanContextSupport.BCSChild): void
                /**
                 * Gets the Component (if any) associated with the specified child.
                 * @param child the specified child
                 * @return the Component (if any) associated with the specified child.
                 */
                // @ts-ignore
                static getChildVisibility(child: java.lang.Object | any): java.beans.Visibility
                /**
                 * Gets the Serializable (if any) associated with the specified Child
                 * @param child the specified child
                 * @return the Serializable (if any) associated with the specified Child
                 */
                // @ts-ignore
                static getChildSerializable(child: java.lang.Object | any): java.io.Serializable
                /**
                 * Gets the PropertyChangeListener
                 * (if any) of the specified child
                 * @param child the specified child
                 * @return the PropertyChangeListener (if any) of the specified child
                 */
                // @ts-ignore
                static getChildPropertyChangeListener(child: java.lang.Object | any): java.beans.PropertyChangeListener
                /**
                 * Gets the VetoableChangeListener
                 * (if any) of the specified child
                 * @param child the specified child
                 * @return the VetoableChangeListener (if any) of the specified child
                 */
                // @ts-ignore
                static getChildVetoableChangeListener(child: java.lang.Object | any): java.beans.VetoableChangeListener
                /**
                 * Gets the BeanContextMembershipListener
                 * (if any) of the specified child
                 * @param child the specified child
                 * @return the BeanContextMembershipListener (if any) of the specified child
                 */
                // @ts-ignore
                static getChildBeanContextMembershipListener(child: java.lang.Object | any): java.beans.beancontext.BeanContextMembershipListener
                /**
                 * Gets the BeanContextChild (if any) of the specified child
                 * @param child the specified child
                 * @return the BeanContextChild (if any) of the specified child
                 * @throws IllegalArgumentException if child implements both BeanContextChild and BeanContextProxy
                 */
                // @ts-ignore
                static getChildBeanContextChild(child: java.lang.Object | any): java.beans.beancontext.BeanContextChild
                /**
                 * Fire a BeanContextshipEvent on the BeanContextMembershipListener interface
                 * @param bcme the event to fire
                 */
                // @ts-ignore
                fireChildrenAdded(bcme: java.beans.beancontext.BeanContextMembershipEvent): void
                /**
                 * Fire a BeanContextshipEvent on the BeanContextMembershipListener interface
                 * @param bcme the event to fire
                 */
                // @ts-ignore
                fireChildrenRemoved(bcme: java.beans.beancontext.BeanContextMembershipEvent): void
                /**
                 * protected method called from constructor and readObject to initialize
                 * transient state of BeanContextSupport instance.
                 * This class uses this method to instantiate inner class listeners used
                 * to monitor PropertyChange and VetoableChange events on children.
                 * subclasses may envelope this method to add their own initialization
                 * behavior
                 */
                // @ts-ignore
                initialize(): void
                /**
                 * Gets a copy of the this BeanContext's children.
                 * @return a copy of the current nested children
                 */
                // @ts-ignore
                copyChildren(): any[]
                /**
                 * Tests to see if two class objects,
                 * or their names are equal.
                 * @param first the first object
                 * @param second the second object
                 * @return true if equal, false if not
                 */
                // @ts-ignore
                static classEquals(first: java.lang.Class<any>, second: java.lang.Class<any>): boolean
            }
        }
    }
}
