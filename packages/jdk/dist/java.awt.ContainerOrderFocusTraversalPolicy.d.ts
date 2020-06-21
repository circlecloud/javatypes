declare namespace java {
    namespace awt {
        /**
         * A FocusTraversalPolicy that determines traversal order based on the order
         * of child Components in a Container. From a particular focus cycle root, the
         * policy makes a pre-order traversal of the Component hierarchy, and traverses
         * a Container's children according to the ordering of the array returned by
         * <code>Container.getComponents()</code>. Portions of the hierarchy that are
         * not visible and displayable will not be searched.
         * <p>
         * By default, ContainerOrderFocusTraversalPolicy implicitly transfers focus
         * down-cycle. That is, during normal forward focus traversal, the Component
         * traversed after a focus cycle root will be the focus-cycle-root's default
         * Component to focus. This behavior can be disabled using the
         * <code>setImplicitDownCycleTraversal</code> method.
         * <p>
         * By default, methods of this class will return a Component only if it is
         * visible, displayable, enabled, and focusable. Subclasses can modify this
         * behavior by overriding the <code>accept</code> method.
         * <p>
         * This policy takes into account <a
         * href="doc-files/FocusSpec.html#FocusTraversalPolicyProviders">focus traversal
         * policy providers</a>.  When searching for first/last/next/previous Component,
         * if a focus traversal policy provider is encountered, its focus traversal
         * policy is used to perform the search operation.
         * @author David Mendenhall
         * @see Container#getComponents
         * @since 1.4
         */
        // @ts-ignore
        class ContainerOrderFocusTraversalPolicy extends java.awt.FocusTraversalPolicy implements java.io.Serializable {
            // @ts-ignore
            constructor()
            /**
             * Returns the Component that should receive the focus after aComponent.
             * aContainer must be a focus cycle root of aComponent or a focus traversal policy provider.
             * <p>
             * By default, ContainerOrderFocusTraversalPolicy implicitly transfers
             * focus down-cycle. That is, during normal forward focus traversal, the
             * Component traversed after a focus cycle root will be the focus-cycle-
             * root's default Component to focus. This behavior can be disabled using
             * the <code>setImplicitDownCycleTraversal</code> method.
             * <p>
             * If aContainer is <a href="doc-files/FocusSpec.html#FocusTraversalPolicyProviders">focus
             * traversal policy provider</a>, the focus is always transferred down-cycle.
             * @param aContainer a focus cycle root of aComponent or a focus traversal policy provider
             * @param aComponent a (possibly indirect) child of aContainer, or
             *         aContainer itself
             * @return the Component that should receive the focus after aComponent, or
             *          null if no suitable Component can be found
             * @throws IllegalArgumentException if aContainer is not a focus cycle
             *          root of aComponent or focus traversal policy provider, or if either aContainer or
             *          aComponent is null
             */
            // @ts-ignore
            public getComponentAfter(aContainer: java.awt.Container, aComponent: java.awt.Component): java.awt.Component
            /**
             * Returns the Component that should receive the focus before aComponent.
             * aContainer must be a focus cycle root of aComponent or a <a
             * href="doc-files/FocusSpec.html#FocusTraversalPolicyProviders">focus traversal policy
             * provider</a>.
             * @param aContainer a focus cycle root of aComponent or focus traversal policy provider
             * @param aComponent a (possibly indirect) child of aContainer, or
             *         aContainer itself
             * @return the Component that should receive the focus before aComponent,
             *          or null if no suitable Component can be found
             * @throws IllegalArgumentException if aContainer is not a focus cycle
             *          root of aComponent or focus traversal policy provider, or if either aContainer or
             *          aComponent is null
             */
            // @ts-ignore
            public getComponentBefore(aContainer: java.awt.Container, aComponent: java.awt.Component): java.awt.Component
            /**
             * Returns the first Component in the traversal cycle. This method is used
             * to determine the next Component to focus when traversal wraps in the
             * forward direction.
             * @param aContainer the focus cycle root or focus traversal policy provider whose first
             *         Component is to be returned
             * @return the first Component in the traversal cycle of aContainer,
             *          or null if no suitable Component can be found
             * @throws IllegalArgumentException if aContainer is null
             */
            // @ts-ignore
            public getFirstComponent(aContainer: java.awt.Container): java.awt.Component
            /**
             * Returns the last Component in the traversal cycle. This method is used
             * to determine the next Component to focus when traversal wraps in the
             * reverse direction.
             * @param aContainer the focus cycle root or focus traversal policy provider whose last
             *         Component is to be returned
             * @return the last Component in the traversal cycle of aContainer,
             *          or null if no suitable Component can be found
             * @throws IllegalArgumentException if aContainer is null
             */
            // @ts-ignore
            public getLastComponent(aContainer: java.awt.Container): java.awt.Component
            /**
             * Returns the default Component to focus. This Component will be the first
             * to receive focus when traversing down into a new focus traversal cycle
             * rooted at aContainer. The default implementation of this method
             * returns the same Component as <code>getFirstComponent</code>.
             * @param aContainer the focus cycle root or focus traversal policy provider whose default
             *         Component is to be returned
             * @return the default Component in the traversal cycle of aContainer,
             *          or null if no suitable Component can be found
             * @see #getFirstComponent
             * @throws IllegalArgumentException if aContainer is null
             */
            // @ts-ignore
            public getDefaultComponent(aContainer: java.awt.Container): java.awt.Component
            /**
             * Sets whether this ContainerOrderFocusTraversalPolicy transfers focus
             * down-cycle implicitly. If <code>true</code>, during normal forward focus
             * traversal, the Component traversed after a focus cycle root will be the
             * focus-cycle-root's default Component to focus. If <code>false</code>,
             * the next Component in the focus traversal cycle rooted at the specified
             * focus cycle root will be traversed instead. The default value for this
             * property is <code>true</code>.
             * @param implicitDownCycleTraversal whether this
             *         ContainerOrderFocusTraversalPolicy transfers focus down-cycle
             *         implicitly
             * @see #getImplicitDownCycleTraversal
             * @see #getFirstComponent
             */
            // @ts-ignore
            public setImplicitDownCycleTraversal(implicitDownCycleTraversal: boolean): void
            /**
             * Returns whether this ContainerOrderFocusTraversalPolicy transfers focus
             * down-cycle implicitly. If <code>true</code>, during normal forward focus
             * traversal, the Component traversed after a focus cycle root will be the
             * focus-cycle-root's default Component to focus. If <code>false</code>,
             * the next Component in the focus traversal cycle rooted at the specified
             * focus cycle root will be traversed instead.
             * @return whether this ContainerOrderFocusTraversalPolicy transfers focus
             *          down-cycle implicitly
             * @see #setImplicitDownCycleTraversal
             * @see #getFirstComponent
             */
            // @ts-ignore
            public getImplicitDownCycleTraversal(): boolean
            /**
             * Determines whether a Component is an acceptable choice as the new
             * focus owner. By default, this method will accept a Component if and
             * only if it is visible, displayable, enabled, and focusable.
             * @param aComponent the Component whose fitness as a focus owner is to
             *         be tested
             * @return <code>true</code> if aComponent is visible, displayable,
             *          enabled, and focusable; <code>false</code> otherwise
             */
            // @ts-ignore
            accept(aComponent: java.awt.Component): boolean
        }
    }
}
