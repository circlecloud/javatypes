declare namespace java {
    namespace text {
        /**
         * <code>FieldPosition</code> is a simple class used by <code>Format</code>
         * and its subclasses to identify fields in formatted output. Fields can
         * be identified in two ways:
         * <ul>
         * <li>By an integer constant, whose names typically end with
         * <code>_FIELD</code>. The constants are defined in the various
         * subclasses of <code>Format</code>.
         * <li>By a <code>Format.Field</code> constant, see <code>ERA_FIELD</code>
         * and its friends in <code>DateFormat</code> for an example.
         * </ul>
         * <p>
         * <code>FieldPosition</code> keeps track of the position of the
         * field within the formatted output with two indices: the index
         * of the first character of the field and the index of the last
         * character of the field.
         * <p>
         * One version of the <code>format</code> method in the various
         * <code>Format</code> classes requires a <code>FieldPosition</code>
         * object as an argument. You use this <code>format</code> method
         * to perform partial formatting or to get information about the
         * formatted output (such as the position of a field).
         * <p>
         * If you are interested in the positions of all attributes in the
         * formatted string use the <code>Format</code> method
         * <code>formatToCharacterIterator</code>.
         * @author Mark Davis
         * @see java.text.Format
         */
        // @ts-ignore
        class FieldPosition extends java.lang.Object {
            /**
             * Creates a FieldPosition object for the given field.  Fields are
             * identified by constants, whose names typically end with _FIELD,
             * in the various subclasses of Format.
             * @param field the field identifier
             * @see java.text.NumberFormat#INTEGER_FIELD
             * @see java.text.NumberFormat#FRACTION_FIELD
             * @see java.text.DateFormat#YEAR_FIELD
             * @see java.text.DateFormat#MONTH_FIELD
             */
            // @ts-ignore
            constructor(field: number /*int*/)
            /**
             * Creates a FieldPosition object for the given field constant. Fields are
             * identified by constants defined in the various <code>Format</code>
             * subclasses. This is equivalent to calling
             * <code>new FieldPosition(attribute, -1)</code>.
             * @param attribute Format.Field constant identifying a field
             * @since 1.4
             */
            // @ts-ignore
            constructor(attribute: java.text.Format.Field)
            /**
             * Creates a <code>FieldPosition</code> object for the given field.
             * The field is identified by an attribute constant from one of the
             * <code>Field</code> subclasses as well as an integer field ID
             * defined by the <code>Format</code> subclasses. <code>Format</code>
             * subclasses that are aware of <code>Field</code> should give precedence
             * to <code>attribute</code> and ignore <code>fieldID</code> if
             * <code>attribute</code> is not null. However, older <code>Format</code>
             * subclasses may not be aware of <code>Field</code> and rely on
             * <code>fieldID</code>. If the field has no corresponding integer
             * constant, <code>fieldID</code> should be -1.
             * @param attribute Format.Field constant identifying a field
             * @param fieldID integer constant identifying a field
             * @since 1.4
             */
            // @ts-ignore
            constructor(attribute: java.text.Format.Field, fieldID: number /*int*/)
            /**
             * Returns the field identifier as an attribute constant
             * from one of the <code>Field</code> subclasses. May return null if
             * the field is specified only by an integer field ID.
             * @return Identifier for the field
             * @since 1.4
             */
            // @ts-ignore
            public getFieldAttribute(): java.text.Format.Field
            /**
             * Retrieves the field identifier.
             * @return the field identifier
             */
            // @ts-ignore
            public getField(): number /*int*/
            /**
             * Retrieves the index of the first character in the requested field.
             * @return the begin index
             */
            // @ts-ignore
            public getBeginIndex(): number /*int*/
            /**
             * Retrieves the index of the character following the last character in the
             * requested field.
             * @return the end index
             */
            // @ts-ignore
            public getEndIndex(): number /*int*/
            /**
             * Sets the begin index.  For use by subclasses of Format.
             * @param bi the begin index
             * @since 1.2
             */
            // @ts-ignore
            public setBeginIndex(bi: number /*int*/): void
            /**
             * Sets the end index.  For use by subclasses of Format.
             * @param ei the end index
             * @since 1.2
             */
            // @ts-ignore
            public setEndIndex(ei: number /*int*/): void
            /**
             * Overrides equals
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Returns a hash code for this FieldPosition.
             * @return a hash code value for this object
             */
            // @ts-ignore
            public hashCode(): number /*int*/
            /**
             * Return a string representation of this FieldPosition.
             * @return a string representation of this object
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
