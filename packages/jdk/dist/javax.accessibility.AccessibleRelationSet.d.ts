declare namespace javax {
    namespace accessibility {
        /**
         * Class AccessibleRelationSet determines a component's relation set.  The
         * relation set of a component is a set of AccessibleRelation objects that
         * describe the component's relationships with other components.
         * @see AccessibleRelation
         * @author Lynn Monsanto
         * @since 1.3
         */
        // @ts-ignore
        class AccessibleRelationSet extends java.lang.Object {
            /**
             * Creates a new empty relation set.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new relation with the initial set of relations contained in
             * the array of relations passed in.  Duplicate entries are ignored.
             * @param relations an array of AccessibleRelation describing the
             *  relation set.
             */
            // @ts-ignore
            constructor(relations: javax.accessibility.AccessibleRelation[])
            /**
             * Each entry in the Vector represents an AccessibleRelation.
             * @see #add
             * @see #addAll
             * @see #remove
             * @see #contains
             * @see #get
             * @see #size
             * @see #toArray
             * @see #clear
             */
            // @ts-ignore
            relations: java.util.Vector<javax.accessibility.AccessibleRelation>
            /**
             * Adds a new relation to the current relation set.  If the relation
             * is already in the relation set, the target(s) of the specified
             * relation is merged with the target(s) of the existing relation.
             * Otherwise,  the new relation is added to the relation set.
             * @param relation the relation to add to the relation set
             * @return true if relation is added to the relation set; false if the
             *  relation set is unchanged
             */
            // @ts-ignore
            public add(relation: javax.accessibility.AccessibleRelation): boolean
            /**
             * Adds all of the relations to the existing relation set.  Duplicate
             * entries are ignored.
             * @param relations  AccessibleRelation array describing the relation set.
             */
            // @ts-ignore
            public addAll(relations: javax.accessibility.AccessibleRelation[]): void
            /**
             * Removes a relation from the current relation set.  If the relation
             * is not in the set, the relation set will be unchanged and the
             * return value will be false.  If the relation is in the relation
             * set, it will be removed from the set and the return value will be
             * true.
             * @param relation the relation to remove from the relation set
             * @return true if the relation is in the relation set; false if the
             *  relation set is unchanged
             */
            // @ts-ignore
            public remove(relation: javax.accessibility.AccessibleRelation): boolean
            /**
             * Removes all the relations from the current relation set.
             */
            // @ts-ignore
            public clear(): void
            /**
             * Returns the number of relations in the relation set.
             * @return the number of relations in the relation set
             */
            // @ts-ignore
            public size(): number /*int*/
            /**
             * Returns whether the relation set contains a relation
             * that matches the specified key.
             * @param key the AccessibleRelation key
             * @return true if the relation is in the relation set; otherwise false
             */
            // @ts-ignore
            public contains(key: java.lang.String | string): boolean
            /**
             * Returns the relation that matches the specified key.
             * @param key the AccessibleRelation key
             * @return the relation, if one exists, that matches the specified key.
             *  Otherwise, null is returned.
             */
            // @ts-ignore
            public get(key: java.lang.String | string): javax.accessibility.AccessibleRelation
            /**
             * Returns the current relation set as an array of AccessibleRelation
             * @return AccessibleRelation array contacting the current relation.
             */
            // @ts-ignore
            public toArray(): javax.accessibility.AccessibleRelation[]
            /**
             * Creates a localized String representing all the relations in the set
             * using the default locale.
             * @return comma separated localized String
             * @see AccessibleBundle#toDisplayString
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
