declare namespace java {
    namespace awt {
        /**
         * A generic Abstract Window Toolkit(AWT) container object is a component
         * that can contain other AWT components.
         * <p>
         * Components added to a container are tracked in a list.  The order
         * of the list will define the components' front-to-back stacking order
         * within the container.  If no index is specified when adding a
         * component to a container, it will be added to the end of the list
         * (and hence to the bottom of the stacking order).
         * <p>
         * <b>Note</b>: For details on the focus subsystem, see
         * <a href="https://docs.oracle.com/javase/tutorial/uiswing/misc/focus.html">
         * How to Use the Focus Subsystem</a>,
         * a section in <em>The Java Tutorial</em>, and the
         * <a href="../../java/awt/doc-files/FocusSpec.html">Focus Specification</a>
         * for more information.
         * @author Arthur van Hoff
         * @author Sami Shaio
         * @see #add(java.awt.Component, int)
         * @see #getComponent(int)
         * @see LayoutManager
         * @since JDK1.0
         */
        // @ts-ignore
        class Container extends java.awt.Component {
            /**
             * Constructs a new Container. Containers can be extended directly,
             * but are lightweight in this case and must be contained by a parent
             * somewhere higher up in the component tree that is native.
             * (such as Frame for example).
             */
            // @ts-ignore
            constructor()
            /**
             * Gets the number of components in this panel.
             * <p>
             * Note: This method should be called under AWT tree lock.
             * @return the number of components in this panel.
             * @see #getComponent
             * @since JDK1.1
             * @see Component#getTreeLock()
             */
            // @ts-ignore
            public getComponentCount(): number /*int*/
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by getComponentCount().
             */
            // @ts-ignore
            public countComponents(): number /*int*/
            /**
             * Gets the nth component in this container.
             * <p>
             * Note: This method should be called under AWT tree lock.
             * @param n   the index of the component to get.
             * @return the n<sup>th</sup> component in this container.
             * @exception ArrayIndexOutOfBoundsException
             *                  if the n<sup>th</sup> value does not exist.
             * @see Component#getTreeLock()
             */
            // @ts-ignore
            public getComponent(n: number /*int*/): java.awt.Component
            /**
             * Gets all the components in this container.
             * <p>
             * Note: This method should be called under AWT tree lock.
             * @return an array of all the components in this container.
             * @see Component#getTreeLock()
             */
            // @ts-ignore
            public getComponents(): java.awt.Component[]
            /**
             * Determines the insets of this container, which indicate the size
             * of the container's border.
             * <p>
             * A <code>Frame</code> object, for example, has a top inset that
             * corresponds to the height of the frame's title bar.
             * @return the insets of this container.
             * @see Insets
             * @see LayoutManager
             * @since JDK1.1
             */
            // @ts-ignore
            public getInsets(): java.awt.Insets
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>getInsets()</code>.
             */
            // @ts-ignore
            public insets(): java.awt.Insets
            /**
             * Appends the specified component to the end of this container.
             * This is a convenience method for {@link #addImpl}.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy. If the container has already been
             * displayed, the hierarchy must be validated thereafter in order to
             * display the added component.
             * @param comp   the component to be added
             * @exception NullPointerException if {#code comp} is {@code null}
             * @see #addImpl
             * @see #invalidate
             * @see #validate
             * @see javax.swing.JComponent#revalidate()
             * @return the component argument
             */
            // @ts-ignore
            public add(comp: java.awt.Component): java.awt.Component
            /**
             * Adds the specified component to this container.
             * This is a convenience method for {@link #addImpl}.
             * <p>
             * This method is obsolete as of 1.1.  Please use the
             * method <code>add(Component, Object)</code> instead.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy. If the container has already been
             * displayed, the hierarchy must be validated thereafter in order to
             * display the added component.
             * @exception NullPointerException if {#code comp} is {@code null}
             * @see #add(Component, Object)
             * @see #invalidate
             */
            // @ts-ignore
            public add(name: java.lang.String | string, comp: java.awt.Component): java.awt.Component
            /**
             * Adds the specified component to this container at the given
             * position.
             * This is a convenience method for {@link #addImpl}.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy. If the container has already been
             * displayed, the hierarchy must be validated thereafter in order to
             * display the added component.
             * @param comp   the component to be added
             * @param index    the position at which to insert the component,
             *                    or <code>-1</code> to append the component to the end
             * @exception NullPointerException if {#code comp} is {@code null}
             * @exception IllegalArgumentException if {#code index} is invalid (see
             *             {@link #addImpl} for details)
             * @return the component <code>comp</code>
             * @see #addImpl
             * @see #remove
             * @see #invalidate
             * @see #validate
             * @see javax.swing.JComponent#revalidate()
             */
            // @ts-ignore
            public add(comp: java.awt.Component, index: number /*int*/): java.awt.Component
            /**
             * Moves the specified component to the specified z-order index in
             * the container. The z-order determines the order that components
             * are painted; the component with the highest z-order paints first
             * and the component with the lowest z-order paints last.
             * Where components overlap, the component with the lower
             * z-order paints over the component with the higher z-order.
             * <p>
             * If the component is a child of some other container, it is
             * removed from that container before being added to this container.
             * The important difference between this method and
             * <code>java.awt.Container.add(Component, int)</code> is that this method
             * doesn't call <code>removeNotify</code> on the component while
             * removing it from its previous container unless necessary and when
             * allowed by the underlying native windowing system. This way, if the
             * component has the keyboard focus, it maintains the focus when
             * moved to the new position.
             * <p>
             * This property is guaranteed to apply only to lightweight
             * non-<code>Container</code> components.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             * <p>
             * <b>Note</b>: Not all platforms support changing the z-order of
             * heavyweight components from one container into another without
             * the call to <code>removeNotify</code>. There is no way to detect
             * whether a platform supports this, so developers shouldn't make
             * any assumptions.
             * @param comp the component to be moved
             * @param index the position in the container's list to
             *             insert the component, where <code>getComponentCount()</code>
             *             appends to the end
             * @exception NullPointerException if <code>comp</code> is
             *             <code>null</code>
             * @exception IllegalArgumentException if <code>comp</code> is one of the
             *             container's parents
             * @exception IllegalArgumentException if <code>index</code> is not in
             *             the range <code>[0, getComponentCount()]</code> for moving
             *             between containers, or not in the range
             *             <code>[0, getComponentCount()-1]</code> for moving inside
             *             a container
             * @exception IllegalArgumentException if adding a container to itself
             * @exception IllegalArgumentException if adding a <code>Window</code>
             *             to a container
             * @see #getComponentZOrder(java.awt.Component)
             * @see #invalidate
             * @since 1.5
             */
            // @ts-ignore
            public setComponentZOrder(comp: java.awt.Component, index: number /*int*/): void
            /**
             * Returns the z-order index of the component inside the container.
             * The higher a component is in the z-order hierarchy, the lower
             * its index.  The component with the lowest z-order index is
             * painted last, above all other child components.
             * @param comp the component being queried
             * @return the z-order index of the component; otherwise
             *           returns -1 if the component is <code>null</code>
             *           or doesn't belong to the container
             * @see #setComponentZOrder(java.awt.Component, int)
             * @since 1.5
             */
            // @ts-ignore
            public getComponentZOrder(comp: java.awt.Component): number /*int*/
            /**
             * Adds the specified component to the end of this container.
             * Also notifies the layout manager to add the component to
             * this container's layout using the specified constraints object.
             * This is a convenience method for {@link #addImpl}.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy. If the container has already been
             * displayed, the hierarchy must be validated thereafter in order to
             * display the added component.
             * @param comp the component to be added
             * @param constraints an object expressing
             *                   layout constraints for this component
             * @exception NullPointerException if {#code comp} is {@code null}
             * @see #addImpl
             * @see #invalidate
             * @see #validate
             * @see javax.swing.JComponent#revalidate()
             * @see LayoutManager
             * @since JDK1.1
             */
            // @ts-ignore
            public add(comp: java.awt.Component, constraints: java.lang.Object | any): void
            /**
             * Adds the specified component to this container with the specified
             * constraints at the specified index.  Also notifies the layout
             * manager to add the component to the this container's layout using
             * the specified constraints object.
             * This is a convenience method for {@link #addImpl}.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy. If the container has already been
             * displayed, the hierarchy must be validated thereafter in order to
             * display the added component.
             * @param comp the component to be added
             * @param constraints an object expressing layout constraints for this
             * @param index the position in the container's list at which to insert
             *  the component; <code>-1</code> means insert at the end
             *  component
             * @exception NullPointerException if {#code comp} is {@code null}
             * @exception IllegalArgumentException if {#code index} is invalid (see
             *             {@link #addImpl} for details)
             * @see #addImpl
             * @see #invalidate
             * @see #validate
             * @see javax.swing.JComponent#revalidate()
             * @see #remove
             * @see LayoutManager
             */
            // @ts-ignore
            public add(comp: java.awt.Component, constraints: java.lang.Object | any, index: number /*int*/): void
            /**
             * Adds the specified component to this container at the specified
             * index. This method also notifies the layout manager to add
             * the component to this container's layout using the specified
             * constraints object via the <code>addLayoutComponent</code>
             * method.
             * <p>
             * The constraints are
             * defined by the particular layout manager being used.  For
             * example, the <code>BorderLayout</code> class defines five
             * constraints: <code>BorderLayout.NORTH</code>,
             * <code>BorderLayout.SOUTH</code>, <code>BorderLayout.EAST</code>,
             * <code>BorderLayout.WEST</code>, and <code>BorderLayout.CENTER</code>.
             * <p>
             * The <code>GridBagLayout</code> class requires a
             * <code>GridBagConstraints</code> object.  Failure to pass
             * the correct type of constraints object results in an
             * <code>IllegalArgumentException</code>.
             * <p>
             * If the current layout manager implements {@code LayoutManager2}, then
             * {@link LayoutManager2#addLayoutComponent(Component,Object)} is invoked on
             * it. If the current layout manager does not implement
             * {@code LayoutManager2}, and constraints is a {@code String}, then
             * {@link LayoutManager#addLayoutComponent(String,Component)} is invoked on it.
             * <p>
             * If the component is not an ancestor of this container and has a non-null
             * parent, it is removed from its current parent before it is added to this
             * container.
             * <p>
             * This is the method to override if a program needs to track
             * every add request to a container as all other add methods defer
             * to this one. An overriding method should
             * usually include a call to the superclass's version of the method:
             * <blockquote>
             * <code>super.addImpl(comp, constraints, index)</code>
             * </blockquote>
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy. If the container has already been
             * displayed, the hierarchy must be validated thereafter in order to
             * display the added component.
             * @param comp       the component to be added
             * @param constraints an object expressing layout constraints
             *                  for this component
             * @param index the position in the container's list at which to
             *                  insert the component, where <code>-1</code>
             *                  means append to the end
             * @exception IllegalArgumentException if {#code index} is invalid;
             *             if {@code comp} is a child of this container, the valid
             *             range is {@code [-1, getComponentCount()-1]}; if component is
             *             not a child of this container, the valid range is
             *             {@code [-1, getComponentCount()]}
             * @exception IllegalArgumentException if {#code comp} is an ancestor of
             *                                      this container
             * @exception IllegalArgumentException if adding a window to a container
             * @exception NullPointerException if {#code comp} is {@code null}
             * @see #add(Component)
             * @see #add(Component, int)
             * @see #add(Component, java.lang.Object)
             * @see #invalidate
             * @see LayoutManager
             * @see LayoutManager2
             * @since JDK1.1
             */
            // @ts-ignore
            addImpl(comp: java.awt.Component, constraints: java.lang.Object | any, index: number /*int*/): void
            /**
             * Removes the component, specified by <code>index</code>,
             * from this container.
             * This method also notifies the layout manager to remove the
             * component from this container's layout via the
             * <code>removeLayoutComponent</code> method.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy. If the container has already been
             * displayed, the hierarchy must be validated thereafter in order to
             * reflect the changes.
             * @param index   the index of the component to be removed
             * @throws ArrayIndexOutOfBoundsException if {#code index} is not in
             *          range {@code [0, getComponentCount()-1]}
             * @see #add
             * @see #invalidate
             * @see #validate
             * @see #getComponentCount
             * @since JDK1.1
             */
            // @ts-ignore
            public remove(index: number /*int*/): void
            /**
             * Removes the specified component from this container.
             * This method also notifies the layout manager to remove the
             * component from this container's layout via the
             * <code>removeLayoutComponent</code> method.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy. If the container has already been
             * displayed, the hierarchy must be validated thereafter in order to
             * reflect the changes.
             * @param comp the component to be removed
             * @throws NullPointerException if {#code comp} is {@code null}
             * @see #add
             * @see #invalidate
             * @see #validate
             * @see #remove(int)
             */
            // @ts-ignore
            public remove(comp: java.awt.Component): void
            /**
             * Removes all the components from this container.
             * This method also notifies the layout manager to remove the
             * components from this container's layout via the
             * <code>removeLayoutComponent</code> method.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy. If the container has already been
             * displayed, the hierarchy must be validated thereafter in order to
             * reflect the changes.
             * @see #add
             * @see #remove
             * @see #invalidate
             */
            // @ts-ignore
            public removeAll(): void
            /**
             * Gets the layout manager for this container.
             * @see #doLayout
             * @see #setLayout
             */
            // @ts-ignore
            public getLayout(): java.awt.LayoutManager
            /**
             * Sets the layout manager for this container.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             * @param mgr the specified layout manager
             * @see #doLayout
             * @see #getLayout
             * @see #invalidate
             */
            // @ts-ignore
            public setLayout(mgr: java.awt.LayoutManager): void
            /**
             * Causes this container to lay out its components.  Most programs
             * should not call this method directly, but should invoke
             * the <code>validate</code> method instead.
             * @see LayoutManager#layoutContainer
             * @see #setLayout
             * @see #validate
             * @since JDK1.1
             */
            // @ts-ignore
            public doLayout(): void
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>doLayout()</code>.
             */
            // @ts-ignore
            public layout(): void
            /**
             * Indicates if this container is a <i>validate root</i>.
             * <p>
             * Layout-related changes, such as bounds of the validate root descendants,
             * do not affect the layout of the validate root parent. This peculiarity
             * enables the {@code invalidate()} method to stop invalidating the
             * component hierarchy when the method encounters a validate root. However,
             * to preserve backward compatibility this new optimized behavior is
             * enabled only when the {@code java.awt.smartInvalidate} system property
             * value is set to {@code true}.
             * <p>
             * If a component hierarchy contains validate roots and the new optimized
             * {@code invalidate()} behavior is enabled, the {@code validate()} method
             * must be invoked on the validate root of a previously invalidated
             * component to restore the validity of the hierarchy later. Otherwise,
             * calling the {@code validate()} method on the top-level container (such
             * as a {@code Frame} object) should be used to restore the validity of the
             * component hierarchy.
             * <p>
             * The {@code Window} class and the {@code Applet} class are the validate
             * roots in AWT.  Swing introduces more validate roots.
             * @return whether this container is a validate root
             * @see #invalidate
             * @see java.awt.Component#invalidate
             * @see javax.swing.JComponent#isValidateRoot
             * @see javax.swing.JComponent#revalidate
             * @since 1.7
             */
            // @ts-ignore
            public isValidateRoot(): boolean
            /**
             * Invalidates the container.
             * <p>
             * If the {@code LayoutManager} installed on this container is an instance
             * of the {@code LayoutManager2} interface, then
             * the {@link LayoutManager2#invalidateLayout(Container)} method is invoked
             * on it supplying this {@code Container} as the argument.
             * <p>
             * Afterwards this method marks this container invalid, and invalidates its
             * ancestors. See the {@link Component#invalidate} method for more details.
             * @see #validate
             * @see #layout
             * @see LayoutManager2
             */
            // @ts-ignore
            public invalidate(): void
            /**
             * Validates this container and all of its subcomponents.
             * <p>
             * Validating a container means laying out its subcomponents.
             * Layout-related changes, such as setting the bounds of a component, or
             * adding a component to the container, invalidate the container
             * automatically.  Note that the ancestors of the container may be
             * invalidated also (see {@link Component#invalidate} for details.)
             * Therefore, to restore the validity of the hierarchy, the {@code
             * validate()} method should be invoked on the top-most invalid
             * container of the hierarchy.
             * <p>
             * Validating the container may be a quite time-consuming operation. For
             * performance reasons a developer may postpone the validation of the
             * hierarchy till a set of layout-related operations completes, e.g. after
             * adding all the children to the container.
             * <p>
             * If this {@code Container} is not valid, this method invokes
             * the {@code validateTree} method and marks this {@code Container}
             * as valid. Otherwise, no action is performed.
             * @see #add(java.awt.Component)
             * @see #invalidate
             * @see Container#isValidateRoot
             * @see javax.swing.JComponent#revalidate()
             * @see #validateTree
             */
            // @ts-ignore
            public validate(): void
            /**
             * Recursively descends the container tree and recomputes the
             * layout for any subtrees marked as needing it (those marked as
             * invalid).  Synchronization should be provided by the method
             * that calls this one:  <code>validate</code>.
             * @see #doLayout
             * @see #validate
             */
            // @ts-ignore
            validateTree(): void
            /**
             * Sets the font of this container.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             * @param f The font to become this container's font.
             * @see Component#getFont
             * @see #invalidate
             * @since JDK1.0
             */
            // @ts-ignore
            public setFont(f: java.awt.Font): void
            /**
             * Returns the preferred size of this container.  If the preferred size has
             * not been set explicitly by {@link Component#setPreferredSize(Dimension)}
             * and this {@code Container} has a {@code non-null} {@link LayoutManager},
             * then {@link LayoutManager#preferredLayoutSize(Container)}
             * is used to calculate the preferred size.
             * <p>Note: some implementations may cache the value returned from the
             * {@code LayoutManager}.  Implementations that cache need not invoke
             * {@code preferredLayoutSize} on the {@code LayoutManager} every time
             * this method is invoked, rather the {@code LayoutManager} will only
             * be queried after the {@code Container} becomes invalid.
             * @return an instance of <code>Dimension</code> that represents
             *                 the preferred size of this container.
             * @see #getMinimumSize
             * @see #getMaximumSize
             * @see #getLayout
             * @see LayoutManager#preferredLayoutSize(Container)
             * @see Component#getPreferredSize
             */
            // @ts-ignore
            public getPreferredSize(): java.awt.Dimension
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>getPreferredSize()</code>.
             */
            // @ts-ignore
            public preferredSize(): java.awt.Dimension
            /**
             * Returns the minimum size of this container.  If the minimum size has
             * not been set explicitly by {@link Component#setMinimumSize(Dimension)}
             * and this {@code Container} has a {@code non-null} {@link LayoutManager},
             * then {@link LayoutManager#minimumLayoutSize(Container)}
             * is used to calculate the minimum size.
             * <p>Note: some implementations may cache the value returned from the
             * {@code LayoutManager}.  Implementations that cache need not invoke
             * {@code minimumLayoutSize} on the {@code LayoutManager} every time
             * this method is invoked, rather the {@code LayoutManager} will only
             * be queried after the {@code Container} becomes invalid.
             * @return an instance of <code>Dimension</code> that represents
             *                 the minimum size of this container.
             * @see #getPreferredSize
             * @see #getMaximumSize
             * @see #getLayout
             * @see LayoutManager#minimumLayoutSize(Container)
             * @see Component#getMinimumSize
             * @since JDK1.1
             */
            // @ts-ignore
            public getMinimumSize(): java.awt.Dimension
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>getMinimumSize()</code>.
             */
            // @ts-ignore
            public minimumSize(): java.awt.Dimension
            /**
             * Returns the maximum size of this container.  If the maximum size has
             * not been set explicitly by {@link Component#setMaximumSize(Dimension)}
             * and the {@link LayoutManager} installed on this {@code Container}
             * is an instance of {@link LayoutManager2}, then
             * {@link LayoutManager2#maximumLayoutSize(Container)}
             * is used to calculate the maximum size.
             * <p>Note: some implementations may cache the value returned from the
             * {@code LayoutManager2}.  Implementations that cache need not invoke
             * {@code maximumLayoutSize} on the {@code LayoutManager2} every time
             * this method is invoked, rather the {@code LayoutManager2} will only
             * be queried after the {@code Container} becomes invalid.
             * @return an instance of <code>Dimension</code> that represents
             *                 the maximum size of this container.
             * @see #getPreferredSize
             * @see #getMinimumSize
             * @see #getLayout
             * @see LayoutManager2#maximumLayoutSize(Container)
             * @see Component#getMaximumSize
             */
            // @ts-ignore
            public getMaximumSize(): java.awt.Dimension
            /**
             * Returns the alignment along the x axis.  This specifies how
             * the component would like to be aligned relative to other
             * components.  The value should be a number between 0 and 1
             * where 0 represents alignment along the origin, 1 is aligned
             * the furthest away from the origin, 0.5 is centered, etc.
             */
            // @ts-ignore
            public getAlignmentX(): number /*float*/
            /**
             * Returns the alignment along the y axis.  This specifies how
             * the component would like to be aligned relative to other
             * components.  The value should be a number between 0 and 1
             * where 0 represents alignment along the origin, 1 is aligned
             * the furthest away from the origin, 0.5 is centered, etc.
             */
            // @ts-ignore
            public getAlignmentY(): number /*float*/
            /**
             * Paints the container. This forwards the paint to any lightweight
             * components that are children of this container. If this method is
             * reimplemented, super.paint(g) should be called so that lightweight
             * components are properly rendered. If a child component is entirely
             * clipped by the current clipping setting in g, paint() will not be
             * forwarded to that child.
             * @param g the specified Graphics window
             * @see Component#update(Graphics)
             */
            // @ts-ignore
            public paint(g: java.awt.Graphics): void
            /**
             * Updates the container.  This forwards the update to any lightweight
             * components that are children of this container.  If this method is
             * reimplemented, super.update(g) should be called so that lightweight
             * components are properly rendered.  If a child component is entirely
             * clipped by the current clipping setting in g, update() will not be
             * forwarded to that child.
             * @param g the specified Graphics window
             * @see Component#update(Graphics)
             */
            // @ts-ignore
            public update(g: java.awt.Graphics): void
            /**
             * Prints the container. This forwards the print to any lightweight
             * components that are children of this container. If this method is
             * reimplemented, super.print(g) should be called so that lightweight
             * components are properly rendered. If a child component is entirely
             * clipped by the current clipping setting in g, print() will not be
             * forwarded to that child.
             * @param g the specified Graphics window
             * @see Component#update(Graphics)
             */
            // @ts-ignore
            public print(g: java.awt.Graphics): void
            /**
             * Paints each of the components in this container.
             * @param g   the graphics context.
             * @see Component#paint
             * @see Component#paintAll
             */
            // @ts-ignore
            public paintComponents(g: java.awt.Graphics): void
            /**
             * Prints each of the components in this container.
             * @param g   the graphics context.
             * @see Component#print
             * @see Component#printAll
             */
            // @ts-ignore
            public printComponents(g: java.awt.Graphics): void
            /**
             * Adds the specified container listener to receive container events
             * from this container.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param l the container listener
             * @see #removeContainerListener
             * @see #getContainerListeners
             */
            // @ts-ignore
            public addContainerListener(l: java.awt.event.ContainerListener): void
            /**
             * Removes the specified container listener so it no longer receives
             * container events from this container.
             * If l is null, no exception is thrown and no action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             * @param l the container listener
             * @see #addContainerListener
             * @see #getContainerListeners
             */
            // @ts-ignore
            public removeContainerListener(l: java.awt.event.ContainerListener): void
            /**
             * Returns an array of all the container listeners
             * registered on this container.
             * @return all of this container's <code>ContainerListener</code>s
             *          or an empty array if no container
             *          listeners are currently registered
             * @see #addContainerListener
             * @see #removeContainerListener
             * @since 1.4
             */
            // @ts-ignore
            public getContainerListeners(): java.awt.event.ContainerListener[]
            /**
             * Returns an array of all the objects currently registered
             * as <code><em>Foo</em>Listener</code>s
             * upon this <code>Container</code>.
             * <code><em>Foo</em>Listener</code>s are registered using the
             * <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal, such as
             * <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a
             * <code>Container</code> <code>c</code>
             * for its container listeners with the following code:
             * <pre>ContainerListener[] cls = (ContainerListener[])(c.getListeners(ContainerListener.class));</pre>
             * If no such listeners exist, this method returns an empty array.
             * @param listenerType the type of listeners requested; this parameter
             *           should specify an interface that descends from
             *           <code>java.util.EventListener</code>
             * @return an array of all objects registered as
             *           <code><em>Foo</em>Listener</code>s on this container,
             *           or an empty array if no such listeners have been added
             * @exception ClassCastException if <code>listenerType</code>
             *           doesn't specify a class or interface that implements
             *           <code>java.util.EventListener</code>
             * @exception NullPointerException if {#code listenerType} is {@code null}
             * @see #getContainerListeners
             * @since 1.3
             */
            // @ts-ignore
            public getListeners<T extends java.util.EventListener>(listenerType: java.lang.Class<T>): T
            /**
             * Processes events on this container. If the event is a
             * <code>ContainerEvent</code>, it invokes the
             * <code>processContainerEvent</code> method, else it invokes
             * its superclass's <code>processEvent</code>.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             * @param e the event
             */
            // @ts-ignore
            processEvent(e: java.awt.AWTEvent): void
            /**
             * Processes container events occurring on this container by
             * dispatching them to any registered ContainerListener objects.
             * NOTE: This method will not be called unless container events
             * are enabled for this component; this happens when one of the
             * following occurs:
             * <ul>
             * <li>A ContainerListener object is registered via
             * <code>addContainerListener</code>
             * <li>Container events are enabled via <code>enableEvents</code>
             * </ul>
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             * @param e the container event
             * @see Component#enableEvents
             */
            // @ts-ignore
            processContainerEvent(e: java.awt.event.ContainerEvent): void
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>dispatchEvent(AWTEvent e)</code>
             */
            // @ts-ignore
            public deliverEvent(e: java.awt.Event): void
            /**
             * Locates the component that contains the x,y position.  The
             * top-most child component is returned in the case where there
             * is overlap in the components.  This is determined by finding
             * the component closest to the index 0 that claims to contain
             * the given point via Component.contains(), except that Components
             * which have native peers take precedence over those which do not
             * (i.e., lightweight Components).
             * @param x the <i>x</i> coordinate
             * @param y the <i>y</i> coordinate
             * @return null if the component does not contain the position.
             *  If there is no child component at the requested point and the
             *  point is within the bounds of the container the container itself
             *  is returned; otherwise the top-most child is returned.
             * @see Component#contains
             * @since JDK1.1
             */
            // @ts-ignore
            public getComponentAt(x: number /*int*/, y: number /*int*/): java.awt.Component
            /**
             * @deprecated As of JDK version 1.1,
             *  replaced by <code>getComponentAt(int, int)</code>.
             */
            // @ts-ignore
            public locate(x: number /*int*/, y: number /*int*/): java.awt.Component
            /**
             * Gets the component that contains the specified point.
             * @param p   the point.
             * @return returns the component that contains the point,
             *                  or <code>null</code> if the component does
             *                  not contain the point.
             * @see Component#contains
             * @since JDK1.1
             */
            // @ts-ignore
            public getComponentAt(p: java.awt.Point): java.awt.Component
            /**
             * Returns the position of the mouse pointer in this <code>Container</code>'s
             * coordinate space if the <code>Container</code> is under the mouse pointer,
             * otherwise returns <code>null</code>.
             * This method is similar to {@link Component#getMousePosition()} with the exception
             * that it can take the <code>Container</code>'s children into account.
             * If <code>allowChildren</code> is <code>false</code>, this method will return
             * a non-null value only if the mouse pointer is above the <code>Container</code>
             * directly, not above the part obscured by children.
             * If <code>allowChildren</code> is <code>true</code>, this method returns
             * a non-null value if the mouse pointer is above <code>Container</code> or any
             * of its descendants.
             * @exception HeadlessException if GraphicsEnvironment.isHeadless() returns true
             * @param allowChildren true if children should be taken into account
             * @see Component#getMousePosition
             * @return mouse coordinates relative to this <code>Component</code>, or null
             * @since 1.5
             */
            // @ts-ignore
            public getMousePosition(allowChildren: boolean): java.awt.Point
            /**
             * Locates the visible child component that contains the specified
             * position.  The top-most child component is returned in the case
             * where there is overlap in the components.  If the containing child
             * component is a Container, this method will continue searching for
             * the deepest nested child component.  Components which are not
             * visible are ignored during the search.<p>
             * The findComponentAt method is different from getComponentAt in
             * that getComponentAt only searches the Container's immediate
             * children; if the containing component is a Container,
             * findComponentAt will search that child to find a nested component.
             * @param x the <i>x</i> coordinate
             * @param y the <i>y</i> coordinate
             * @return null if the component does not contain the position.
             *  If there is no child component at the requested point and the
             *  point is within the bounds of the container the container itself
             *  is returned.
             * @see Component#contains
             * @see #getComponentAt
             * @since 1.2
             */
            // @ts-ignore
            public findComponentAt(x: number /*int*/, y: number /*int*/): java.awt.Component
            /**
             * Locates the visible child component that contains the specified
             * point.  The top-most child component is returned in the case
             * where there is overlap in the components.  If the containing child
             * component is a Container, this method will continue searching for
             * the deepest nested child component.  Components which are not
             * visible are ignored during the search.<p>
             * The findComponentAt method is different from getComponentAt in
             * that getComponentAt only searches the Container's immediate
             * children; if the containing component is a Container,
             * findComponentAt will search that child to find a nested component.
             * @param p   the point.
             * @return null if the component does not contain the position.
             *  If there is no child component at the requested point and the
             *  point is within the bounds of the container the container itself
             *  is returned.
             * @throws NullPointerException if {#code p} is {@code null}
             * @see Component#contains
             * @see #getComponentAt
             * @since 1.2
             */
            // @ts-ignore
            public findComponentAt(p: java.awt.Point): java.awt.Component
            /**
             * Makes this Container displayable by connecting it to
             * a native screen resource.  Making a container displayable will
             * cause all of its children to be made displayable.
             * This method is called internally by the toolkit and should
             * not be called directly by programs.
             * @see Component#isDisplayable
             * @see #removeNotify
             */
            // @ts-ignore
            public addNotify(): void
            /**
             * Makes this Container undisplayable by removing its connection
             * to its native screen resource.  Making a container undisplayable
             * will cause all of its children to be made undisplayable.
             * This method is called by the toolkit internally and should
             * not be called directly by programs.
             * @see Component#isDisplayable
             * @see #addNotify
             */
            // @ts-ignore
            public removeNotify(): void
            /**
             * Checks if the component is contained in the component hierarchy of
             * this container.
             * @param c the component
             * @return <code>true</code> if it is an ancestor;
             *              <code>false</code> otherwise.
             * @since JDK1.1
             */
            // @ts-ignore
            public isAncestorOf(c: java.awt.Component): boolean
            /**
             * Returns a string representing the state of this <code>Container</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             * @return the parameter string of this container
             */
            // @ts-ignore
            paramString(): string
            /**
             * Prints a listing of this container to the specified output
             * stream. The listing starts at the specified indentation.
             * <p>
             * The immediate children of the container are printed with
             * an indentation of <code>indent+1</code>.  The children
             * of those children are printed at <code>indent+2</code>
             * and so on.
             * @param out      a print stream
             * @param indent   the number of spaces to indent
             * @throws NullPointerException if {#code out} is {@code null}
             * @see Component#list(java.io.PrintStream, int)
             * @since JDK1.0
             */
            // @ts-ignore
            public list(out: java.io.PrintStream, indent: number /*int*/): void
            /**
             * Prints out a list, starting at the specified indentation,
             * to the specified print writer.
             * <p>
             * The immediate children of the container are printed with
             * an indentation of <code>indent+1</code>.  The children
             * of those children are printed at <code>indent+2</code>
             * and so on.
             * @param out      a print writer
             * @param indent   the number of spaces to indent
             * @throws NullPointerException if {#code out} is {@code null}
             * @see Component#list(java.io.PrintWriter, int)
             * @since JDK1.1
             */
            // @ts-ignore
            public list(out: java.io.PrintWriter, indent: number /*int*/): void
            /**
             * Sets the focus traversal keys for a given traversal operation for this
             * Container.
             * <p>
             * The default values for a Container's focus traversal keys are
             * implementation-dependent. Sun recommends that all implementations for a
             * particular native platform use the same default values. The
             * recommendations for Windows and Unix are listed below. These
             * recommendations are used in the Sun AWT implementations.
             * <table border=1 summary="Recommended default values for a Container's focus traversal keys">
             * <tr>
             * <th>Identifier</th>
             * <th>Meaning</th>
             * <th>Default</th>
             * </tr>
             * <tr>
             * <td>KeyboardFocusManager.FORWARD_TRAVERSAL_KEYS</td>
             * <td>Normal forward keyboard traversal</td>
             * <td>TAB on KEY_PRESSED, CTRL-TAB on KEY_PRESSED</td>
             * </tr>
             * <tr>
             * <td>KeyboardFocusManager.BACKWARD_TRAVERSAL_KEYS</td>
             * <td>Normal reverse keyboard traversal</td>
             * <td>SHIFT-TAB on KEY_PRESSED, CTRL-SHIFT-TAB on KEY_PRESSED</td>
             * </tr>
             * <tr>
             * <td>KeyboardFocusManager.UP_CYCLE_TRAVERSAL_KEYS</td>
             * <td>Go up one focus traversal cycle</td>
             * <td>none</td>
             * </tr>
             * <tr>
             * <td>KeyboardFocusManager.DOWN_CYCLE_TRAVERSAL_KEYS<td>
             * <td>Go down one focus traversal cycle</td>
             * <td>none</td>
             * </tr>
             * </table>
             * To disable a traversal key, use an empty Set; Collections.EMPTY_SET is
             * recommended.
             * <p>
             * Using the AWTKeyStroke API, client code can specify on which of two
             * specific KeyEvents, KEY_PRESSED or KEY_RELEASED, the focus traversal
             * operation will occur. Regardless of which KeyEvent is specified,
             * however, all KeyEvents related to the focus traversal key, including the
             * associated KEY_TYPED event, will be consumed, and will not be dispatched
             * to any Container. It is a runtime error to specify a KEY_TYPED event as
             * mapping to a focus traversal operation, or to map the same event to
             * multiple default focus traversal operations.
             * <p>
             * If a value of null is specified for the Set, this Container inherits the
             * Set from its parent. If all ancestors of this Container have null
             * specified for the Set, then the current KeyboardFocusManager's default
             * Set is used.
             * <p>
             * This method may throw a {@code ClassCastException} if any {@code Object}
             * in {@code keystrokes} is not an {@code AWTKeyStroke}.
             * @param id one of KeyboardFocusManager.FORWARD_TRAVERSAL_KEYS,
             *         KeyboardFocusManager.BACKWARD_TRAVERSAL_KEYS,
             *         KeyboardFocusManager.UP_CYCLE_TRAVERSAL_KEYS, or
             *         KeyboardFocusManager.DOWN_CYCLE_TRAVERSAL_KEYS
             * @param keystrokes the Set of AWTKeyStroke for the specified operation
             * @see #getFocusTraversalKeys
             * @see KeyboardFocusManager#FORWARD_TRAVERSAL_KEYS
             * @see KeyboardFocusManager#BACKWARD_TRAVERSAL_KEYS
             * @see KeyboardFocusManager#UP_CYCLE_TRAVERSAL_KEYS
             * @see KeyboardFocusManager#DOWN_CYCLE_TRAVERSAL_KEYS
             * @throws IllegalArgumentException if id is not one of
             *          KeyboardFocusManager.FORWARD_TRAVERSAL_KEYS,
             *          KeyboardFocusManager.BACKWARD_TRAVERSAL_KEYS,
             *          KeyboardFocusManager.UP_CYCLE_TRAVERSAL_KEYS, or
             *          KeyboardFocusManager.DOWN_CYCLE_TRAVERSAL_KEYS, or if keystrokes
             *          contains null, or if any keystroke represents a KEY_TYPED event,
             *          or if any keystroke already maps to another focus traversal
             *          operation for this Container
             * @since 1.4
             * @beaninfo bound: true
             */
            // @ts-ignore
            public setFocusTraversalKeys(id: number /*int*/, keystrokes: java.util.Set<any> | Array<any>): void
            /**
             * Returns the Set of focus traversal keys for a given traversal operation
             * for this Container. (See
             * <code>setFocusTraversalKeys</code> for a full description of each key.)
             * <p>
             * If a Set of traversal keys has not been explicitly defined for this
             * Container, then this Container's parent's Set is returned. If no Set
             * has been explicitly defined for any of this Container's ancestors, then
             * the current KeyboardFocusManager's default Set is returned.
             * @param id one of KeyboardFocusManager.FORWARD_TRAVERSAL_KEYS,
             *         KeyboardFocusManager.BACKWARD_TRAVERSAL_KEYS,
             *         KeyboardFocusManager.UP_CYCLE_TRAVERSAL_KEYS, or
             *         KeyboardFocusManager.DOWN_CYCLE_TRAVERSAL_KEYS
             * @return the Set of AWTKeyStrokes for the specified operation. The Set
             *          will be unmodifiable, and may be empty. null will never be
             *          returned.
             * @see #setFocusTraversalKeys
             * @see KeyboardFocusManager#FORWARD_TRAVERSAL_KEYS
             * @see KeyboardFocusManager#BACKWARD_TRAVERSAL_KEYS
             * @see KeyboardFocusManager#UP_CYCLE_TRAVERSAL_KEYS
             * @see KeyboardFocusManager#DOWN_CYCLE_TRAVERSAL_KEYS
             * @throws IllegalArgumentException if id is not one of
             *          KeyboardFocusManager.FORWARD_TRAVERSAL_KEYS,
             *          KeyboardFocusManager.BACKWARD_TRAVERSAL_KEYS,
             *          KeyboardFocusManager.UP_CYCLE_TRAVERSAL_KEYS, or
             *          KeyboardFocusManager.DOWN_CYCLE_TRAVERSAL_KEYS
             * @since 1.4
             */
            // @ts-ignore
            public getFocusTraversalKeys(id: number /*int*/): Array<java.awt.AWTKeyStroke>
            /**
             * Returns whether the Set of focus traversal keys for the given focus
             * traversal operation has been explicitly defined for this Container. If
             * this method returns <code>false</code>, this Container is inheriting the
             * Set from an ancestor, or from the current KeyboardFocusManager.
             * @param id one of KeyboardFocusManager.FORWARD_TRAVERSAL_KEYS,
             *         KeyboardFocusManager.BACKWARD_TRAVERSAL_KEYS,
             *         KeyboardFocusManager.UP_CYCLE_TRAVERSAL_KEYS, or
             *         KeyboardFocusManager.DOWN_CYCLE_TRAVERSAL_KEYS
             * @return <code>true</code> if the the Set of focus traversal keys for the
             *          given focus traversal operation has been explicitly defined for
             *          this Component; <code>false</code> otherwise.
             * @throws IllegalArgumentException if id is not one of
             *          KeyboardFocusManager.FORWARD_TRAVERSAL_KEYS,
             *         KeyboardFocusManager.BACKWARD_TRAVERSAL_KEYS,
             *         KeyboardFocusManager.UP_CYCLE_TRAVERSAL_KEYS, or
             *         KeyboardFocusManager.DOWN_CYCLE_TRAVERSAL_KEYS
             * @since 1.4
             */
            // @ts-ignore
            public areFocusTraversalKeysSet(id: number /*int*/): boolean
            /**
             * Returns whether the specified Container is the focus cycle root of this
             * Container's focus traversal cycle. Each focus traversal cycle has only
             * a single focus cycle root and each Container which is not a focus cycle
             * root belongs to only a single focus traversal cycle. Containers which
             * are focus cycle roots belong to two cycles: one rooted at the Container
             * itself, and one rooted at the Container's nearest focus-cycle-root
             * ancestor. This method will return <code>true</code> for both such
             * Containers in this case.
             * @param container the Container to be tested
             * @return <code>true</code> if the specified Container is a focus-cycle-
             *          root of this Container; <code>false</code> otherwise
             * @see #isFocusCycleRoot()
             * @since 1.4
             */
            // @ts-ignore
            public isFocusCycleRoot(container: java.awt.Container): boolean
            /**
             * Sets the focus traversal policy that will manage keyboard traversal of
             * this Container's children, if this Container is a focus cycle root. If
             * the argument is null, this Container inherits its policy from its focus-
             * cycle-root ancestor. If the argument is non-null, this policy will be
             * inherited by all focus-cycle-root children that have no keyboard-
             * traversal policy of their own (as will, recursively, their focus-cycle-
             * root children).
             * <p>
             * If this Container is not a focus cycle root, the policy will be
             * remembered, but will not be used or inherited by this or any other
             * Containers until this Container is made a focus cycle root.
             * @param policy the new focus traversal policy for this Container
             * @see #getFocusTraversalPolicy
             * @see #setFocusCycleRoot
             * @see #isFocusCycleRoot
             * @since 1.4
             * @beaninfo bound: true
             */
            // @ts-ignore
            public setFocusTraversalPolicy(policy: java.awt.FocusTraversalPolicy): void
            /**
             * Returns the focus traversal policy that will manage keyboard traversal
             * of this Container's children, or null if this Container is not a focus
             * cycle root. If no traversal policy has been explicitly set for this
             * Container, then this Container's focus-cycle-root ancestor's policy is
             * returned.
             * @return this Container's focus traversal policy, or null if this
             *          Container is not a focus cycle root.
             * @see #setFocusTraversalPolicy
             * @see #setFocusCycleRoot
             * @see #isFocusCycleRoot
             * @since 1.4
             */
            // @ts-ignore
            public getFocusTraversalPolicy(): java.awt.FocusTraversalPolicy
            /**
             * Returns whether the focus traversal policy has been explicitly set for
             * this Container. If this method returns <code>false</code>, this
             * Container will inherit its focus traversal policy from an ancestor.
             * @return <code>true</code> if the focus traversal policy has been
             *          explicitly set for this Container; <code>false</code> otherwise.
             * @since 1.4
             */
            // @ts-ignore
            public isFocusTraversalPolicySet(): boolean
            /**
             * Sets whether this Container is the root of a focus traversal cycle. Once
             * focus enters a traversal cycle, typically it cannot leave it via focus
             * traversal unless one of the up- or down-cycle keys is pressed. Normal
             * traversal is limited to this Container, and all of this Container's
             * descendants that are not descendants of inferior focus cycle roots. Note
             * that a FocusTraversalPolicy may bend these restrictions, however. For
             * example, ContainerOrderFocusTraversalPolicy supports implicit down-cycle
             * traversal.
             * <p>
             * The alternative way to specify the traversal order of this Container's
             * children is to make this Container a
             * <a href="doc-files/FocusSpec.html#FocusTraversalPolicyProviders">focus traversal policy provider</a>.
             * @param focusCycleRoot indicates whether this Container is the root of a
             *         focus traversal cycle
             * @see #isFocusCycleRoot()
             * @see #setFocusTraversalPolicy
             * @see #getFocusTraversalPolicy
             * @see ContainerOrderFocusTraversalPolicy
             * @see #setFocusTraversalPolicyProvider
             * @since 1.4
             * @beaninfo bound: true
             */
            // @ts-ignore
            public setFocusCycleRoot(focusCycleRoot: boolean): void
            /**
             * Returns whether this Container is the root of a focus traversal cycle.
             * Once focus enters a traversal cycle, typically it cannot leave it via
             * focus traversal unless one of the up- or down-cycle keys is pressed.
             * Normal traversal is limited to this Container, and all of this
             * Container's descendants that are not descendants of inferior focus
             * cycle roots. Note that a FocusTraversalPolicy may bend these
             * restrictions, however. For example, ContainerOrderFocusTraversalPolicy
             * supports implicit down-cycle traversal.
             * @return whether this Container is the root of a focus traversal cycle
             * @see #setFocusCycleRoot
             * @see #setFocusTraversalPolicy
             * @see #getFocusTraversalPolicy
             * @see ContainerOrderFocusTraversalPolicy
             * @since 1.4
             */
            // @ts-ignore
            public isFocusCycleRoot(): boolean
            /**
             * Sets whether this container will be used to provide focus
             * traversal policy. Container with this property as
             * <code>true</code> will be used to acquire focus traversal policy
             * instead of closest focus cycle root ancestor.
             * @param provider indicates whether this container will be used to
             *                 provide focus traversal policy
             * @see #setFocusTraversalPolicy
             * @see #getFocusTraversalPolicy
             * @see #isFocusTraversalPolicyProvider
             * @since 1.5
             * @beaninfo bound: true
             */
            // @ts-ignore
            public setFocusTraversalPolicyProvider(provider: boolean): void
            /**
             * Returns whether this container provides focus traversal
             * policy. If this property is set to <code>true</code> then when
             * keyboard focus manager searches container hierarchy for focus
             * traversal policy and encounters this container before any other
             * container with this property as true or focus cycle roots then
             * its focus traversal policy will be used instead of focus cycle
             * root's policy.
             * @see #setFocusTraversalPolicy
             * @see #getFocusTraversalPolicy
             * @see #setFocusCycleRoot
             * @see #setFocusTraversalPolicyProvider
             * @return <code>true</code> if this container provides focus traversal
             *          policy, <code>false</code> otherwise
             * @since 1.5
             * @beaninfo bound: true
             */
            // @ts-ignore
            public isFocusTraversalPolicyProvider(): boolean
            /**
             * Transfers the focus down one focus traversal cycle. If this Container is
             * a focus cycle root, then the focus owner is set to this Container's
             * default Component to focus, and the current focus cycle root is set to
             * this Container. If this Container is not a focus cycle root, then no
             * focus traversal operation occurs.
             * @see Component#requestFocus()
             * @see #isFocusCycleRoot
             * @see #setFocusCycleRoot
             * @since 1.4
             */
            // @ts-ignore
            public transferFocusDownCycle(): void
            /**
             * Sets the <code>ComponentOrientation</code> property of this container
             * and all components contained within it.
             * <p>
             * This method changes layout-related information, and therefore,
             * invalidates the component hierarchy.
             * @param o the new component orientation of this container and
             *         the components contained within it.
             * @exception NullPointerException if <code>orientation</code> is null.
             * @see Component#setComponentOrientation
             * @see Component#getComponentOrientation
             * @see #invalidate
             * @since 1.4
             */
            // @ts-ignore
            public applyComponentOrientation(o: java.awt.ComponentOrientation): void
            /**
             * Adds a PropertyChangeListener to the listener list. The listener is
             * registered for all bound properties of this class, including the
             * following:
             * <ul>
             * <li>this Container's font ("font")</li>
             * <li>this Container's background color ("background")</li>
             * <li>this Container's foreground color ("foreground")</li>
             * <li>this Container's focusability ("focusable")</li>
             * <li>this Container's focus traversal keys enabled state
             * ("focusTraversalKeysEnabled")</li>
             * <li>this Container's Set of FORWARD_TRAVERSAL_KEYS
             * ("forwardFocusTraversalKeys")</li>
             * <li>this Container's Set of BACKWARD_TRAVERSAL_KEYS
             * ("backwardFocusTraversalKeys")</li>
             * <li>this Container's Set of UP_CYCLE_TRAVERSAL_KEYS
             * ("upCycleFocusTraversalKeys")</li>
             * <li>this Container's Set of DOWN_CYCLE_TRAVERSAL_KEYS
             * ("downCycleFocusTraversalKeys")</li>
             * <li>this Container's focus traversal policy ("focusTraversalPolicy")
             * </li>
             * <li>this Container's focus-cycle-root state ("focusCycleRoot")</li>
             * </ul>
             * Note that if this Container is inheriting a bound property, then no
             * event will be fired in response to a change in the inherited property.
             * <p>
             * If listener is null, no exception is thrown and no action is performed.
             * @param listener  the PropertyChangeListener to be added
             * @see Component#removePropertyChangeListener
             * @see #addPropertyChangeListener(java.lang.String,java.beans.PropertyChangeListener)
             */
            // @ts-ignore
            public addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void
            /**
             * Adds a PropertyChangeListener to the listener list for a specific
             * property. The specified property may be user-defined, or one of the
             * following defaults:
             * <ul>
             * <li>this Container's font ("font")</li>
             * <li>this Container's background color ("background")</li>
             * <li>this Container's foreground color ("foreground")</li>
             * <li>this Container's focusability ("focusable")</li>
             * <li>this Container's focus traversal keys enabled state
             * ("focusTraversalKeysEnabled")</li>
             * <li>this Container's Set of FORWARD_TRAVERSAL_KEYS
             * ("forwardFocusTraversalKeys")</li>
             * <li>this Container's Set of BACKWARD_TRAVERSAL_KEYS
             * ("backwardFocusTraversalKeys")</li>
             * <li>this Container's Set of UP_CYCLE_TRAVERSAL_KEYS
             * ("upCycleFocusTraversalKeys")</li>
             * <li>this Container's Set of DOWN_CYCLE_TRAVERSAL_KEYS
             * ("downCycleFocusTraversalKeys")</li>
             * <li>this Container's focus traversal policy ("focusTraversalPolicy")
             * </li>
             * <li>this Container's focus-cycle-root state ("focusCycleRoot")</li>
             * <li>this Container's focus-traversal-policy-provider state("focusTraversalPolicyProvider")</li>
             * <li>this Container's focus-traversal-policy-provider state("focusTraversalPolicyProvider")</li>
             * </ul>
             * Note that if this Container is inheriting a bound property, then no
             * event will be fired in response to a change in the inherited property.
             * <p>
             * If listener is null, no exception is thrown and no action is performed.
             * @param propertyName one of the property names listed above
             * @param listener the PropertyChangeListener to be added
             * @see #addPropertyChangeListener(java.beans.PropertyChangeListener)
             * @see Component#removePropertyChangeListener
             */
            // @ts-ignore
            public addPropertyChangeListener(propertyName: java.lang.String | string, listener: java.beans.PropertyChangeListener): void
        }
    }
}
