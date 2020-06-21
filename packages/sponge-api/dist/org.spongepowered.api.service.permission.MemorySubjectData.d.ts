declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace permission {
                    /**
                     * A subject data implementation storing all contained data in memory.
                     * <p>This class is thread-safe.</p>
                     */
                    // @ts-ignore
                    class MemorySubjectData extends java.lang.Object implements org.spongepowered.api.service.permission.SubjectData {
                        /**
                         * Creates a new subject data instance, using the provided service to
                         * request instances of permission subjects.
                         * @param service The service to request subjects from
                         */
                        // @ts-ignore
                        constructor(service: org.spongepowered.api.service.permission.PermissionService)
                        // @ts-ignore
                        public getAllPermissions(): java.util.Map<java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>, java.util.Map<java.lang.String | string, java.lang.Boolean>>
                        /**
                         * Gets the calculated node tree representation of the permissions for this
                         * subject data instance. If no data is present for the given context,
                         * returns null.
                         * @param contexts The contexts to get a node tree for
                         * @return The node tree
                         */
                        // @ts-ignore
                        public getNodeTree(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>): org.spongepowered.api.service.permission.NodeTree
                        // @ts-ignore
                        public getPermissions(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>): java.util.Map<java.lang.String | string, java.lang.Boolean>
                        // @ts-ignore
                        public setPermission(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>, permission: java.lang.String | string, value: org.spongepowered.api.util.Tristate): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        // @ts-ignore
                        public clearPermissions(): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        // @ts-ignore
                        public clearPermissions(context: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        // @ts-ignore
                        public getAllParents(): java.util.Map<java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>, java.util.List<org.spongepowered.api.service.permission.SubjectReference> | Array<org.spongepowered.api.service.permission.SubjectReference>>
                        // @ts-ignore
                        public getParents(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>): Array<org.spongepowered.api.service.permission.SubjectReference>
                        // @ts-ignore
                        public addParent(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>, parent: org.spongepowered.api.service.permission.SubjectReference): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        // @ts-ignore
                        public removeParent(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>, parent: org.spongepowered.api.service.permission.SubjectReference): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        // @ts-ignore
                        public clearParents(): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        // @ts-ignore
                        public clearParents(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        // @ts-ignore
                        public getAllOptions(): java.util.Map<java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>, java.util.Map<java.lang.String | string, java.lang.String | string>>
                        // @ts-ignore
                        public getOptions(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>): java.util.Map<java.lang.String | string, java.lang.String | string>
                        // @ts-ignore
                        public setOption(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>, key: java.lang.String | string, value: java.lang.String | string): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        // @ts-ignore
                        public clearOptions(contexts: java.util.Set<org.spongepowered.api.service.context.Context> | Array<org.spongepowered.api.service.context.Context>): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                        // @ts-ignore
                        public clearOptions(): java.util.concurrent.CompletableFuture<java.lang.Boolean>
                    }
                }
            }
        }
    }
}
