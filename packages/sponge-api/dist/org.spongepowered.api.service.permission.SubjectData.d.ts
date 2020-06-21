declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace permission {
                    /**
                     * Container for a subject's data.
                     * <p>This container updates live, and provides raw data for a subject not
                     * taking into account any sort of inheritance. This interface is meant to
                     * represent what's 'in the file', rather than the higher-level query methods
                     * available in {@link Subject}.</p>
                     * <p>Methods which modify the state of the data return
                     * {@link CompletableFuture}s. This allows for the time which is taken to apply
                     * and persist the change to the implementations storage backend. These futures
                     * should return quickly for changes made to transient subject data, but may
                     * take longer to return for changes made to a subjects persistent data. Methods
                     * which use this data in {@link Subject} may not reflect the change until the
                     * future has returned.</p>
                     * <p>{@link CompletableFuture#allOf(CompletableFuture[])} can be used to
                     * combine multiple futures into one, if the result of methods is not
                     * needed.</p>
                     */
                    // @ts-ignore
                    interface SubjectData {
                        /**
                         * A convenience constant for the global context combination (the empty
                         * set), if you want your code to look especially fancy.
                         */
                        // @ts-ignore
                        readonly GLOBAL_CONTEXT: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>
                        /**
                         * Return all permissions associated with this data object.
                         * @return an immutable copy of the mappings between contexts and lists of
                         *          permissions containing every permission registered
                         */
                        // @ts-ignore
                        getAllPermissions(): java.util.Map<java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>, java.util.Map<java.lang.String | string, java.lang.Boolean>>
                        /**
                         * Returns the list of permissions set for the given context.
                         * <p>This list is immutable and is not a live view. If no permissions have
                         * been set, it returns an empty list.</p>
                         * @param contexts The particular context combination to check
                         * @return Any permissions set
                         */
                        // @ts-ignore
                        getPermissions(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>): java.util.Map<java.lang.String | string, java.lang.Boolean>
                        /**
                         * Sets a permission to a given value.
                         * <p>Setting value as {@link Tristate#UNDEFINED} unsets the permission.</p>
                         * <p>An empty set of contexts applies this permission to the global
                         * context.</p>
                         * @param contexts The particular combination of contexts to set this
                         *                   permission in
                         * @param permission The permission to set
                         * @param value The value to set this permission to
                         * @return Whether the operation was successful
                         */
                        // @ts-ignore
                        setPermission(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>, permission: java.lang.String | string, value: org.spongepowered.api.util.Tristate): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        /**
                         * Clear all permissions set in any context.
                         * @return Whether any change occurred
                         */
                        // @ts-ignore
                        clearPermissions(): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        /**
                         * Clear all permissions set in a given context combination.
                         * <p>Passing an empty context set clears permissions in the global
                         * context.</p>
                         * @param contexts The context combination to clear permissions in
                         * @return Whether any change occurred
                         */
                        // @ts-ignore
                        clearPermissions(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        /**
                         * Return all registered parent subjects for all contexts.
                         * <p>The returned map is immutable and not a live view. The results of this
                         * method do not traverse any sort of inheritance structure a permissions
                         * plugin may implement.</p>
                         * @return All registered parents and the context they are registered in
                         */
                        // @ts-ignore
                        getAllParents(): java.util.Map<java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>, java.util.List<org.spongepowered.api.service.permission.SubjectReference> | Array<org.spongepowered.api.service.permission.SubjectReference>>
                        /**
                         * Return all registered parent subjects for a given context.
                         * <p>The returned map is immutable and not a live view. The results of this
                         * method do not traverse any sort of inheritance structure a permissions
                         * plugin may implement.</p>
                         * @param contexts The context to check
                         * @return names of parents valid in the given context
                         */
                        // @ts-ignore
                        getParents(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>): Array<org.spongepowered.api.service.permission.SubjectReference>
                        /**
                         * Adds a parent in a particular context combination.
                         * <p>Passing an empty context combination means the parent is added in the
                         * global context.</p>
                         * @param contexts The context combination this operation is applicable to
                         * @param parent The name of the parent to add
                         * @return Whether the operation was successful
                         */
                        // @ts-ignore
                        addParent(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>, parent: org.spongepowered.api.service.permission.SubjectReference): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        /**
                         * Removes a parent in a particular context combination.
                         * <p>Passing an empty context combination means the parent is removed in
                         * the global context.</p>
                         * @param contexts The context combination this operation is applicable to
                         * @param parent The name of the parent to remove
                         * @return Whether the operation was successful
                         */
                        // @ts-ignore
                        removeParent(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>, parent: org.spongepowered.api.service.permission.SubjectReference): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        /**
                         * Remove all parents in any context combination.
                         * @return Whether any change occurred
                         */
                        // @ts-ignore
                        clearParents(): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        /**
                         * Remove all parents in a given context combination.
                         * <p>Passing an empty context set clears parents in the global
                         * context.</p>
                         * @param contexts The context combination to clear the parents of
                         * @return Whether any change occurred
                         */
                        // @ts-ignore
                        clearParents(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        /**
                         * Return all options for all context combinations currently registered.
                         * @return An immutable snapshot of all options data
                         */
                        // @ts-ignore
                        getAllOptions(): java.util.Map<java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>, java.util.Map<java.lang.String | string, java.lang.String | string>>
                        /**
                         * Gets options for a specific context combination.
                         * @param contexts The context combination to get options for
                         * @return All available options, returning an empty map if none are present
                         */
                        // @ts-ignore
                        getOptions(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>): java.util.Map<java.lang.String | string, java.lang.String | string>
                        /**
                         * Sets a specific option to a value.
                         * <p>Passing a null value will unset the option.</p>
                         * @param contexts The context combination to set the given option in
                         * @param key The key to set. Case-insensitive.
                         * @param value The value to set.
                         * @return Whether the operation was successful
                         */
                        // @ts-ignore
                        setOption(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>, key: java.lang.String | string, value: java.lang.String | string): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        /**
                         * Clear all options.
                         * @return Whether the operation was successful
                         */
                        // @ts-ignore
                        clearOptions(): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        /**
                         * Clear all options in the given context combination.
                         * <p>Passing an empty context set clears options in the global
                         * context.</p>
                         * @param contexts The context combination
                         * @return Whether the operation was successful (any options were removed)
                         */
                        // @ts-ignore
                        clearOptions(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                    }
                }
            }
        }
    }
}
