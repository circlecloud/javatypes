declare namespace javax {
    namespace swing {
        /**
         * <code>RowFilter</code> is used to filter out entries from the
         * model so that they are not shown in the view.  For example, a
         * <code>RowFilter</code> associated with a <code>JTable</code> might
         * only allow rows that contain a column with a specific string. The
         * meaning of <em>entry</em> depends on the component type.
         * For example, when a filter is
         * associated with a <code>JTable</code>, an entry corresponds to a
         * row; when associated with a <code>JTree</code>, an entry corresponds
         * to a node.
         * <p>
         * Subclasses must override the <code>include</code> method to
         * indicate whether the entry should be shown in the
         * view.  The <code>Entry</code> argument can be used to obtain the values in
         * each of the columns in that entry.  The following example shows an
         * <code>include</code> method that allows only entries containing one or
         * more values starting with the string "a":
         * <pre>
         * RowFilter&lt;Object,Object&gt; startsWithAFilter = new RowFilter&lt;Object,Object&gt;() {
         * public boolean include(Entry&lt;? extends Object, ? extends Object&gt; entry) {
         * for (int i = entry.getValueCount() - 1; i &gt;= 0; i--) {
         * if (entry.getStringValue(i).startsWith("a")) {
         * // The value starts with "a", include it
         * return true;
         * }
         * }
         * // None of the columns start with "a"; return false so that this
         * // entry is not shown
         * return false;
         * }
         * };
         * </pre>
         * <code>RowFilter</code> has two formal type parameters that allow
         * you to create a <code>RowFilter</code> for a specific model. For
         * example, the following assumes a specific model that is wrapping
         * objects of type <code>Person</code>.  Only <code>Person</code>s
         * with an age over 20 will be shown:
         * <pre>
         * RowFilter&lt;PersonModel,Integer&gt; ageFilter = new RowFilter&lt;PersonModel,Integer&gt;() {
         * public boolean include(Entry&lt;? extends PersonModel, ? extends Integer&gt; entry) {
         * PersonModel personModel = entry.getModel();
         * Person person = personModel.getPerson(entry.getIdentifier());
         * if (person.getAge() &gt; 20) {
         * // Returning true indicates this row should be shown.
         * return true;
         * }
         * // Age is &lt;= 20, don't show it.
         * return false;
         * }
         * };
         * PersonModel model = createPersonModel();
         * TableRowSorter&lt;PersonModel&gt; sorter = new TableRowSorter&lt;PersonModel&gt;(model);
         * sorter.setRowFilter(ageFilter);
         * </pre>
         * @param <M> the type of the model; for example <code>PersonModel</code>
         * @param <I> the type of the identifier; when using
         *             <code>TableRowSorter</code> this will be <code>Integer</code>
         * @see javax.swing.table.TableRowSorter
         * @since 1.6
         */
        // @ts-ignore
        abstract class RowFilter<M, I> extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Returns a <code>RowFilter</code> that uses a regular
             * expression to determine which entries to include.  Only entries
             * with at least one matching value are included.  For
             * example, the following creates a <code>RowFilter</code> that
             * includes entries with at least one value starting with
             * "a":
             * <pre>
             * RowFilter.regexFilter("^a");
             * </pre>
             * <p>
             * The returned filter uses {@link java.util.regex.Matcher#find}
             * to test for inclusion.  To test for exact matches use the
             * characters '^' and '$' to match the beginning and end of the
             * string respectively.  For example, "^foo$" includes only rows whose
             * string is exactly "foo" and not, for example, "food".  See
             * {@link java.util.regex.Pattern} for a complete description of
             * the supported regular-expression constructs.
             * @param regex the regular expression to filter on
             * @param indices the indices of the values to check.  If not supplied all
             *                values are evaluated
             * @return a <code>RowFilter</code> implementing the specified criteria
             * @throws NullPointerException if <code>regex</code> is
             *          <code>null</code>
             * @throws IllegalArgumentException if any of the <code>indices</code>
             *          are &lt; 0
             * @throws PatternSyntaxException if <code>regex</code> is
             *          not a valid regular expression.
             * @see java.util.regex.Pattern
             */
            // @ts-ignore
            public static regexFilter<M, I>(regex: java.lang.String | string, ...indices: number /*int*/[]): javax.swing.RowFilter<M, I>
            /**
             * Returns a <code>RowFilter</code> that includes entries that
             * have at least one <code>Date</code> value meeting the specified
             * criteria.  For example, the following <code>RowFilter</code> includes
             * only entries with at least one date value after the current date:
             * <pre>
             * RowFilter.dateFilter(ComparisonType.AFTER, new Date());
             * </pre>
             * @param type the type of comparison to perform
             * @param date the date to compare against
             * @param indices the indices of the values to check.  If not supplied all
             *                values are evaluated
             * @return a <code>RowFilter</code> implementing the specified criteria
             * @throws NullPointerException if <code>date</code> is
             *           <code>null</code>
             * @throws IllegalArgumentException if any of the <code>indices</code>
             *          are &lt; 0 or <code>type</code> is
             *          <code>null</code>
             * @see java.util.Calendar
             * @see java.util.Date
             */
            // @ts-ignore
            public static dateFilter<M, I>(type: javax.swing.RowFilter.ComparisonType, date: java.util.Date, ...indices: number /*int*/[]): javax.swing.RowFilter<M, I>
            /**
             * Returns a <code>RowFilter</code> that includes entries that
             * have at least one <code>Number</code> value meeting the
             * specified criteria.  For example, the following
             * filter will only include entries with at
             * least one number value equal to 10:
             * <pre>
             * RowFilter.numberFilter(ComparisonType.EQUAL, 10);
             * </pre>
             * @param type the type of comparison to perform
             * @param indices the indices of the values to check.  If not supplied all
             *                values are evaluated
             * @return a <code>RowFilter</code> implementing the specified criteria
             * @throws IllegalArgumentException if any of the <code>indices</code>
             *          are &lt; 0, <code>type</code> is <code>null</code>
             *          or <code>number</code> is <code>null</code>
             */
            // @ts-ignore
            public static numberFilter<M, I>(type: javax.swing.RowFilter.ComparisonType, number: java.lang.Number, ...indices: number /*int*/[]): javax.swing.RowFilter<M, I>
            /**
             * Returns a <code>RowFilter</code> that includes entries if any
             * of the supplied filters includes the entry.
             * <p>
             * The following example creates a <code>RowFilter</code> that will
             * include any entries containing the string "foo" or the string
             * "bar":
             * <pre>
             * List&lt;RowFilter&lt;Object,Object&gt;&gt; filters = new ArrayList&lt;RowFilter&lt;Object,Object&gt;&gt;(2);
             * filters.add(RowFilter.regexFilter("foo"));
             * filters.add(RowFilter.regexFilter("bar"));
             * RowFilter&lt;Object,Object&gt; fooBarFilter = RowFilter.orFilter(filters);
             * </pre>
             * @param filters the <code>RowFilter</code>s to test
             * @throws IllegalArgumentException if any of the filters
             *          are <code>null</code>
             * @throws NullPointerException if <code>filters</code> is null
             * @return a <code>RowFilter</code> implementing the specified criteria
             * @see java.util.Arrays#asList
             */
            // @ts-ignore
            public static orFilter<M, I>(filters: java.lang.Iterable<any>): javax.swing.RowFilter<M, I>
            /**
             * Returns a <code>RowFilter</code> that includes entries if all
             * of the supplied filters include the entry.
             * <p>
             * The following example creates a <code>RowFilter</code> that will
             * include any entries containing the string "foo" and the string
             * "bar":
             * <pre>
             * List&lt;RowFilter&lt;Object,Object&gt;&gt; filters = new ArrayList&lt;RowFilter&lt;Object,Object&gt;&gt;(2);
             * filters.add(RowFilter.regexFilter("foo"));
             * filters.add(RowFilter.regexFilter("bar"));
             * RowFilter&lt;Object,Object&gt; fooBarFilter = RowFilter.andFilter(filters);
             * </pre>
             * @param filters the <code>RowFilter</code>s to test
             * @return a <code>RowFilter</code> implementing the specified criteria
             * @throws IllegalArgumentException if any of the filters
             *          are <code>null</code>
             * @throws NullPointerException if <code>filters</code> is null
             * @see java.util.Arrays#asList
             */
            // @ts-ignore
            public static andFilter<M, I>(filters: java.lang.Iterable<any>): javax.swing.RowFilter<M, I>
            /**
             * Returns a <code>RowFilter</code> that includes entries if the
             * supplied filter does not include the entry.
             * @param filter the <code>RowFilter</code> to negate
             * @return a <code>RowFilter</code> implementing the specified criteria
             * @throws IllegalArgumentException if <code>filter</code> is
             *          <code>null</code>
             */
            // @ts-ignore
            public static notFilter<M, I>(filter: javax.swing.RowFilter<M, I>): javax.swing.RowFilter<M, I>
            /**
             * Returns true if the specified entry should be shown;
             * returns false if the entry should be hidden.
             * <p>
             * The <code>entry</code> argument is valid only for the duration of
             * the invocation.  Using <code>entry</code> after the call returns
             * results in undefined behavior.
             * @param entry a non-<code>null</code> object that wraps the underlying
             *               object from the model
             * @return true if the entry should be shown
             */
            // @ts-ignore
            public abstract include(entry: javax.swing.RowFilter.Entry<any, any>): boolean
        }
    }
}
