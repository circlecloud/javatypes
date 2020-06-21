declare namespace javax {
    namespace smartcardio {
        /**
         * A permission for Smart Card operations. A CardPermission consists of the
         * name of the card terminal the permission applies to and a set of actions
         * that are valid for that terminal.
         * <p>A CardPermission with a name of <code>*</code> applies to all
         * card terminals. The actions string is a comma separated list of the actions
         * listed below, or <code>*</code> to signify "all actions."
         * <p>Individual actions are:
         * <dl>
         * <dt>connect
         * <dd>connect to a card using
         * {@linkplain CardTerminal#connect CardTerminal.connect()}
         * <dt>reset
         * <dd>reset the card using {@linkplain Card#disconnect Card.disconnect(true)}
         * <dt>exclusive
         * <dd>establish exclusive access to a card using
         * {@linkplain Card#beginExclusive} and {@linkplain Card#endExclusive
         * endExclusive()}
         * <dt>transmitControl
         * <dd>transmit a control command using
         * {@linkplain Card#transmitControlCommand Card.transmitControlCommand()}
         * <dt>getBasicChannel
         * <dd>obtain the basic logical channel using
         * {@linkplain Card#getBasicChannel}
         * <dt>openLogicalChannel
         * <dd>open a new logical channel using
         * {@linkplain Card#openLogicalChannel}
         * </dl>
         * @since 1.6
         * @author Andreas Sterbenz
         * @author JSR 268 Expert Group
         */
        // @ts-ignore
        class CardPermission extends java.security.Permission {
            /**
             * Constructs a new CardPermission with the specified actions.
             * <code>terminalName</code> is the name of a CardTerminal or <code>*</code>
             * if this permission applies to all terminals. <code>actions</code>
             * contains a comma-separated list of the individual actions
             * or <code>*</code> to signify all actions. For more information,
             * see the documentation at the top of this {@linkplain CardPermission
             * class}.
             * @param terminalName the name of the card terminal, or <code>*</code>
             * @param actions the action string (or null if the set of permitted
             *    actions is empty)
             * @throws NullPointerException if terminalName is null
             * @throws IllegalArgumentException if actions is an invalid actions
             *    specification
             */
            // @ts-ignore
            constructor(terminalName: java.lang.String | string, actions: java.lang.String | string)
            /**
             * Returns the canonical string representation of the actions.
             * It is <code>*</code> to signify all actions defined by this class or
             * the string concatenation of the comma-separated,
             * lexicographically sorted list of individual actions.
             * @return the canonical string representation of the actions.
             */
            // @ts-ignore
            public getActions(): string
            /**
             * Checks if this CardPermission object implies the specified permission.
             * That is the case, if and only if
             * <ul>
             * <li><p><code>permission</code> is an instance of CardPermission,</p>
             * <li><p><code>permission</code>'s actions are a proper subset of this
             * object's actions, and</p>
             * <li><p>this object's <code>getName()</code> method is either
             * <code>*</code> or equal to <code>permission</code>'s <code>name</code>.
             * </p>
             * </ul>
             * @param permission the permission to check against
             * @return true if and only if this CardPermission object implies the
             *    specified permission.
             */
            // @ts-ignore
            public implies(permission: java.security.Permission): boolean
            /**
             * Compares the specified object with this CardPermission for equality.
             * This CardPermission is equal to another Object <code>object</code>, if
             * and only if
             * <ul>
             * <li><p><code>object</code> is an instance of CardPermission,</p>
             * <li><p><code>this.getName()</code> is equal to
             * <code>((CardPermission)object).getName()</code>, and</p>
             * <li><p><code>this.getActions()</code> is equal to
             * <code>((CardPermission)object).getActions()</code>.</p>
             * </ul>
             * @param obj the object to be compared for equality with this CardPermission
             * @return true if and only if the specified object is equal to this
             *    CardPermission
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Returns the hash code value for this CardPermission object.
             * @return the hash code value for this CardPermission object.
             */
            // @ts-ignore
            public hashCode(): number /*int*/
        }
    }
}
