declare namespace javax {
    namespace accessibility {
        /**
         * Class AccessibleStateSet determines a component's state set.  The state set
         * of a component is a set of AccessibleState objects and descriptions. E.G., The
         * current overall state of the object, such as whether it is enabled,
         * has focus, etc.
         * @see AccessibleState
         * @author Willie Walker
         */
        // @ts-ignore
        class AccessibleStateSet extends java.lang.Object {
            /**
             * Creates a new empty state set.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new state with the initial set of states contained in
             * the array of states passed in.  Duplicate entries are ignored.
             * @param states an array of AccessibleState describing the state set.
             */
            // @ts-ignore
            constructor(states: javax.accessibility.AccessibleState[])
            /**
             * Each entry in the Vector represents an AccessibleState.
             * @see #add
             * @see #addAll
             * @see #remove
             * @see #contains
             * @see #toArray
             * @see #clear
             */
            // @ts-ignore
            states: java.util.Vector<javax.accessibility.AccessibleState>
            /**
             * Adds a new state to the current state set if it is not already
             * present.  If the state is already in the state set, the state
             * set is unchanged and the return value is false.  Otherwise,
             * the state is added to the state set and the return value is
             * true.
             * @param state the state to add to the state set
             * @return true if state is added to the state set; false if the state set
             *  is unchanged
             */
            // @ts-ignore
            add(state: javax.accessibility.AccessibleState): boolean
            /**
             * Adds all of the states to the existing state set.  Duplicate entries
             * are ignored.
             * @param states  AccessibleState array describing the state set.
             */
            // @ts-ignore
            addAll(states: javax.accessibility.AccessibleState[]): void
            /**
             * Removes a state from the current state set.  If the state is not
             * in the set, the state set will be unchanged and the return value
             * will be false.  If the state is in the state set, it will be removed
             * from the set and the return value will be true.
             * @param state the state to remove from the state set
             * @return true if the state is in the state set; false if the state set
             *  will be unchanged
             */
            // @ts-ignore
            remove(state: javax.accessibility.AccessibleState): boolean
            /**
             * Removes all the states from the current state set.
             */
            // @ts-ignore
            clear(): void
            /**
             * Checks if the current state is in the state set.
             * @param state the state
             * @return true if the state is in the state set; otherwise false
             */
            // @ts-ignore
            contains(state: javax.accessibility.AccessibleState): boolean
            /**
             * Returns the current state set as an array of AccessibleState
             * @return AccessibleState array containing the current state.
             */
            // @ts-ignore
            toArray(): javax.accessibility.AccessibleState[]
            /**
             * Creates a localized String representing all the states in the set
             * using the default locale.
             * @return comma separated localized String
             * @see AccessibleBundle#toDisplayString
             */
            // @ts-ignore
            toString(): java.lang.String
        }
    }
}
