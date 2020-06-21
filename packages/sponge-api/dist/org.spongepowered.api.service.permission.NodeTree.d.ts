declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                namespace permission {
                    /**
                     * An immutable tree structure for determining node data. Any changes will
                     * create new copies of the necessary tree objects.
                     * <p>This class is simply provided as a utility for plugins implementing
                     * {@link PermissionService}. It is not a requirement that this class is used,
                     * however the behaviour defined in {@link Subject} regarding implicit node
                     * inheritance should be maintained.</p>
                     * <ul>
                     * <li>Keys are case-insensitive.</li>
                     * <li>Segments of nodes are split by the '.' character</li>
                     * </ul>
                     */
                    // @ts-ignore
                    class NodeTree extends java.lang.Object {
                        /**
                         * Create a new node tree with the given values, and a default value of
                         * {@link Tristate#UNDEFINED}.
                         * @param values The values to set
                         * @return The new node tree
                         */
                        // @ts-ignore
                        public static of(values: java.util.Map<java.lang.String | string, java.lang.Boolean>): org.spongepowered.api.service.permission.NodeTree
                        /**
                         * Create a new node tree with the given values, and the specified root
                         * fallback value.
                         * @param values The values to be contained in this node tree
                         * @param defaultValue The fallback value for any completely undefined nodes
                         * @return The newly created node tree
                         */
                        // @ts-ignore
                        public static of(values: java.util.Map<java.lang.String | string, java.lang.Boolean>, defaultValue: org.spongepowered.api.util.Tristate): org.spongepowered.api.service.permission.NodeTree
                        /**
                         * Returns the value assigned to a specific node, or the nearest parent
                         * value in the tree if the node itself is undefined.
                         * @param node The path to get the node value at
                         * @return The tristate value for the given node
                         */
                        // @ts-ignore
                        public get(node: java.lang.String | string): org.spongepowered.api.util.Tristate
                        /**
                         * Convert this node tree into a map of the defined nodes in this tree.
                         * @return An immutable map representation of the nodes defined in this tree
                         */
                        // @ts-ignore
                        public asMap(): java.util.Map<java.lang.String | string, java.lang.Boolean>
                        /**
                         * Return a new NodeTree instance with a single changed value.
                         * @param node The node path to change the value of
                         * @param value The value to change, or UNDEFINED to remove
                         * @return The new, modified node tree
                         */
                        // @ts-ignore
                        public withValue(node: java.lang.String | string, value: org.spongepowered.api.util.Tristate): org.spongepowered.api.service.permission.NodeTree
                        /**
                         * Return a modified new node tree with the specified values set.
                         * @param values The values to set
                         * @return The new node tree
                         */
                        // @ts-ignore
                        public withAll(values: java.util.Map<java.lang.String | string, org.spongepowered.api.util.Tristate>): org.spongepowered.api.service.permission.NodeTree
                    }
                }
            }
        }
    }
}
