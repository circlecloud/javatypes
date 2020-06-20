declare namespace org {
    namespace springframework {
        namespace beans {
            namespace support {
                /**
                 * PagedListHolder is a simple state holder for handling lists of objects,
                 * separating them into pages. Page numbering starts with 0.
                 * <p>This is mainly targeted at usage in web UIs. Typically, an instance will be
                 * instantiated with a list of beans, put into the session, and exported as model.
                 * The properties can all be set/get programmatically, but the most common way will
                 * be data binding, i.e. populating the bean from request parameters. The getters
                 * will mainly be used by the view.
                 * <p>Supports sorting the underlying list via a {@link SortDefinition} implementation,
                 * available as property "sort". By default, a {@link MutableSortDefinition} instance
                 * will be used, toggling the ascending value on setting the same property again.
                 * <p>The data binding names have to be called "pageSize" and "sort.ascending",
                 * as expected by BeanWrapper. Note that the names and the nesting syntax match
                 * the respective JSTL EL expressions, like "myModelAttr.pageSize" and
                 * "myModelAttr.sort.ascending".
                 * @author Juergen Hoeller
                 * @since 19.05.2003
                 * @param <E> the element type
                 * @see #getPageList()
                 * @see org.springframework.beans.support.MutableSortDefinition
                 */
                // @ts-ignore
                class PagedListHolder<E> extends java.lang.Object implements java.io.Serializable {
                    /**
                     * Create a new holder instance.
                     * You'll need to set a source list to be able to use the holder.
                     * @see #setSource
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Create a new holder instance with the given source list, starting with
                     * a default sort definition (with "toggleAscendingOnProperty" activated).
                     * @param source the source List
                     * @see MutableSortDefinition#setToggleAscendingOnProperty
                     */
                    // @ts-ignore
                    constructor(source: Array<E>)
                    /**
                     * Create a new holder instance with the given source list.
                     * @param source the source List
                     * @param sort the SortDefinition to start with
                     */
                    // @ts-ignore
                    constructor(source: Array<E>, sort: org.springframework.beans.support.SortDefinition)
                    /**
                     * The default page size.
                     */
                    // @ts-ignore
                    readonly DEFAULT_PAGE_SIZE: number /*int*/
                    /**
                     * The default maximum number of page links.
                     */
                    // @ts-ignore
                    readonly DEFAULT_MAX_LINKED_PAGES: number /*int*/
                    /**
                     * Set the source list for this holder.
                     */
                    // @ts-ignore
                    setSource(source: Array<E>): void
                    /**
                     * Return the source list for this holder.
                     */
                    // @ts-ignore
                    getSource(): java.util.List<E>
                    /**
                     * Return the last time the list has been fetched from the source provider.
                     */
                    // @ts-ignore
                    getRefreshDate(): java.util.Date
                    /**
                     * Set the sort definition for this holder.
                     * Typically an instance of MutableSortDefinition.
                     * @see org.springframework.beans.support.MutableSortDefinition
                     */
                    // @ts-ignore
                    setSort(sort: org.springframework.beans.support.SortDefinition): void
                    /**
                     * Return the sort definition for this holder.
                     */
                    // @ts-ignore
                    getSort(): org.springframework.beans.support.SortDefinition
                    /**
                     * Set the current page size.
                     * Resets the current page number if changed.
                     * <p>Default value is 10.
                     */
                    // @ts-ignore
                    setPageSize(pageSize: number /*int*/): void
                    /**
                     * Return the current page size.
                     */
                    // @ts-ignore
                    getPageSize(): int
                    /**
                     * Set the current page number.
                     * Page numbering starts with 0.
                     */
                    // @ts-ignore
                    setPage(page: number /*int*/): void
                    /**
                     * Return the current page number.
                     * Page numbering starts with 0.
                     */
                    // @ts-ignore
                    getPage(): int
                    /**
                     * Set the maximum number of page links to a few pages around the current one.
                     */
                    // @ts-ignore
                    setMaxLinkedPages(maxLinkedPages: number /*int*/): void
                    /**
                     * Return the maximum number of page links to a few pages around the current one.
                     */
                    // @ts-ignore
                    getMaxLinkedPages(): int
                    /**
                     * Return the number of pages for the current source list.
                     */
                    // @ts-ignore
                    getPageCount(): int
                    /**
                     * Return if the current page is the first one.
                     */
                    // @ts-ignore
                    isFirstPage(): boolean
                    /**
                     * Return if the current page is the last one.
                     */
                    // @ts-ignore
                    isLastPage(): boolean
                    /**
                     * Switch to previous page.
                     * Will stay on first page if already on first page.
                     */
                    // @ts-ignore
                    previousPage(): void
                    /**
                     * Switch to next page.
                     * Will stay on last page if already on last page.
                     */
                    // @ts-ignore
                    nextPage(): void
                    /**
                     * Return the total number of elements in the source list.
                     */
                    // @ts-ignore
                    getNrOfElements(): int
                    /**
                     * Return the element index of the first element on the current page.
                     * Element numbering starts with 0.
                     */
                    // @ts-ignore
                    getFirstElementOnPage(): int
                    /**
                     * Return the element index of the last element on the current page.
                     * Element numbering starts with 0.
                     */
                    // @ts-ignore
                    getLastElementOnPage(): int
                    /**
                     * Return a sub-list representing the current page.
                     */
                    // @ts-ignore
                    getPageList(): java.util.List<E>
                    /**
                     * Return the first page to which create a link around the current page.
                     */
                    // @ts-ignore
                    getFirstLinkedPage(): int
                    /**
                     * Return the last page to which create a link around the current page.
                     */
                    // @ts-ignore
                    getLastLinkedPage(): int
                    /**
                     * Resort the list if necessary, i.e. if the current {@code sort} instance
                     * isn't equal to the backed-up {@code sortUsed} instance.
                     * <p>Calls {@code doSort} to trigger actual sorting.
                     * @see #doSort
                     */
                    // @ts-ignore
                    resort(): void
                    /**
                     * Create a deep copy of the given sort definition,
                     * for use as state holder to compare a modified sort definition against.
                     * <p>Default implementation creates a MutableSortDefinition instance.
                     * Can be overridden in subclasses, in particular in case of custom
                     * extensions to the SortDefinition interface. Is allowed to return
                     * null, which means that no sort state will be held, triggering
                     * actual sorting for each {@code resort} call.
                     * @param sort the current SortDefinition object
                     * @return a deep copy of the SortDefinition object
                     * @see MutableSortDefinition#MutableSortDefinition(SortDefinition)
                     */
                    // @ts-ignore
                    copySortDefinition(sort: org.springframework.beans.support.SortDefinition): org.springframework.beans.support.SortDefinition
                    /**
                     * Actually perform sorting of the given source list, according to
                     * the given sort definition.
                     * <p>The default implementation uses Spring's PropertyComparator.
                     * Can be overridden in subclasses.
                     * @see PropertyComparator#sort(java.util.List, SortDefinition)
                     */
                    // @ts-ignore
                    doSort(source: Array<E>, sort: org.springframework.beans.support.SortDefinition): void
                }
            }
        }
    }
}
