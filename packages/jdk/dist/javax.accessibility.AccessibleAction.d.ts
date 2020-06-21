declare namespace javax {
    namespace accessibility {
        /**
         * The AccessibleAction interface should be supported by any object
         * that can perform one or more actions.  This interface
         * provides the standard mechanism for an assistive technology to determine
         * what those actions are as well as tell the object to perform them.
         * Any object that can be manipulated should support this
         * interface.  Applications can determine if an object supports the
         * AccessibleAction interface by first obtaining its AccessibleContext (see
         * {@link Accessible}) and then calling the {@link AccessibleContext#getAccessibleAction}
         * method.  If the return value is not null, the object supports this interface.
         * @see Accessible
         * @see Accessible#getAccessibleContext
         * @see AccessibleContext
         * @see AccessibleContext#getAccessibleAction
         * @author Peter Korn
         * @author Hans Muller
         * @author Willie Walker
         * @author Lynn Monsanto
         */
        // @ts-ignore
        interface AccessibleAction {
            /**
             * An action which causes a tree node to
             * collapse if expanded and expand if collapsed.
             * @since 1.5
             */
            // @ts-ignore
            readonly TOGGLE_EXPAND: java.lang.String | string
            /**
             * An action which increments a value.
             * @since 1.5
             */
            // @ts-ignore
            readonly INCREMENT: java.lang.String | string
            /**
             * An action which decrements a value.
             * @since 1.5
             */
            // @ts-ignore
            readonly DECREMENT: java.lang.String | string
            /**
             * An action which causes a component to execute its default action.
             * @since 1.6
             */
            // @ts-ignore
            readonly CLICK: java.lang.String | string
            /**
             * An action which causes a popup to become visible if it is hidden and
             * hidden if it is visible.
             * @since 1.6
             */
            // @ts-ignore
            readonly TOGGLE_POPUP: java.lang.String | string
            /**
             * Returns the number of accessible actions available in this object
             * If there are more than one, the first one is considered the "default"
             * action of the object.
             * @return the zero-based number of Actions in this object
             */
            // @ts-ignore
            getAccessibleActionCount(): number /*int*/
            /**
             * Returns a description of the specified action of the object.
             * @param i zero-based index of the actions
             * @return a String description of the action
             * @see #getAccessibleActionCount
             */
            // @ts-ignore
            getAccessibleActionDescription(i: number /*int*/): string
            /**
             * Performs the specified Action on the object
             * @param i zero-based index of actions
             * @return true if the action was performed; otherwise false.
             * @see #getAccessibleActionCount
             */
            // @ts-ignore
            doAccessibleAction(i: number /*int*/): boolean
        }
    }
}
