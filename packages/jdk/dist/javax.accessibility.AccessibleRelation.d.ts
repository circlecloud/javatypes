declare namespace javax {
    namespace accessibility {
        /**
         * <P>Class AccessibleRelation describes a relation between the
         * object that implements the AccessibleRelation and one or more other
         * objects.  The actual relations that an object has with other
         * objects are defined as an AccessibleRelationSet, which is a composed
         * set of AccessibleRelations.
         * <p>The toDisplayString method allows you to obtain the localized string
         * for a locale independent key from a predefined ResourceBundle for the
         * keys defined in this class.
         * <p>The constants in this class present a strongly typed enumeration
         * of common object roles. If the constants in this class are not sufficient
         * to describe the role of an object, a subclass should be generated
         * from this class and it should provide constants in a similar manner.
         * @author Lynn Monsanto
         * @since 1.3
         */
        // @ts-ignore
        class AccessibleRelation extends javax.accessibility.AccessibleBundle {
            /**
             * Create a new AccessibleRelation using the given locale independent key.
             * The key String should be a locale independent key for the relation.
             * It is not intended to be used as the actual String to display
             * to the user.  To get the localized string, use toDisplayString.
             * @param key the locale independent name of the relation.
             * @see AccessibleBundle#toDisplayString
             */
            // @ts-ignore
            constructor(key: string)
            /**
             * Creates a new AccessibleRelation using the given locale independent key.
             * The key String should be a locale independent key for the relation.
             * It is not intended to be used as the actual String to display
             * to the user.  To get the localized string, use toDisplayString.
             * @param key the locale independent name of the relation.
             * @param target the target object for this relation
             * @see AccessibleBundle#toDisplayString
             */
            // @ts-ignore
            constructor(key: string, target: any)
            /**
             * Creates a new AccessibleRelation using the given locale independent key.
             * The key String should be a locale independent key for the relation.
             * It is not intended to be used as the actual String to display
             * to the user.  To get the localized string, use toDisplayString.
             * @param key the locale independent name of the relation.
             * @param target the target object(s) for this relation
             * @see AccessibleBundle#toDisplayString
             */
            // @ts-ignore
            constructor(key: string, target: any[])
            /**
             * Indicates an object is a label for one or more target objects.
             * @see #getTarget
             * @see #CONTROLLER_FOR
             * @see #CONTROLLED_BY
             * @see #LABELED_BY
             * @see #MEMBER_OF
             */
            // @ts-ignore
            readonly LABEL_FOR: string
            /**
             * Indicates an object is labeled by one or more target objects.
             * @see #getTarget
             * @see #CONTROLLER_FOR
             * @see #CONTROLLED_BY
             * @see #LABEL_FOR
             * @see #MEMBER_OF
             */
            // @ts-ignore
            readonly LABELED_BY: string
            /**
             * Indicates an object is a member of a group of one or more
             * target objects.
             * @see #getTarget
             * @see #CONTROLLER_FOR
             * @see #CONTROLLED_BY
             * @see #LABEL_FOR
             * @see #LABELED_BY
             */
            // @ts-ignore
            readonly MEMBER_OF: string
            /**
             * Indicates an object is a controller for one or more target
             * objects.
             * @see #getTarget
             * @see #CONTROLLED_BY
             * @see #LABEL_FOR
             * @see #LABELED_BY
             * @see #MEMBER_OF
             */
            // @ts-ignore
            readonly CONTROLLER_FOR: string
            /**
             * Indicates an object is controlled by one or more target
             * objects.
             * @see #getTarget
             * @see #CONTROLLER_FOR
             * @see #LABEL_FOR
             * @see #LABELED_BY
             * @see #MEMBER_OF
             */
            // @ts-ignore
            readonly CONTROLLED_BY: string
            /**
             * Indicates an object is logically contiguous with a second
             * object where the second object occurs after the object.
             * An example is a paragraph of text that runs to the end of
             * a page and continues on the next page with an intervening
             * text footer and/or text header.  The two parts of
             * the paragraph are separate text elements but are related
             * in that the second element is a continuation
             * of the first
             * element.  In other words, the first element "flows to"
             * the second element.
             * @since 1.5
             */
            // @ts-ignore
            readonly FLOWS_TO: string
            /**
             * Indicates an object is logically contiguous with a second
             * object where the second object occurs before the object.
             * An example is a paragraph of text that runs to the end of
             * a page and continues on the next page with an intervening
             * text footer and/or text header.  The two parts of
             * the paragraph are separate text elements but are related
             * in that the second element is a continuation of the first
             * element.  In other words, the second element "flows from"
             * the second element.
             * @since 1.5
             */
            // @ts-ignore
            readonly FLOWS_FROM: string
            /**
             * Indicates that an object is a subwindow of one or more
             * objects.
             * @since 1.5
             */
            // @ts-ignore
            readonly SUBWINDOW_OF: string
            /**
             * Indicates that an object is a parent window of one or more
             * objects.
             * @since 1.5
             */
            // @ts-ignore
            readonly PARENT_WINDOW_OF: string
            /**
             * Indicates that an object has one or more objects
             * embedded in it.
             * @since 1.5
             */
            // @ts-ignore
            readonly EMBEDS: string
            /**
             * Indicates that an object is embedded in one or more
             * objects.
             * @since 1.5
             */
            // @ts-ignore
            readonly EMBEDDED_BY: string
            /**
             * Indicates that an object is a child node of one
             * or more objects.
             * @since 1.5
             */
            // @ts-ignore
            readonly CHILD_NODE_OF: string
            /**
             * Identifies that the target group for a label has changed
             */
            // @ts-ignore
            readonly LABEL_FOR_PROPERTY: string
            /**
             * Identifies that the objects that are doing the labeling have changed
             */
            // @ts-ignore
            readonly LABELED_BY_PROPERTY: string
            /**
             * Identifies that group membership has changed.
             */
            // @ts-ignore
            readonly MEMBER_OF_PROPERTY: string
            /**
             * Identifies that the controller for the target object has changed
             */
            // @ts-ignore
            readonly CONTROLLER_FOR_PROPERTY: string
            /**
             * Identifies that the target object that is doing the controlling has
             * changed
             */
            // @ts-ignore
            readonly CONTROLLED_BY_PROPERTY: string
            /**
             * Indicates the FLOWS_TO relation between two objects
             * has changed.
             * @since 1.5
             */
            // @ts-ignore
            readonly FLOWS_TO_PROPERTY: string
            /**
             * Indicates the FLOWS_FROM relation between two objects
             * has changed.
             * @since 1.5
             */
            // @ts-ignore
            readonly FLOWS_FROM_PROPERTY: string
            /**
             * Indicates the SUBWINDOW_OF relation between two or more objects
             * has changed.
             * @since 1.5
             */
            // @ts-ignore
            readonly SUBWINDOW_OF_PROPERTY: string
            /**
             * Indicates the PARENT_WINDOW_OF relation between two or more objects
             * has changed.
             * @since 1.5
             */
            // @ts-ignore
            readonly PARENT_WINDOW_OF_PROPERTY: string
            /**
             * Indicates the EMBEDS relation between two or more objects
             * has changed.
             * @since 1.5
             */
            // @ts-ignore
            readonly EMBEDS_PROPERTY: string
            /**
             * Indicates the EMBEDDED_BY relation between two or more objects
             * has changed.
             * @since 1.5
             */
            // @ts-ignore
            readonly EMBEDDED_BY_PROPERTY: string
            /**
             * Indicates the CHILD_NODE_OF relation between two or more objects
             * has changed.
             * @since 1.5
             */
            // @ts-ignore
            readonly CHILD_NODE_OF_PROPERTY: string
            /**
             * Returns the key for this relation
             * @return the key for this relation
             * @see #CONTROLLER_FOR
             * @see #CONTROLLED_BY
             * @see #LABEL_FOR
             * @see #LABELED_BY
             * @see #MEMBER_OF
             */
            // @ts-ignore
            getKey(): java.lang.String
            /**
             * Returns the target objects for this relation
             * @return an array containing the target objects for this relation
             */
            // @ts-ignore
            getTarget(): java.lang.Object[]
            /**
             * Sets the target object for this relation
             * @param target the target object for this relation
             */
            // @ts-ignore
            setTarget(target: any): void
            /**
             * Sets the target objects for this relation
             * @param target an array containing the target objects for this relation
             */
            // @ts-ignore
            setTarget(target: any[]): void
        }
    }
}
